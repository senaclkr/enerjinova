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
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Badge } from "./ui/badge";

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
      desc: "SmartBox'ın merkezi simülasyon ve bulut yönetim sistemlerine veri aktarımını sağlayan arayüz.",
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
    <section id="mimari" className="py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="solar" className="px-3.5 py-1 text-xs">
            Sekiz Bileşenli Ekosistem
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            SmartBox Nasıl Oluşur? 8 Temel Bileşen Mimarisi
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            SmartBox, 8 temel bileşenin entegre montajıyla ortaya çıkar.
            EnerjiNova olarak bu sistemin kalbi olan{" "}
            <strong className="text-emerald-800">Enerji Modülü</strong>&apos;nü üretiyor,
            diğer üreticilere tedarik sağlarken eksiksiz SmartBox çözümleri de sunuyoruz.
          </p>
        </div>

        {/* Visual interactive diagram */}
        <div className="mt-16 grid lg:grid-cols-12 gap-8 items-center">
          {/* Left: 8 component pills / grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
            {components.map((comp, idx) => {
              const CompIcon = comp.icon;
              const isSelected = selectedComponent === idx;
              return (
                <button
                  key={comp.id}
                  onClick={() => setSelectedComponent(idx)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3.5 cursor-pointer ${
                    isSelected
                      ? comp.isNovaCore
                        ? "bg-emerald-900 text-white border-emerald-700 shadow-lg shadow-emerald-900/20"
                        : "bg-slate-900 text-white border-slate-700 shadow-md"
                      : comp.isNovaCore
                      ? "bg-emerald-50/70 border-emerald-300 text-slate-900 hover:bg-emerald-100/60"
                      : "bg-slate-50 border-slate-200 text-slate-900 hover:bg-slate-100/80"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl shrink-0 ${
                      isSelected
                        ? "bg-white/10 text-white"
                        : comp.isNovaCore
                        ? "bg-emerald-200/80 text-emerald-900"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    <CompIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : comp.isNovaCore
                            ? "bg-emerald-700 text-white"
                            : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {comp.tag}
                      </span>
                      {comp.isNovaCore && (
                        <span className="text-[10px] font-extrabold text-amber-400">
                          ★ 65 TL
                        </span>
                      )}
                    </div>
                    <div className="font-bold text-sm mt-1 truncate">
                      {comp.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Component Detail Spotlight */}
          <div className="lg:col-span-5">
            <div
              className={`rounded-3xl p-8 border transition-all duration-300 ${
                current.isNovaCore
                  ? "bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 text-white border-emerald-500/30 shadow-2xl"
                  : "bg-slate-900 text-white border-slate-700 shadow-xl"
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-widest">
                  Bileşen İncelemesi #{current.id}
                </span>
                {current.isNovaCore ? (
                  <Badge variant="solar" className="text-xs font-bold">
                    EnerjiNova Öz Üretimi
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-slate-300 border-slate-600">
                    Entegre Bileşen
                  </Badge>
                )}
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div
                  className={`p-3.5 rounded-2xl ${
                    current.isNovaCore
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/30"
                      : "bg-slate-800 text-slate-300"
                  }`}
                >
                  <CurrentIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">
                    {current.name}
                  </h3>
                  <div className="text-xs text-emerald-300/80 mt-0.5">
                    {current.status}
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm text-slate-300 leading-relaxed">
                {current.desc}
              </p>

              {current.isNovaCore ? (
                <div className="mt-6 p-4 rounded-2xl bg-emerald-900/60 border border-emerald-500/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-200">
                      B2B Tedarik Birim Fiyatı:
                    </span>
                    <span className="text-xl font-black text-amber-300">
                      65 TL / adet
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-100/80">
                    Ekosistemdeki diğer SmartBox üretici firmalar için minimum 1 adet sipariş garantisi ve tur bazlı teslimat mevcuttur.
                  </p>
                </div>
              ) : (
                <div className="mt-6 p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 space-y-1">
                  <div className="font-semibold text-white">
                    SmartBox Entegrasyonundaki Rolü:
                  </div>
                  <div>
                    Bu bileşen, EnerjiNova Enerji Modülü ile birleştirilerek eksiksiz 850 TL&apos;lik SmartBox paketine dönüştürülür.
                  </div>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  Nihai SmartBox Fiyatı: <strong className="text-white">850 TL</strong>
                </div>
                <a
                  href="#hesaplayici"
                  className="text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1"
                >
                  <span>Sipariş Oluştur</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
