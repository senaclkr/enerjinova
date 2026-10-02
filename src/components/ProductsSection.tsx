"use client";

import React, { useState } from "react";
import {
  Cpu,
  PackageCheck,
  Truck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Zap,
  Activity,
  Layers,
  Clock,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

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
      accentColor: "border-emerald-500/40 bg-emerald-50/50",
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
      accentColor: "border-amber-500/40 bg-amber-50/40",
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
      accentColor: "border-teal-500/40 bg-teal-50/40",
      badgeText: "Stratejik Ortaklık",
      badgeVariant: "outline" as const,
      description:
        "Enerji Modülü ihtiyacı bulunan SmartBox üreticilerine güvenilir ve sürdürülebilir B2B tedarik hizmeti sunuyor, iş ortaklarımızın üretim süreçlerine destek oluyoruz.",
      features: [
        "Simülasyon turlarına göre planlanan sevkiyat",
        "Ders yürütücüsü ve taraf onaylı resmi sözleşme",
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
    <section id="urunler" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="secondary" className="px-3.5 py-1 text-xs">
            Ürün ve Hizmet Portföyümüz
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            SmartBox & Enerji Modülü Çözümleri
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Kendi Enerji Modülümüzü üreterek SmartBox üreticilerine B2B tedarik sağlıyor,
            sekiz temel bileşeni birleştirerek pazara güçlü SmartBox ürünleri sunuyoruz.
          </p>

          {/* Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "all"
                  ? "bg-emerald-800 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Tüm Ürün & Hizmetler (3)
            </button>
            <button
              onClick={() => setActiveTab("module")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "module"
                  ? "bg-emerald-800 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Enerji Modülü (65 TL)
            </button>
            <button
              onClick={() => setActiveTab("smartbox")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "smartbox"
                  ? "bg-emerald-800 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              SmartBox (850 TL)
            </button>
            <button
              onClick={() => setActiveTab("b2b")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "b2b"
                  ? "bg-emerald-800 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              B2B Tedarik
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className={`relative rounded-3xl border bg-white p-7 transition-all duration-300 hover:shadow-xl flex flex-col justify-between ${
                  product.highlight
                    ? "border-emerald-500 shadow-md shadow-emerald-500/10 ring-2 ring-emerald-500/20"
                    : "border-slate-200/90 shadow-sm"
                }`}
              >
                {product.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-700 text-white text-[11px] font-bold tracking-wider uppercase shadow-sm">
                    ⭐ Temel Uzmanlık Alanımız
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant={product.badgeVariant}>
                      {product.badgeText}
                    </Badge>
                  </div>

                  <div className="mt-5">
                    <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                      {product.category}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-slate-500 font-medium">
                        Birim Fiyat
                      </span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-3xl font-black text-slate-900">
                          {product.price}
                        </span>
                        <span className="text-xs font-semibold text-slate-600">
                          {product.priceUnit}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block text-[11px] font-semibold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                        Min: 1 Adet
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-sm text-slate-600 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Özellikler & Koşullar
                    </div>
                    {product.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs text-slate-600"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-4">
                  <a href="#hesaplayici">
                    <Button
                      variant={product.highlight ? "default" : "outline"}
                      className="w-full gap-2 justify-center"
                    >
                      <span>{product.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
