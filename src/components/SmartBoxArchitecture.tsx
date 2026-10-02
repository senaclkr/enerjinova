"use client";

import React, { useState } from "react";
import {
  Zap,
  Cpu,
  Activity,
  Box,
  Code2,
  Truck,
  BarChart,
  ShieldCheck,
  CheckCircle2,
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
      code: "G01",
      name: "Enerji Modülü",
      provider: "EnerjiNova A.Ş. (Öz Üretim)",
      isNovaCore: true,
      price: "65 ₺ / adet",
      icon: Zap,
      summary: "SmartBox'ın ana güç kaynağı ve voltaj regülasyonunu sağlayan çekirdek enerji ünitesi.",
      status: "EnerjiNova Tarafından Üretilir (B2B Satışa Açık)",
      req: "1 Adet / SmartBox",
      details: [
        "1.200 adet/dönem üretim kapasitesi",
        "3.300 adetlik güçlü başlangıç rezerv stoku",
        "Minimum 1 adet sipariş ve vadeli ödeme opsiyonu",
      ],
    },
    {
      id: 2,
      code: "G02",
      name: "İşlemci Modülü",
      provider: "MikroCore Teknoloji A.Ş.",
      isNovaCore: false,
      price: "B2B Pazar Fiyatı",
      icon: Cpu,
      summary: "Algoritmik hesaplama, veri işleme ve sensör koordinasyonunu yürüten ana işlemci bloğu.",
      status: "Tedarik Zincirinden Entegre Edilir",
      req: "1 Adet / SmartBox",
      details: [
        "Yüksek işlem hızı ve düşük güç tüketimi",
        "G01 Enerji Modülü ile tam sinyal uyumu",
        "50–75 ₺ ikili sözleşme aralığı",
      ],
    },
    {
      id: 3,
      code: "G03",
      name: "Sensör Kiti",
      provider: "SensoTek A.Ş.",
      isNovaCore: false,
      price: "B2B Pazar Fiyatı",
      icon: Activity,
      summary: "Isı, voltaj, akım ve çevresel parametreleri milisaniyelik hassasiyetle ölçen duyarlı sensör grubu.",
      status: "Tedarik Zincirinden Entegre Edilir",
      req: "1 Adet / SmartBox",
      details: [
        "Standart kalite ve hata toleransı güvencesi",
        "Geri çağırma riskini önleyen sertifikalı kalibrasyon",
        "Sürekli telemetri veri beslemesi",
      ],
    },
    {
      id: 4,
      code: "G04",
      name: "Kasa ve Ambalaj",
      provider: "FormAmbalaj A.Ş.",
      isNovaCore: false,
      price: "B2B Pazar Fiyatı",
      icon: Box,
      summary: "Dış darbelere karşı koruma sağlayan, ESG uyumlu dayanıklı endüstriyel gövde ve ambalaj.",
      status: "Tedarik Zincirinden Entegre Edilir",
      req: "1 Adet / SmartBox",
      details: [
        "Hafif ve darbelere mukavim dış şasi",
        "Sürdürülebilir ve geri dönüştürülebilir malzeme",
        "IP koruma sınıfına uygun sızdırmazlık",
      ],
    },
    {
      id: 5,
      code: "G05",
      name: "Yazılım Lisansı",
      provider: "BulutOS Yazılım A.Ş.",
      isNovaCore: false,
      price: "B2B Pazar Fiyatı",
      icon: Code2,
      summary: "Sistem bileşenlerini yöneten, bulut bağlantısı ve uzaktan izleme sağlayan gömülü işletim yazılımı.",
      status: "Tedarik Zincirinden Entegre Edilir",
      req: "1 Adet / SmartBox",
      details: [
        "Siber güvenlik ve KVKK uyumlu şifreleme",
        "OTA güncelleme desteği ve düşük bellek tüketimi",
        "Adet bazlı lisans doğrulama protokolü",
      ],
    },
    {
      id: 6,
      code: "G06",
      name: "Lojistik Tokenı",
      provider: "HızlıRota Lojistik A.Ş.",
      isNovaCore: false,
      price: "B2B Pazar Fiyatı",
      icon: Truck,
      summary: "Ürünün teslim turunda zamanında ve hasarsız sevkiyatını garanti altına alan lojistik hakkı.",
      status: "Tedarik Zincirinden Entegre Edilir",
      req: "1 Adet / SmartBox",
      details: [
        "Gecikme cezalarını önleyen öncelikli sevkiyat",
        "Soğuk zincir ve hassas elektronik taşıma standardı",
        "Rotasyonel depo ve dağıtım güvencesi",
      ],
    },
    {
      id: 7,
      code: "G07",
      name: "Müşteri Analitiği Lisansı",
      provider: "VeriPusula Analitik A.Ş.",
      isNovaCore: false,
      price: "B2B Pazar Fiyatı",
      icon: BarChart,
      summary: "Kullanım verilerini analiz eden, enerji tasarruf optimizasyonu sunan telemetri lisansı.",
      status: "Tedarik Zincirinden Entegre Edilir",
      req: "1 Adet / SmartBox",
      details: [
        "Kullanıcı davranış ve tüketim eğilim analitiği",
        "Öngörücü bakım ve erken uyarı raporlaması",
        "Etik veri saklama ve rıza protokollerine uyum",
      ],
    },
    {
      id: 8,
      code: "G08",
      name: "Garanti Hizmet Paketi",
      provider: "GüvencePlus Hizmetleri A.Ş.",
      isNovaCore: false,
      price: "B2B Pazar Fiyatı",
      icon: ShieldCheck,
      summary: "Olası donanımsal arıza ve parça değişimlerini teminat altına alan resmi satış sonrası garanti paketi.",
      status: "Tedarik Zincirinden Entegre Edilir",
      req: "1 Adet / SmartBox",
      details: [
        "Geri çağırma ve parça hatası riskine karşı tam koruma",
        "Müşteri memnuniyetini garanti eden servis ağı",
        "Şeffaf sözleşme ve tazminat güvencesi",
      ],
    },
  ];

  const current = components[selectedComponent];
  const CurrentIcon = current.icon;

  return (
    <section id="mimari" className="py-16 bg-muted/20 border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <Badge variant="secondary" className="px-3 py-0.5 text-xs">
            8 Bileşenli Entegre Ekosistem
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            SmartBox Ürün Reçetesi & Bileşen Ağı
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Her SmartBox, 8 zorunlu bileşenin montajıyla üretilir.
            EnerjiNova olarak bu zincirin 1 numaralı uzmanlık girdisi olan{" "}
            <strong className="text-foreground">Enerji Modülü</strong>&apos;nü üretiyoruz.
          </p>
        </div>

        {/* 8 Components Grid & Spotlight Card */}
        <div className="mt-10 grid lg:grid-cols-12 gap-6 items-start">
          {/* Left Grid (8 Components) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-2.5">
            {components.map((comp, idx) => {
              const CompIcon = comp.icon;
              const isSelected = selectedComponent === idx;
              return (
                <button
                  key={comp.id}
                  onClick={() => setSelectedComponent(idx)}
                  className={`text-left p-3 rounded-lg border transition-all cursor-pointer flex items-center gap-3 ${
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
                      <Badge variant="outline" className="text-[10px] h-4 px-1 font-mono">
                        {comp.code}
                      </Badge>
                      {comp.isNovaCore && (
                        <Badge variant="default" className="text-[9px] h-4 px-1.5">
                          Bizim Üretimimiz
                        </Badge>
                      )}
                    </div>
                    <div className="font-semibold text-xs text-foreground truncate mt-0.5">
                      {comp.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Spotlight Card */}
          <div className="lg:col-span-5">
            <Card className={current.isNovaCore ? "border-primary shadow-xs" : ""}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Badge variant="outline" className="font-mono text-xs">
                      {current.code}
                    </Badge>
                    <span className="text-xs font-semibold text-muted-foreground">
                      Bileşen #{current.id}
                    </span>
                  </div>
                  <Badge variant={current.isNovaCore ? "default" : "secondary"} className="text-xs">
                    {current.isNovaCore ? "Öz Üretim (B2B Satış)" : "Tedarik Girdisi"}
                  </Badge>
                </div>

                <div className="flex items-center gap-3 pt-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <CurrentIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{current.name}</CardTitle>
                    <CardDescription className="text-xs font-medium text-foreground">
                      {current.provider}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-3.5">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {current.summary}
                </p>

                <div className="space-y-1.5 pt-1">
                  {current.details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-lg bg-muted/40 border border-border flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Reçete İhtiyacı:</span>
                  <span className="font-bold text-foreground">{current.req}</span>
                </div>
              </CardContent>

              <CardFooter className="pt-2">
                <a href="#fiyat-listesi" className="w-full">
                  <Button variant="default" size="sm" className="w-full">
                    {current.isNovaCore ? "Enerji Modülü Fiyat & Şartları" : "Tüm Fiyat Listesi"}
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
