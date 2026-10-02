import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProductsSection } from "@/components/ProductsSection";
import { SmartBoxArchitecture } from "@/components/SmartBoxArchitecture";
import { PricingTermsSection } from "@/components/PricingTermsSection";
import { PricingCalculator } from "@/components/PricingCalculator";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ProductsSection />
        <SmartBoxArchitecture />
        <PricingTermsSection />
        <PricingCalculator />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
