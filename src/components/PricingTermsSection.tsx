"use client";

import React from "react";
import {
  FileCheck,
  Coins,
  Clock,
  ShieldCheck,
  Layers,
  AlertTriangle,
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

export function PricingTermsSection() {
  const terms = [
    {
      title: "Asgari Sipariş",
      detail: "1 Adet",
      explanation: "Tüm ürün ve modüllerde minimum kota 1 adettir; küçük bütçeli alımlara uygundur.",
      icon: Layers,
    },
    {
      title: "Ödeme Opsiyonu",
      detail: "Peşin / Vadeli",
      explanation: "Peşin ödemede anlık kasa/stok intikali; vadeli işlemde vade turunda takas uygulanır.",
      icon: Coins,
    },
    {
      title: "Teslimat Turu",
      detail: "Sözleşmeli Turda",
      explanation: "Sözleşmede onaylanan teslim turunda eksiksiz teslim; gecikmesiz operasyon güvencesi.",
      icon: Clock,
    },
    {
      title: "Kalite Güvencesi",
      detail: "Standart Kalite",
      explanation: "Her parti test edilmiş endüstriyel standartta sevk edilir; geri çağırma riski minimize edilir.",
      icon: ShieldCheck,
    },
    {
      title: "B2B Fiyat Bandı",
      detail: "50 – 75 ₺ / Adet",
      explanation: "Enerji Modülü için serbest pazar bandı 50–75 ₺; 4. tur taban referans fiyatı 65 ₺'dir.",
      icon: FileCheck,
    },
    {
      title: "Onay Protokolü",
      detail: "Çift Taraflı İmza",
      explanation: "Alıcı ve satıcı onayından sonra teslim turunda resmiyet kazanır ve stoklara işlenir.",
      icon: AlertTriangle,
    },
  ];

  return (
    <section id="fiyat-listesi" className="py-16 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <Badge variant="secondary" className="px-3 py-0.5 text-xs">
            Resmi Tarife & Ticari Protokol
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Fiyat Listesi ve Tedarik Standartları
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            EnerjiNova A.Ş. ile gerçekleştirilen B2B ve tüketici işlemlerinde geçerli
            şeffaf birim fiyatlar ve resmi sözleşme ilkeleri.
          </p>
        </div>

        {/* Pure shadcn Table */}
        <div className="mt-10 max-w-3xl mx-auto">
          <Card className="border-border shadow-xs">
            <CardHeader className="py-4 border-b border-border">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-base">Resmi Ürün & Bileşen Tarifesi</CardTitle>
                  <CardDescription className="text-xs">
                    Tüm tutarlar Türk Lirası (₺) cinsindendir.
                  </CardDescription>
                </div>
                <Badge variant="outline" className="text-xs">
                  Para Birimi: TL (₺)
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[45%]">Ürün / Kalem</TableHead>
                    <TableHead>İşlem Türü</TableHead>
                    <TableHead>Minimum Kota</TableHead>
                    <TableHead className="text-right">Birim Fiyat</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold text-foreground">
                      <div>SmartBox (Nihai Cihaz)</div>
                      <div className="text-[11px] text-muted-foreground font-normal">
                        8 bileşenin anahtar teslim montajı
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">Satış</Badge>
                    </TableCell>
                    <TableCell className="text-xs">1 Adet</TableCell>
                    <TableCell className="text-right font-bold text-foreground text-sm sm:text-base">
                      850 ₺
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold text-foreground">
                      <div>Enerji Modülü (Öz Üretim)</div>
                      <div className="text-[11px] text-muted-foreground font-normal">
                        SmartBox üreticilerine doğrudan B2B tedarik
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="default" className="text-xs">B2B Arz</Badge>
                    </TableCell>
                    <TableCell className="text-xs">1 Adet</TableCell>
                    <TableCell className="text-right font-bold text-primary text-sm sm:text-base">
                      65 ₺
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-foreground">
                      <div className="font-medium text-muted-foreground">Acil Dış Tedarik (Referans)</div>
                      <div className="text-[11px] text-muted-foreground font-normal">
                        B2B anlaşma sağlanamaması durumundaki tavan maliyet
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs text-destructive border-destructive/30">
                        Kriz Alımı
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs">1 Adet</TableCell>
                    <TableCell className="text-right font-bold text-muted-foreground text-sm">
                      90 ₺
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* 6 Terms Grid */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-foreground">
              6 Temel Sözleşme İlkesi
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              B2B ve ticari operasyonlarda uygulanan bağlayıcı şartlar
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {terms.map((item, idx) => {
              const TermIcon = item.icon;
              return (
                <div key={idx} className="p-4 rounded-lg border border-border bg-card card-hover-effect">
                  <div className="flex items-center gap-2 text-primary mb-1.5">
                    <TermIcon className="w-4 h-4" />
                    <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                      {item.title}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-foreground">
                    {item.detail}
                  </div>
                  <div className="text-xs text-muted-foreground leading-snug mt-1.5">
                    {item.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
