"use client";

import React from "react";
import { Target, Compass, Zap, Scale, Building2, ShieldCheck, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function AboutSection() {
  const pillars = [
    {
      icon: Zap,
      title: "Enerji Uzmanlığı",
      desc: "SmartBox'ın ana güç ünitesi olan Enerji Modülü'nde AR-GE ve seri üretim yetkinliği.",
    },
    {
      icon: Scale,
      title: "Mali Disiplin",
      desc: "1.000.000 ₺ aktif büyüklük ve 750.000 ₺ öz sermaye ile güçlü bilanço yapısı.",
    },
    {
      icon: Building2,
      title: "Entegre Tedarik Ağı",
      desc: "7 partner şirketle uyumlu B2B parça alım-satım ve zamanında teslimat disiplini.",
    },
    {
      icon: ShieldCheck,
      title: "Kalite Güvencesi",
      desc: "Tüm üretim partilerinde test edilmiş, standart endüstriyel dayanıklılık.",
    },
  ];

  return (
    <section id="hakkimizda" className="py-16 bg-muted/30 border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <Badge variant="secondary" className="px-3 py-0.5 text-xs">
            Kurumsal Profil & Strateji
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Tedarikte Güven, Üretimde Mühendislik Gücü
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            EnerjiNova A.Ş., SmartBox ekosistemine yüksek verimli Enerji Modülü sağlarken,
            8 bileşeni bir araya getirerek anahtar teslim nihai cihazlar üretir.
          </p>
        </div>

        {/* 2-Column Core Model & Mission/Vision */}
        <div className="mt-10 grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Dual Business Model */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 rounded-xl border border-border bg-card">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  İş Modeli Stratejisi
                </span>
                <Badge variant="outline" className="text-[11px]">
                  Çift Yönlü Değer
                </Badge>
              </div>

              <h3 className="text-xl font-bold text-foreground">
                Hem B2B Parça Tedarikçisi Hem Nihai Üretici
              </h3>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-foreground">
                      B2B Enerji Modülü Tedariki (Uzmanlık Ürünü)
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Ekosistemdeki diğer SmartBox üreticilerine doğrudan, seri üretim hatlarımızdan 65 TL taban fiyatlı modül arzı.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-foreground">
                      Eksiksiz SmartBox Montajı & Pazarı
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Partner ağından tedarik edilen girdilerle bütünleşik entegrasyona sahip 850 TL standart montajlı nihai satış.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-foreground">
                      Minimum 1 Adet Sipariş & Esnek Ödeme
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Peşin veya vadeli sözleşmeler ile her ölçekteki üretici ortağa eşit ve esnek erişilebilirlik.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <span>Üretim Standardı: <strong className="text-foreground">Endüstriyel Kalite Güvencesi</strong></span>
              <span>Tedarik Modeli: <strong className="text-foreground">B2B & Nihai Cihaz</strong></span>
            </div>
          </div>

          {/* Right: Mission & Vision */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Card className="flex-1 bg-card">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-primary font-semibold text-xs">
                  <Target className="w-4 h-4" />
                  <span>Misyonumuz</span>
                </div>
                <CardTitle className="text-base mt-1">
                  Sürdürülebilir Güç, Kesintisiz Üretim
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground leading-relaxed">
                SmartBox ekosisteminde güvenilir, enerji verimliliği yüksek modüller üreterek,
                çevresel sorumluluğu rekabetçi avantaja dönüştürmek ve paydaşlarımıza kesintisiz tedarik sağlamak.
              </CardContent>
            </Card>

            <Card className="flex-1 bg-card">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 text-primary font-semibold text-xs">
                  <Compass className="w-4 h-4" />
                  <span>Vizyonumuz</span>
                </div>
                <CardTitle className="text-base mt-1">
                  Geleceği Şekillendiren Ekosistem Liderliği
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-muted-foreground leading-relaxed">
                Daha az kaynakla daha fazla katma değer yaratarak, kaliteden ödün vermeden
                teknoloji ve enerji entegrasyonunda sektör standardını belirleyen öncü şirket olmak.
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-lg border border-border bg-card card-hover-effect"
              >
                <div className="w-8 h-8 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-2.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold text-foreground">
                  {pillar.title}
                </div>
                <div className="text-xs text-muted-foreground mt-1 leading-snug">
                  {pillar.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
