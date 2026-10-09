import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/AboutSection";
import { KpiSection } from "@/components/KpiSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hakkımızda & KPI Paneli | EnerjiNova A.Ş.",
  description:
    "EnerjiNova A.Ş. kurumsal profili, misyonu, vizyonu ve Tur 2 resmî KPI performans göstergeleri tablosu.",
};

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <AboutSection />
        <KpiSection />
      </main>
      <Footer />
    </div>
  );
}
