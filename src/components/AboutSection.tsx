"use client";

import React from "react";
import Image from "next/image";
import {
  Target,
  Compass,
  CheckCircle,
  Building2,
  TrendingUp,
  Scale,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export function AboutSection() {
  const pillars = [
    {
      icon: Zap,
      title: "Enerji Modülü Uzmanlığı",
      desc: "SmartBox'ın kalbi sayılan Enerji Modülü'nün AR-GE ve üretim süreçlerini uçtan uca yönetiyoruz.",
      color: "text-emerald-700 bg-emerald-50 border-emerald-200",
    },
    {
      icon: Scale,
      title: "Finansal Denge & Şeffaflık",
      desc: "Büyümeyi sadece ciro olarak değil, istikrarlı maliyet yönetimi ve sürdürülebilir kârlılık olarak kurguluyoruz.",
      color: "text-amber-700 bg-amber-50 border-amber-200",
    },
    {
      icon: Building2,
      title: "Güçlü B2B Tedarik Ağı",
      desc: "Ekosistemdeki diğer SmartBox üreticilerine kesintisiz, planlı ve güvenilir modül tedariği sağlıyoruz.",
      color: "text-teal-700 bg-teal-50 border-teal-200",
    },
    {
      icon: ShieldCheck,
      title: "Uzun Vadeli Değer",
      desc: "Çevreye duyarlı teknolojiler ve etik iş ortaklığı prensipleriyle geleceğe kalıcı değerler bırakıyoruz.",
      color: "text-emerald-800 bg-emerald-100/70 border-emerald-300",
    },
  ];

  return (
    <section id="hakkimizda" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 -mr-20 w-96 h-96 bg-emerald-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 w-96 h-96 bg-amber-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="secondary" className="px-3.5 py-1 text-xs">
            Kurumsal Kimlik & Değerler
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Enerjinin Gücünü, Teknolojinin Geleceğiyle Birleştiriyoruz
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            EnerjiNova A.Ş., SmartBox ekosisteminin temel bileşenlerinden biri olan
            Enerji Modülü alanında uzmanlaşmış yenilikçi bir teknoloji şirketidir.
          </p>
        </div>

        {/* Corporate Story & Logo Context */}
        <div className="mt-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">
              Tedarik Zincirinde Güven, SmartBox Pazarında Liderlik
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Enerji Modülü üretimindeki uzmanlığımızla SmartBox üreticilerine{" "}
              <strong className="text-slate-900">B2B tedarik</strong> sağlarken,
              diğer bileşenleri de bir araya getirerek kendi SmartBox ürünlerimizi
              üretiyoruz. Böylece hem tedarik zincirinin vazgeçilmez bir parçası
              olmayı hem de SmartBox pazarında söz sahibi olmayı hedefliyoruz.
            </p>
            <p className="text-slate-600 leading-relaxed">
              EnerjiNova olarak büyümeyi tek başına bir hedef olarak görmüyor;{" "}
              <strong className="text-emerald-800 font-semibold">
                güvenilirlik, finansal denge ve çevreye duyarlı bir yaklaşım
              </strong>{" "}
              ile paydaşlarımız için uzun vadeli değer oluşturmayı önemsiyoruz.
            </p>

            <div className="pt-2 grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/70">
                <div className="text-sm font-bold text-slate-900">
                  Çift Yönlü Değer Modeli
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Hem B2B modül tedarikçisi hem de nihai SmartBox üreticisi
                </div>
              </div>
              <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/70">
                <div className="text-sm font-bold text-slate-900">
                  Standart Kalite Garantisi
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Her üretim turunda test edilmiş, tutarlı ve standart parça kalitesi
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 text-white shadow-2xl border border-emerald-500/20 overflow-hidden">
              {/* Logo decorative watermark */}
              <div className="absolute -right-10 -bottom-10 w-64 h-64 opacity-10 pointer-events-none">
                <Image
                  src="/logo.png"
                  alt="EnerjiNova Watermark"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-32 relative">
                    <Image
                      src="/logo.png"
                      alt="EnerjiNova Logo"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <span className="text-xs font-semibold text-emerald-300 border-l border-emerald-700 pl-3">
                    Stratejik Yol Haritası
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-2.5 text-amber-300 font-bold text-sm">
                      <Target className="w-4 h-4" />
                      <span>Misyonumuz</span>
                    </div>
                    <p className="text-xs sm:text-sm text-emerald-100/90 mt-2 leading-relaxed">
                      &quot;Geleceğin enerjisini üretirken, geleceği tüketmeyen
                      bir dünya inşa etmek. Sürdürülebilir üretimi yüksek
                      erişilebilirlikle buluşturarak SmartBox ekosisteminde geniş
                      kitlelere ulaşan, çevresel sorumluluğu rekabet gücüne
                      dönüştüren ve sektörün geleceğine yön veren öncü bir
                      teknoloji şirketi olmak.&quot;
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-2.5 text-teal-300 font-bold text-sm">
                      <Compass className="w-4 h-4" />
                      <span>Vizyonumuz</span>
                    </div>
                    <p className="text-xs sm:text-sm text-emerald-100/90 mt-2 leading-relaxed">
                      &quot;Daha az kaynakla daha fazla değer, daha fazla
                      üretimle daha temiz bir gelecek. Kaliteli, güvenilir ve
                      erişilebilir SmartBox çözümleri sunarak her satışta
                      sürdürülebilir büyümeyi, her üründe daha yaşanabilir bir
                      geleceği hedefliyoruz.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border ${pillar.color} mb-4 transition-transform group-hover:scale-105`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
