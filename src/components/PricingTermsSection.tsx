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
      title: "Minimum Sipariş",
      detail: "1 adet",
      explanation:
        "Hem SmartBox hem de Enerji Modülü için minimum sipariş sınırı 1 adettir. Ekiplerin bütçelerine göre esnek alım yapılabilir.",
      icon: Layers,
    },
    {
      title: "Ödeme Koşulları",
      detail: "Peşin veya Vadeli",
      explanation:
        "Peşin veya vadeli ödeme seçenekleri, sipariş miktarı ve iş birliği koşullarına göre karşılıklı mutabakatla değerlendirilir.",
      icon: Coins,
    },
    {
      title: "Teslimat Protokolü",
      detail: "Sözleşmede Belirtilen Turda",
      explanation:
        "Onaylanan sözleşmede belirtilen teslim turunda eksiksiz gerçekleştirilir; gecikmesiz operasyon hedeflenir.",
      icon: Clock,
    },
    {
      title: "Kalite Standardı",
      detail: "Standart Kalite",
      explanation:
        "Tüm modül ve bileşenlerimiz standart kalite güvencesiyle test edilerek sevk edilir.",
      icon: ShieldCheck,
    },
    {
      title: "Fiyatlandırma Esnekliği",
      detail: "Müzakereye Açık",
      explanation:
        "Sipariş koşullarına göre görüşülebilir; piyasa koşulları ve süreç içerisindeki gelişmelere bağlı olarak fiyatlar güncellenebilir.",
      icon: FileCheck,
    },
    {
      title: "Sipariş Onay Süreci",
      detail: "Yetkili Onayı & Sözleşme",
      explanation:
        "Yetkili kurullar ve çift taraflı sözleşme imza süreçleri tamamlandıktan sonra kesinleşir.",
      icon: AlertTriangle,
    },
  ];

  return (
    <section id="fiyat-listesi" className="py-20 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="secondary" className="px-3 py-1 text-xs">
            Resmi Tarife & Ticari Şartlar
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Fiyat Listesi ve Şeffaf Satış Koşulları
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            EnerjiNova A.Ş. ile gerçekleştirilecek tüm B2B tedarik ve ürün satışlarında geçerli
            olan resmi birim fiyatlar ve sözleşme prensipleri.
          </p>
        </div>

        {/* Pure shadcn Table */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card>
            <CardHeader className="border-b border-border">
              <CardTitle className="text-lg">Resmi Ürün Fiyat Tablosu</CardTitle>
              <CardDescription>
                Tüm fiyatlar Türk Lirası (TL) cinsindendir. Minimum sipariş miktarı 1 adettir.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[45%]">Ürün / Hizmet</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Minimum Sipariş</TableHead>
                    <TableHead className="text-right">Birim Fiyat</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold text-foreground">
                      <div>SmartBox</div>
                      <div className="text-xs text-muted-foreground font-normal">
                        8 bileşenli nihai teknoloji ürünü
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">Nihai Ürün</Badge>
                    </TableCell>
                    <TableCell>1 Adet</TableCell>
                    <TableCell className="text-right font-bold text-foreground text-base">
                      850 TL
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold text-foreground">
                      <div>Enerji Modülü</div>
                      <div className="text-xs text-muted-foreground font-normal">
                        SmartBox üreticilerine doğrudan B2B tedarik
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="default">Uzmanlık Ürünü</Badge>
                    </TableCell>
                    <TableCell>1 Adet</TableCell>
                    <TableCell className="text-right font-bold text-primary text-base">
                      65 TL
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* 6 Terms Grid */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-foreground">
              Sözleşme ve Tedarik Koşulları
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Kurumsal satın alma protokolü ve ticari ilkelerimiz
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {terms.map((item, idx) => {
              const TermIcon = item.icon;
              return (
                <Card key={idx} className="bg-card">
                  <CardHeader className="p-5">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <TermIcon className="w-4 h-4" />
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {item.title}
                      </span>
                    </div>
                    <CardTitle className="text-base font-bold text-foreground">
                      {item.detail}
                    </CardTitle>
                    <CardDescription className="text-xs leading-relaxed mt-2">
                      {item.explanation}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
