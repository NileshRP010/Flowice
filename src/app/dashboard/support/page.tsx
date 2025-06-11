
// src/app/dashboard/support/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LifeBuoy, MessageSquare, BookOpen, Search, HelpCircle, Lightbulb, ChevronDown, Users, FileQuestion, Brain } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export const metadata = {
  title: "Support & Help Center | Flowice Finance",
  description: "Get help and find answers to your questions.",
};

const faqItems = [
  { q: "How do I submit an invoice for financing?", a: "Navigate to the 'Submit Invoice' section from your dashboard. Fill in all required details about the invoice, including amount, due date, and customer information. Our AI will then perform a risk assessment." },
  { q: "What are the fees for using Flowice?", a: "Fee structures will vary based on the risk assessment of the invoice and prevailing market conditions. Detailed fee breakdowns will be provided before you finalize any transaction. Platform fees for specific services will be outlined in our 'Pricing' section (coming soon)." },
  { q: "How long does it typically take to get an invoice funded?", a: "Funding times can vary. After submission and AI risk assessment, your tokenized invoice is listed on the marketplace. Funding depends on investor interest and market liquidity. Our goal is to facilitate quick turnarounds." },
  { q: "What is invoice tokenization?", a: "Invoice tokenization is the process of converting the rights to an invoice's future payment into a digital token on the Solana blockchain. This allows for easier trading, fractional ownership, and enhanced liquidity for both businesses and investors." },
  { q: "How does the AI risk assessment work?", a: "Our AI analyzes various data points related to the invoice, the customer, industry trends, and payment histories to generate a risk score and recommended funding rate. This helps ensure fair and transparent assessments." },
  { q: "What security measures are in place?", a: "Flowice utilizes the security features of the Solana blockchain. We also implement platform-level security protocols, and our smart contracts are audited. For account security, we recommend using strong, unique passwords and enabling any available two-factor authentication (2FA) options (coming soon)." },
  { q: "Can I invest in invoices on Flowice?", a: "Yes, Flowice provides a marketplace for investors to browse and fund tokenized invoices, offering opportunities for returns based on the risk and terms of each invoice." },
  { q: "What happens if an invoice I funded defaults?", a: "Flowice will outline procedures for managing defaults, which may include recovery processes or access to bad debt provisions if applicable. Specific terms will be detailed in the investment agreements. Risk management tools are also provided to help investors make informed decisions." },
  { q: "How do I connect my accounting software?", a: "Visit the 'Integrations' section in your dashboard. You'll find options to connect with supported accounting software like Xero and QuickBooks. Follow the on-screen prompts to authorize the connection." },
  { q: "Where can I find the Flowice whitepaper or detailed documentation?", a: "Our whitepaper and comprehensive documentation will be available in the 'Resources' or 'Docs' section of our main website (coming soon). These will provide in-depth information about our platform architecture, tokenomics, and roadmap." },
];

export default function SupportPage() {
  return (
    <div className="w-full py-8 px-6">
      <Card className="w-full bg-card border border-border/50 rounded-xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <LifeBuoy className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="font-headline text-3xl">Support & Help Center</CardTitle>
          <CardDescription className="text-lg">
            Find FAQs, documentation, and ways to contact our support team.
             <span className="block mt-1 text-sm font-semibold text-accent">(Interactive Functionality Coming Soon)</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="py-10 space-y-10">
          <div className="text-center w-full">
            <p className="text-muted-foreground mb-4">
              Have a question? Search our knowledge base or browse common topics.
            </p>
            <div className="max-w-xl mx-auto flex gap-2">
              <Input type="search" placeholder="Search help articles (e.g., 'how to connect wallet')" className="flex-grow bg-background" disabled />
              <Button type="submit" disabled><Search className="mr-0 md:mr-2 h-4 w-4" /><span className="hidden md:inline">Search</span></Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <Card className="hover:shadow-lg transition-shadow w-full bg-card border border-border/30 rounded-lg">
              <CardHeader className="items-center text-center">
                <BookOpen className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">Knowledge Base</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-3">Browse in-depth guides, tutorials, and platform documentation.</p>
                <Button variant="outline" disabled>Explore Docs (Soon)</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow w-full bg-card border border-border/30 rounded-lg">
              <CardHeader className="items-center text-center">
                <MessageSquare className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">Contact Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-3">Submit a support ticket or reach out to our dedicated team.</p>
                <Button variant="outline" disabled>Open Ticket (Soon)</Button>
              </CardContent>
            </Card>
             <Card className="hover:shadow-lg transition-shadow w-full bg-card border border-border/30 rounded-lg">
              <CardHeader className="items-center text-center">
                <Users className="h-8 w-8 text-primary mb-2" /> 
                <CardTitle className="text-xl">Community Forum</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-3">Ask questions, share insights, and connect with other users.</p>
                <Button variant="outline" disabled asChild>
                  <Link href="#">Visit Forum (Soon)</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

           <Card className="w-full bg-card border border-border/30 rounded-lg">
            <CardHeader>
              <CardTitle className="text-xl flex items-center"><FileQuestion className="mr-2 h-5 w-5 text-primary"/>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-left hover:text-primary">{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                      {item.a} (Placeholder answer - more details will be available here.)
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
               <p className="text-xs text-muted-foreground text-center pt-4">More FAQs and detailed answers will be available soon.</p>
            </CardContent>
          </Card>

            <Card className="w-full bg-accent/10 border-accent/30 rounded-lg p-6 text-center">
                <Brain className="h-10 w-10 text-accent mx-auto mb-3"/>
                <h3 className="text-xl font-semibold text-accent-foreground mb-2">Provide Feedback</h3>
                <p className="text-accent-foreground/80 mb-4">Help us improve Flowice! Share your suggestions or report issues.</p>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/20" disabled>Submit Feedback (Soon)</Button>
            </Card>

        </CardContent>
      </Card>
    </div>
  );
}

    