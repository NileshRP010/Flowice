// src/app/dashboard/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FilePlus2, ListChecks, BarChart3 } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: "Dashboard | Flowice Finance",
  description: "Manage your invoice financing activities on Flowice.",
};

export default function DashboardPage() {
  return (
    <div className="w-full py-8 px-6">
      <div className="mb-8 text-center">
        <h1 className="font-headline text-4xl font-bold text-foreground">Welcome to your Dashboard</h1>
        <p className="text-xl text-muted-foreground mt-2">Manage your invoices and investments seamlessly.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="bg-card border border-border/50 rounded-xl hover:border-primary/70 transition-colors">
          <CardHeader>
            <div className="flex items-center space-x-3 mb-2">
              <FilePlus2 className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">Submit an Invoice</CardTitle>
            </div>
            <CardDescription>Tokenize your unpaid invoices and get access to liquidity.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/dashboard/submit-invoice">Submit New Invoice</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-card border border-border/50 rounded-xl hover:border-primary/70 transition-colors">
          <CardHeader>
            <div className="flex items-center space-x-3 mb-2">
              <ListChecks className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">View Marketplace</CardTitle>
            </div>
            <CardDescription>Explore available invoices to fund and grow your investments.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full" variant="outline">
              <Link href="/dashboard/invoices">Browse Invoices</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card className="bg-card border border-border/50 rounded-xl hover:border-primary/70 transition-colors lg:col-span-1 md:col-span-2">
          <CardHeader>
             <div className="flex items-center space-x-3 mb-2">
              <BarChart3 className="h-8 w-8 text-primary" />
              <CardTitle className="font-headline text-2xl">Analytics & Portfolio</CardTitle>
            </div>
            <CardDescription>Track your active fundings, returns, and platform analytics.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full" variant="secondary">
              <Link href="/dashboard/analytics">View Analytics</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 p-8 bg-card border border-border/50 rounded-xl flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <Image 
            src="https://placehold.co/300x200.png" 
            alt="Financial illustration" 
            width={300} 
            height={200} 
            className="rounded-lg"
            data-ai-hint="financial technology abstract"
          />
        </div>
        <div>
          <h3 className="font-headline text-2xl font-semibold text-foreground mb-3">Maximize Your Financial Potential</h3>
          <p className="text-muted-foreground mb-4">
            Flowice empowers businesses by providing quick access to working capital, and offers investors unique opportunities in a decentralized market.
            Our AI-driven risk assessment ensures transparency and informed decision-making.
          </p>
          <Button variant="link" asChild className="p-0 h-auto text-primary">
            <Link href="/#how-it-works">Learn More About Flowice <span aria-hidden="true">&rarr;</span></Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
