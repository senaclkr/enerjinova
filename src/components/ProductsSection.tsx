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
      category: "Bileşen & B2B Uzmanlığı",
      name: "Enerji Modülü",
      subtitle: "EnerjiNova Uzmanlık Ürünü",
      price: "65",
      priceUnit: "TL / adet",
      icon: Cpu,
      badgeText: "Uzmanlık Ürünü",
      badgeVariant: "default" as const,
      description:
        "EnerjiNova'nın uzmanlık ürünü olan Enerji Modülü, SmartBox'ın temel bileşenlerinden biridir. Kendi üretimimizle hem SmartBox üretimimizi destekliyor hem de diğer üreticilerin ihtiyaçlarına yönelik B2B tedarik sağlıyoruz.",
      features: [
        "SmartBox ekosisteminin en kritik güç kaynağı",
        "Yüksek enerji verimliliği ve standart kalite garantisi",
        "Minimum sipariş: 1 adet (esnek alım imkanı)",
        "B2B üreticilerine doğrudan ve planlı tedarik",
        "Vadeli veya peşin ödeme değerlendirmesi",
      ],
      ctaText: "Enerji Modülü Siparişi Ver",
      highlight: true,
    },
    {
      id: "smartbox",
      category: "Bütünleşik Nihai Teknoloji",
      name: "SmartBox",
      subtitle: "Entegre Akıllı Enerji Çözümü",
      price: "850",
      priceUnit: "TL / adet",
      icon: Layers,
      badgeText: "Nihai Ürün",
      badgeVariant: "secondary" as const,
      description:
        "Sekiz temel bileşenin bir araya getirilmesiyle oluşturulan SmartBox, EnerjiNova'nın tamamlanmış ürünüdür. Kendi ürettiğimiz Enerji Modülü'nü diğer bileşenlerle birleştirerek bütünleşik bir teknoloji ürünü sunuyoruz.",
      features: [
        "8 temel bileşenin kusursuz entegrasyonu",
        "EnerjiNova modülüyle maksimum güç optimizasyonu",
        "Tak-çalıştır standart endüstriyel kalite",
        "Doğrudan kullanıma veya dağıtıma hazır",
        "Sözleşmede belirlenen teslim turunda teslimat",
      ],
      ctaText: "SmartBox Siparişi Ver",
      highlight: false,
    },
    {
      id: "b2b",
      category: "Kurumsal İş Birliği & Tedarik",
      name: "B2B Tedarik Hizmeti",
      subtitle: "Üretici Ortaklık Programı",
      price: "Özel",
      priceUnit: "Koşullu Fiyatlandırma",
      icon: Truck,
      badgeText: "Stratejik Ortaklık",
      badgeVariant: "outline" as const,
      description:
        "Enerji Modülü ihtiyacı bulunan SmartBox üreticilerine güvenilir ve sürdürülebilir B2B tedarik hizmeti sunuyor, iş ortaklarımızın üretim süreçlerine destek oluyoruz.",
      features: [
        "Üretim takvimine göre planlanan zamanında sevkiyat",
        "Yetkili kurumsal satın alma ve teslim sözleşmesi",
        "Piyasa koşullarına göre esnek görüşme imkanı",
        "Toplu alımlarda vadeli ödeme değerlendirmesi",
        "Sürdürülebilir tedarik güvencesi",
      ],
      ctaText: "B2B Tedarik Görüşmesi Başlat",
      highlight: false,
    },
  ];

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((p) => p.id === activeTab);

  return (
    <section id="urunler" className="py-20 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="secondary" className="px-3 py-1 text-xs">
            Ürün ve Hizmet Portföyümüz
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            SmartBox & Enerji Modülü Çözümleri
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Kendi Enerji Modülümüzü üreterek SmartBox üreticilerine B2B tedarik sağlıyor,
            sekiz temel bileşeni birleştirerek pazara güçlü SmartBox ürünleri sunuyoruz.
          </p>

          {/* Filter Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <Button
              variant={activeTab === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("all")}
            >
              Tüm Ürün & Hizmetler (3)
            </Button>
            <Button
              variant={activeTab === "module" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("module")}
            >
              Enerji Modülü (65 TL)
            </Button>
            <Button
              variant={activeTab === "smartbox" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("smartbox")}
            >
              SmartBox (850 TL)
            </Button>
            <Button
              variant={activeTab === "b2b" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("b2b")}
            >
              B2B Tedarik
            </Button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const Icon = product.icon;
            const CardComponent = (
              <Card
                className={`flex flex-col justify-between h-full ${
                  product.highlight
                    ? "snake-border-inner border-0"
                    : "card-hover-effect"
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant={product.badgeVariant}>
                      {product.badgeText}
                    </Badge>
                  </div>

                  <div className="pt-3">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {product.category}
                    </div>
                    <CardTitle className="text-xl mt-1">
                      {product.name}
                    </CardTitle>
                    <CardDescription>{product.subtitle}</CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="p-3.5 rounded-lg border border-border bg-muted/30 flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">
                        Birim Fiyat
                      </span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-2xl font-bold text-foreground">
                          {product.price}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {product.priceUnit}
                        </span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-[11px]">
                      Min: 1 Adet
                    </Badge>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-border">
                    <div className="text-xs font-semibold text-foreground">
                      Özellikler:
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
                      className="w-full gap-2 justify-center"
                    >
                      <span>{product.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            );

            return product.highlight ? (
              <div key={product.id} className="snake-border-box card-hover-effect flex flex-col">
                {CardComponent}
              </div>
            ) : (
              <div key={product.id} className="flex flex-col">
                {CardComponent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
