"use client";

import React, { useState } from "react";
import { Cpu, Layers, Truck, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "module" | "smartbox" | "b2b">("all");

  const products = [
    {
      id: "module",
      category: "Uzmanlık Girdisi • B2B Tedarik",
      name: "Enerji Modülü",
      subtitle: "G01 EnerjiNova Öz Üretimi",
      price: "65",
      priceUnit: "₺ / adet",
      icon: Cpu,
      badgeText: "Uzmanlık Ürünü",
      badgeVariant: "default" as const,
      description:
        "SmartBox'ın zorunlu 1 numaralı güç ünitesi. Diğer 7 üretici ortağa doğrudan B2B tedarik arzı.",
      features: [
        "1.200 adet/dönem seri üretim kapasitesi",
        "3.300 adetlik hazır başlangıç stok rezervi",
        "Minimum 1 adet sipariş & esnek parti hacmi",
        "Peşin veya vadeli ticari sözleşme seçeneği",
      ],
      ctaText: "Modül Tedariki Talep Et",
      highlight: true,
    },
    {
      id: "smartbox",
      category: "Bütünleşik Nihai Cihaz",
      name: "SmartBox",
      subtitle: "8 Bileşenli Akıllı Teknoloji",
      price: "850",
      priceUnit: "₺ / adet",
      icon: Layers,
      badgeText: "Nihai Ürün",
      badgeVariant: "secondary" as const,
      description:
        "8 girdi bileşeninin tam entegrasyonuyla üretilen, pazara hazır komple teknoloji çözümü.",
      features: [
        "8 şirketin onaylı girdileriyle montaj",
        "600 adet/dönem SmartBox montaj kapasitesi",
        "Standart kalite ve hata toleransı testi",
        "Resmi teslim turunda eksiksiz teslimat",
      ],
      ctaText: "SmartBox Siparişi Oluştur",
      highlight: false,
    },
    {
      id: "b2b",
      category: "İkili Ortaklık Protokolü",
      name: "B2B Tedarik Sözleşmesi",
      subtitle: "Stratejik Parça Değişimi",
      price: "50–75",
      priceUnit: "₺ / adet bandı",
      icon: Truck,
      badgeText: "Sözleşmeli Tedarik",
      badgeVariant: "outline" as const,
      description:
        "G02-G08 ortaklarıyla karşılıklı parça alışverişi ve kesintisiz hammadde akışı anlaşmaları.",
      features: [
        "İki taraflı onay ve resmi teslim garantisi",
        "Acil tedarik (90 ₺) maliyet riskini önleme",
        "Gecikme cezası ve kalite protokolü koruması",
        "Karşılıklı alacak/borç mahsuplaşma imkanı",
      ],
      ctaText: "B2B Görüşmesi Başlat",
      highlight: false,
    },
  ];

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.id === activeTab);

  return (
    <section id="urunler" className="py-16 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <Badge variant="secondary" className="px-3 py-0.5 text-xs">
            Ürün & Hizmet Portföyü
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Enerji Modülü & Entegre SmartBox Çözümleri
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Kendi uzmanlık bileşenimizi B2B pazarında arz ederken, 8 girdiyi birleştirerek
            yüksek performanslı SmartBox nihai cihazları üretiyoruz.
          </p>

          {/* Filter Buttons */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
            <Button
              variant={activeTab === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("all")}
            >
              Tümü (3)
            </Button>
            <Button
              variant={activeTab === "module" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("module")}
            >
              Enerji Modülü (65 ₺)
            </Button>
            <Button
              variant={activeTab === "smartbox" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("smartbox")}
            >
              SmartBox (850 ₺)
            </Button>
            <Button
              variant={activeTab === "b2b" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("b2b")}
            >
              B2B Tedarik Ağı
            </Button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.id}
                className={`flex flex-col justify-between card-hover-effect ${
                  product.highlight ? "border-primary shadow-xs" : ""
                }`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant={product.badgeVariant} className="text-xs">
                      {product.badgeText}
                    </Badge>
                  </div>

                  <div className="pt-2">
                    <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                      {product.category}
                    </div>
                    <CardTitle className="text-lg mt-0.5">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-xs">{product.subtitle}</CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3.5">
                  <div className="p-3 rounded-lg border border-border bg-muted/30 flex items-baseline justify-between">
                    <div>
                      <span className="text-[11px] text-muted-foreground">
                        Birim Fiyat
                      </span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-xl font-bold text-foreground">
                          {product.price}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {product.priceUnit}
                        </span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-[10px]">
                      Min: 1 Adet
                    </Badge>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-border">
                    <div className="text-[11px] font-semibold text-foreground uppercase tracking-wider">
                      Temel Özellikler
                    </div>
                    {product.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-2">
                  <a href="#iletisim" className="w-full">
                    <Button
                      variant={product.highlight ? "default" : "outline"}
                      size="sm"
                      className="w-full gap-2 justify-center"
                    >
                      <span>{product.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
