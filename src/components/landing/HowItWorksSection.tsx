// src/components/landing/HowItWorksSection.tsx
"use client";
import { FileText, Users, ShieldCheck, Coins } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const steps = [
  {
    icon: <FileText className="h-10 w-10 text-primary mb-4" />,
    title: "1. Submit Invoice",
    description: "Businesses easily input invoice details and submit them for tokenization.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary mb-4" />,
    title: "2. AI Risk Assessment",
    description: "Our AI analyzes the invoice and provides a credit score and risk profile.",
  },
  {
    icon: <Coins className="h-10 w-10 text-primary mb-4" />,
    title: "3. Tokenize & List",
    description: "The invoice is tokenized on Solana and listed on our marketplace for investors.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary mb-4" />,
    title: "4. Investors Fund",
    description: "Global investors fund the invoice, providing businesses with immediate liquidity.",
  },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      id="how-it-works" 
      ref={ref}
      className={cn(
        "py-16 md:py-24 bg-background/70 text-foreground transition-all duration-1000 ease-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Simple Steps to <span className="text-primary">Liquidity</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Our process is designed for speed, simplicity, and security.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={cn(
                "flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-300 transform",
                isVisible ? "opacity-100 translate-y-0 delay-" + (index * 150) : "opacity-0 translate-y-5"
              )}
              style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
            >
              {step.icon}
              <h3 className="font-headline text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
