"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Leaf,
  SunMedium,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-slate-900 text-white">
      {/* Decorative Brand Glows (Emerald & Solar Sunburst from Logo) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-40 right-10 w-[350px] h-[350px] bg-amber-500/15 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/60 border border-emerald-400/30 text-emerald-200 text-xs font-semibold backdrop-blur-md shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>SmartBox Ekosistemi & B2B Güç Tedariki</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Geleceğin enerjisini üretirken,{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-300 bg-clip-text text-transparent">
                geleceği tüketmeyen
              </span>{" "}
              bir dünya.
            </h1>

            <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong className="text-white font-semibold">EnerjiNova A.Ş.</strong>,
              SmartBox ekosisteminin kalbi olan{" "}
              <span className="text-amber-300 font-medium">Enerji Modülü</span> alanındaki
              uzmanlığıyla SmartBox üreticilerine güvenilir B2B tedarik sunarken;
              8 bileşeni bir araya getirerek entegre SmartBox çözümleri üretir.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#hesaplayici" className="w-full sm:w-auto">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto gap-2 group font-bold bg-amber-400 text-slate-950 hover:bg-amber-500"
                >
                  <span>Sipariş & Teklif Hesapla</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>

              <a href="#urunler" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md"
                >
                  Ürün ve Fiyatları İncele
                </Button>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-emerald-800/60 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs text-emerald-200/90">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Min. 1 Adet Sipariş</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-200/90">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Peşin & Vadeli Seçeneği</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-200/90 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                <span>Standart Endüstriyel Kalite</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glass Card Container */}
              <div className="rounded-3xl border border-emerald-500/30 bg-slate-900/80 backdrop-blur-xl p-6 shadow-2xl shadow-emerald-950/80 text-slate-100">
                {/* Header of card with logo mark */}
                <div className="flex items-center justify-between border-b border-emerald-800/50 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-9 w-28">
                      <Image
                        src="/logo.png"
                        alt="EnerjiNova"
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-[11px] font-bold bg-amber-400/20 text-amber-300 border-amber-400/30">
                    Resmi B2B Katalog
                  </Badge>
                </div>

                {/* Interactive Product Highlight Cards */}
                <div className="mt-5 space-y-3.5">
                  {/* Enerji Modülü Card */}
                  <div className="relative p-4 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-emerald-900/60 border border-emerald-500/40 hover:border-emerald-400 transition-all duration-200 group">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                          <Cpu className="w-5 h-5 text-emerald-300" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-white text-base">
                              Enerji Modülü
                            </h4>
                            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-400/20 text-emerald-300">
                              Uzmanlık Ürünü
                            </span>
                          </div>
                          <p className="text-xs text-emerald-200/80 mt-0.5">
                            SmartBox üreticileri için doğrudan B2B tedarik
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-black text-amber-300">
                          65 TL
                        </div>
                        <div className="text-[10px] text-emerald-300/70">
                          / adet
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SmartBox Card */}
                  <div className="relative p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-emerald-950/70 border border-emerald-600/30 hover:border-amber-400/60 transition-all duration-200 group">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30">
                          <Layers className="w-5 h-5 text-amber-300" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-white text-base">
                              SmartBox
                            </h4>
                            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-amber-400/20 text-amber-300">
                              Nihai Ürün
                            </span>
                          </div>
                          <p className="text-xs text-slate-300/80 mt-0.5">
                            8 temel bileşenin entegre montajıyla bütünleşik çözüm
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-black text-emerald-300">
                          850 TL
                        </div>
                        <div className="text-[10px] text-slate-400">
                          / adet
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Features */}
                <div className="mt-5 pt-4 border-t border-emerald-800/40 grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-emerald-200/80">
                    <Leaf className="w-4 h-4 text-emerald-400" />
                    <span>Düşük Karbon Ayak İzi</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-200/80">
                    <SunMedium className="w-4 h-4 text-amber-400" />
                    <span>Solar & Hibrit Uyum</span>
                  </div>
                </div>

                <div className="mt-4">
                  <a href="#hesaplayici">
                    <Button
                      variant="default"
                      className="w-full text-xs font-semibold py-2.5 justify-center"
                    >
                      Canlı Teklif Simülatörünü Aç
                    </Button>
                  </a>
                </div>
              </div>

              {/* Floating Trust Pill */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white text-slate-900 shadow-xl border border-slate-200 animate-float-slow">
                <div className="p-1.5 rounded-xl bg-emerald-100 text-emerald-700">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-slate-900">
                    Ders Simülasyonu Uyumlu
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Sözleşme ve tur onaylarına hazır
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
