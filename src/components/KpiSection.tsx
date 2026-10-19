"use client";

import React from "react";
import {
  Zap,
  Layers,
  Package,
  ShoppingBag,
  Award,
  ShieldAlert,
  Info,
  CheckCircle2,
  ExternalLink,
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

export function KpiSection() {
  const kpiList = [
    {
      kategori: "Üretim",
      gosterge: "Bu tur uzmanlık üretimi",
      deger: "2621 Adet",
      rawValue: "2621",
      icon: Zap,
      aciklama: "G01 Enerji Modülü haftalık uzmanlık üretim hacmi",
      badgeVariant: "default" as const,
      highlight: true,
    },
    {
      kategori: "Montaj",
      gosterge: "Bu tur SmartBox montajı",
      deger: "350 Adet",
      rawValue: "350",
      icon: Layers,
      aciklama: "Tamamlanan bütünleşik SmartBox montaj miktarı",
      badgeVariant: "secondary" as const,
      highlight: true,
    },
    {
      kategori: "Stok",
      gosterge: "Hazır SmartBox",
      deger: "0 Adet",
      rawValue: "0",
      icon: Package,
      aciklama: "Depoda sevke hazır nihai SmartBox adedi",
      badgeVariant: "outline" as const,
      highlight: false,
    },
    {
      kategori: "Satış",
      gosterge: "Son kapanan tur satışı",
      deger: "0 Adet",
      rawValue: "0",
      icon: ShoppingBag,
      aciklama: "Son kapanan simülasyon turunda gerçekleşen satış",
      badgeVariant: "outline" as const,
      highlight: false,
    },
    {
      kategori: "Memnuniyet",
      gosterge: "Müşteri memnuniyeti /100",
      deger: "82 / 100",
      rawValue: "82",
      icon: Award,
      aciklama: "Lig ekosistemi müşteri memnuniyet ve kalite skoru",
      badgeVariant: "default" as const,
      highlight: true,
    },
  ];

  return (
    <section id="kpi" className="py-16 bg-muted/20 border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <Badge variant="secondary" className="px-3 py-0.5 text-xs font-semibold">
            Şirketinize Özel • Performans Takibi
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            KPI Paneli · Şirketinize Özel
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            KPI, anahtar performans göstergesidir. Haftalık raporunuzda üretimi,
            montajı, satışları ve müşteri memnuniyetini bu göstergelerle izleyin.
          </p>
        </div>

        {/* 5 KPI Metric Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {kpiList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-lg border border-border bg-card card-hover-effect flex flex-col justify-between transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    {item.kategori}
                  </span>
                  <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3">
                  <div className="text-2xl font-black text-foreground tracking-tight">
                    {item.rawValue}
                  </div>
                  <div className="text-xs font-semibold text-foreground mt-0.5">
                    {item.gosterge}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-1 line-clamp-2 leading-snug">
                    {item.aciklama}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* KPI Details Table */}
        <div className="mt-8 max-w-3xl mx-auto">
          <Card className="border-border shadow-xs">
            <CardHeader className="py-4 border-b border-border">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <CardTitle className="text-base flex items-center gap-2">
                    <span>Haftalık Operasyonel KPI Tablosu</span>
                    <Badge variant="outline" className="text-[10px] font-normal">
                      Aktif Rapor
                    </Badge>
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Üretim, montaj, pazar satışları ve memnuniyet endeksleri
                  </CardDescription>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Onaylı Veriler</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[28%]">Kategori</TableHead>
                    <TableHead className="w-[42%]">Gösterge (KPI)</TableHead>
                    <TableHead className="w-[30%] text-right">Rapor Değeri</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {kpiList.map((row, idx) => {
                    const Icon = row.icon;
                    return (
                      <TableRow key={idx} className="transition-colors">
                        <TableCell className="font-medium text-foreground">
                          <div className="flex items-center gap-2">
                            <span className="p-1 rounded-md bg-muted text-muted-foreground">
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
                          <span className="font-bold text-xs sm:text-sm px-2.5 py-1 rounded-md border text-foreground bg-muted/60 border-border/50 inline-block">
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

          {/* Privacy & Confidentiality Notice Box */}
          <div className="mt-4 p-3.5 rounded-lg border border-amber-500/30 bg-amber-500/5 text-foreground flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <div className="text-xs space-y-0.5">
              <p className="font-semibold text-amber-600 dark:text-amber-400">
                Güvenlik ve Veri Politikası
              </p>
              <p className="text-muted-foreground text-[11px] leading-relaxed">
                Şirketin kasa, borç, personel ve iç performans bilgilerini herkese açık web
                sayfanıza eklemeyin. Katalog yalnız satış ilanlarından beslenir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
