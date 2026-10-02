"use client";

import React, { useState } from "react";
import {
  Briefcase,
  TrendingUp,
  Truck,
  Factory,
  BarChart3,
  Server,
  ShieldAlert,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function DepartmentsSection() {
  const departments = [
    {
      id: "yonetim",
      name: "Yönetim Kurulu & Genel Müdürlük",
      code: "YNT-01",
      icon: Briefcase,
      focus: "Stratejik Liderlik & Temsil",
      responsibilities: [
        "Kurumsal strateji, vizyon ve lig hedeflerinin belirlenmesi",
        "Departmanlar arası bütçe ve kaynak dağılımı koordinasyonu",
        "Resmi sözleşmeler ve yönetim kurulu kararlarının yürütülmesi",
      ],
      leadRole: "Genel Müdür & Yönetim Kurulu Başkanı",
    },
    {
      id: "finans",
      name: "Finans & Mali İşler",
      code: "FNS-02",
      icon: TrendingUp,
      focus: "Kasa, Kredi & Bilanço Yönetimi",
      responsibilities: [
        "450.000 ₺ açılış kasası ve 1.000.000 ₺ bilanço dengesi takibi",
        "Vadeli / peşin B2B alacak-borç mutabakatı ve nakit akışı",
        "Dönemsel kârlılık, amortisman ve kredi geri ödeme planlaması",
      ],
      leadRole: "Finans & Muhasebe Direktörü",
    },
    {
      id: "tedarik",
      name: "Tedarik Zinciri & Satın Alma",
      code: "TDR-03",
      icon: Truck,
      focus: "B2B Pazar & 7 Girdi Tedariki",
      responsibilities: [
        "İşlemci, sensör, kasa, yazılım, lojistik, analitik ve garanti alımları",
        "50–75 ₺ fiyat aralığında stratejik ikili sözleşmelerin kurulması",
        "Acil tedarik (90 ₺) maliyet riskinden kaçınma ve stok rezervi",
      ],
      leadRole: "Tedarik Zinciri Müdürü",
    },
    {
      id: "operasyon",
      name: "Operasyon & Üretim",
      code: "OPR-04",
      icon: Factory,
      focus: "1.200 Modül & 600 SmartBox Montajı",
      responsibilities: [
        "Enerji Modülü seri üretim hattı verimliliği (50 ₺ maliyet)",
        "8 bileşenin eş zamanlı montajı ve 100 ₺ montaj gideri kontrolü",
        "Üretim darboğazlarının önlenmesi ve teslimat zamanlaması",
      ],
      leadRole: "Operasyon & Üretim Direktörü",
    },
    {
      id: "pazarlama",
      name: "Pazarlama & B2B Satış",
      code: "PZR-05",
      icon: BarChart3,
      focus: "Fiyatlama & Pazar Payı",
      responsibilities: [
        "B2B Enerji Modülü tekliflerinin hazırlanması (65 ₺ taban fiyat)",
        "Nihai SmartBox tüketici fiyatlandırması (850 ₺) ve pazar talebi",
        "Müşteri ilişkileri ve marka bilinirliği yatırımları",
      ],
      leadRole: "Pazarlama & Satış Yöneticisi",
    },
    {
      id: "bt",
      name: "BT, MIS & Veri Yönetimi",
      code: "BTV-06",
      icon: Server,
      focus: "Dijital Altyapı & Sistemler",
      responsibilities: [
        "Kurumsal web platformunun (MIS) kesintisiz ve güvenli yayını",
        "Veri etiği, KVKK ve 6. tur uyum standartlarının uygulanması",
        "Siber güvenlik risk protokolleri ve dijital olgunluk takibi",
      ],
      leadRole: "Bilgi Teknolojileri ve Veri Sorumlusu",
    },
    {
      id: "ik",
      name: "İK, Risk & Etik Kurulu",
      code: "IKR-07",
      icon: ShieldAlert,
      focus: "İnsan Kaynakları & Risk Yönetimi",
      responsibilities: [
        "Departman rol atamaları, ekip koordinasyonu ve görev uyumu",
        "Gecikme cezaları, sözleşme riskleri ve geri çağırma analizleri",
        "Kurumsal sürdürülebilirlik, ESG ve etik ticaret kuralları",
      ],
      leadRole: "İK, Risk ve Kurumsal Etik Lideri",
    },
  ];

  const [activeDept, setActiveDept] = useState(0);
  const current = departments[activeDept];
  const CurrentIcon = current.icon;

  return (
    <section id="departmanlar" className="py-16 bg-background border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <Badge variant="secondary" className="px-3 py-0.5 text-xs">
            Organizasyonel Yapı • 7 Temel Departman
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Kurumsal Departmanlar ve Yönetişim
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            EnerjiNova A.Ş., stratejiden operasyona 7 uzman departmanın entegre koordinasyonuyla
            yönetilir ve tüm B2B süreçlerinde şeffaf kurumsal ilkelerle hareket eder.
          </p>
        </div>

        {/* Interactive Layout: Left department buttons, Right active details */}
        <div className="mt-10 grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Department List */}
          <div className="lg:col-span-5 space-y-2 flex flex-col justify-between">
            {departments.map((dept, idx) => {
              const Icon = dept.icon;
              const isActive = activeDept === idx;
              return (
                <button
                  key={dept.id}
                  onClick={() => setActiveDept(idx)}
                  className={`w-full text-left p-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? "border-primary bg-primary/5 ring-1 ring-primary text-foreground"
                      : "border-border bg-card hover:bg-muted/40 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`p-1.5 rounded-md shrink-0 ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate text-xs font-semibold">
                      {dept.name}
                    </div>
                  </div>
                  <Badge variant={isActive ? "default" : "outline"} className="text-[10px] h-4 px-1.5 shrink-0 ml-2">
                    {dept.code}
                  </Badge>
                </button>
              );
            })}
          </div>

          {/* Department Details Card */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <Card className="border-border shadow-xs h-full flex flex-col justify-between">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {current.code}
                  </Badge>
                  <span className="text-xs font-semibold text-primary">
                    {current.focus}
                  </span>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <CurrentIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{current.name}</CardTitle>
                    <CardDescription className="text-xs">{current.leadRole}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-xs font-bold text-foreground uppercase tracking-wider">
                    Temel Görev ve Sorumluluk Alanları
                  </div>
                  <div className="space-y-2 pt-1">
                    {current.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        className="p-3 rounded-lg bg-muted/40 border border-border text-xs text-muted-foreground flex items-start gap-2.5"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-border flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-primary" />
                    Yetkili Ekip Ataması Aktif
                  </span>
                  <span className="font-semibold text-foreground">
                    Tur 1 Standartlarına Uyumlu
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
