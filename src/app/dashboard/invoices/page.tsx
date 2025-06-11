// src/app/dashboard/invoices/page.tsx
import InvoiceList from "@/components/invoice/InvoiceList";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ListChecks } from "lucide-react";

export const metadata = {
  title: "Available Invoices | Flowice Finance",
  description: "Browse and fund tokenized invoices on the Flowice marketplace.",
};

export default function InvoicesMarketplacePage() {
  return (
    <div className="w-full py-8 px-6">
      <Card className="w-full bg-card border border-border/50 rounded-xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <ListChecks className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="font-headline text-3xl">Invoice Marketplace</CardTitle>
          <CardDescription className="text-lg">
            Discover investment opportunities by funding tokenized invoices.
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <InvoiceList />
        </CardContent>
      </Card>
    </div>
  );
}
