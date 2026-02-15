import React from 'react';
import { NavBar } from '@/components/landing/NavBar';
import { HeroSection } from '@/components/landing/HeroSection';
import { ServicesSection } from '@/components/landing/ServicesSection';
import { TrustSection } from '@/components/landing/TrustSection';
import { ContactSection } from '@/components/landing/ContactSection';
import { Footer } from '@/components/landing/Footer';
import { Toaster } from '@/components/ui/sonner';
import { ThemeToggle } from '@/components/ThemeToggle';
export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#007AFF]/20 selection:text-[#007AFF]">
      <NavBar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
      {/* Floating Theme Toggle (iOS doesn't usually toggle themes like this, but we keep it for user preference) */}
      <ThemeToggle className="fixed bottom-6 left-6" />
      <Toaster position="bottom-center" richColors />
    </div>
  );
}