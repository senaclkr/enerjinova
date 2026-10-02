"use client";

import React, { useState } from "react";
import {
  Zap,
  Cpu,
  Activity,
  Box,
  Code2,
  Truck,
  BarChart3,
  ShieldCheck,
  Factory,
  Layers,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Sparkles,
  ExternalLink,
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
  const [activeTab, setActiveTab] = useState<"device" | "flow">("device");
  const [selectedComponentId, setSelectedComponentId] = useState<number>(1);

  // 8 zorunlu bileşen (PDF G01-G08 ekosistemi kurumsal dille)
  const components = [
    {
      id: 1,
      name: "Enerji Modülü",
      producer: "EnerjiNova A.Ş. (Öz Üretim)",
      isNovaCore: true,
      role: "Sistemin Kalbi & Güç Kaynağı",
      price: "65 TL",
      b2bAvailable: true,
      icon: Zap,
      summary:
        "SmartBox'ın çalışmasını sağlayan yüksek verimli güç depolama ve voltaj regülasyon ünitesi.",
      details:
        "EnerjiNova üretim tesisinde geliştirilen bu modül; stabil akım, optimize edilmiş güç tüketimi ve aşırı yük koruması sağlar. SmartBox'ın diğer 7 bileşenine kesintisiz enerji dağıtımı yapar. Şirketimiz bu modülü aynı zamanda ekosistemdeki diğer kurumsal üreticilere B2B olarak tedarik eder.",
      specs: [
        { label: "Birim Satış Fiyatı", value: "65 TL / adet" },
        { label: "Üretim Yetkinliği", value: "EnerjiNova Öz Üretimi" },
        { label: "Sistemdeki Adet", value: "1 Adet / SmartBox" },
        { label: "B2B Dağıtım", value: "Aktif Siparişe Açık" },
      ],
    },
    {
      id: 2,
      name: "İşlemci Modülü",
      producer: "MikroCore Teknoloji",
      isNovaCore: false,
      role: "Merkezi Hesaplama & Mantık",
      price: "Entegre Girdi",
      b2bAvailable: false,
      icon: Cpu,
      summary:
        "Tüm veri işleme ve algoritma kontrolünü yürüten yüksek hızlı mikrokontrolör ünitesi.",
      details:
        "Sensörlerden gelen verileri milisaniyeler içinde işler, telemetri paketleri hazırlar ve Enerji Modülü'nden aldığı dengeli güç ile 7/24 kesintisiz çalışır.",
      specs: [
        { label: "Tedarik Tipi", value: "B2B Entegrasyon Girdisi" },
        { label: "İşlev", value: "Sistem Mantığı & İşleme" },
        { label: "Enerji İhtiyacı", value: "Enerji Modülü Beslemeli" },
      ],
    },
    {
      id: 3,
      name: "Sensör Kiti",
      producer: "SensoTek A.Ş.",
      isNovaCore: false,
      role: "Çevresel Algılama & Ölçüm",
      price: "Entegre Girdi",
      b2bAvailable: false,
      icon: Activity,
      summary:
        "Gerilim, sıcaklık ve harici ortam parametrelerini ölçen hassas algılama grubu.",
      details:
        "Enerji tüketim metriklerini, hat gerilimlerini ve donanım sıcaklığını izleyerek verileri işlemci modülüne aktarır.",
      specs: [
        { label: "Tedarik Tipi", value: "B2B Entegrasyon Girdisi" },
        { label: "Hassasiyet", value: "Endüstriyel Sınıf Ölçüm" },
        { label: "Konum", value: "Dahili Sensör Veri Yolu" },
      ],
    },
    {
      id: 4,
      name: "Kasa ve Ambalaj",
      producer: "FormAmbalaj A.Ş.",
      isNovaCore: false,
      role: "Fiziksel Muhafaza & Koruma",
      price: "Entegre Girdi",
      b2bAvailable: false,
      icon: Box,
      summary:
        "Tüm bileşenleri dış etkenlerden koruyan dayanıklı şasi ve nakliye ambalajı.",
      details:
        "Elektromanyetik izolasyon, darbe mukavemeti ve soğutma kanalları sunan kompakt modüler gövde.",
      specs: [
        { label: "Tedarik Tipi", value: "B2B Entegrasyon Girdisi" },
        { label: "Standart", value: "Endüstriyel Dayanıklı Kasa" },
        { label: "Kapasite", value: "8 Bileşen Yuvalı" },
      ],
    },
    {
      id: 5,
      name: "Yazılım Lisansı",
      producer: "BulutOS Yazılım A.Ş.",
      isNovaCore: false,
      role: "Gömülü İşletim & Bulut Entegrasyonu",
      price: "Entegre Girdi",
      b2bAvailable: false,
      icon: Code2,
      summary:
        "Cihazın güvenli iletişimini ve uzaktan yönetimini sağlayan lisanslı firmware.",
      details:
        "Gerçek zamanlı telemetri akışı, uzaktan konfigürasyon ve veri şifreleme protokollerini kapsar.",
      specs: [
        { label: "Tedarik Tipi", value: "Yazılım Lisans Girdisi" },
        { label: "Protokol", value: "Şifreli IoT Telemetri" },
        { label: "Sürüm", value: "Enterprise Gömülü OS" },
      ],
    },
    {
      id: 6,
      name: "Lojistik Ağı",
      producer: "HızlıRota Lojistik A.Ş.",
      isNovaCore: false,
      role: "Güvenli Dağıtım & Teslimat",
      price: "Entegre Girdi",
      b2bAvailable: false,
      icon: Truck,
      summary:
        "Bileşen tedarik zincirini ve nihai ürün sevkiyatını güvenceye alan lojistik protokolü.",
      details:
        "Bileşenlerin montaj hattına eksiksiz ulaşmasını ve tamamlanan SmartBox cihazlarının B2B/B2C alıcılara zamanında teslimini garanti eder.",
      specs: [
        { label: "Tedarik Tipi", value: "Lojistik Hizmet Girdisi" },
        { label: "Kapsam", value: "Zamanında Sevkiyat & Dağıtım" },
        { label: "Durum", value: "Planlı Sevkiyat" },
      ],
    },
    {
      id: 7,
      name: "Müşteri Analitiği",
      producer: "VeriPusula Analitik A.Ş.",
      isNovaCore: false,
      role: "Kullanım & Verimlilik Analitiği",
      price: "Entegre Girdi",
      b2bAvailable: false,
      icon: BarChart3,
      summary:
        "Cihazın enerji tüketim ve operasyonel verilerini raporlayan analitik altyapısı.",
      details:
        "Kullanıcıya tüketim tasarrufu, kestirimci bakım sinyalleri ve performans raporları sunar.",
      specs: [
        { label: "Tedarik Tipi", value: "Analitik Lisans Girdisi" },
        { label: "Kullanım", value: "Verimlilik Optimizasyonu" },
        { label: "Raporlama", value: "Gerçek Zamanlı Metrikler" },
      ],
    },
    {
      id: 8,
      name: "Garanti & Hizmet Paketi",
      producer: "GüvencePlus Hizmetleri A.Ş.",
      isNovaCore: false,
      role: "Saha Desteği & Donanım Güvencesi",
      price: "Entegre Girdi",
      b2bAvailable: false,
      icon: ShieldCheck,
      summary:
        "Nihai SmartBox kullanıcısına kesintisiz servis ve teknik güvence sunan paket.",
      details:
        "Arıza durumunda hızlı modül değişimi, teknik destek ve sistem güvence garantisini kapsar.",
      specs: [
        { label: "Tedarik Tipi", value: "Hizmet & Destek Paketi" },
        { label: "Kapsam", value: "Tam Cihaz Garantisi" },
        { label: "Servis", value: "Kurumsal B2B Destek" },
      ],
    },
  ];

  // Mini sade üretim akışı adımları
  const workflowSteps = [
    {
      step: "01",
      title: "Enerji Modülü İmalatı",
      badge: "EnerjiNova Öz Üretimi",
      isNova: true,
      icon: Factory,
      description:
        "Uzmanlık alanımız olan yüksek verimli Enerji Modülü, tesisimizde kalite kontrol standartlarıyla üretilir.",
      highlight: "Temel güç kaynağı olarak tüm sisteme hayat verir.",
      b2bNote: "Aynı zamanda B2B pazarında diğer şirketlere 65 TL'den arz edilir.",
    },
    {
      step: "02",
      title: "7 Tamamlayıcı Bileşenin Tedariği",
      badge: "B2B Ekosistem",
      isNova: false,
      icon: RefreshCw,
      description:
        "Eksiksiz bir SmartBox oluşturmak için gereken işlemci, sensör, kasa ve yazılım gibi 7 bileşen ortak ağdan temin edilir.",
      highlight: "8 zorunlu bileşenin tamamı hazır edilmeden montaj başlamaz.",
      b2bNote: "Karşılıklı sözleşmeler ve kalite kontrolleri ile temin edilir.",
    },
    {
      step: "03",
      title: "SmartBox Entegrasyonu & Montaj",
      badge: "Teknoloji Montajı",
      isNova: false,
      icon: Layers,
      description:
        "Enerji Modülümüz merkeze alınarak tüm donanım ve yazılım katmanları tek gövdede birleştirilir.",
      highlight: "8 bileşenin sinerjisiyle anahtar teslim cihaz ortaya çıkar.",
      b2bNote: "Kapsamlı fonksiyon ve güvenlik testleri uygulanır.",
    },
    {
      step: "04",
      title: "Çift Kanallı Pazar Çıkışı",
      badge: "Dağıtım & Satış",
      isNova: true,
      icon: CheckCircle2,
      description:
        "Üretilen Enerji Modülleri B2B tedarik ağında; anahtar teslim SmartBox cihazları ise kurumsal nihai pazarda satışa sunulur.",
      highlight: "Hem bileşen tedarikçisi hem de nihai çözüm üreticisi rolü.",
      b2bNote: "SmartBox: 850 TL | Enerji Modülü: 65 TL",
    },
  ];

  const selectedComp =
    components.find((c) => c.id === selectedComponentId) || components[0];
  const SelectedIcon = selectedComp.icon;

  return (
    <section id="mimari" className="py-16 sm:py-20 bg-muted/20 border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="secondary" className="px-3 py-1 text-xs font-semibold">
            B2B Üretim & Entegrasyon Modeli
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            SmartBox Nasıl Oluşur?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            SmartBox, 8 temel bileşenin bütünleşik entegrasyonuyla çalışır. Sistemin kalbi olan{" "}
            <strong className="text-foreground font-semibold">Enerji Modülü</strong>&apos;nü{" "}
            <span className="text-primary font-semibold">EnerjiNova</span> olarak biz üretiyor,
            cihaza güç verirken aynı zamanda B2B pazarında diğer üreticilere tedarik ediyoruz.
          </p>

          {/* View Switcher Controls */}
          <div className="pt-2 flex justify-center gap-2">
            <Button
              variant={activeTab === "device" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("device")}
              className="text-xs"
            >
              <Zap className="w-3.5 h-3.5 mr-1.5" />
              SmartBox Donanım Şeması
            </Button>
            <Button
              variant={activeTab === "flow" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("flow")}
              className="text-xs"
            >
              <Factory className="w-3.5 h-3.5 mr-1.5" />
              Sade Üretim & Değer Akışı
            </Button>
          </div>
        </div>

        {/* TAB 1: SMARTBOX HARDWARE SCHEMATIC VIEW */}
        {activeTab === "device" && (
          <div className="mt-10 space-y-8">
            {/* Visual SmartBox Device Frame */}
            <div className="rounded-xl border border-border bg-card p-5 sm:p-6 shadow-xs">
              {/* Device Header Bar */}
              <div className="flex flex-wrap items-center justify-between pb-4 mb-5 border-b border-border gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                    SmartBox Entegre Mimarisi
                  </span>
                  <Badge variant="outline" className="text-[10px] py-0 px-2">
                    8 Bileşenli Sistem
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground">
                  Güç Kaynağı:{" "}
                  <span className="text-primary font-semibold">EnerjiNova Modülü (Aktif)</span>
                </div>
              </div>

              {/* Components Slot Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {components.map((comp) => {
                  const CompIcon = comp.icon;
                  const isSelected = selectedComponentId === comp.id;

                  return (
                    <button
                      key={comp.id}
                      type="button"
                      onClick={() => setSelectedComponentId(comp.id)}
                      className={`text-left p-3.5 rounded-lg border transition-all cursor-pointer relative flex flex-col justify-between ${
                        comp.isNovaCore
                          ? isSelected
                            ? "border-primary bg-primary/10 ring-2 ring-primary"
                            : "border-primary/60 bg-primary/5 hover:border-primary"
                          : isSelected
                            ? "border-foreground bg-muted ring-1 ring-foreground"
                            : "border-border bg-background hover:bg-muted/40"
                      }`}
                    >
                      {/* Top row */}
                      <div className="flex items-start justify-between w-full mb-2">
                        <div
                          className={`p-2 rounded-md ${
                            comp.isNovaCore
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <CompIcon className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-[10px] text-muted-foreground">
                          #{comp.id}
                        </span>
                      </div>

                      {/* Name & Badge */}
                      <div>
                        {comp.isNovaCore && (
                          <span className="inline-block text-[9px] font-bold text-primary uppercase tracking-wider mb-0.5">
                            Bizim Üretimimiz
                          </span>
                        )}
                        <h4 className="font-semibold text-xs text-foreground truncate">
                          {comp.name}
                        </h4>
                        <p className="text-[11px] text-muted-foreground truncate mt-0.5">
                          {comp.role}
                        </p>
                      </div>

                      {/* Status hint */}
                      <div className="mt-3 pt-2 border-t border-border/50 text-[10px] font-medium flex items-center justify-between">
                        <span className={comp.isNovaCore ? "text-primary font-bold" : "text-muted-foreground"}>
                          {comp.isNovaCore ? "65 TL (B2B Satış)" : "Entegre Girdi"}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] text-primary">Seçili</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Component Spotlight Details Card */}
            <Card className={selectedComp.isNovaCore ? "border-primary" : "border-border"}>
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold text-muted-foreground">
                      BİLEŞEN #{selectedComp.id}
                    </span>
                    {selectedComp.isNovaCore ? (
                      <Badge variant="default" className="text-xs">
                        <Sparkles className="w-3 h-3 mr-1" /> EnerjiNova Öz Yetkinliği
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="text-xs">
                        B2B Entegrasyon Parçası
                      </Badge>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">
                    Tedarikçi / Sağlayıcı:{" "}
                    <strong className="text-foreground">{selectedComp.producer}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <div
                    className={`p-2.5 rounded-lg ${
                      selectedComp.isNovaCore
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <SelectedIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold">{selectedComp.name}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">
                      {selectedComp.role}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 pt-1">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {selectedComp.details}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  {selectedComp.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-md bg-muted/50 border border-border text-left"
                    >
                      <span className="block text-[10px] text-muted-foreground uppercase">
                        {spec.label}
                      </span>
                      <span className="font-semibold text-xs text-foreground mt-0.5 block">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {selectedComp.isNovaCore && (
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="font-bold text-foreground block">
                        Kendi Üretimimiz Olan Enerji Modülü
                      </span>
                      <span className="text-muted-foreground">
                        Hem SmartBox cihazlarımızın enerji kalbidir, hem de B2B pazarında diğer şirketlerin kullanımına sunulur.
                      </span>
                    </div>
                    <a href="#fiyat-listesi" className="shrink-0">
                      <Button size="sm" variant="default" className="text-xs">
                        B2B Fiyatı İncele (65 TL)
                      </Button>
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* TAB 2: MINI SADE PRODUCTION & VALUE FLOW */}
        {activeTab === "flow" && (
          <div className="mt-10 space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {workflowSteps.map((step, idx) => {
                const StepIcon = step.icon;

                return (
                  <Card
                    key={step.step}
                    className={`flex flex-col justify-between card-hover-effect ${
                      step.isNova ? "border-primary/50 bg-primary/5" : "border-border"
                    }`}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs font-bold text-primary">
                          ADIM {step.step}
                        </span>
                        <Badge
                          variant={step.isNova ? "default" : "secondary"}
                          className="text-[10px] py-0 px-2"
                        >
                          {step.badge}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className={`p-2 rounded-md shrink-0 ${
                            step.isNova
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <StepIcon className="w-4 h-4" />
                        </div>
                        <CardTitle className="text-sm font-bold leading-tight">
                          {step.title}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-3 text-xs text-muted-foreground flex-grow">
                      <p className="leading-relaxed">{step.description}</p>
                      <div className="p-2.5 rounded-md bg-card border border-border text-[11px] font-medium text-foreground">
                        {step.highlight}
                      </div>
                    </CardContent>

                    <CardFooter className="pt-2 border-t border-border/50 text-[11px] text-muted-foreground">
                      <span className="italic">{step.b2bNote}</span>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>

            {/* Flow Summary Note */}
            <div className="p-4 rounded-xl border border-border bg-card flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-3 text-left">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="font-bold text-foreground">
                    Sürdürülebilir ve Güvenilir B2B Tedarik Döngüsü
                  </h5>
                  <p className="text-muted-foreground mt-0.5">
                    EnerjiNova, ürettiği her Enerji Modülü ile ekosistemin kesintisiz çalışmasına güç katar; 8 bileşenin entegrasyonuyla güvenilir nihai çözümler sunar.
                  </p>
                </div>
              </div>
              <a href="#iletisim" className="shrink-0 w-full sm:w-auto">
                <Button variant="outline" size="sm" className="w-full text-xs">
                  Tedarik Teklifi Al
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
