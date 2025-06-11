
// src/app/dashboard/analytics/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, PieChart, AlertCircle, Activity, Users, FileText, BarChartHorizontalBig } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Analytics & Reporting | Flowice Finance",
  description: "View your portfolio performance and key metrics.",
};

const mockRecentActivity = [
    { id: "act_1", type: "Invoice Funded", description: "Invoice #INV-1023 for 'Tech Solutions Ltd.' funded.", date: "2024-07-28", amount: "$5,200.00" },
    { id: "act_2", type: "Investment", description: "Invested in Invoice #INV-1024 from 'Eco Goods'.", date: "2024-07-27", amount: "$2,000.00" },
    { id: "act_3", type: "Invoice Repaid", description: "Invoice #INV-988 'Creative Co.' fully repaid.", date: "2024-07-26", amount: "$3,500.00" },
    { id: "act_4", type: "New Supplier", description: "Onboarded 'Parts Direct' as a new supplier.", date: "2024-07-25", amount: "" },
    { id: "act_5", type: "Withdrawal", description: "Withdrawal to linked bank account.", date: "2024-07-24", amount: "$1,500.00" },
];

export default function AnalyticsPage() {
  return (
    <div className="w-full py-8 px-6">
      <Card className="w-full bg-card border border-border/50 rounded-xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <BarChart3 className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="font-headline text-3xl">Analytics & Reporting</CardTitle>
          <CardDescription className="text-lg">
            Track your investments, returns, and other key performance indicators.
            <span className="block mt-1 text-sm font-semibold text-accent">(Full Functionality & Live Charts Coming Soon)</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="py-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <Card className="w-full bg-card border border-border/30 rounded-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Investment Value</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$75,320.00</div>
                <p className="text-xs text-muted-foreground">+5.2% from last month</p>
              </CardContent>
            </Card>
            <Card className="w-full bg-card border border-border/30 rounded-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Overall ROI</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.75%</div>
                <p className="text-xs text-muted-foreground">Annualized Return (YTD)</p>
              </CardContent>
            </Card>
            <Card className="w-full bg-card border border-border/30 rounded-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Invoices Funded</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">34</div>
                <p className="text-xs text-muted-foreground">Avg. Amount: $4,850</p>
              </CardContent>
            </Card>
            <Card className="w-full bg-card border border-border/30 rounded-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Portfolio Default Rate</CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.20%</div>
                <p className="text-xs text-muted-foreground">Based on historical data</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            <Card className="w-full bg-card border border-border/30 rounded-lg">
              <CardHeader>
                <CardTitle>Investment Performance Over Time</CardTitle>
                <CardDescription>A chart showing investment growth will appear here.</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center bg-muted/30 rounded-md">
                 <BarChartHorizontalBig className="h-16 w-16 text-muted-foreground/50" />
                <p className="ml-4 text-muted-foreground">Line Chart Area (Coming Soon)</p>
              </CardContent>
            </Card>
            
            <Card className="w-full bg-card border border-border/30 rounded-lg">
              <CardHeader>
                <CardTitle>Invoice Status Breakdown</CardTitle>
                <CardDescription>A pie chart showing invoice statuses (funded, pending, repaid) will appear here.</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center bg-muted/30 rounded-md">
                <PieChart className="h-16 w-16 text-muted-foreground/50" />
                <p className="ml-4 text-muted-foreground">Pie Chart Area (Coming Soon)</p>
              </CardContent>
            </Card>
          </div>

          <Card className="w-full bg-card border border-border/30 rounded-lg">
            <CardHeader>
              <CardTitle className="flex items-center"><Activity className="mr-2 h-5 w-5 text-primary" />Recent Activity</CardTitle>
              <CardDescription>Overview of recent platform activities related to your account.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border border-border/30 rounded-lg overflow-hidden w-full">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockRecentActivity.map(activity => (
                      <TableRow key={activity.id}>
                        <TableCell className="text-xs text-muted-foreground">{activity.date}</TableCell>
                        <TableCell>
                          <Badge variant={
                            activity.type.includes("Funded") || activity.type.includes("Repaid") ? "default"
                            : activity.type.includes("Investment") || activity.type.includes("Withdrawal") ? "secondary"
                            : "outline"
                          } className="capitalize text-xs">
                            {activity.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{activity.description}</TableCell>
                        <TableCell className="text-right font-medium">{activity.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
               <p className="text-xs text-muted-foreground mt-2 text-center">Displaying last {mockRecentActivity.length} activities. Full history available soon.</p>
            </CardContent>
          </Card>

        </CardContent>
      </Card>
    </div>
  );
}

    