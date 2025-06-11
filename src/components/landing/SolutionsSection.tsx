// src/components/landing/SolutionsSection.tsx
"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase, TrendingUp, Layers, Zap, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import Image from "next/image";

const solutions = [
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "For Businesses",
    subtitle: "Unlock Working Capital Instantly",
    description: "Convert your unpaid invoices into immediate cash flow. Improve liquidity, manage expenses effectively, and seize growth opportunities without the complexities of traditional loans.",
    benefits: [
      "Rapid access to funds",
      "Competitive, transparent rates",
      "Retain customer relationships",
      "Streamlined online process",
    ],
    image: "https://placehold.co/600x400.png",
    imageHint: "business growth"
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "For Investors",
    subtitle: "Diversify with a New Asset Class",
    description: "Access the invoice financing market by investing in tokenized invoices. Earn competitive returns based on AI-driven risk assessments and transparent, on-chain data.",
    benefits: [
      "Unique alternative investment",
      "Clear risk-reward profiles",
      "Direct market participation",
      "Blockchain-backed security",
    ],
    image: "https://placehold.co/600x400.png",
    imageHint: "investment chart"
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "For Platforms & Fintechs",
    subtitle: "Embed Decentralized Finance",
    description: "Integrate Flowice's invoice financing capabilities directly into your existing platform. Offer your users seamless access to DeFi liquidity solutions through our robust APIs.",
    benefits: [
      "Expand your service offerings",
      "Attract and retain users",
      "Leverage cutting-edge blockchain tech",
      "Customizable integration options",
    ],
    image: "https://placehold.co/600x400.png",
    imageHint: "platform integration"
  },
];

const SolutionsSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      id="solutions" 
      ref={ref}
      className={cn(
        "py-16 md:py-24 bg-background/80 text-foreground transition-all duration-1000 ease-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Tailored Solutions for <span className="text-primary">Every Need</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Flowice connects all participants in a transparent, efficient, and secure financial ecosystem, designed to empower growth and opportunity.
          </p>
        </div>

        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={cn(
                "flex flex-col items-center gap-8 md:gap-12",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                "transition-all duration-700 ease-out transform",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: isVisible ? `${index * 200}ms` : '0ms' }}
            >
              <div className="md:w-1/2">
                <div className="mb-4 flex items-center gap-3">
                    {solution.icon}
                    <h3 className="font-headline text-2xl md:text-3xl font-semibold text-foreground">{solution.title}</h3>
                </div>
                <p className="text-xl text-primary mb-3 font-medium">{solution.subtitle}</p>
                <p className="text-muted-foreground mb-6 text-md leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-xl object-cover aspect-[3/2]"
                  data-ai-hint={solution.imageHint}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;