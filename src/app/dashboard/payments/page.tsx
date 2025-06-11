
// src/app/dashboard/payments/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Send, History, Download } from "lucide-react";

export const metadata = {
  title: "Payment Management | Flowice Finance",
  description: "Track and manage your invoice payments.",
};

const mockTransactions = [
  { id: "txn_001", date: "2024-07-20", description: "Invoice #INV-001 Funded (Acme Corp)", amount: "$5,000.00", type: "Credit", status: "Completed", statusVariant: "default" },
  { id: "txn_002", date: "2024-07-18", description: "Platform Fee - July", amount: "-$50.00", type: "Debit", status: "Processed", statusVariant: "secondary" },
  { id: "txn_003", date: "2024-07-15", description: "Invoice #INV-002 Repayment (Beta LLC)", amount: "$2,500.00", type: "Credit", status: "Completed", statusVariant: "default" },
  { id: "txn_004", date: "2024-07-10", description: "Withdrawal to Bank Account", amount: "-$1,000.00", type: "Debit", status: "Pending", statusVariant: "outline" },
  { id: "txn_005", date: "2024-07-05", description: "Investment in Invoice #INV-003", amount: "-$3,200.00", type: "Debit", status: "Completed", statusVariant: "default" },
  { id: "txn_006", date: "2024-07-01", description: "Referral Bonus", amount: "$25.00", type: "Credit", status: "Completed", statusVariant: "default" },
  { id: "txn_007", date: "2024-06-28", description: "Invoice #INV-004 Funded (Gamma Inc)", amount: "$7,800.00", type: "Credit", status: "Completed", statusVariant: "default" },
  { id: "txn_008", date: "2024-06-25", description: "Failed Payment - Invoice #INV-005", amount: "$0.00", type: "N/A", status: "Failed", statusVariant: "destructive" },
  { id: "txn_009", date: "2024-06-20", description: "Account Top-up", amount: "$500.00", type: "Credit", status: "Completed", statusVariant: "default" },
  { id: "txn_010", date: "2024-06-15", description: "Service Fee", amount: "-$15.00", type: "Debit", status: "Processed", statusVariant: "secondary" },
  { id: "txn_011", date: "2024-06-10", description: "Invoice #INV-006 Repayment (Delta Co)", amount: "$1,200.00", type: "Credit", status: "Completed", statusVariant: "default" },
  { id: "txn_012", date: "2024-06-05", description: "Investment in Invoice #INV-007", amount: "-$4,000.00", type: "Debit", status: "Completed", statusVariant: "default" },
  { id: "txn_013", date: "2024-06-01", description: "Monthly Interest Earned", amount: "$120.50", type: "Credit", status: "Completed", statusVariant: "default" },
  { id: "txn_014", date: "2024-05-25", description: "Invoice #INV-008 Funded (Epsilon Ltd)", amount: "$6,500.00", type: "Credit", status: "Completed", statusVariant: "default" },
  { id: "txn_015", date: "2024-05-20", description: "Withdrawal Fee", amount: "-$5.00", type: "Debit", status: "Processed", statusVariant: "secondary" },
];


export default function PaymentsPage() {
  return (
    <div className="w-full py-8 px-6">
      <Card className="w-full bg-card border border-border/50 rounded-xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <CreditCard className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="font-headline text-3xl">Payment Management</CardTitle>
          <CardDescription className="text-lg">
            View payment history, upcoming payments, and manage settlement details.
            <span className="block mt-1 text-sm font-semibold text-accent">(Full Functionality Coming Soon)</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <Card className="w-full bg-card border border-border/30 rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center"><Send className="mr-2 h-5 w-5 text-primary" />Upcoming Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">No upcoming payments scheduled. (Placeholder)</p>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                    <li>- Invoice #INV-010 due 2024-08-15: $1,250.00</li>
                    <li>- Subscription Fee due 2024-08-01: $29.99</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="w-full bg-card border border-border/30 rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center"><History className="mr-2 h-5 w-5 text-primary" />Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Connected: Visa **** **** **** 1234 (Expires 12/25)</p>
                <p className="text-xs text-muted-foreground">Bank Account: USD Checking ...7890 (Primary)</p>
                <Button variant="outline" className="mt-4 w-full" disabled>Manage Payment Methods (Soon)</Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-center md:text-left">Recent Transactions</h3>
              <Button variant="outline" disabled className="mt-2 md:mt-0">
                <Download className="mr-2 h-4 w-4" /> Download Statement (Soon)
              </Button>
            </div>
            <div className="border border-border/30 rounded-lg overflow-hidden w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockTransactions.length > 0 ? mockTransactions.map(txn => (
                    <TableRow key={txn.id}>
                      <TableCell>{txn.date}</TableCell>
                      <TableCell className="font-medium">{txn.description}</TableCell>
                      <TableCell className="text-right">{txn.amount}</TableCell>
                      <TableCell>{txn.type}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant={txn.statusVariant as any}>{txn.status}</Badge>
                      </TableCell>
                    </TableRow>
                  )) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center text-muted-foreground py-10">
                        No transactions yet. (Placeholder Data)
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">Displaying last {mockTransactions.length} transactions.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

    