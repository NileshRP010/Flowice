// src/components/invoice/InvoiceForm.tsx
"use client";
import type React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import type { AssessInvoiceRiskInput, AssessInvoiceRiskOutput } from "@/ai/flows/invoice-risk-assessment";
import RiskAssessmentDisplay from "./RiskAssessmentDisplay";
import { useToast } from '@/hooks/use-toast';

const invoiceFormSchema = z.object({
  invoiceAmount: z.coerce.number().positive({ message: "Invoice amount must be positive." }),
  invoiceDueDate: z.date({ required_error: "Invoice due date is required." }),
  customerBusinessName: z.string().min(2, { message: "Customer business name must be at least 2 characters." }),
  customerIndustry: z.string().min(2, { message: "Customer industry must be at least 2 characters." }),
  businessCreditRating: z.string().optional(),
  customerPaymentHistory: z.string().optional(),
});

type InvoiceFormValues = z.infer<typeof invoiceFormSchema>;

interface InvoiceFormProps {
  onAssessRisk: (data: AssessInvoiceRiskInput) => Promise<AssessInvoiceRiskOutput | null>;
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({ onAssessRisk }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [assessmentResult, setAssessmentResult] = useState<AssessInvoiceRiskOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<InvoiceFormValues>({
    resolver: zodResolver(invoiceFormSchema),
    defaultValues: {
      invoiceAmount: undefined,
      invoiceDueDate: undefined,
      customerBusinessName: "",
      customerIndustry: "",
      businessCreditRating: "",
      customerPaymentHistory: "",
    },
  });

  async function onSubmit(data: InvoiceFormValues) {
    setIsLoading(true);
    setAssessmentResult(null);
    
    const aiInput: AssessInvoiceRiskInput = {
      ...data,
      invoiceDueDate: format(data.invoiceDueDate, "yyyy-MM-dd"),
    };

    try {
      const result = await onAssessRisk(aiInput);
      if (result) {
        setAssessmentResult(result);
        toast({
          title: "Risk Assessment Complete",
          description: `Invoice for ${data.customerBusinessName} assessed.`,
        });
      } else {
        toast({
          title: "Risk Assessment Failed",
          description: "Could not retrieve risk assessment data. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error assessing risk:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred during risk assessment.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 border rounded-lg shadow-sm bg-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="invoiceAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Invoice Amount ($)</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 5000.00" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="invoiceDueDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Invoice Due Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date(new Date().setDate(new Date().getDate() -1)) // Disable past dates
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="customerBusinessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer Business Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Acme Corp" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="customerIndustry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer Industry</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Software Development" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="businessCreditRating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Credit Rating (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., AAA, BB, etc." {...field} />
                </FormControl>
                <FormDescription>If known, provide the customer's credit rating.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="customerPaymentHistory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer Payment History (Optional)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Describe payment history, e.g., 'Always pays on time', 'Typically 15 days late'" {...field} />
                </FormControl>
                 <FormDescription>Brief summary of the customer's past payment behavior.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Assessing Risk...
              </>
            ) : (
              "Assess Invoice Risk"
            )}
          </Button>
        </form>
      </Form>

      {isLoading && (
        <div className="flex justify-center items-center p-10">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="ml-4 text-lg text-muted-foreground">Analyzing invoice data...</p>
        </div>
      )}

      {assessmentResult && !isLoading && (
        <div className="mt-8">
          <RiskAssessmentDisplay assessment={assessmentResult} />
           <Button 
            onClick={() => alert("Tokenization feature coming soon!")} 
            className="mt-6 w-full md:w-auto"
            variant="default"
          >
            Proceed to Tokenize Invoice (Mock)
          </Button>
        </div>
      )}
    </div>
  );
};

export default InvoiceForm;

