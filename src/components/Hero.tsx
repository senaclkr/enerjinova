"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Cpu, Layers, ShieldCheck, ShoppingBag, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const B2B_MARKETPLACE_URL =
  "https://dijital-sirketler-ligi-serhat-ata.ataserhat54.chatgpt.site/ogrenci";

export function Hero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-border bg-background overflow-hidden">
      {/* Subtle background logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <div className="relative w-[420px] h-[300px] sm:w-[580px] sm:h-[400px] opacity-[0.05]">
          <Image
            src="/logo.png"
            alt="EnerjiNova A.Ş. Watermark"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-5 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="secondary" className="px-3 py-1 text-xs font-medium">
              SmartBox Ekosistemi • B2B Enerji Tedarikçisi
            </Badge>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            Geleceğin Enerjisini Üretiyor,{" "}
            <span className="text-primary">Geleceği Tüketmiyoruz</span>
          </h1>

          {/* Short Description */}
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            SmartBox mimarisinin kalbi olan <strong className="text-foreground">Enerji Modülü</strong> üretiminde
            uzmanlaşmış B2B tedarik altyapımızla yüksek verimli ve sürdürülebilir teknoloji sunuyoruz.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={B2B_MARKETPLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="sm" className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-xs">
                <ShoppingBag className="w-4 h-4" />
                <span>B2B Pazar Yeri (Satın Al)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </Button>
            </a>

            <a href="#urunler" className="w-full sm:w-auto">
              <Button variant="outline" size="sm" className="w-full sm:w-auto gap-2">
                <span>Ürünleri İncele</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>

            <a href="#iletisim" className="w-full sm:w-auto">
              <Button variant="ghost" size="sm" className="w-full sm:w-auto">
                Ürün Talep Formu
              </Button>
            </a>
          </div>

          {/* 3 Value Pillars */}
          <div className="pt-8 grid sm:grid-cols-3 gap-3.5 text-left">
            <div className="p-4 rounded-lg border border-border bg-card/60 backdrop-blur-xs card-hover-effect">
              <div className="flex items-center gap-2 text-primary font-semibold text-xs mb-1.5">
                <Cpu className="w-4 h-4" />
                <span>Öz Üretim Uzmanlığı</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                SmartBox mimarisinin 1 numaralı güç bileşeninde kesintisiz ve yüksek verimli üretim.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border bg-card/60 backdrop-blur-xs card-hover-effect">
              <div className="flex items-center gap-2 text-primary font-semibold text-xs mb-1.5">
                <Layers className="w-4 h-4" />
                <span>Nihai SmartBox Çözümü</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                8 temel bileşenin kusursuz entegrasyonuyla geliştirilen anahtar teslim teknoloji paketi.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border bg-card/60 backdrop-blur-xs card-hover-effect">
              <div className="flex items-center gap-2 text-primary font-semibold text-xs mb-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Güvenli B2B Anlaşma</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Minimum 1 adet sipariş, peşin veya vadeli esnek sözleşme ve zamanında teslimat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
