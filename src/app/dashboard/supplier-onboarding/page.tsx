
// src/app/dashboard/supplier-onboarding/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, ListChecks, Send, Filter, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const metadata = {
  title: "Supplier Management | Flowice Finance",
  description: "Register and manage your business's suppliers.",
};

const mockSuppliers = [
  { id: "sup_001", name: "Innovatech Parts Co.", email: "contact@innovatech.com", status: "Verified", lastActivity: "2024-07-15", invoicesSubmitted: 12, totalValue: "$150,000" },
  { id: "sup_002", name: "Global Raw Materials Inc.", email: "sales@globalraw.com", status: "Pending Verification", lastActivity: "2024-07-20", invoicesSubmitted: 3, totalValue: "$45,000" },
  { id: "sup_003", name: "Office Supplies Deluxe", email: "orders@officesupplies.com", status: "Verified", lastActivity: "2024-06-30", invoicesSubmitted: 25, totalValue: "$32,000" },
  { id: "sup_004", name: "Advanced Logistics Solutions", email: "info@als.logistics", status: "Verified", lastActivity: "2024-07-22", invoicesSubmitted: 8, totalValue: "$210,000" },
  { id: "sup_005", name: "Creative Marketing Agency", email: "hello@creativemarketing.io", status: "Requires Documents", lastActivity: "2024-07-18", invoicesSubmitted: 1, totalValue: "$5,000" },
  { id: "sup_006", name: "Precision Engineering Works", email: "support@precisioneng.co.uk", status: "Verified", lastActivity: "2024-07-01", invoicesSubmitted: 15, totalValue: "$180,500" },
  { id: "sup_007", name: "GreenTech Solutions", email: "contact@greentech.eco", status: "Pending Verification", lastActivity: "2024-07-25", invoicesSubmitted: 0, totalValue: "$0" },
  { id: "sup_008", name: "Bulk Food Exporters", email: "exports@bulkfoods.com", status: "Verified", lastActivity: "2024-05-10", invoicesSubmitted: 30, totalValue: "$550,000" },
  { id: "sup_009", name: "Local Artisan Goods", email: "artisan@local.net", status: "Verified", lastActivity: "2024-07-12", invoicesSubmitted: 5, totalValue: "$8,750" },
  { id: "sup_010", name: "Software Dev Pros", email: "dev@softwarepros.dev", status: "Requires Documents", lastActivity: "2024-07-28", invoicesSubmitted: 2, totalValue: "$25,000" },
];


export default function SupplierOnboardingPage() {
  return (
    <div className="w-full py-8 px-6">
      <Card className="w-full bg-card border border-border/50 rounded-xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <Users className="h-10 w-10 text-primary" /> {/* Changed icon to Users for better representation */}
          </div>
          <CardTitle className="font-headline text-3xl">Supplier Management</CardTitle>
          <CardDescription className="text-lg">
            Facilitate the registration, verification, and management of your suppliers.
            <span className="block mt-1 text-sm font-semibold text-accent">(Full Functionality Coming Soon)</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="py-10 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full p-4 border border-border/20 rounded-lg bg-card/50">
            <p className="text-muted-foreground text-center md:text-left flex-1">
              Onboard your suppliers to streamline invoice processing and enable them to participate in early payment programs. Verified suppliers build trust and can access better financing terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button disabled className="w-full sm:w-auto">
                <Send className="mr-2 h-4 w-4" /> Invite Supplier (Soon)
              </Button>
              <Button disabled variant="outline" className="w-full sm:w-auto">
                <UserPlus className="mr-2 h-4 w-4" /> Register New Supplier (Soon)
              </Button>
            </div>
          </div>

          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
                <h3 className="text-2xl font-semibold flex items-center">
                    <ListChecks className="mr-2 h-6 w-6 text-primary"/> Your Suppliers List ({mockSuppliers.length})
                </h3>
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <Input type="search" placeholder="Search suppliers..." className="bg-background flex-grow md:flex-grow-0 md:w-64" disabled/>
                    <Button variant="outline" size="icon" disabled><Filter className="h-4 w-4"/></Button>
                </div>
            </div>
            <div className="border border-border/30 rounded-lg overflow-hidden w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Supplier Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead>Last Activity</TableHead>
                    <TableHead className="text-right">Submitted Invoices</TableHead>
                    <TableHead className="text-right">Total Value</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockSuppliers.length > 0 ? mockSuppliers.map(supplier => (
                    <TableRow key={supplier.id}>
                      <TableCell className="font-medium">{supplier.name}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{supplier.email}</TableCell>
                      <TableCell className="text-center">
                        <Badge 
                            variant={
                                supplier.status === "Verified" ? "default" 
                                : supplier.status === "Pending Verification" ? "secondary" 
                                : "destructive"
                            }
                            className={`text-xs ${
                                supplier.status === "Verified" ? "bg-green-500/10 text-green-700 border-green-500/30" 
                                : supplier.status === "Pending Verification" ? "bg-yellow-500/10 text-yellow-700 border-yellow-500/30" 
                                : "bg-red-500/10 text-red-700 border-red-500/30" // For "Requires Documents" or other non-verified
                            }`}
                        >
                          {supplier.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-xs">{supplier.lastActivity}</TableCell>
                      <TableCell className="text-right">{supplier.invoicesSubmitted}</TableCell>
                      <TableCell className="text-right font-medium">{supplier.totalValue}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" disabled>View (Soon)</Button>
                      </TableCell>
                    </TableRow>
                  )) : (
                     <TableRow>
                        <TableCell colSpan={7} className="text-center text-muted-foreground py-10">
                         No suppliers registered yet. (Placeholder Data)
                        </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
             <p className="text-xs text-muted-foreground mt-2 text-center md:text-right">
              Functionality for adding, verifying, and managing suppliers will be available here. Pagination will be added for larger lists.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

    