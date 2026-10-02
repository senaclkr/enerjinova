"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Hakkımızda", href: "#hakkimizda" },
    { name: "Ürünler", href: "#urunler" },
    { name: "Fiyatlar", href: "#fiyat-listesi" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-32 sm:w-36">
              <Image
                src="/logo.png"
                alt="EnerjiNova A.Ş."
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Clean, Narrow Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Simple CTA */}
          <div className="hidden md:flex items-center">
            <a href="mailto:enerjinova.iletisim@gmail.com">
              <Button size="sm">İletişime Geç</Button>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menü"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden py-3 border-t border-border space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 px-3">
              <a
                href="mailto:enerjinova.iletisim@gmail.com"
                onClick={() => setIsOpen(false)}
                className="w-full"
              >
                <Button size="sm" className="w-full">
                  İletişime Geç
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
