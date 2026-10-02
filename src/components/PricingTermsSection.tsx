"use client";

import React from "react";
import {
  FileCheck,
  CheckCircle2,
  Clock,
  Coins,
  ShieldCheck,
  Layers,
  Cpu,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import { Badge } from "./ui/badge";

export function PricingTermsSection() {
  const terms = [
    {
      title: "Minimum Sipariş",
      detail: "1 adet",
      explanation:
        "Hem SmartBox hem de Enerji Modülü için minimum sipariş sınırı 1 adettir. Ekiplerin bütçelerine göre esnek alım yapılabilir.",
      icon: Layers,
    },
    {
      title: "Ödeme Koşulları",
      detail: "Peşin veya Vadeli",
      explanation:
        "Peşin veya vadeli ödeme seçenekleri, sipariş miktarı ve iş birliği koşullarına göre karşılıklı mutabakatla değerlendirilir.",
      icon: Coins,
    },
    {
      title: "Teslimat Protokolü",
      detail: "Sözleşmede Belirtilen Turda",
      explanation:
        "Onaylanan sözleşmede belirtilen teslim turunda eksiksiz gerçekleştirilir; gecikmesiz operasyon hedeflenir.",
      icon: Clock,
    },
    {
      title: "Kalite Standardı",
      detail: "Standart Kalite",
      explanation:
        "Tüm modül ve bileşenlerimiz standart kalite güvencesiyle test edilerek sevk edilir.",
      icon: ShieldCheck,
    },
    {
      title: "Fiyatlandırma Esnekliği",
      detail: "Müzakereye Açık",
      explanation:
        "Sipariş koşullarına göre görüşülebilir; piyasa koşulları ve süreç içerisindeki gelişmelere bağlı olarak fiyatlar güncellenebilir.",
      icon: FileCheck,
    },
    {
      title: "Sipariş Onay Süreci",
      detail: "Çift Taraflı & Yürütücü Onayı",
      explanation:
        "Gerekli taraf ve ders yürütücüsü onayları tamamlandıktan sonra sözleşme kesinleşir.",
      icon: AlertTriangle,
    },
  ];

  return (
    <section id="fiyat-listesi" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="emerald" className="px-3.5 py-1 text-xs">
            Resmi Tarife & Ticari Şartlar
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fiyat Listesi ve Şeffaf Satış Koşulları
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            EnerjiNova A.Ş. ile gerçekleştirilecek tüm B2B tedarik ve ürün satışlarında geçerli
            olan resmi birim fiyatlar ve sözleşme prensipleri.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="mt-14 max-w-4xl mx-auto overflow-hidden rounded-3xl border border-slate-200 shadow-md">
          <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Resmi Ürün Tarifesi
              </span>
              <h3 className="text-2xl font-black mt-1">
                EnerjiNova Standart Fiyat Tablosu
              </h3>
            </div>
            <div className="text-xs text-slate-300">
              *Tüm fiyatlar Türk Lirası (TL) cinsindendir
            </div>
          </div>

          <div className="divide-y divide-slate-200 bg-white">
            {/* Row 1: SmartBox */}
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold text-slate-900">
                      SmartBox
                    </h4>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                      Nihai Bütünleşik Ürün
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 max-w-md">
                    8 temel bileşenin entegre montajıyla üretilen, doğrudan dağıtıma ve kullanıma hazır komple sistem.
                  </p>
                </div>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <div className="text-3xl font-black text-slate-900">
                  850 TL
                </div>
                <div className="text-xs text-slate-500">adet başına</div>
              </div>
            </div>

            {/* Row 2: Enerji Modülü */}
            <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-emerald-50/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-bold text-slate-900">
                      Enerji Modülü
                    </h4>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      Temel Uzmanlık & B2B
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1 max-w-md">
                    SmartBox üreticilerine yönelik yüksek performanslı, test edilmiş bağımsız enerji ünitesi tedariki.
                  </p>
                </div>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <div className="text-3xl font-black text-emerald-700">
                  65 TL
                </div>
                <div className="text-xs text-slate-500">adet başına</div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Formal Conditions Cards */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-900">
              Sözleşme ve Tedarik Koşulları
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Ders simülasyonu yönergeleri ve ticari etik ilkelerimiz çerçevesinde belirlenmiştir
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {terms.map((item, idx) => {
              const TermIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5 text-emerald-800 mb-2">
                    <TermIcon className="w-4 h-4 text-emerald-700" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {item.title}
                    </span>
                  </div>
                  <div className="text-base font-bold text-slate-900">
                    {item.detail}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {item.explanation}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
