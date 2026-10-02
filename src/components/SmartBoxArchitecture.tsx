"use client";

import React, { useState } from "react";
import {
  Cpu,
  Layers,
  Zap,
  Activity,
  Radio,
  Shield,
  Thermometer,
  Box,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export function SmartBoxArchitecture() {
  const [selectedComponent, setSelectedComponent] = useState(0);

  const components = [
    {
      id: 1,
      name: "Enerji Modülü",
      tag: "EnerjiNova Uzmanlık Ürünü",
      isNovaCore: true,
      price: "65 TL",
      icon: Zap,
      desc: "SmartBox'ın çalışmasını sağlayan yüksek verimli güç ve enerji depolama ünitesidir. EnerjiNova tarafından üretilir ve harici üreticilere B2B tedarik edilir.",
      status: "EnerjiNova Kendi Üretimi (B2B Tedarik Edilebilir)",
    },
    {
      id: 2,
      name: "Ana İşlemci & Mantık Ünitesi",
      tag: "Bileşen #2",
      isNovaCore: false,
      price: "Entegre",
      icon: Cpu,
      desc: "Sistemin hesaplama, algoritma yürütme ve veri koordinasyonunu sağlayan merkezi işlem birimidir.",
      status: "SmartBox İçin Entegre Edilen Bileşen",
    },
    {
      id: 3,
      name: "Akıllı Sensör Dizisi",
      tag: "Bileşen #3",
      isNovaCore: false,
      price: "Entegre",
      icon: Activity,
      desc: "Gerilim, akım, sıcaklık ve çevresel verileri milisaniyelik hassasiyetle ölçen algılama grubu.",
      status: "SmartBox İçin Entegre Edilen Bileşen",
    },
    {
      id: 4,
      name: "İletişim & Telemetri Modülü",
      tag: "Bileşen #4",
      isNovaCore: false,
      price: "Entegre",
      icon: Radio,
      desc: "SmartBox'ın merkezi telemetri ve bulut yönetim sistemlerine veri aktarımını sağlayan arayüz.",
      status: "SmartBox İçin Entegre Edilen Bileşen",
    },
    {
      id: 5,
      name: "Voltaj Regülatörü & Dönüştürücü",
      tag: "Bileşen #5",
      isNovaCore: false,
      price: "Entegre",
      icon: Layers,
      desc: "Enerji Modülü'nden gelen gücü optimize edip bileşenlerin gereksinim duyduğu voltaj seviyelerine dönüştürür.",
      status: "SmartBox İçin Entegre Edilen Bileşen",
    },
    {
      id: 6,
      name: "Termal Yönetim & Pasif Soğutma",
      tag: "Bileşen #6",
      isNovaCore: false,
      price: "Entegre",
      icon: Thermometer,
      desc: "Yüksek yük altında çalışan modüllerin optimum sıcaklık aralığında kalmasını garanti eden blok.",
      status: "SmartBox İçin Entegre Edilen Bileşen",
    },
    {
      id: 7,
      name: "Aşırı Akım & Güvenlik Rölesi",
      tag: "Bileşen #7",
      isNovaCore: false,
      price: "Entegre",
      icon: Shield,
      desc: "Kısa devre, voltaj dalgalanması ve sistemsel arızalara karşı tam kapsamlı donanımsal koruma.",
      status: "SmartBox İçin Entegre Edilen Bileşen",
    },
    {
      id: 8,
      name: "Endüstriyel Şasi & Muhafaza",
      tag: "Bileşen #8",
      isNovaCore: false,
      price: "Entegre",
      icon: Box,
      desc: "Sekiz bileşeni güvenle barındıran, darbelere ve dış çevre koşullarına dayanıklı standart kabin.",
      status: "SmartBox İçin Entegre Edilen Bileşen",
    },
  ];

  const current = components[selectedComponent];
  const CurrentIcon = current.icon;

  return (
    <section id="mimari" className="py-20 bg-muted/20 border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="secondary" className="px-3 py-1 text-xs">
            Sekiz Bileşenli Ekosistem
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            SmartBox Nasıl Oluşur? 8 Temel Bileşen Mimarisi
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            SmartBox, 8 temel bileşenin entegre montajıyla ortaya çıkar.
            EnerjiNova olarak bu sistemin kalbi olan{" "}
            <strong className="text-foreground">Enerji Modülü</strong>&apos;nü üretiyor,
            diğer üreticilere tedarik sağlarken eksiksiz SmartBox çözümleri de sunuyoruz.
          </p>
        </div>

        {/* 8 Components Grid & Spotlight Card */}
        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
            {components.map((comp, idx) => {
              const CompIcon = comp.icon;
              const isSelected = selectedComponent === idx;
              return (
                <button
                  key={comp.id}
                  onClick={() => setSelectedComponent(idx)}
                  className={`text-left p-4 rounded-lg border transition-all cursor-pointer flex items-start gap-3 ${
                    isSelected
                      ? "border-primary bg-primary/5 ring-1 ring-primary"
                      : "border-border bg-card hover:bg-muted/50"
                  }`}
                >
                  <div
                    className={`p-2 rounded-md shrink-0 ${
                      isSelected
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <CompIcon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-semibold text-muted-foreground uppercase">
                        #{comp.id}
                      </span>
                      {comp.isNovaCore && (
                        <Badge variant="default" className="text-[9px] h-4 px-1.5">
                          EnerjiNova
                        </Badge>
                      )}
                    </div>
                    <div className="font-semibold text-sm text-foreground truncate mt-0.5">
                      {comp.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Spotlight Card */}
          <div className="lg:col-span-5">
            <Card className={current.isNovaCore ? "border-primary shadow-sm" : ""}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Bileşen #{current.id} Detayı
                  </span>
                  <Badge variant={current.isNovaCore ? "default" : "secondary"}>
                    {current.isNovaCore ? "Öz Üretim (B2B)" : "Entegre Parça"}
                  </Badge>
                </div>

                <div className="flex items-center gap-3 pt-3">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{current.name}</CardTitle>
                    <CardDescription>{current.status}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {current.desc}
                </p>

                {current.isNovaCore ? (
                  <div className="p-4 rounded-lg bg-muted/50 border border-border space-y-1">
                    <div className="flex justify-between items-center text-sm font-semibold text-foreground">
                      <span>B2B Satış Fiyatı:</span>
                      <span className="text-primary font-bold">65 TL / adet</span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Minimum 1 adet sipariş, tur bazlı teslimat
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-lg bg-muted/30 border border-border text-xs text-muted-foreground">
                    Bu bileşen, EnerjiNova Enerji Modülü ile birleştirilerek eksiksiz 850 TL&apos;lik SmartBox paketine dönüştürülür.
                  </div>
                )}
              </CardContent>

              <CardFooter className="pt-2">
                <a href="#fiyat-listesi" className="w-full">
                  <Button variant="default" className="w-full">
                    Fiyat ve Tedarik Detayı
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
