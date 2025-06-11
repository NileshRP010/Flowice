// src/components/invoice/InvoiceCard.tsx
"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, CalendarDays, Percent, Briefcase, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export interface Invoice {
  id: string;
  invoiceAmount: number;
  invoiceDueDate: string; // YYYY-MM-DD
  customerBusinessName: string;
  customerIndustry: string;
  riskLevel?: "Low" | "Medium" | "High";
  apr?: number; // Recommended funding rate
}

interface InvoiceCardProps {
  invoice: Invoice;
}

const InvoiceCard: React.FC<InvoiceCardProps> = ({ invoice }) => {
  const { toast } = useToast();
  
  const handleFundInvoice = () => {
    toast({
      title: "Funding In Progress (Mock)",
      description: `Attempting to fund invoice for ${invoice.customerBusinessName}. This is a mock action.`,
    });
    // Placeholder for actual funding logic
  };

  let riskBadgeClassName = "bg-primary/10 text-primary-foreground border-primary/30"; // Default for Medium
  if (invoice.riskLevel === "Low") riskBadgeClassName = "bg-accent/10 text-accent-foreground border-accent/30";
  if (invoice.riskLevel === "High") riskBadgeClassName = "bg-destructive/10 text-destructive-foreground border-destructive/30";


  return (
    <Card className="flex flex-col h-full bg-card border border-border/50 rounded-xl hover:border-primary/70 transition-colors">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="font-headline text-xl mb-1 text-foreground">{invoice.customerBusinessName}</CardTitle>
          {invoice.riskLevel && (
             <Badge className={`px-2 py-0.5 text-xs ${riskBadgeClassName}`}>{invoice.riskLevel} Risk</Badge>
          )}
        </div>
        <CardDescription className="flex items-center text-sm">
          <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" /> {invoice.customerIndustry}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex items-center">
          <DollarSign className="mr-2 h-5 w-5 text-primary" />
          <span className="text-2xl font-semibold text-foreground">${invoice.invoiceAmount.toLocaleString()}</span>
          <span className="ml-1 text-xs text-muted-foreground">Amount</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="mr-2 h-4 w-4" />
          Due: {new Date(invoice.invoiceDueDate).toLocaleDateString()}
        </div>
        {invoice.apr && (
          <div className="flex items-center text-sm text-muted-foreground">
            <Percent className="mr-2 h-4 w-4" />
            Est. APR: {invoice.apr.toFixed(2)}%
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleFundInvoice} className="w-full">
          <TrendingUp className="mr-2 h-4 w-4" /> Fund Invoice (Mock)
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InvoiceCard;
