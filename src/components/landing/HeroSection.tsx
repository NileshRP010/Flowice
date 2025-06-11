// src/components/landing/HeroSection.tsx
"use client"; 
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section 
      className="relative py-20 md:py-32 min-h-[80vh] flex items-center justify-center overflow-hidden bg-background text-foreground"
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-radial from-accent/30 via-accent/10 to-transparent rounded-full filter blur-3xl animate-pulse-slower animation-delay-2000"></div>
      </div>
      
      <div 
        ref={ref}
        className={cn(
          "container mx-auto px-4 text-center z-10 transition-all duration-1000 ease-out transform",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-accent">
          Reimagine Invoice Financing on the Finternet.
        </h1>
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mt-2 md:mt-4">
          Fast for everyone.
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Bring blockchain to the people. Flowice Finance supports experiences
          for power users, new consumers, and everyone in between.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 px-8 py-3 rounded-full font-semibold">
            <Link href="/dashboard/submit-invoice">
              START BUILDING
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10 hover:text-accent shadow-lg hover:shadow-accent/30 transition-all duration-300 transform hover:scale-105 px-8 py-3 rounded-full font-semibold">
            <Link href="/#features">
              RESOURCES
            </Link>
          </Button>
        </div>
        
        <div className="mt-24 text-center">
          <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
            POWERING TOOLS AND INTEGRATIONS FROM COMPANIES ALL AROUND THE WORLD
          </p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-muted-foreground/80">
            <span>Circle</span>
            <span>Discord</span>
            <span>Google</span>
            <span>Jump</span>
            <span>Magic Eden</span>
            <span>Meta</span>
            <span>Shopify</span>
            <span>Stripe</span>
          </div>
        </div>
      </div>
       <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.03); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
        .animate-pulse-slower {
          animation: pulse-slower 10s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .bg-gradient-radial {
          background-image: radial-gradient(circle, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 35%, var(--tw-gradient-to) 70%);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
