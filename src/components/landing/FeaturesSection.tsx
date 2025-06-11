// src/components/landing/FeaturesSection.tsx
"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Zap, TrendingUp, ShieldCheck, Bot, Share2, Layers } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Instant Liquidity",
    description: "Access funds quickly by tokenizing your unpaid invoices on the Solana blockchain.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Global Investor Network",
    description: "Connect with a diverse pool of investors ready to fund your invoices.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Secure & Transparent",
    description: "Leverage Solana's speed and security for all transactions, recorded on a unified ledger.",
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "AI-Powered Risk Assessment",
    description: "Utilize advanced AI for fair and accurate credit scoring and risk analysis.",
  },
  {
    icon: <Share2 className="h-8 w-8 text-primary" />,
    title: "Accounting Integration",
    description: "Seamlessly connect with Xero, QuickBooks, etc., to sync invoice data.",
  },
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "Automated Agreements",
    description: "Leverage smart contracts for transparent and automated execution of financing terms.",
  },
];

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      id="features" 
      ref={ref}
      className={cn(
        "py-16 md:py-24 bg-background text-foreground transition-all duration-1000 ease-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Why Choose <span className="text-primary">Flowice</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Discover the key benefits of our decentralized invoice financing platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={cn(
                "bg-card/80 border-border shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1",
                isVisible ? "opacity-100 translate-y-0 delay-" + (index * 100) : "opacity-0 translate-y-5" // Staggered animation for cards
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <CardHeader className="items-center text-center">
                <div className="p-4 rounded-full bg-primary/10 mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
