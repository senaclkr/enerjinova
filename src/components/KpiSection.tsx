"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  Wallet,
  PieChart,
  Package,
  Activity,
  Award,
  Layers,
  CheckCircle2,
  SlidersHorizontal,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

type TourKey = "Tur 3" | "Tur 2";

interface KpiItem {
  kategori: string;
  gosterge: string;
  deger: string;
  icon: React.ElementType;
  aciklama: string;
  badgeVariant: "default" | "secondary" | "outline" | "destructive";
  isNegative?: boolean;
}

interface HighlightCardItem {
  title: string;
  val: string;
  sub: string;
  icon: React.ElementType;
  kategori: string;
  isNegative?: boolean;
}

interface TourData {
  label: string;
  isCurrent: boolean;
  highlights: HighlightCardItem[];
  kpiData: KpiItem[];
  footnote: string;
}

const TOURS_DATA: Record<TourKey, TourData> = {
  "Tur 3": {
    label: "Tur 3",
    isCurrent: true,
    highlights: [
      {
        title: "Güncel Kasa",
        val: "230.886 ₺",
        sub: "Mevcut nakit rezervi",
        icon: Wallet,
        kategori: "Finans",
      },
      {
        title: "Net Kâr",
        val: "-168.251 ₺",
        sub: "Dönemsel operasyon/yatırım dengesi",
        icon: TrendingDown,
        kategori: "Finans",
        isNegative: true,
      },
      {
        title: "Kapasite Kullanımı",
        val: "%33.3",
        sub: "Revize üretim kapasitesi",
        icon: Activity,
        kategori: "Operasyon",
      },
      {
        title: "Yönetişim Puanı",
        val: "80.0 / 100",
        sub: "B2B güven endeksi (Stabil)",
        icon: Award,
        kategori: "Kurumsal",
      },
    ],
    kpiData: [
      {
        kategori: "Finans",
        gosterge: "Net Kâr",
        deger: "-168.251 ₺",
        icon: TrendingDown,
        aciklama: "Dönemsel operasyon ve yatırım maliyeti",
        badgeVariant: "destructive",
        isNegative: true,
      },
      {
        kategori: "Finans",
        gosterge: "Güncel Kasa",
        deger: "230.886 ₺",
        icon: Wallet,
        aciklama: "Likidite ve operasyonel rezerv",
        badgeVariant: "default",
      },
      {
        kategori: "Pazar",
        gosterge: "Pazar Payı",
        deger: "%0.0",
        icon: PieChart,
        aciklama: "Dönemsel pazar payı / toparlanma odağı",
        badgeVariant: "secondary",
      },
      {
        kategori: "Pazar",
        gosterge: "Satış Hacmi",
        deger: "0 Adet",
        icon: Package,
        aciklama: "Tur 3 nihai teslimat ve satış kaydı",
        badgeVariant: "secondary",
      },
      {
        kategori: "Operasyon",
        gosterge: "Kapasite Kullanımı",
        deger: "%33.3",
        icon: Activity,
        aciklama: "Revize edilmiş üretim kapasitesi",
        badgeVariant: "outline",
      },
      {
        kategori: "Kurumsal",
        gosterge: "Yönetişim Puanı",
        deger: "80.0 / 100",
        icon: Award,
        aciklama: "Yüksek yönetsel güvenilirlik (Stabil)",
        badgeVariant: "outline",
      },
      {
        kategori: "Kurumsal",
        gosterge: "Dijital Olgunluk",
        deger: "50.0 / 100",
        icon: Layers,
        aciklama: "Sürekli optimize edilen altyapı (Stabil)",
        badgeVariant: "outline",
      },
    ],
    footnote:
      "* Bu veriler Tur 3 resmî sonuç kayıtlarını temsil eder; gelecek turda toparlanma, satış ivmesi ve kârlılık stratejisi hedeflenmektedir.",
  },
  "Tur 2": {
    label: "Tur 2",
    isCurrent: false,
    highlights: [
      {
        title: "Güncel Kasa",
        val: "483.008 ₺",
        sub: "Güçlü likidite rezervi",
        icon: Wallet,
        kategori: "Finans",
      },
      {
        title: "Net Kâr",
        val: "48.162 ₺",
        sub: "Sürdürülebilir büyüme",
        icon: TrendingUp,
        kategori: "Finans",
      },
      {
        title: "Kapasite Kullanımı",
        val: "%50.2",
        sub: "3 kat artış potansiyeli",
        icon: Activity,
        kategori: "Operasyon",
      },
      {
        title: "Yönetişim Puanı",
        val: "80.0 / 100",
        sub: "B2B güven endeksi",
        icon: Award,
        kategori: "Kurumsal",
      },
    ],
    kpiData: [
      {
        kategori: "Finans",
        gosterge: "Net Kâr",
        deger: "48.162 ₺",
        icon: TrendingUp,
        aciklama: "Pozitif kârlılık dengesi",
        badgeVariant: "default",
      },
      {
        kategori: "Finans",
        gosterge: "Güncel Kasa",
        deger: "483.008 ₺",
        icon: Wallet,
        aciklama: "Likidite ve yatırım gücü",
        badgeVariant: "default",
      },
      {
        kategori: "Pazar",
        gosterge: "Pazar Payı",
        deger: "%6.8",
        icon: PieChart,
        aciklama: "B2B modül arzı ile artış trendinde",
        badgeVariant: "secondary",
      },
      {
        kategori: "Pazar",
        gosterge: "Satış Hacmi",
        deger: "150 Adet",
        icon: Package,
        aciklama: "SmartBox nihai cihaz satışı",
        badgeVariant: "secondary",
      },
      {
        kategori: "Operasyon",
        gosterge: "Kapasite Kullanımı",
        deger: "%50.2",
        icon: Activity,
        aciklama: "Üretim ölçekleme için esnek alan",
        badgeVariant: "outline",
      },
      {
        kategori: "Kurumsal",
        gosterge: "Yönetişim Puanı",
        deger: "80.0 / 100",
        icon: Award,
        aciklama: "Yüksek yönetsel güvenilirlik",
        badgeVariant: "outline",
      },
      {
        kategori: "Kurumsal",
        gosterge: "Dijital Olgunluk",
        deger: "50.0 / 100",
        icon: Layers,
        aciklama: "Sürekli optimize edilen altyapı",
        badgeVariant: "outline",
      },
    ],
    footnote:
      "* Bu veriler bir sonraki turda (Tur 3) hedeflenen 3 kat üretim ve dengeli stok yönetim planının temelini teşkil eder.",
  },
};

