
// src/app/dashboard/notifications/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Mail, Settings, CheckCircle, AlertTriangle, Info } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Notifications | Flowice Finance",
  description: "Manage your notification preferences and view alerts.",
};

// Mock notifications - Increased count
const mockNotifications = [
  { id: "notif_1", type: "success", title: "Invoice #INV-001 Funded", message: "Your invoice for Acme Corp has been successfully funded.", time: "2 hours ago", icon: CheckCircle, iconColor: "text-green-500" },
  { id: "notif_2", type: "warning", title: "Payment Due Soon", message: "Payment for invoice #INV-002 is due in 3 days.", time: "1 day ago", icon: AlertTriangle, iconColor: "text-yellow-500" },
  { id: "notif_3", type: "info", title: "New Feature: Analytics Dashboard", message: "Check out the new enhanced analytics dashboard!", time: "3 days ago", icon: Info, iconColor: "text-blue-500" },
  { id: "notif_4", type: "success", title: "Supplier 'Tech Parts Inc.' Verified", message: "Your supplier Tech Parts Inc. has been successfully verified.", time: "4 days ago", icon: CheckCircle, iconColor: "text-green-500" },
  { id: "notif_5", type: "info", title: "Account Security Update", message: "We've updated our security policies. Please review.", time: "5 days ago", icon: Info, iconColor: "text-blue-500" },
  { id: "notif_6", type: "warning", title: "Invoice #INV-003 Approaching Due Date", message: "Invoice #INV-003 to 'Innovate LLC' is due in 1 week.", time: "1 week ago", icon: AlertTriangle, iconColor: "text-yellow-500" },
  { id: "notif_7", type: "success", title: "Withdrawal Processed", message: "Your withdrawal of $500.00 has been successfully processed.", time: "1 week ago", icon: CheckCircle, iconColor: "text-green-500" },
  { id: "notif_8", type: "info", title: "Monthly Statement Available", message: "Your monthly account statement for June is now available.", time: "2 weeks ago", icon: Info, iconColor: "text-blue-500" },
  { id: "notif_9", type: "warning", title: "Integration Requires Attention", message: "Your Xero integration needs to be re-authenticated.", time: "2 weeks ago", icon: AlertTriangle, iconColor: "text-yellow-500" },
  { id: "notif_10", type: "success", title: "Invoice #INV-004 Repaid", message: "Invoice #INV-004 from 'Beta Solutions' has been fully repaid.", time: "3 weeks ago", icon: CheckCircle, iconColor: "text-green-500" },
  { id: "notif_11", type: "info", title: "Platform Maintenance Scheduled", message: "Scheduled maintenance on July 30th, 2 AM UTC.", time: "3 weeks ago", icon: Info, iconColor: "text-blue-500" },
  { id: "notif_12", type: "warning", title: "Unusual Login Attempt Detected", message: "An unusual login attempt to your account was detected from a new device.", time: "1 month ago", icon: AlertTriangle, iconColor: "text-yellow-500" },
  { id: "notif_13", type: "success", title: "New Investment Opportunity Matched", message: "An invoice matching your investment criteria is now available.", time: "1 month ago", icon: CheckCircle, iconColor: "text-green-500" },
  { id: "notif_14", type: "info", title: "Terms of Service Update", message: "Our Terms of Service have been updated. Please review them.", time: "1 month ago", icon: Info, iconColor: "text-blue-500" },
  { id: "notif_15", type: "warning", title: "Credit Rating Change for Customer 'XYZ Corp'", message: "Customer 'XYZ Corp' credit rating has been updated.", time: "1 month ago", icon: AlertTriangle, iconColor: "text-yellow-500" },
];


export default function NotificationsPage() {
  return (
    <Card className="w-full bg-card border border-border/50 rounded-xl">
      <CardHeader className="text-center pt-8 px-6 pb-6">
        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
          <Bell className="h-10 w-10 text-primary" />
        </div>
        <CardTitle className="font-headline text-3xl">Notifications Center</CardTitle>
        <CardDescription className="text-lg">
          Stay updated with important alerts and manage your notification settings.
          <span className="block mt-1 text-sm font-semibold text-accent">(Full Functionality Coming Soon)</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-8 space-y-6">

        <Card className="w-full bg-card border-border/30 rounded-lg">
          <CardHeader>
            <CardTitle className="text-xl flex items-center"><Settings className="mr-2 h-5 w-5 text-primary" />Notification Preferences</CardTitle>
            <CardDescription>Control how you receive notifications from Flowice.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 border border-border/20 rounded-md">
              <div>
                <Label htmlFor="email-notifications" className="font-medium">Email Notifications</Label>
                <p className="text-xs text-muted-foreground">Receive important updates via email.</p>
              </div>
              <Switch id="email-notifications" disabled defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 border border-border/20 rounded-md">
              <div>
                <Label htmlFor="inapp-notifications" className="font-medium">In-App Notifications</Label>
                <p className="text-xs text-muted-foreground">Get alerts directly within the platform.</p>
              </div>
              <Switch id="inapp-notifications" disabled defaultChecked/>
            </div>
            <div className="flex items-center justify-between p-3 border border-border/20 rounded-md">
              <div>
                <Label htmlFor="sms-notifications" className="font-medium">SMS Alerts (Critical Only)</Label>
                 <p className="text-xs text-muted-foreground">For urgent account or security notices.</p>
              </div>
              <Switch id="sms-notifications" disabled />
            </div>
            <p className="text-xs text-muted-foreground text-center">Full preference management coming soon.</p>
          </CardContent>
        </Card>

        <Separator className="my-6" /> {/* Explicit margin for separator */}

        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <Mail className="mr-2 h-6 w-6 text-primary"/>Recent Notifications
          </h3>
          {mockNotifications.length > 0 ? (
            <ul className="space-y-4">
              {mockNotifications.map(notif => {
                const IconComponent = notif.icon;
                return (
                  <li key={notif.id} className="flex items-start p-4 border border-border/20 rounded-lg bg-card/50 hover:shadow-sm">
                    <IconComponent className={`mr-3 mt-1 h-6 w-6 flex-shrink-0 ${notif.iconColor}`} />
                    <div className="flex-grow">
                      <p className="font-semibold">{notif.title}</p>
                      <p className="text-sm text-muted-foreground">{notif.message}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">{notif.time}</span>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="text-center py-10 border border-border/20 rounded-lg bg-muted/20">
              <Bell className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">No new notifications. (Placeholder)</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

    