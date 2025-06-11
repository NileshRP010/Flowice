// src/components/landing/DevelopersSection.tsx
"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Terminal, BookOpen, Zap, Puzzle, Users2, GitFork } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import Link from "next/link";
import Image from "next/image";

const developerFeatures = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Powerful APIs & SDKs",
    description: "Integrate Flowice functionalities seamlessly into your applications with our comprehensive REST & GraphQL APIs and language-specific SDKs.",
  },
  {
    icon: <Puzzle className="h-8 w-8 text-primary" />,
    title: "Smart Contract Interaction",
    description: "Directly interact with Flowice's audited smart contracts on the Solana blockchain for custom solutions and deeper integrations.",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: "Comprehensive Documentation",
    description: "Access detailed guides, API references, tutorials, and code samples to get started quickly and build with confidence.",
  },
  {
    icon: <Terminal className="h-8 w-8 text-primary" />,
    title: "Testnet & Sandbox",
    description: "Develop and test your integrations in a dedicated sandbox environment that mirrors our mainnet functionalities.",
  },
  {
    icon: <Users2 className="h-8 w-8 text-primary" />,
    title: "Developer Community",
    description: "Join our vibrant community of developers. Share insights, get support, and collaborate on building the future of finance.",
  },
  {
    icon: <GitFork className="h-8 w-8 text-primary" />,
    title: "Open Source Focus",
    description: "Contribute to and leverage our open-source components and libraries to accelerate your development.",
  },
];

const DevelopersSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      id="developers" 
      ref={ref}
      className={cn(
        "py-16 md:py-24 bg-background text-foreground transition-all duration-1000 ease-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Terminal className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Built for <span className="text-primary">Developers</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Empowering you to innovate and integrate with the Flowice ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {developerFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className={cn(
                "bg-card/80 border-border shadow-lg hover:shadow-primary/20 transition-all duration-300 transform hover:-translate-y-1",
                isVisible ? "opacity-100 translate-y-0 delay-" + (index * 100) : "opacity-0 translate-y-5"
              )}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <CardHeader className="items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-3">
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
        <div className="mt-12 p-8 bg-card border border-border/50 rounded-xl flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <Image 
              src="https://placehold.co/300x200.png" 
              alt="Developer working on code" 
              width={300} 
              height={200} 
              className="rounded-lg"
              data-ai-hint="developer code"
            />
          </div>
          <div>
            <h3 className="font-headline text-2xl font-semibold text-foreground mb-3">Start Building Today</h3>
            <p className="text-muted-foreground mb-4">
              Dive into our developer portal for all the resources you need. Whether you're building a new DeFi application or integrating invoice financing into an existing platform, Flowice provides the tools for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/docs">Explore Documentation</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
                    <Link href="https://github.com/your-org/flowice-sdk" target="_blank" rel="noopener noreferrer">View on GitHub</Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;