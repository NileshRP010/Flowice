// src/components/landing/CallToActionSection.tsx
"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const CallToActionSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={ref}
      className={cn(
        "py-10 md:py-12 bg-gradient-to-br from-primary via-purple-600 to-accent text-primary-foreground transition-all duration-1000 ease-out transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="container mx-auto px-4 text-center">
        <Rocket className="h-10 w-10 mx-auto mb-4 text-primary-foreground/80 md:h-12 md:w-12 md:mb-5" />
        <h2 className="font-headline text-2xl md:text-4xl font-bold">
          Ready to Revolutionize Your Cash Flow?
        </h2>
        <p className="mt-3 text-md md:text-xl max-w-2xl mx-auto text-primary-foreground/90">
          Join Flowice Finance today and experience the power of decentralized invoice financing.
          Get started in minutes and unlock the liquidity your business deserves.
        </p>
        <div className="mt-6 md:mt-8">
          <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-3 rounded-full font-semibold">
            <Link href="/dashboard">
              Access Your Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
