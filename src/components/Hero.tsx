"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Cpu, Layers } from "lucide-react";
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

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="secondary" className="px-3 py-1 text-xs">
                SmartBox Ekosistemi & B2B Güç Tedariki
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Geleceğin enerjisini üretirken,{" "}
              <span className="text-primary">geleceği tüketmeyen</span> bir dünya.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <strong className="text-foreground">EnerjiNova A.Ş.</strong>,
              SmartBox ekosisteminin kalbi olan Enerji Modülü alanındaki
              uzmanlığıyla SmartBox üreticilerine güvenilir B2B tedarik sunarken;
              8 bileşeni bir araya getirerek entegre SmartBox çözümleri üretir.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a href="#fiyat-listesi" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  <span>Fiyat ve Koşullar</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>

              <a href="#iletisim" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  İletişime Geç
                </Button>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-border max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Min. 1 Adet Sipariş</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Peşin & Vadeli Seçeneği</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Standart Endüstriyel Kalite</span>
              </div>
            </div>
          </div>

          {/* Right: Pure shadcn Card */}
          <div className="lg:col-span-5">
            <Card className="shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="relative h-10 w-32">
                    <Image
                      src="/logo.png"
                      alt="EnerjiNova Logo"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <Badge variant="outline">Resmi B2B Katalog</Badge>
                </div>
                <CardTitle className="text-xl mt-3">
                  Ürün Portföyü Özeti
                </CardTitle>
                <CardDescription>
                  Ders simülasyonu kapsamında onaylı fiyat ve tedarik koşulları
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Enerji Modülü Row */}
                <div className="p-4 rounded-lg border border-border bg-muted/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">
                        Enerji Modülü
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Uzmanlık Ürünü (B2B Tedarik)
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-foreground">
                      65 TL
                    </div>
                    <div className="text-[11px] text-muted-foreground">/ adet</div>
                  </div>
                </div>

                {/* SmartBox Row */}
                <div className="p-4 rounded-lg border border-border bg-muted/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">
                        SmartBox
                      </div>
                      <div className="text-xs text-muted-foreground">
                        8 Bileşenli Nihai Ürün
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-foreground">
                      850 TL
                    </div>
                    <div className="text-[11px] text-muted-foreground">/ adet</div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-2 flex flex-col gap-2">
                <a href="#fiyat-listesi" className="w-full">
                  <Button variant="default" className="w-full">
                    Fiyat Listesini İncele
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