export function KpiSection() {
  const [selectedTour, setSelectedTour] = useState<TourKey>("Tur 3");
  const activeTourData = TOURS_DATA[selectedTour];

  return (
    <section id="kpi" className="py-16 bg-muted/20 border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <Badge variant="secondary" className="px-3 py-0.5 text-xs font-medium">
            Resmî Simülasyon Verileri • {selectedTour}
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Performans Göstergeleri (KPI Paneli)
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            EnerjiNova A.Ş.&apos;nin finansal yapısını, operasyonel kapasitesini ve pazar
            durumunu gösteren güncel resmî göstergeler.
          </p>
        </div>

        {/* 4 Minimal Metric Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-4xl mx-auto">
          {activeTourData.highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-lg border border-border bg-card card-hover-effect flex flex-col justify-between transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                    {item.kategori}
                  </span>
                  <div
                    className={`p-1.5 rounded-md ${
                      item.isNegative
                        ? "bg-destructive/10 text-destructive"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-2">
                  <div
                    className={`text-xl sm:text-2xl font-black tracking-tight ${
                      item.isNegative ? "text-destructive" : "text-foreground"
                    }`}
                  >
                    {item.val}
                  </div>
                  <div className="text-xs font-semibold text-foreground mt-0.5">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official KPI Table */}
        <div className="mt-8 max-w-3xl mx-auto">
          <Card className="border-border shadow-xs">
            <CardHeader className="py-4 border-b border-border">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <CardTitle className="text-base flex items-center gap-2">
                    <span>Kurumsal KPI ve Sonuç Tablosu</span>
                    <Badge variant="outline" className="text-[10px] font-normal">
                      {selectedTour} Resmî Kayıt
                    </Badge>
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Simülasyon finans ve sonuçlar modülünden aktarılan temel göstergeler
                  </CardDescription>
                </div>

                {/* Tour Selector Combobox */}
                <div className="flex items-center gap-2.5 self-start sm:self-auto">
                  <div className="flex items-center gap-1.5 bg-muted/60 px-2.5 py-1 rounded-md border border-border shadow-2xs">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-primary shrink-0" />
                    <label
                      htmlFor="tour-combobox"
                      className="text-[11px] font-semibold text-foreground whitespace-nowrap cursor-pointer"
                    >
                      Tur Seçimi:
                    </label>
                    <select
                      id="tour-combobox"
                      aria-label="Simülasyon Turu Seçimi"
                      value={selectedTour}
                      onChange={(e) => setSelectedTour(e.target.value as TourKey)}
                      className="h-7 text-xs font-bold rounded bg-background px-2 text-foreground border border-input shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary cursor-pointer"
                    >
                      <option value="Tur 3">Tur 3 (Güncel Değerler)</option>
                      <option value="Tur 2">Tur 2 (Önceki Kayıtlar)</option>
                    </select>
                  </div>

                  <div className="hidden md:flex items-center gap-1 text-[11px] text-primary font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Onaylı</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[28%]">Kategori</TableHead>
                    <TableHead className="w-[36%]">Gösterge (KPI)</TableHead>
                    <TableHead className="w-[36%] text-right">
                      Güncel Değer ({selectedTour})
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeTourData.kpiData.map((row, idx) => {
                    const Icon = row.icon;
                    return (
                      <TableRow key={idx} className="transition-colors">
                        <TableCell className="font-medium text-foreground">
                          <div className="flex items-center gap-2">
                            <span
                              className={`p-1 rounded-md ${
                                row.isNegative
                                  ? "bg-destructive/10 text-destructive"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              <Icon className="w-3.5 h-3.5" />
                            </span>
                            <span className="text-xs">{row.kategori}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-semibold text-xs sm:text-sm text-foreground">
                            {row.gosterge}
                          </div>
                          <div className="text-[11px] text-muted-foreground font-normal hidden sm:block">
                            {row.aciklama}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <span
                            className={`font-bold text-xs sm:text-sm px-2.5 py-1 rounded-md border inline-block ${
                              row.isNegative
                                ? "text-destructive bg-destructive/10 border-destructive/20"
                                : "text-foreground bg-muted/60 border-border/50"
                            }`}
                          >
                            {row.deger}
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Footnote note */}
          <div className="mt-3 text-center">
            <p className="text-[11px] text-muted-foreground">
              {activeTourData.footnote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
