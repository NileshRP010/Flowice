// src/app/page.tsx
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import DevelopersSection from '@/components/landing/DevelopersSection';
import SolutionsSection from '@/components/landing/SolutionsSection';
import CallToActionSection from '@/components/landing/CallToActionSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DevelopersSection />
        <SolutionsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}
