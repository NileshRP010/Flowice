
// src/app/dashboard/risk-management/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ShieldAlert, Activity, AlertTriangle, ListChecks, TrendingDown, TrendingUp, Info } from "lucide-react";

export const metadata = {
  title: "Risk Management Tools | Flowice Finance",
  description: "Monitor and manage financing risks using our AI-powered tools.",
};

const mockRiskAlerts = [
    { id: "alert_1", severity: "High", message: "Customer 'XYZ Corp' payment overdue by 15 days for Invoice #INV-789.", date: "2024-07-28" },
    { id: "alert_2", severity: "Medium", message: "Industry 'Retail Hospitality' showing increased default trends.", date: "2024-07-27" },
    { id: "alert_3", severity: "Low", message: "Invoice #INV-1001 for 'Stable Solutions' approaching due date (5 days).", date: "2024-07-26" },
    { id: "alert_4", severity: "Medium", message: "Unusual funding request pattern detected for Supplier 'QuickParts Ltd'.", date: "2024-07-25" },
    { id: "alert_5", severity: "High", message: "Customer 'Alpha Traders' credit rating downgraded to CC.", date: "2024-07-24" },
];

const mockMitigationStrategies = [
    { id: "strat_1", title: "Diversify Across Industries", description: "Limit exposure to any single industry to max 20% of your portfolio.", icon: ListChecks },
    { id: "strat_2", title: "Adjust Funding Rates for Higher Risk", description: "Consider increasing APR for invoices with 'High' risk scores.", icon: TrendingUp },
    { id: "strat_3", title: "Set Maximum Invoice Amount", description: "Limit investment in single invoices to a predefined cap (e.g., $10,000).", icon: TrendingDown },
    { id: "strat_4", title: "Regularly Review Customer Payment History", description: "Utilize integrated tools to monitor payment behaviors.", icon: Info },
];


export default function RiskManagementPage() {
  return (
    <div className="w-full py-8 px-6">
      <Card className="w-full bg-card border border-border/50 rounded-xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <ShieldAlert className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="font-headline text-3xl">Risk Management Tools</CardTitle>
          <CardDescription className="text-lg">
            Utilize our AI-driven risk assessment and other tools to manage financing risks proactively.
            <span className="block mt-1 text-sm font-semibold text-accent">(Full Functionality Coming Soon)</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="py-10 space-y-8">
          <Card className="bg-accent/5 border-accent/20 w-full rounded-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-accent"><Activity className="mr-2 h-5 w-5"/>AI Invoice Risk Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                Our core AI-powered risk assessment tool is available when you submit an invoice. It analyzes multiple data points to provide a comprehensive risk score and recommended funding rate.
              </p>
              <Button asChild variant="outline">
                <Link href="/dashboard/submit-invoice">Submit an Invoice for Assessment</Link>
              </Button>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <Card className="w-full bg-card border border-border/30 rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center"><ShieldAlert className="mr-2 h-5 w-5 text-primary" />Overall Portfolio Risk</CardTitle>
                 <CardDescription>Aggregated risk level based on your current invoice holdings.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">Medium (Example)</p>
                <p className="text-sm text-muted-foreground mt-1">Factors: 40% Low Risk, 50% Medium Risk, 10% High Risk Invoices. (Placeholder)</p>
              </CardContent>
            </Card>
            <Card className="w-full bg-card border border-border/30 rounded-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center"><AlertTriangle className="mr-2 h-5 w-5 text-destructive" />Active Risk Alerts ({mockRiskAlerts.length})</CardTitle>
                <CardDescription>Critical notifications requiring your attention.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 max-h-60 overflow-y-auto">
                {mockRiskAlerts.length > 0 ? mockRiskAlerts.slice(0,3).map(alert => ( // Show first 3, more indicate scrolling
                     <div key={alert.id} className="text-sm p-2 border border-destructive/30 rounded-md bg-destructive/5">
                        <Badge variant={alert.severity === "High" ? "destructive" : "secondary"} className="mr-2 mb-1">{alert.severity}</Badge>
                        <span>{alert.message} - <span className="text-xs text-muted-foreground">{alert.date}</span></span>
                    </div>
                )) : (
                     <p className="text-sm text-muted-foreground">No active risk alerts. (Placeholder)</p>
                )}
                {mockRiskAlerts.length > 3 && <p className="text-xs text-center text-muted-foreground">Scroll for more alerts...</p>}
              </CardContent>
            </Card>
          </div>

          <Card className="w-full bg-card border border-border/30 rounded-lg">
            <CardHeader>
              <CardTitle className="text-xl flex items-center"><ListChecks className="mr-2 h-5 w-5 text-primary" />Risk Mitigation Strategies</CardTitle>
              <CardDescription>Recommendations and tools to help manage and reduce portfolio risk.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockMitigationStrategies.map(strat => {
                const Icon = strat.icon;
                return (
                <div key={strat.id} className="flex items-start p-3 border border-border/20 rounded-md bg-muted/20">
                    <Icon className="mr-3 mt-1 h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold">{strat.title}</h4>
                        <p className="text-xs text-muted-foreground">{strat.description} (Placeholder info)</p>
                    </div>
                </div>
                );
              })}
               <p className="text-xs text-muted-foreground text-center pt-2">More strategies and configuration tools coming soon.</p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}

    