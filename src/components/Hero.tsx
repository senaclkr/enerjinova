"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Cpu, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-border bg-background overflow-hidden">
      {/* Subtle, faint background logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <div className="relative w-[450px] h-[320px] sm:w-[620px] sm:h-[420px] opacity-[0.06]">
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
              SmartBox Ekosistemi & B2B Güç Tedariki
            </Badge>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-snug">
            Geleceğin enerjisini üretirken,{" "}
            <span className="text-primary">geleceği tüketmeyen</span> bir dünya inşa ediyoruz.
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <strong className="text-foreground">EnerjiNova A.Ş.</strong>,
            SmartBox ekosisteminin kalbi olan Enerji Modülü üretimindeki uzmanlığı
            ve B2B tedarik altyapısıyla çevreye duyarlı, yüksek verimli ve sürdürülebilir teknoloji çözümleri sunar.
          </p>

          {/* Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#urunler" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto gap-2">
                <span>Ürün ve Hizmetler</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>

            <a href="#iletisim" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto">
                Kurumsal İletişim
              </Button>
            </a>
          </div>

          {/* 3 Minimalist Corporate Highlight Cards */}
          <div className="pt-8 grid sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-lg border border-border bg-card/60 backdrop-blur-xs card-hover-effect">
              <div className="flex items-center gap-2 text-primary font-semibold text-xs mb-1.5">
                <Cpu className="w-4 h-4" />
                <span>Enerji Modülü</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                SmartBox mimarisinin ana güç bileşeni olarak optimize edilmiş B2B parça tedariki.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border bg-card/60 backdrop-blur-xs card-hover-effect">
              <div className="flex items-center gap-2 text-primary font-semibold text-xs mb-1.5">
                <Layers className="w-4 h-4" />
                <span>SmartBox Çözümü</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                8 temel bileşenin bütünleşik entegrasyonuyla geliştirilen anahtar teslim teknoloji paketi.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border bg-card/60 backdrop-blur-xs card-hover-effect">
              <div className="flex items-center gap-2 text-primary font-semibold text-xs mb-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Güvenilir Tedarik</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Standart kalite güvencesi, esnek alım şartları ve kurumsal teslimat protokolü.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
