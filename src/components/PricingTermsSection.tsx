"use client";

import React, { useState } from "react";
import {
  Cpu,
  Zap,
  Activity,
  Box,
  Code2,
  Truck,
  BarChart,
  ShieldCheck,
  Wrench,
  Calculator,
  Compass,
  TrendingUp,
  Flame,
  Crown,
  CheckCircle2,
  ExternalLink,
  ShoppingBag,
  ArrowRight,
  Info,
  Scale,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const B2B_MARKETPLACE_URL =
  "https://dijital-sirketler-ligi-serhat-ata.ataserhat54.chatgpt.site/ogrenci?marketCompany=G01";

export function PricingTermsSection() {
  const [selectedScenario, setSelectedScenario] = useState<number>(0);

  const componentsList = [
    {
      name: "Enerji Modülü (G01 - Kendi Üretimimiz)",
      type: "Öz Üretim (Uzmanlık)",
      cost: 65,
      costLabel: "65 TL (Taban)",
      icon: Zap,
      highlight: true,
      note: "Çekirdek güç ünitesi",
    },
    {
      name: "İşlemci Modülü",
      type: "Tedarik Girdisi",
      cost: 60,
      costLabel: "60 TL",
      icon: Cpu,
      highlight: false,
      note: "MikroCore Teknoloji A.Ş.",
    },
    {
      name: "Sensör Kiti",
      type: "Tedarik Girdisi",
      cost: 60,
      costLabel: "60 TL",
      icon: Activity,
      highlight: false,
      note: "SensoTek A.Ş.",
    },
    {
      name: "Kasa ve Ambalaj",
      type: "Tedarik Girdisi",
      cost: 60,
      costLabel: "60 TL",
      icon: Box,
      highlight: false,
      note: "FormAmbalaj A.Ş.",
    },
    {
      name: "Yazılım Lisansı",
      type: "Tedarik Girdisi",
      cost: 60,
      costLabel: "60 TL",
      icon: Code2,
      highlight: false,
      note: "BulutOS Yazılım A.Ş.",
    },
    {
      name: "Lojistik Tokenı",
      type: "Tedarik Girdisi",
      cost: 60,
      costLabel: "60 TL",
      icon: Truck,
      highlight: false,
      note: "HızlıRota Lojistik A.Ş.",
    },
    {
      name: "Müşteri Analitiği Lisansı",
      type: "Tedarik Girdisi",
      cost: 60,
      costLabel: "60 TL",
      icon: BarChart,
      highlight: false,
      note: "VeriPusula Analitik A.Ş.",
    },
    {
      name: "Garanti Hizmet Paketi",
      type: "Tedarik Girdisi",
      cost: 60,
      costLabel: "60 TL",
      icon: ShieldCheck,
      highlight: false,
      note: "GüvencePlus Hizmetleri A.Ş.",
    },
  ];

  const totalComponentCost = 485;
  const assemblyCost = 100;
  const netTotalCost = 585;

  const scenarios = [
    {
      id: 1,
      badge: "Pazar Standardı",
      badgeVariant: "default" as const,
      title: "Senaryo 1 (Referans Satış)",
      price: 950,
      priceLabel: "950 TL",
      quality: "C Kalite Standart Ürün",
      profit: 950 - netTotalCost, // 365 TL
      margin: (((950 - netTotalCost) / 950) * 100).toFixed(1), // 38.4%
      icon: TrendingUp,
      description: "C kalite standart ürün için pazar referans fiyatı.",
      tag: "Dengeli Kârlılık",
      recommended: false,
    },
    {
      id: 2,
      badge: "Hızlı Hacim & Nüfuz",
      badgeVariant: "secondary" as const,
      title: "Senaryo 2 (Pazara Nüfuz)",
      price: 850,
      priceLabel: "850 TL",
      quality: "Hızlı Stok Eritme & B2B Pay",
      profit: 850 - netTotalCost, // 265 TL
      margin: (((850 - netTotalCost) / 850) * 100).toFixed(1), // 31.2%
      icon: Flame,
      description:
        "Stokları hızlı eritmek ve pazarda agresif pay kapmak için referansın altındaki fiyat.",
      tag: "Yüksek Likidite",
      recommended: true,
    },
    {
      id: 3,
      badge: "Üst Segment / Katma Değer",
      badgeVariant: "outline" as const,
      title: "Senaryo 3 (Premium/Kalite)",
      price: 1100,
      priceLabel: "1.100 TL",
      quality: "A veya B Kalite Dönüştürülmüş",
      profit: 1100 - netTotalCost, // 515 TL
      margin: (((1100 - netTotalCost) / 1100) * 100).toFixed(1), // 46.8%
      icon: Crown,
      description:
        "Dönüşümle elde edilmiş (A veya B Kalite) yüksek standartlı SmartBox'lar için üst segment fiyat.",
      tag: "Maksimum Marj",
      recommended: false,
    },
  ];

  return (
    <section
      id="fiyat-listesi"
      className="py-14 sm:py-18 bg-muted/15 border-b border-border scroll-mt-16"
    >
      <div id="maliyet-senaryolari" className="relative -top-20" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="secondary" className="px-3 py-0.5 text-xs font-semibold">
            Sekiz Bileşen • Montaj • Sevkiyat • 3 Fiyat Senaryosu
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
            SmartBox Bileşenleri, Maliyet Yapısı ve Satış Senaryoları
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            SmartBox üretimindeki 8 temel girdi maliyeti, montaj gideri, dinamik lojistik
            altyapısı ve pazar rekabetine yönelik 3 stratejik satış senaryosu.
          </p>
          <p className="text-[11px] text-muted-foreground italic">
            * Maliyet tutarları şirket anlaşmalarına göre değişiklik gösterebilir.
          </p>
        </div>

        {/* 1. SEKİZ BİLEŞEN VE MALİYET YAPISI */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-3">
            <div>
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                <span>1. SmartBox Bileşenleri ve Maliyet Yapısı</span>
              </h3>
              <p className="text-xs text-muted-foreground">
                8 zorunlu girdi kalemi ve birim maliyet dökümü
              </p>
            </div>
            <Badge variant="outline" className="text-xs self-start sm:self-auto font-mono">
              Bileşen Toplamı: {totalComponentCost} TL
            </Badge>
          </div>

          {/* 8 Components Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {componentsList.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-lg border transition-all duration-200 flex flex-col justify-between ${
                    comp.highlight
                      ? "border-primary bg-primary/5 ring-1 ring-primary/30 shadow-xs"
                      : "border-border bg-card hover:border-border/80"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div
                      className={`p-2 rounded-md ${
                        comp.highlight
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-extrabold text-sm text-foreground">
                      {comp.costLabel}
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="font-semibold text-xs text-foreground leading-snug">
                      {comp.name}
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">
                      {comp.note}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cost Summary & Formula Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
            <div className="p-4 rounded-lg border border-border bg-card flex flex-col justify-between">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                Toplam Bileşen Maliyeti
              </span>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black text-foreground">
                  {totalComponentCost}
                </span>
                <span className="text-xs font-semibold text-muted-foreground">TL</span>
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                8 ana bileşenin girdi alım toplamı
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border bg-card flex flex-col justify-between">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider flex items-center justify-between">
                <span>Montaj Gideri</span>
                <Badge variant="outline" className="text-[10px] font-normal font-mono">
                  1 C İşlem Birimi
                </Badge>
              </span>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black text-foreground">
                  {assemblyCost}
                </span>
                <span className="text-xs font-semibold text-muted-foreground">TL</span>
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                Her ürün için 1 C işlem birimi kullanılır
              </p>
            </div>

            <div className="p-4 rounded-lg border border-primary/40 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex flex-col justify-between">
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                Montaj Dahil Net Maliyet
              </span>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black text-primary">
                  {netTotalCost}
                </span>
                <span className="text-xs font-bold text-primary">TL</span>
              </div>
              <p className="text-[11px] text-foreground/80 font-medium mt-1">
                485 TL bileşen + 100 TL montaj = 585 TL net maliyet
              </p>
            </div>
          </div>
        </div>

        {/* 2. SEVKİYAT VE LOJİSTİK */}
        <div className="space-y-4">
          <div className="border-b border-border pb-3">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Truck className="w-5 h-5 text-primary" />
              <span>2. Sevkiyat ve Lojistik</span>
            </h3>
            <p className="text-xs text-muted-foreground">
              Sevkiyat filosu ve mesafe bazlı dinamik tarife yapısı
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-border bg-card shadow-xs">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-primary text-xs font-semibold">
                  <Compass className="w-4 h-4" />
                  <span>Sevkiyat Yöntemi</span>
                </div>
                <CardTitle className="text-base mt-1">
                  Şirket Öz Filosu veya Alyatransport A.Ş.
                </CardTitle>
                <CardDescription className="text-xs">
                  Dahili filo imkanı ve dış hizmet güvencesi
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-muted-foreground">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong>Şirket Öz Filosu:</strong> Doğrudan EnerjiNova lojistik birimi
                    yönetiminde sevkiyat planlaması.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong>Alyatransport A.Ş. (Dış Hizmet):</strong> Yoğun teslimat dönemlerinde
                    entegre dış taşımacılık protokolü.
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card shadow-xs">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-primary text-xs font-semibold">
                  <Scale className="w-4 h-4" />
                  <span>Sevkiyat Ücreti</span>
                </div>
                <CardTitle className="text-base mt-1">
                  Dinamik Güzergah Hesaplaması
                </CardTitle>
                <CardDescription className="text-xs">
                  Sabit değildir; rota ve mesafeye göre hesaplanır
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong>Değişken Tarife:</strong> Sevkiyat ücreti sabit olmayıp ulusal ve
                    uluslararası güzergahlara göre farklılık gösterir.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong>Sistemik Hesaplama:</strong> Toplam kilometre mesafesi ve teslim turuna
                    bağlı olarak sistem tarafından otomatik ve dinamik olarak belirlenir.
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 3. PAZAR SATIŞ SENARYOLARI */}
        <div className="space-y-4">
          <div className="border-b border-border pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>3. Pazar Satış Senaryoları (3 Fiyat Modeli)</span>
              </h3>
              <p className="text-xs text-muted-foreground">
                Pazar koşullarına, kalite seviyelerine ve rekabet hedeflerine göre 3 senaryo
              </p>
            </div>
            <Badge variant="secondary" className="text-xs self-start sm:self-auto">
              Net Maliyet: 585 TL
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {scenarios.map((sc, idx) => {
              const ScIcon = sc.icon;
              const isSelected = selectedScenario === idx;
              return (
                <Card
                  key={sc.id}
                  onClick={() => setSelectedScenario(idx)}
                  className={`flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                    sc.recommended
                      ? "border-primary shadow-md ring-1 ring-primary/40 bg-card"
                      : isSelected
                      ? "border-primary bg-card"
                      : "border-border bg-card/70 hover:border-border/90"
                  }`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant={sc.badgeVariant} className="text-[10px]">
                        {sc.badge}
                      </Badge>
                      <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                        <ScIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <CardTitle className="text-base sm:text-lg mt-2 font-bold">
                      {sc.title}
                    </CardTitle>
                    <CardDescription className="text-xs font-semibold text-foreground">
                      {sc.quality}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3.5">
                    <div className="p-3 rounded-lg bg-muted/60 border border-border">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-muted-foreground">Satış Fiyatı:</span>
                        <span className="text-2xl font-black text-foreground">
                          {sc.priceLabel}
                        </span>
                      </div>
                      <div className="mt-2 pt-2 border-t border-border/60 flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Birim Kâr:</span>
                        <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
                          +{sc.profit} TL (%{sc.margin})
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {sc.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-foreground bg-muted/30 px-2.5 py-1 rounded">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{sc.tag}</span>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-2">
                    <a
                      href={B2B_MARKETPLACE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        size="sm"
                        className={`w-full gap-1.5 text-xs font-bold py-2 h-auto ${
                          sc.recommended
                            ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-xs"
                            : ""
                        }`}
                        variant={sc.recommended ? "default" : "outline"}
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Lig Pazarında Satın Al</span>
                        <ExternalLink className="w-3 h-3 opacity-80" />
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* Quick Summary Comparison Box */}
          <div className="p-4 rounded-lg border border-border bg-card/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="space-y-0.5">
              <span className="font-bold text-foreground">
                Özet Maliyet & Kâr Dengesi:
              </span>
              <p className="text-muted-foreground text-[11px] leading-relaxed">
                Her 1 SmartBox montajı 585 TL net maliyete sahiptir. 850 TL satışta 265 TL, 950 TL
                satışta 365 TL, 1.100 TL satışta 515 TL brüt operasyonel kâr üretilir.
              </p>
            </div>
            <a
              href={B2B_MARKETPLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-full sm:w-auto"
            >
              <Button size="sm" className="w-full sm:w-auto text-xs font-bold gap-1.5 py-2">
                <span>Pazar Sipariş Formu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
