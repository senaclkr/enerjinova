"use client";

import React from "react";
import Image from "next/image";
import { Target, Compass, Zap, Scale, Building2, ShieldCheck } from "lucide-react";
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
      title: "Enerji Modülü Uzmanlığı",
      desc: "SmartBox'ın kalbi sayılan Enerji Modülü'nün AR-GE ve üretim süreçlerini uçtan uca yönetiyoruz.",
    },
    {
      icon: Scale,
      title: "Finansal Denge & Şeffaflık",
      desc: "Büyümeyi sadece ciro olarak değil, istikrarlı maliyet yönetimi ve sürdürülebilir kârlılık olarak kurguluyoruz.",
    },
    {
      icon: Building2,
      title: "Güçlü B2B Tedarik Ağı",
      desc: "Ekosistemdeki diğer SmartBox üreticilerine kesintisiz, planlı ve güvenilir modül tedariği sağlıyoruz.",
    },
    {
      icon: ShieldCheck,
      title: "Uzun Vadeli Değer",
      desc: "Çevreye duyarlı teknolojiler ve etik iş ortaklığı prensipleriyle geleceğe kalıcı değerler bırakıyoruz.",
    },
  ];

  return (
    <section id="hakkimizda" className="py-20 bg-muted/30 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="secondary" className="px-3 py-1 text-xs">
            Kurumsal Kimlik & Değerler
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Enerjinin Gücünü, Teknolojinin Geleceğiyle Birleştiriyoruz
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            EnerjiNova A.Ş., SmartBox ekosisteminin temel bileşenlerinden biri olan
            Enerji Modülü alanında uzmanlaşmış yenilikçi bir teknoloji şirketidir.
          </p>
        </div>

        {/* Story Grid */}
        <div className="mt-14 grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Tedarik Zincirinde Güven, SmartBox Pazarında Liderlik
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Enerji Modülü üretimindeki uzmanlığımızla SmartBox üreticilerine{" "}
              <strong className="text-foreground">B2B tedarik</strong> sağlarken,
              diğer bileşenleri de bir araya getirerek kendi SmartBox ürünlerimizi
              üretiyoruz. Böylece hem tedarik zincirinin vazgeçilmez bir parçası
              olmayı hem de SmartBox pazarında söz sahibi olmayı hedefliyoruz.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              EnerjiNova olarak büyümeyi tek başına bir hedef olarak görmüyor;{" "}
              <strong className="text-foreground font-semibold">
                güvenilirlik, finansal denge ve çevreye duyarlı bir yaklaşım
              </strong>{" "}
              ile paydaşlarımız için uzun vadeli değer oluşturmayı önemsiyoruz.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <Card>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-sm font-semibold">
                    Çift Yönlü Değer Modeli
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
                  Hem B2B modül tedarikçisi hem de nihai SmartBox üreticisi.
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-sm font-semibold">
                    Standart Kalite Garantisi
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-xs text-muted-foreground">
                  Her üretim turunda test edilmiş, tutarlı ve standart parça kalitesi.
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <Card className="border-primary/20 bg-background">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <Target className="w-4 h-4" />
                  <span>Misyonumuz</span>
                </div>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                &quot;Geleceğin enerjisini üretirken, geleceği tüketmeyen
                bir dünya inşa etmek. Sürdürülebilir üretimi yüksek
                erişilebilirlikle buluşturarak SmartBox ekosisteminde geniş
                kitlelere ulaşan, çevresel sorumluluğu rekabet gücüne
                dönüştüren ve sektörün geleceğine yön veren öncü bir
                teknoloji şirketi olmak.&quot;
              </CardContent>
            </Card>

            <Card className="border-border bg-background">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <Compass className="w-4 h-4" />
                  <span>Vizyonumuz</span>
                </div>
              </CardHeader>
              <CardContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                &quot;Daha az kaynakla daha fazla değer, daha fazla
                üretimle daha temiz bir gelecek. Kaliteli, güvenilir ve
                erişilebilir SmartBox çözümleri sunarak her satışta
                sürdürülebilir büyümeyi, her üründe daha yaşanabilir bir
                geleceği hedefliyoruz.&quot;
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Card key={idx} className="bg-background">
                <CardHeader className="p-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-2">
                    <Icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-base font-semibold">
                    {pillar.title}
                  </CardTitle>
                  <CardDescription className="text-xs mt-1">
                    {pillar.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
