"use client";

import React from "react";
import {
  Activity,
  Warehouse,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Layers,
  Box,
  Code2,
  Truck,
  BarChart,
  ShieldCheck,
  Zap,
  Clock,
  ArrowRight,
  Gauge,
  Boxes,
  Lock,
  ExternalLink,
  ShoppingBag,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const ORDER_MARKETPLACE_URL =
  "https://dijital-sirketler-ligi-serhat-ata.ataserhat54.chatgpt.site/ogrenci?marketCompany=G01";

export function LiveOperationsPanel() {
  // 8'li BOM Envanter Verileri
  const bomInventory = [
    {
      name: "Müşteri Analitiği Lisansı",
      qty: 368,
      status: "Yeterli Stok",
      statusVariant: "default" as const,
      isBottleneck: false,
      icon: BarChart,
      note: "Yüksek stok rezervi (368 Adet)",
    },
    {
      name: "Lojistik Tokenı",
      qty: 118,
      status: "Yeterli Stok",
      statusVariant: "default" as const,
      isBottleneck: false,
      icon: Truck,
      note: "Güvenli operasyon rezervi (118 Adet)",
    },
    {
      name: "Garanti Hizmet Paketi",
      qty: 118,
      status: "Yeterli Stok",
      statusVariant: "default" as const,
      isBottleneck: false,
      icon: ShieldCheck,
      note: "Güvenli operasyon rezervi (118 Adet)",
    },
    {
      name: "Enerji Modülü (Öz Üretim)",
      qty: 73,
      status: "B2B & Montaj Hazır",
      statusVariant: "secondary" as const,
      isBottleneck: false,
      icon: Zap,
      note: "73 Adet stokta (Bekleme süresi 0 gün)",
    },
    {
      name: "İşlemci Modülü",
      qty: 68,
      status: "Darboğaz Eşiği",
      statusVariant: "destructive" as const,
      isBottleneck: true,
      icon: Cpu,
      note: "Kritik montaj tavanı (68 Adet)",
    },
    {
      name: "Sensör Kiti",
      qty: 68,
      status: "Darboğaz Eşiği",
      statusVariant: "destructive" as const,
      isBottleneck: true,
      icon: Activity,
      note: "Kritik montaj tavanı (68 Adet)",
    },
    {
      name: "Kasa ve Ambalaj",
      qty: 68,
      status: "Darboğaz Eşiği",
      statusVariant: "destructive" as const,
      isBottleneck: true,
      icon: Box,
      note: "Kritik montaj tavanı (68 Adet)",
    },
    {
      name: "Yazılım Lisansı",
      qty: 68,
      status: "Darboğaz Eşiği",
      statusVariant: "destructive" as const,
      isBottleneck: true,
      icon: Code2,
      note: "Kritik montaj tavanı (68 Adet)",
    },
  ];

  return (
    <section
      id="canli-operasyon"
      className="py-16 sm:py-20 bg-background border-b border-border scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2">
            <Badge variant="secondary" className="px-3 py-1 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1.5" />
              Canlı Takip & Envanter Kontrolü
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight">
            CANLI OPERASYON VE YÖNETİM PANELİ
          </h2>
          <p className="text-sm sm:text-base font-semibold text-primary">
            Stok, Kapasite, Darboğaz ve Ürün Bulunabilirliği
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            EnerjiNova A.Ş. canlı envanter dengesi, depo doluluğu, 8 bileşenli darboğaz analizi ve sipariş bulunabilirlik durumları tek merkezden izlenmektedir.
          </p>
        </div>

        {/* 1. GENEL DURUM ÖZETİ (4 KART) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-2.5">
            <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2 uppercase tracking-wide">
              <Gauge className="w-4 h-4 text-primary" />
              <span>Genel Durum Özeti</span>
            </h3>
            <Badge variant="outline" className="text-[11px] font-mono">
              Aktif Tur Verileri
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* Depo Doluluğu */}
            <div className="p-4 rounded-xl border border-border bg-card shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                  Depo Doluluğu
                </span>
                <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                  <Warehouse className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3">
                <div className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                  %18 <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Aktif</span>
                </div>
                <div className="text-xs font-semibold text-foreground mt-1">
                  1.081 / 6.000 Yer Kullanımda
                </div>
                {/* Progress bar */}
                <div className="mt-2.5 w-full bg-muted rounded-full h-1.5 overflow-hidden">
                  <div className="bg-primary h-1.5 rounded-full" style={{ width: "18%" }} />
                </div>
              </div>
            </div>

            {/* Çekirdek Üretim Kotası */}
            <div className="p-4 rounded-xl border border-border bg-card shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                  Çekirdek Üretim Kotası
                </span>
                <div className="p-1.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Lock className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3">
                <div className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                  0 Birim
                </div>
                <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 mt-1">
                  Uzmanlık Hakkı Tamamen Kullanıldı
                </div>
                <div className="text-[11px] text-muted-foreground mt-1">
                  Maksimum kapasiteye ulaşıldı
                </div>
              </div>
            </div>

            {/* Kritik Darboğaz (BOM) */}
            <div className="p-4 rounded-xl border border-destructive/40 bg-destructive/5 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-destructive uppercase tracking-wider">
                  Kritik Darboğaz (BOM)
                </span>
                <div className="p-1.5 rounded-md bg-destructive/10 text-destructive">
                  <AlertTriangle className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3">
                <div className="text-2xl sm:text-3xl font-black text-destructive tracking-tight">
                  68 Montaj Limiti
                </div>
                <div className="text-xs font-semibold text-destructive mt-1">
                  4 Bileşende Eş Zamanlı Kısıt
                </div>
                <div className="text-[11px] text-muted-foreground mt-1">
                  İşlemci, Sensör, Kasa, Yazılım
                </div>
              </div>
            </div>

            {/* Bulunabilirlik */}
            <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                  Bulunabilirlik
                </span>
                <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
              <div className="mt-3">
                <div className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
                  132 Adet
                </div>
                <div className="text-xs font-bold text-emerald-700 dark:text-emerald-400 mt-1">
                  SmartBox Stokta (Hemen Teslim)
                </div>
                <div className="text-[11px] text-muted-foreground mt-1">
                  C Kalite hazır nihai cihaz
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. STOK VE BİLEŞEN ENVANTERİ (8'Lİ BOM ANALİZİ) */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-2.5">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2 uppercase tracking-wide">
                <Boxes className="w-4 h-4 text-primary" />
                <span>Stok ve Bileşen Envanteri (8&apos;li BOM Analizi)</span>
              </h3>
              <p className="text-xs text-muted-foreground">
                SmartBox montajı için gereken 8 bileşenin canlı depo durumları
              </p>
            </div>
            <Badge variant="outline" className="text-xs self-start sm:self-auto font-mono">
              Darboğaz Tavanı: 68 Adet
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {bomInventory.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-lg border flex flex-col justify-between transition-all ${
                    item.isBottleneck
                      ? "border-destructive/40 bg-destructive/5 ring-1 ring-destructive/20"
                      : "border-border bg-card"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div
                      className={`p-2 rounded-md ${
                        item.isBottleneck
                          ? "bg-destructive/10 text-destructive"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <Badge
                      variant={item.isBottleneck ? "destructive" : "secondary"}
                      className="text-[10px] px-1.5 py-0"
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-baseline justify-between">
                      <span className="font-extrabold text-xl text-foreground">
                        {item.qty} <span className="text-xs font-normal text-muted-foreground">Adet</span>
                      </span>
                    </div>
                    <div className="font-semibold text-xs text-foreground mt-1 leading-snug">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">
                      {item.note}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. KAPASİTE VE HAT DOLULUĞU */}
        <div className="space-y-4">
          <div className="border-b border-border pb-2.5">
            <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2 uppercase tracking-wide">
              <Activity className="w-4 h-4 text-primary" />
              <span>Kapasite ve Hat Doluluğu</span>
            </h3>
            <p className="text-xs text-muted-foreground">
              Üretim bantları ve entegrasyon hatlarının anlık çalışma durumları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Enerji Modülü Bandı */}
            <Card className="border-border bg-card shadow-xs">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-primary font-semibold text-xs">
                    <Zap className="w-4 h-4" />
                    <span>Enerji Modülü Uzmanlık Üretim Bandı</span>
                  </div>
                  <Badge variant="outline" className="text-[10px] text-amber-600 border-amber-500/30">
                    Kapasite Dolu
                  </Badge>
                </div>
                <CardTitle className="text-base mt-2">
                  0 Uzmanlık Hakkı (Tam Doluluk)
                </CardTitle>
                <CardDescription className="text-xs">
                  Maksimum üretim kapasitesine ulaşıldı
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-muted-foreground">
                <p className="leading-relaxed">
                  Maksimum kapasiteye ulaşılmış olup (<strong>0 Uzmanlık Hakkı</strong>), aktif çekirdek üretim yapılamamaktadır. Mevcut siparişler hazır stok rezervinden karşılanmaktadır.
                </p>
                <div className="p-2.5 rounded-md bg-muted/50 border border-border flex items-center justify-between text-[11px]">
                  <span className="text-muted-foreground">Aktif Çekirdek Üretim:</span>
                  <span className="font-bold text-destructive">Yapılamıyor (0 Hak)</span>
                </div>
              </CardContent>
            </Card>

            {/* SmartBox Montaj Hattı */}
            <Card className="border-border bg-card shadow-xs">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-xs">
                    <Layers className="w-4 h-4" />
                    <span>SmartBox Montaj ve Entegrasyon Hattı</span>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">
                    Üretim Devam Ediyor
                  </Badge>
                </div>
                <CardTitle className="text-base mt-2">
                  132 / 200 Planlı Üretim
                </CardTitle>
                <CardDescription className="text-xs">
                  Entegrasyon hattında aktif montaj süreci
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs text-muted-foreground">
                <p className="leading-relaxed">
                  SmartBox Montaj ve Entegrasyon Hattı: Aktif üretim sürmektedir (<strong>132/200 Planlı Üretim</strong>). Çıkan cihazlar doğrudan sevkiyata hazır stoğa aktarılmaktadır.
                </p>
                <div className="p-2.5 rounded-md bg-muted/50 border border-border flex items-center justify-between text-[11px]">
                  <span className="text-muted-foreground">Hat İlerleme Durumu:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">%66 Tamamlandı</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 4. DARBOĞAZ ANALİZİ VE SİMÜLATÖR */}
        <div className="space-y-4">
          <div className="border-b border-border pb-2.5">
            <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2 uppercase tracking-wide">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <span>Darboğaz Analizi ve Simülatör</span>
            </h3>
            <p className="text-xs text-muted-foreground">
              Üretim zincirinin kritik eşiği ve kilitlenme simülasyonu
            </p>
          </div>

          <Card className="border-destructive/40 bg-gradient-to-br from-destructive/5 via-card to-card shadow-xs overflow-hidden">
            <CardContent className="p-5 sm:p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2">
                    <Badge variant="destructive" className="text-xs font-bold">
                      Kritik Darboğaz Eşiği
                    </Badge>
                    <span className="text-xs font-semibold text-foreground">
                      Çoklu Bileşen Kısıtı (68 Adet)
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-foreground">
                    Yeni Montaj Hattı Tavanı: Maksimum 68 SmartBox
                  </h4>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="text-xs text-muted-foreground block">Zincir Kilitlenme Noktası:</span>
                  <span className="text-2xl font-black text-destructive">68. Ünite</span>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-background/80 border border-border space-y-2 text-xs text-muted-foreground leading-relaxed">
                <p>
                  EnerjiNova bünyesinde devam eden nihai montaj hatları haricinde, yeni bir montaj hattı başlatılmak istendiğinde <strong>maksimum 68 adet SmartBox</strong> üretilebilmektedir.
                </p>
                <p>
                  <strong>İşlemci Modülü, Sensör Kiti, Kasa ve Ambalaj ile Yazılım Lisansı</strong> stoklarının tümü eş zamanlı olarak 68&apos;de tükeneceği için üretim zinciri bu noktada kilitlenecektir. Kapsamlı bir B2B tedarik operasyonu yapılmadan ek üretime geçilemez.
                </p>
              </div>

              {/* 4 Kısıtlayan Bileşen */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                {["İşlemci Modülü: 68 Adet", "Sensör Kiti: 68 Adet", "Kasa ve Ambalaj: 68 Adet", "Yazılım Lisansı: 68 Adet"].map((c, i) => (
                  <div
                    key={i}
                    className="p-2 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-[11px] font-semibold text-center"
                  >
                    {c}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 5. ÜRÜN BULUNABİLİRLİĞİ VE SİPARİŞ TESLİM SÜRELERİ */}
        <div className="space-y-4">
          <div className="border-b border-border pb-2.5">
            <h3 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2 uppercase tracking-wide">
              <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Ürün Bulunabilirliği ve Sipariş Teslim Süreleri</span>
            </h3>
            <p className="text-xs text-muted-foreground">
              Sevkiyata ve B2B takasa hazır aktif envanter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* SmartBox Bulunabilirlik */}
            <Card className="border-border bg-card shadow-xs flex flex-col justify-between">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="default" className="text-[10px]">
                    Hazır Nihai Ürün
                  </Badge>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Hemen Teslim
                  </span>
                </div>
                <CardTitle className="text-lg mt-2">
                  SmartBox (Ulusal Perakende)
                </CardTitle>
                <CardDescription className="text-xs font-semibold text-foreground">
                  132 Adet satılabilir (C Kalite) hazır nihai ürün
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-xs text-muted-foreground">
                <p className="leading-relaxed">
                  Web sitesi üzerinden verilecek siparişler anında lojistik onaya ve sevkiyata hazırdır. Bekleme süresi bulunmamaktadır.
                </p>
                <div className="p-3 rounded-md bg-muted/50 border border-border space-y-1 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hazır Stok Miktarı:</span>
                    <span className="font-bold text-foreground">132 Adet</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Kalite Seviyesi:</span>
                    <span className="font-semibold text-foreground">C Kalite Standart</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lojistik Durumu:</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">Anında Sevkiyata Hazır</span>
                  </div>
                </div>
              </CardContent>
              <div className="p-4 pt-0">
                <a
                  href={ORDER_MARKETPLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block"
                >
                  <Button size="sm" className="w-full text-xs font-bold gap-2">
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>SmartBox Siparişi Ver (132 Hazır)</span>
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </a>
              </div>
            </Card>

            {/* Enerji Modülü Bulunabilirlik */}
            <Card className="border-border bg-card shadow-xs flex flex-col justify-between">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-[10px]">
                    B2B Çekirdek Ürün
                  </Badge>
                  <span className="text-xs font-bold text-primary flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    Bekleme Süresi: 0 Gün
                  </span>
                </div>
                <CardTitle className="text-lg mt-2">
                  Enerji Modülü (B2B Çekirdek Ürün)
                </CardTitle>
                <CardDescription className="text-xs font-semibold text-foreground">
                  73 Adet B2B satışa ve takasa hazır modül
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-xs text-muted-foreground">
                <p className="leading-relaxed">
                  EnerjiNova öz üretimi güç üniteleri partner şirketlerin ikili tedarik ve acil parça talepleri için derhal intikale uygundur. Bekleme süresi 0 gündür.
                </p>
                <div className="p-3 rounded-md bg-muted/50 border border-border space-y-1 text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hazır Modül Stoğu:</span>
                    <span className="font-bold text-foreground">73 Adet</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Kullanım Türü:</span>
                    <span className="font-semibold text-foreground">B2B Satış & Parça Takası</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bekleme Süresi:</span>
                    <span className="font-bold text-primary">0 Gün (Anında Tahsis)</span>
                  </div>
                </div>
              </CardContent>
              <div className="p-4 pt-0">
                <a
                  href={ORDER_MARKETPLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block"
                >
                  <Button size="sm" variant="outline" className="w-full text-xs font-bold gap-2">
                    <Zap className="w-3.5 h-3.5 text-primary" />
                    <span>Enerji Modülü Tedariki (73 Hazır)</span>
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
