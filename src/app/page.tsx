import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProductsSection } from "@/components/ProductsSection";
import { SmartBoxArchitecture } from "@/components/SmartBoxArchitecture";
import { PricingTermsSection } from "@/components/PricingTermsSection";
import { OrderSection } from "@/components/OrderSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <ProductsSection />
        <SmartBoxArchitecture />
        <PricingTermsSection />
        <OrderSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
