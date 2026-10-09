"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ShoppingBag, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const B2B_MARKETPLACE_URL =
  "https://dijital-sirketler-ligi-serhat-ata.ataserhat54.chatgpt.site/ogrenci";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Ürünler", href: "/#urunler" },
    { name: "Bileşenler", href: "/#mimari" },
    { name: "Fiyatlar", href: "/#fiyat-listesi" },
    { name: "Sipariş Formu", href: "/#siparis" },
    { name: "İletişim", href: "/#iletisim" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="relative h-9 w-28 sm:h-10 sm:w-36">
              <Image
                src="/logo.png"
                alt="EnerjiNova A.Ş."
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-0.5 inline-block whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs: B2B Marketplace & Order button */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <a
              href={B2B_MARKETPLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 text-xs font-semibold border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary whitespace-nowrap"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>B2B Pazar Yeri</span>
                <ExternalLink className="w-3 h-3 opacity-70 shrink-0" />
              </Button>
            </a>

            <a href="#siparis">
              <Button size="sm" className="text-xs font-semibold whitespace-nowrap">
                Sipariş Ver
              </Button>
            </a>
          </div>

          {/* Mobile menu toggle (visible below lg) */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menüyü Aç/Kapat"
              className="h-10 w-10"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border space-y-2.5 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 px-1 space-y-2 border-t border-border/60">
              <a
                href={B2B_MARKETPLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block w-full"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-2 border-primary/30 justify-center text-xs font-semibold py-2.5 h-auto"
                >
                  <ShoppingBag className="w-4 h-4 text-primary shrink-0" />
                  <span>B2B Pazar Yeri (Satın Al)</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </Button>
              </a>

              <a
                href="#siparis"
                onClick={() => setIsOpen(false)}
                className="block w-full"
              >
                <Button size="sm" className="w-full text-xs font-semibold justify-center py-2.5 h-auto">
                  Sipariş & Talep Formu
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
