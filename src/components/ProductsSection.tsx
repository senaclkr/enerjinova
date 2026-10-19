"use client";

import React, { useState } from "react";
import {
  Cpu,
  Layers,
  Truck,
  ArrowRight,
  CheckCircle2,
  ShoppingBag,
  ExternalLink,
  Sparkles,
  Info,
} from "lucide-react";
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

const B2B_MARKETPLACE_URL =
  "https://dijital-sirketler-ligi-serhat-ata.ataserhat54.chatgpt.site/ogrenci?marketCompany=G01";

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
        "SmartBox'ın zorunlu 1 numaralı güç ünitesi. Diğer üretici ortaklara lig pazarından doğrudan B2B satış arzı.",
      features: [
        "Yalnız satışa açılan stok miktarınca katalogda görünür",
        "Lig pazarında peşin / vadeli ödeme seçeneği",
        "Minimum 1 adet sipariş ve esnek parti hacmi",
        "Pazarlık ve doğrudan mesaj kanalı",
      ],
      ctaText: "Pazarda Sipariş Ver",
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
        "Pazar bölümünden satış ilanı oluşturulur",
        "Yalnız satışa açılan miktar katalogda listelenir",
        "8 şirketin onaylı girdileriyle standart montaj",
        "Yetkili müdür onayı ile satın alma işlemi",
      ],
      ctaText: "SmartBox İlanına Git",
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
        "Karşılıklı sözleşmeli parça takası ve mahsuplaşma imkanı",
      ],
      ctaText: "Lig Pazarında Görüş",
      highlight: false,
    },
  ];

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.id === activeTab);

  return (
    <section id="urunler" className="py-14 sm:py-16 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <Badge variant="secondary" className="px-3 py-0.5 text-xs font-semibold">
            Pazar İlanları & Katalog
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Ürün Kataloğu
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed px-1">
            Ürün ve SmartBox satış ilanını Pazar bölümünden oluşturun; yalnız satışa açtığınız miktar
            katalogda görünür. Katalog yalnız satış ilanlarından beslenir.
          </p>

          {/* Filter Buttons */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <Button
              variant={activeTab === "all" ? "default" : "outline"}
              size="sm"
              className="text-xs h-8 px-2.5 sm:px-3"
              onClick={() => setActiveTab("all")}
            >
              Tümü (3)
            </Button>
            <Button
              variant={activeTab === "module" ? "default" : "outline"}
              size="sm"
              className="text-xs h-8 px-2.5 sm:px-3"
              onClick={() => setActiveTab("module")}
            >
              Enerji Modülü (65 ₺)
            </Button>
            <Button
              variant={activeTab === "smartbox" ? "default" : "outline"}
              size="sm"
              className="text-xs h-8 px-2.5 sm:px-3"
              onClick={() => setActiveTab("smartbox")}
            >
              SmartBox (850 ₺)
            </Button>
            <Button
              variant={activeTab === "b2b" ? "default" : "outline"}
              size="sm"
              className="text-xs h-8 px-2.5 sm:px-3"
              onClick={() => setActiveTab("b2b")}
            >
              B2B Tedarik Ağı
            </Button>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mt-6 max-w-2xl mx-auto p-3 rounded-lg border border-primary/20 bg-primary/5 flex items-center justify-center gap-2 text-xs text-center text-foreground">
          <Info className="w-4 h-4 text-primary shrink-0" />
          <span>
            <strong>Katalog Kuralı:</strong> Katalog yalnız satış ilanlarından beslenir. Satın alma işlemleri lig pazarındaki resmi formdan yürütülür.
          </span>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map((product) => {
            const Icon = product.icon;
            return (
              <Card
                key={product.id}
                className={`flex flex-col justify-between card-hover-effect ${
                  product.highlight ? "border-primary shadow-xs ring-1 ring-primary/20" : ""
                }`}
              >
                <CardHeader className="pb-3 px-4 sm:px-6">
                  <div className="flex items-start justify-between gap-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
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
                    <CardTitle className="text-lg sm:text-xl font-bold mt-0.5">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-xs mt-0.5 text-muted-foreground">
                      {product.subtitle}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 px-4 sm:px-6">
                  <div className="p-3 rounded-lg bg-muted/50 border border-border/60">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                        {product.price}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        {product.priceUnit}
                      </span>
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-0.5 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-primary shrink-0" />
                      <span>Lig Pazarı Taban Referans Fiyatı</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-2 border-t border-border/60 pt-3">
                    <div className="text-[11px] font-semibold text-foreground uppercase tracking-wider">
                      Özellikler & Sipariş Şartları
                    </div>
                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                      {product.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="leading-tight text-[11px] sm:text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="pt-2 pb-5 sm:pb-6 px-4 sm:px-6 flex flex-col gap-2">
                  <a
                    href={B2B_MARKETPLACE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      size="sm"
                      className={`w-full gap-2 text-xs font-semibold py-2 h-auto ${
                        product.highlight
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-xs"
                          : ""
                      }`}
                      variant={product.highlight ? "default" : "outline"}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{product.ctaText}</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </Button>
                  </a>
                  <a
                    href="#siparis"
                    className="text-[11px] text-muted-foreground hover:text-primary transition-colors text-center inline-block"
                  >
                    Sipariş şartları ve detayları gör →
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
