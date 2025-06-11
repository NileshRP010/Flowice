
// src/app/dashboard/integrations/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, CheckCircle, XCircle, Database, FileCode2, Workflow, Store } from "lucide-react";

export const metadata = {
  title: "Integrations | Flowice Finance",
  description: "Connect with your accounting software and other services.",
};

const IntegrationOption = ({ name, icon: Icon, connected, description }: { name: string, icon?: React.ElementType, connected: boolean, description: string }) => (
  <Card className="hover:shadow-md transition-shadow w-full bg-card border border-border/30 rounded-lg">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-lg font-medium flex items-center">
        {Icon && <Icon className="mr-3 h-6 w-6 text-primary" />} {name}
      </CardTitle>
      {connected ? (
        <CheckCircle className="h-6 w-6 text-green-500" />
      ) : (
        <XCircle className="h-6 w-6 text-muted-foreground" />
      )}
    </CardHeader>
    <CardContent>
      <p className="text-xs text-muted-foreground mb-3 h-10"> {/* Fixed height for description */}
        {description} {connected ? "Successfully connected." : "Streamline your data."}
      </p>
      <Button variant={connected ? "outline" : "default"} className="w-full" disabled>
        {connected ? "Manage Connection (Soon)" : `Connect to ${name} (Soon)`}
      </Button>
    </CardContent>
  </Card>
);


export default function IntegrationsPage() {
  const accountingIntegrations = [
    { name: "Xero", icon: FileCode2, connected: false, description: "Sync invoices, bills, and contacts from Xero." },
    { name: "QuickBooks", icon: FileCode2, connected: true, description: "Automate data entry with QuickBooks Online." },
    { name: "MYOB", icon: FileCode2, connected: false, description: "Connect your MYOB AccountRight or Essentials." },
    { name: "Zoho Books", icon: FileCode2, connected: false, description: "Integrate with Zoho Books for seamless accounting." },
  ];

  const otherIntegrations = [
    { name: "Plaid", icon: Database, connected: false, description: "Securely connect bank accounts for verification." },
    { name: "Stripe", icon: Store, connected: false, description: "Link Stripe for payment processing insights." },
    { name: "Zapier", icon: Workflow, connected: false, description: "Automate workflows with thousands of apps via Zapier." },
    { name: "Slack", icon: Share2, connected: true, description: "Receive important notifications directly in Slack." },
  ];


  return (
    <div className="w-full py-8 px-6">
      <Card className="w-full bg-card border border-border/50 rounded-xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <Share2 className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="font-headline text-3xl">Platform Integrations</CardTitle>
          <CardDescription className="text-lg">
            Seamlessly connect Flowice with popular accounting platforms and other services to streamline your workflow.
            <span className="block mt-1 text-sm font-semibold text-accent">(Full Functionality Coming Soon)</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="py-10 w-full space-y-10">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Accounting Software</h3>
            <p className="text-muted-foreground mb-6">
              Automate invoice submission and keep your financial data in sync by connecting your accounting software.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {accountingIntegrations.map(integration => (
                <IntegrationOption
                  key={integration.name}
                  name={integration.name}
                  icon={integration.icon}
                  connected={integration.connected}
                  description={integration.description}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Other Services</h3>
            <p className="text-muted-foreground mb-6">
              Enhance your Flowice experience by connecting with other essential business tools.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {otherIntegrations.map(integration => (
                <IntegrationOption
                  key={integration.name}
                  name={integration.name}
                  icon={integration.icon}
                  connected={integration.connected}
                  description={integration.description}
                />
              ))}
            </div>
          </div>

           <div className="text-center mt-10">
             <Button variant="link" disabled>Request New Integration (Soon)</Button>
           </div>
        </CardContent>
      </Card>
    </div>
  );
}

    