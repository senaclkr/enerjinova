"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hakkımızda", href: "#hakkimizda" },
    { name: "Ürün ve Hizmetler", href: "#urunler" },
    { name: "Ekosistem Mimarisi", href: "#mimari" },
    { name: "Fiyat ve Koşullar", href: "#fiyat-listesi" },
    { name: "Hesaplayıcı", href: "#hesaplayici" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-emerald-950/10 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-36 sm:h-14 sm:w-44 transition-transform duration-200 group-hover:scale-102">
              <Image
                src="/logo.png"
                alt="EnerjiNova A.Ş. Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full border border-emerald-300/60">
                B2B & SmartBox Üreticisi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-emerald-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a href="#hesaplayici">
              <Button
                variant="emerald"
                size="sm"
                className="gap-2 shadow-emerald-900/10"
              >
                <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                <span>Teklif / Sipariş</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-emerald-800 hover:bg-slate-100 focus:outline-none"
              aria-label="Menüyü Aç/Kapat"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-5 border-t border-slate-200/80 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-800 rounded-lg hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="#hesaplayici"
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                >
                  <Button variant="emerald" className="w-full gap-2 justify-center">
                    <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
                    <span>Teklif ve Sipariş Hesapla</span>
                  </Button>
                </a>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Ders Yürütücüsü Onaylı Süreç</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
