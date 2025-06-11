// src/app/dashboard/submit-invoice/page.tsx
import InvoiceForm from "@/components/invoice/InvoiceForm";
import { submitInvoiceForRiskAssessment } from "./actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FilePlus2 } from "lucide-react";

export const metadata = {
  title: "Submit Invoice | Flowice Finance",
  description: "Submit your invoice details for tokenization and risk assessment.",
};

export default function SubmitInvoicePage() {
  return (
    <div className="w-full py-8 px-6">
      <Card className="w-full bg-card border border-border/50 rounded-xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <FilePlus2 className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="font-headline text-3xl">Submit New Invoice</CardTitle>
          <CardDescription className="text-lg">
            Enter your invoice details below. Our AI will assess its risk and provide a recommended funding rate.
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <InvoiceForm onAssessRisk={submitInvoiceForRiskAssessment} />
        </CardContent>
      </Card>
    </div>
  );
}
