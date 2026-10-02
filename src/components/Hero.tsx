"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function Hero() {
  return (
    <section className="relative pt-10 pb-12 md:pt-14 md:pb-16 border-b border-border bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left: Text & Actions */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2">
              <Badge variant="secondary" className="px-2.5 py-0.5 text-xs font-medium">
                Kurumsal Enerji Teknolojileri
              </Badge>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-snug">
              Geleceğin enerjisini üretirken,{" "}
              <span className="text-primary">geleceği tüketmeyen</span> bir dünya inşa ediyoruz.
            </h1>

            <p className="text-sm text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              <strong className="text-foreground">EnerjiNova A.Ş.</strong>,
              SmartBox ekosisteminin kalbi olan Enerji Modülü üretimindeki uzmanlığı
              ve B2B tedarik gücüyle, çevreye duyarlı ve yüksek verimli teknoloji çözümleri sunar.
            </p>

            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a href="#urunler" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto gap-2">
                  <span>Ürün ve Hizmetler</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>

              <a href="#hakkimizda" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto">
                  Hakkımızda
                </Button>
              </a>
            </div>

            {/* Quick Corporate Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-border max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>B2B Modül Tedariki</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>SmartBox Entegrasyonu</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Endüstriyel Standart</span>
              </div>
            </div>
          </div>

          {/* Right: Clean Corporate Overview Card */}
          <div className="lg:col-span-5 animate-fade-in">
            <Card className="card-hover-effect">
              <CardHeader className="pb-3">
                <div className="relative h-9 w-32 mb-1">
                  <Image
                    src="/logo.png"
                    alt="EnerjiNova A.Ş."
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <CardTitle className="text-base font-semibold">
                  Kurumsal Genel Bakış
                </CardTitle>
                <CardDescription className="text-xs">
                  Sürdürülebilir enerji ve akıllı donanım ekosistemi
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3 pt-0">
                <div className="p-3 rounded-lg border border-border bg-muted/30 space-y-1">
                  <div className="text-xs font-semibold text-foreground">
                    Faaliyet Alanı
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    SmartBox ekosistemine yönelik Enerji Modülü üretimi ve bütünleşik sistem entegrasyonu.
                  </div>
                </div>

                <div className="p-3 rounded-lg border border-border bg-muted/30 space-y-1">
                  <div className="text-xs font-semibold text-foreground">
                    B2B İş Modeli
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    Üretici ortaklara doğrudan modül tedariki ve sürdürülebilir parça altyapısı.
                  </div>
                </div>

                <div className="p-3 rounded-lg border border-border bg-muted/30 space-y-1">
                  <div className="text-xs font-semibold text-foreground">
                    Temel İlkeler
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    Finansal denge, güvenilirlik ve çevreye duyarlı uzun vadeli değer üretimi.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
