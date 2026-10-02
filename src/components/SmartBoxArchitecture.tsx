"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  Sparkles,
  Power,
  RefreshCw,
  Sliders,
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
  const [activeTab, setActiveTab] = useState<"showcase" | "flow">("showcase");
  const [selectedComponentId, setSelectedComponentId] = useState<number>(1);

  // 8 bileşen (PDF'teki G01-G08 ekosistemi, stok sayısı ASLA yazılmıyor, dinamik)
  const components = [
    {
      id: 1,
      name: "Enerji Modülü",
      producer: "EnerjiNova A.Ş. (Bizim Öz Üretimimiz)",
      isNovaCore: true,
      role: "Sistemin Kalbi & Güç Ünitesi",
      price: "65 TL",
      icon: Zap,
      summary:
        "SmartBox'ın çalışmasını sağlayan yüksek verimli güç depolama ve voltaj regülasyon ünitesi.",
      details:
        "EnerjiNova üretim tesisinde geliştirilen bu modül; kararlı DC akım, akıllı batarya yönetimi ve aşırı yük koruması sağlar. Cihazın şeffaf güç haznesine doğrudan takılır ve diğer 7 bileşenin kesintisiz çalışması için gerekli enerjiyi dağıtır. Aynı zamanda diğer üretici firmalara B2B pazarında doğrudan tedarik edilir.",
      specs: [
        { label: "Birim Satış Fiyatı", value: "65 TL / adet" },
        { label: "Üretim Yetkinliği", value: "EnerjiNova Öz Üretimi" },
        { label: "Tedarik Durumu", value: "Kesintisiz Üretim / Siparişe Açık" },
        { label: "Entegrasyon", value: "SmartBox Ana Güç Kaynağı" },
      ],
    },
    {
      id: 2,
      name: "İşlemci Modülü",
      producer: "MikroCore Teknoloji A.Ş.",
      isNovaCore: false,
      role: "Merkezi Hesaplama & Mantık",
      price: "Entegre Girdi",
      icon: Cpu,
      summary:
        "Tüm veri işleme ve algoritma kontrolünü yürüten yüksek hızlı mikrokontrolör ünitesi.",
      details:
        "Sensörlerden gelen verileri milisaniyeler içinde işler, telemetri paketleri hazırlar ve Enerji Modülü'nden aldığı dengeli güç ile 7/24 kesintisiz çalışır.",
      specs: [
        { label: "Tedarik Tipi", value: "B2B Entegrasyon Girdisi" },
        { label: "İşlev", value: "Sistem Mantığı & İşleme" },
        { label: "Güç Beslemesi", value: "Enerji Modülü Hattı" },
        { label: "Tedarik Modeli", value: "İş Ortaklığı Sözleşmesi" },
      ],
    },
    {
      id: 3,
      name: "Sensör Kiti",
      producer: "SensoTek A.Ş.",
      isNovaCore: false,
      role: "Çevresel Algılama & Ölçüm",
      price: "Entegre Girdi",
      icon: Activity,
      summary:
        "Gerilim, sıcaklık ve harici ortam parametrelerini ölçen hassas algılama grubu.",
      details:
        "Enerji tüketim metriklerini, hat gerilimlerini ve donanım sıcaklığını izleyerek verileri işlemci modülüne aktarır.",
      specs: [
        { label: "Tedarik Tipi", value: "B2B Entegrasyon Girdisi" },
        { label: "Hassasiyet", value: "Endüstriyel Sınıf Ölçüm" },
        { label: "Güç Beslemesi", value: "Enerji Modülü Hattı" },
        { label: "Tedarik Modeli", value: "Periyodik Sevkiyat" },
      ],
    },
    {
      id: 4,
      name: "Kasa ve Ambalaj",
      producer: "FormAmbalaj A.Ş.",
      isNovaCore: false,
      role: "Fiziksel Muhafaza & Şasi",
      price: "Entegre Girdi",
      icon: Box,
      summary:
        "Tüm bileşenleri dış etkenlerden koruyan dayanıklı şasi ve nakliye ambalajı.",
      details:
        "Elektromanyetik izolasyon, darbe mukavemeti ve soğutma kanalları sunan şık endüstriyel gövde. Enerji Modülü için özel kilitlenebilir yuva barındırır.",
      specs: [
        { label: "Tedarik Tipi", value: "B2B Entegrasyon Girdisi" },
        { label: "Standart", value: "Endüstriyel Dayanıklı Kasa" },
        { label: "Yuva Mimarisi", value: "8 Bileşen Bölmesi" },
        { label: "Tedarik Modeli", value: "Parti Bazlı Alım" },
      ],
    },
    {
      id: 5,
      name: "Yazılım Lisansı",
      producer: "BulutOS Yazılım A.Ş.",
      isNovaCore: false,
      role: "Gömülü İşletim & Bulut Entegrasyonu",
      price: "Entegre Girdi",
      icon: Code2,
      summary:
        "Cihazın güvenli iletişimini ve uzaktan yönetimini sağlayan lisanslı firmware.",
      details:
        "Gerçek zamanlı telemetri akışı, uzaktan konfigürasyon ve veri şifreleme protokollerini kapsar.",
      specs: [
        { label: "Tedarik Tipi", value: "Yazılım Lisans Girdisi" },
        { label: "Protokol", value: "Şifreli IoT Telemetri" },
        { label: "Sürüm", value: "Enterprise Gömülü OS" },
        { label: "Tedarik Modeli", value: "Dijital Lisanslama" },
      ],
    },
    {
      id: 6,
      name: "Lojistik Ağı",
      producer: "HızlıRota Lojistik A.Ş.",
      isNovaCore: false,
      role: "Güvenli Dağıtım & Teslimat",
      price: "Entegre Girdi",
      icon: Truck,
      summary:
        "Bileşen tedarik zincirini ve nihai ürün sevkiyatını güvenceye alan lojistik protokolü.",
      details:
        "Bileşenlerin montaj hattına eksiksiz ulaşmasını ve tamamlanan SmartBox cihazlarının alıcılara zamanında teslimini garanti eder.",
      specs: [
        { label: "Tedarik Tipi", value: "Lojistik Hizmet Girdisi" },
        { label: "Kapsam", value: "Zamanında Sevkiyat & Dağıtım" },
        { label: "Teslimat", value: "Sözleşmeli Rota" },
        { label: "Tedarik Modeli", value: "Tur Bazlı Operasyon" },
      ],
    },
    {
      id: 7,
      name: "Müşteri Analitiği",
      producer: "VeriPusula Analitik A.Ş.",
      isNovaCore: false,
      role: "Kullanım & Verimlilik Analitiği",
      price: "Entegre Girdi",
      icon: BarChart3,
      summary:
        "Cihazın enerji tüketim ve operasyonel verilerini raporlayan analitik altyapısı.",
      details:
        "Kullanıcıya tüketim tasarrufu, kestirimci bakım sinyalleri ve performans raporları sunar.",
      specs: [
        { label: "Tedarik Tipi", value: "Analitik Lisans Girdisi" },
        { label: "Kullanım", value: "Verimlilik Optimizasyonu" },
        { label: "Metrikler", value: "Gerçek Zamanlı Veri" },
        { label: "Tedarik Modeli", value: "Kurumsal Abonelik" },
      ],
    },
    {
      id: 8,
      name: "Garanti & Hizmet Paketi",
      producer: "GüvencePlus Hizmetleri A.Ş.",
      isNovaCore: false,
      role: "Saha Desteği & Donanım Güvencesi",
      price: "Entegre Girdi",
      icon: ShieldCheck,
      summary:
        "Nihai SmartBox kullanıcısına kesintisiz servis ve teknik güvence sunan paket.",
      details:
        "Arıza durumunda hızlı modül değişimi, teknik destek ve sistem güvence garantisini kapsar.",
      specs: [
        { label: "Tedarik Tipi", value: "Hizmet & Destek Paketi" },
        { label: "Kapsam", value: "Tam Donanım Güvencesi" },
        { label: "Servis", value: "Kurumsal B2B Destek" },
        { label: "Tedarik Modeli", value: "Saha Hizmet Sözleşmesi" },
      ],
    },
  ];

  // 4 Adımlı Sade Üretim Akışı (Stok sayısı olmadan dinamik süreç)
  const workflowSteps = [
    {
      step: "01",
      title: "Enerji Modülü İmalatı",
      badge: "EnerjiNova Öz Yetkinliği",
      isNova: true,
      icon: Factory,
      description:
        "Uzmanlık alanımız olan yüksek verimli Enerji Modülü, tesisimizde en yüksek kalite ve dayanıklılık standartlarında üretilir.",
      highlight: "Sistemin kesintisiz güç kaynağı olarak tüm cihaza hayat verir.",
      actionText: "B2B pazarında diğer şirketlere 65 TL'den arz edilir.",
    },
    {
      step: "02",
      title: "7 Tamamlayıcı Girdinin Tedariği",
      badge: "B2B Ekosistemi",
      isNova: false,
      icon: RefreshCw,
      description:
        "Eksiksiz bir SmartBox oluşturmak için gereken işlemci, sensör, kasa ve yazılım gibi 7 bileşen ekosistemdeki anlaşmalı partnerlerden temin edilir.",
      highlight: "8 zorunlu bileşenin tamamı hazır edilmeden montaja geçilmez.",
      actionText: "Resmi B2B sözleşmeleri ve kalite doğrulamasıyla yürütülür.",
    },
    {
      step: "03",
      title: "SmartBox Entegrasyonu & Montaj",
      badge: "Donanım Montajı",
      isNova: false,
      icon: Layers,
      description:
        "Enerji Modülümüz şasinin kalbine yerleştirilerek tüm bileşenler hassas montaj hattında bir araya getirilir.",
      highlight: "8 bileşenin sinerjisiyle anahtar teslim teknoloji paketi tamamlanır.",
      actionText: "Donanımsal ve elektriksel güvenlik testlerinden geçirilir.",
    },
    {
      step: "04",
      title: "Çift Kanallı Pazar Dağıtımı",
      badge: "Pazar & Dağıtım",
      isNova: true,
      icon: CheckCircle2,
      description:
        "Ürettiğimiz Enerji Modülleri B2B üretici ağına iletilirken, montajı biten SmartBox cihazları kurumsal nihai pazara sunulur.",
      highlight: "Hem kritik bileşen sağlayıcısı hem nihai çözüm üreticisi rolü.",
      actionText: "Enerji Modülü: 65 TL | SmartBox Cihazı: 850 TL",
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
            Ürün Mimarisi & Üretim Modeli
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
            SmartBox Donanımı ve EnerjiNova Kalbi
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            SmartBox, 8 temel bileşenin bütünleşik entegrasyonuyla çalışır. Sistemin kalbi olan{" "}
            <strong className="text-foreground font-semibold">Enerji Modülü</strong>&apos;nü{" "}
            <span className="text-primary font-semibold">EnerjiNova</span> olarak bizzat üretiyor,
            cihazlarımızın gücünü sağlarken B2B pazarında diğer şirketlere de kesintisiz tedarik ediyoruz.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="pt-2 flex justify-center gap-2">
            <Button
              variant={activeTab === "showcase" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("showcase")}
              className="text-xs"
            >
              <Power className="w-3.5 h-3.5 mr-1.5" />
              SmartBox Donanım Şovu
            </Button>
            <Button
              variant={activeTab === "flow" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("flow")}
              className="text-xs"
            >
              <Factory className="w-3.5 h-3.5 mr-1.5" />
              Sade Üretim Akışı
            </Button>
          </div>
        </div>

        {/* ================= TAB 1: VISUAL HARDWARE SHOWCASE ================= */}
        {activeTab === "showcase" && (
          <div className="mt-10 space-y-8">
            {/* Visual Showcase Card with Generated 3D Render & Interactive Overlays */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-xs">
              {/* Product Visual Header */}
              <div className="px-5 py-3.5 bg-muted/40 border-b border-border flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                    SmartBox IoT Core — Model SB-100
                  </span>
                  <Badge variant="outline" className="text-[10px] py-0 px-2">
                    8 Bileşen Entegre
                  </Badge>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-muted-foreground">Güç Kaynağı:</span>
                  <Badge variant="default" className="text-[11px] gap-1">
                    <Zap className="w-3 h-3" /> Enerji Modülü (EnerjiNova İmzası)
                  </Badge>
                </div>
              </div>

              {/* Grid: Image on Left / Top, Hardware Specs on Right */}
              <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                {/* 3D Hardware Device Photo Display */}
                <div className="lg:col-span-7 relative bg-slate-950 p-4 sm:p-6 flex flex-col justify-center items-center overflow-hidden">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
                    <Image
                      src="/smartbox-hardware.jpg"
                      alt="SmartBox IoT Cihazı ve Dahili Enerji Modülü"
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover"
                      priority
                    />

                    {/* Interactive Glowing Callout on the Power Cell */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-900/85 backdrop-blur-md border border-primary/40 text-left text-white">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-1.5 text-primary text-xs font-bold">
                          <Zap className="w-3.5 h-3.5" />
                          <span>ENERJİ MODÜLÜ BÖLMESİ</span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                          B2B Fiyatı: 65 TL
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-tight">
                        Cihazın şeffaf güç yuvasında yer alan yüksek performanslı Enerji Modülü,{" "}
                        <strong className="text-white">EnerjiNova</strong> tarafından üretilmekte ve sisteme kesintisiz güç sağlamaktadır.
                      </p>
                    </div>
                  </div>

                  {/* Device Specs Mini Bar */}
                  <div className="w-full mt-3 grid grid-cols-3 gap-2 text-center text-slate-300 text-[11px]">
                    <div className="p-2 rounded bg-slate-900/70 border border-slate-800">
                      <span className="block text-[10px] text-slate-400 uppercase">Güç Dağıtımı</span>
                      <span className="font-semibold text-emerald-400">Tam Entegre</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900/70 border border-slate-800">
                      <span className="block text-[10px] text-slate-400 uppercase">Modül Sağlayıcı</span>
                      <span className="font-semibold text-white">EnerjiNova A.Ş.</span>
                    </div>
                    <div className="p-2 rounded bg-slate-900/70 border border-slate-800">
                      <span className="block text-[10px] text-slate-400 uppercase">Toplam Çözüm</span>
                      <span className="font-semibold text-white">850 TL / Paket</span>
                    </div>
                  </div>
                </div>

                {/* Right: Component Slot Interactive Selector */}
                <div className="lg:col-span-5 p-4 sm:p-5 flex flex-col justify-between bg-card">
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-border">
                      <span className="text-xs font-bold text-foreground uppercase tracking-wider">
                        Sistem Bileşenleri (8 Girdi)
                      </span>
                      <span className="text-[11px] text-muted-foreground">
                        Detay için tıklayın
                      </span>
                    </div>

                    <div className="space-y-2">
                      {components.map((comp) => {
                        const CompIcon = comp.icon;
                        const isSelected = selectedComponentId === comp.id;

                        return (
                          <button
                            key={comp.id}
                            type="button"
                            onClick={() => setSelectedComponentId(comp.id)}
                            className={`w-full text-left p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                              comp.isNovaCore
                                ? isSelected
                                  ? "border-primary bg-primary/10 ring-2 ring-primary"
                                  : "border-primary/50 bg-primary/5 hover:border-primary"
                                : isSelected
                                  ? "border-foreground bg-muted ring-1 ring-foreground"
                                  : "border-border bg-card hover:bg-muted/50"
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div
                                className={`p-1.5 rounded-md shrink-0 ${
                                  comp.isNovaCore
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-muted-foreground"
                                }`}
                              >
                                <CompIcon className="w-3.5 h-3.5" />
                              </div>
                              <div className="truncate text-left">
                                <div className="text-xs font-semibold text-foreground truncate flex items-center gap-1.5">
                                  <span>{comp.name}</span>
                                  {comp.isNovaCore && (
                                    <Badge variant="default" className="text-[9px] h-3.5 px-1">
                                      Bizim Üretim
                                    </Badge>
                                  )}
                                </div>
                                <div className="text-[10px] text-muted-foreground truncate">
                                  {comp.producer}
                                </div>
                              </div>
                            </div>

                            <span
                              className={`text-[11px] font-semibold shrink-0 ml-2 ${
                                comp.isNovaCore ? "text-primary font-bold" : "text-muted-foreground"
                              }`}
                            >
                              {comp.price}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-border text-[11px] text-muted-foreground flex items-center justify-between">
                    <span>SmartBox montajında 8 bileşenin her birinden tam birer adet kullanılır.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Selected Component Detailed Inspector Card */}
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

                {/* Specs Grid without static stock count */}
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
                  <div className="p-3.5 rounded-lg bg-primary/5 border border-primary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="font-bold text-foreground block">
                        Enerji Modülü Satın Alım & Sipariş Talebi
                      </span>
                      <span className="text-muted-foreground">
                        SmartBox cihazı üreticisi tüm şirketler, Enerji Modülü ihtiyaçlarını doğrudan EnerjiNova&apos;dan karşılayabilir.
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

        {/* ================= TAB 2: MINI SADE PRODUCTION WORKFLOW ================= */}
        {activeTab === "flow" && (
          <div className="mt-10 space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {workflowSteps.map((step) => {
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
                      <span className="italic">{step.actionText}</span>
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
                    EnerjiNova, ürettiği her Enerji Modülü ile ekosistemin kesintisiz çalışmasına güç katar; 8 bileşenin entegrasyonuyla güvenilir anahtar teslim nihai donanım çözümleri sunar.
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
