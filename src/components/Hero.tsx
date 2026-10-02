"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Cpu, Layers, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const stats = [
    { value: "1.000.000 ₺", label: "Aktif Varlık & Kaynak", sub: "Tam Öz Sermaye Güvencesi" },
    { value: "3.300+ Adet", label: "Enerji Modülü Rezervi", sub: "Güçlü Başlangıç Stoku" },
    { value: "1.200 Adet", label: "Dönemsel Üretim Kapasitesi", sub: "Yüksek Hızlı Sevkiyat" },
    { value: "65 ₺", label: "B2B Modül Referans Fiyatı", sub: "Rekabetçi Birim Maliyet" },
  ];

  return (
    <section className="relative pt-10 pb-14 md:pt-14 md:pb-18 border-b border-border bg-background overflow-hidden">
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
        <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="secondary" className="px-3 py-0.5 text-xs font-medium">
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
          <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#urunler" className="w-full sm:w-auto">
              <Button size="sm" className="w-full sm:w-auto gap-2">
                <span>Ürünleri İncele</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>

            <a href="#departmanlar" className="w-full sm:w-auto">
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                Kurumsal Yapı
              </Button>
            </a>

            <a href="#iletisim" className="w-full sm:w-auto">
              <Button variant="ghost" size="sm" className="w-full sm:w-auto text-muted-foreground hover:text-foreground">
                İletişim
              </Button>
            </a>
          </div>

          {/* Key Metrics Bar */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
            {stats.map((s, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg border border-border bg-card/70 backdrop-blur-xs card-hover-effect"
              >
                <div className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
                  {s.value}
                </div>
                <div className="text-xs font-semibold text-primary mt-0.5">
                  {s.label}
                </div>
                <div className="text-[11px] text-muted-foreground mt-0.5">
                  {s.sub}
                </div>
              </div>
            ))}
          </div>

          {/* 3 Value Pillars */}
          <div className="pt-4 grid sm:grid-cols-3 gap-3 text-left">
            <div className="p-3.5 rounded-lg border border-border bg-card/50 card-hover-effect">
              <div className="flex items-center gap-2 text-primary font-semibold text-xs mb-1">
                <Cpu className="w-4 h-4" />
                <span>Öz Üretim Uzmanlığı</span>
              </div>
              <p className="text-xs text-muted-foreground leading-normal">
                SmartBox mimarisinin 1 numaralı güç bileşeninde kesintisiz yerli üretim.
              </p>
            </div>

            <div className="p-3.5 rounded-lg border border-border bg-card/50 card-hover-effect">
              <div className="flex items-center gap-2 text-primary font-semibold text-xs mb-1">
                <Layers className="w-4 h-4" />
                <span>Nihai SmartBox Üretimi</span>
              </div>
              <p className="text-xs text-muted-foreground leading-normal">
                8 bileşeni entegre eden 600 adet/dönem montaj kapasitesi.
              </p>
            </div>

            <div className="p-3.5 rounded-lg border border-border bg-card/50 card-hover-effect">
              <div className="flex items-center gap-2 text-primary font-semibold text-xs mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Güvenli B2B Anlaşma</span>
              </div>
              <p className="text-xs text-muted-foreground leading-normal">
                Minimum 1 adet sipariş, peşin veya vadeli esnek sözleşme şartları.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
