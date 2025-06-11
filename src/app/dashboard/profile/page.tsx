// src/app/dashboard/profile/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCircle2 } from "lucide-react"; // Changed from UserCog for better representation

export const metadata = {
  title: "Profile & Business Settings | Flowice Finance",
  description: "Manage your profile and business details.",
};

export default function ProfilePage() {
  return (
    <div className="w-full py-8 px-6">
      <Card className="w-full bg-card border border-border/50 rounded-xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <UserCircle2 className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="font-headline text-3xl">Profile & Business Settings</CardTitle>
          <CardDescription className="text-lg">
            Manage your account information and business details. (Content Coming Soon)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-10 w-full">
            <p className="text-muted-foreground">Forms and settings for managing your business profile, verification documents, and preferences will be available here.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
