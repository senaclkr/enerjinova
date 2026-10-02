"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Calculator,
  Plus,
  Minus,
  Sparkles,
  ShieldAlert,
  Send,
  CheckCircle,
  FileText,
  BadgeAlert,
  Calendar,
  CreditCard,
  Building,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

export function PricingCalculator() {
  const [smartboxCount, setSmartboxCount] = useState<number>(1);
  const [moduleCount, setModuleCount] = useState<number>(5);
  const [paymentType, setPaymentType] = useState<"pesin" | "vadeli">("pesin");
  const [round, setRound] = useState<string>("Tur 1");
  const [companyName, setCompanyName] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const smartboxUnitPrice = 850;
  const moduleUnitPrice = 65;

  const totalSmartbox = smartboxCount * smartboxUnitPrice;
  const totalModule = moduleCount * moduleUnitPrice;
  const grandTotal = totalSmartbox + totalModule;

  const handleCalculateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#059669", "#10b981", "#f59e0b", "#064e3b"],
    });
    setIsSubmitted(true);
  };

  return (
    <section id="hesaplayici" className="py-24 bg-slate-100/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="emerald" className="px-3.5 py-1 text-xs">
            İnteraktif Simülasyon Aracı
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            B2B Sipariş & Maliyet Hesaplayıcı
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Şirketiniz veya ekibiniz için ihtiyaç duyduğunuz Enerji Modülü ve SmartBox miktarlarını
            belirleyerek anında şeffaf maliyet dökümü ve resmi teklif taslağı oluşturun.
          </p>
        </div>

        <div className="mt-14 max-w-5xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Controls */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-700" />
              <span>Sipariş Parametreleri</span>
            </h3>

            {/* SmartBox Counter */}
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-sm">
                    SmartBox (Nihai Ürün)
                  </div>
                  <div className="text-xs text-slate-500">
                    Birim: 850 TL / adet (Standart Kalite)
                  </div>
                </div>
                <span className="text-sm font-black text-emerald-800">
                  {totalSmartbox.toLocaleString("tr-TR")} TL
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSmartboxCount(Math.max(0, smartboxCount - 1))}
                  className="w-10 h-10 rounded-xl border border-slate-300 bg-white flex items-center justify-center hover:bg-slate-100 text-slate-700 font-bold cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  min="0"
                  value={smartboxCount}
                  onChange={(e) => setSmartboxCount(Math.max(0, parseInt(e.target.value) || 0))}
                  className="h-10 w-24 rounded-xl border border-slate-300 bg-white text-center font-bold text-slate-900"
                />
                <button
                  type="button"
                  onClick={() => setSmartboxCount(smartboxCount + 1)}
                  className="w-10 h-10 rounded-xl border border-slate-300 bg-white flex items-center justify-center hover:bg-slate-100 text-slate-700 font-bold cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-500">Adet</span>
              </div>
            </div>

            {/* Enerji Modülü Counter */}
            <div className="p-4 rounded-2xl border border-emerald-300/80 bg-emerald-50/50 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                    <span>Enerji Modülü</span>
                    <Badge variant="emerald" className="text-[10px] py-0 px-2">
                      B2B Uzmanlık
                    </Badge>
                  </div>
                  <div className="text-xs text-slate-500">
                    Birim: 65 TL / adet (Minimum 1 adet)
                  </div>
                </div>
                <span className="text-sm font-black text-emerald-800">
                  {totalModule.toLocaleString("tr-TR")} TL
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setModuleCount(Math.max(0, moduleCount - 1))}
                  className="w-10 h-10 rounded-xl border border-slate-300 bg-white flex items-center justify-center hover:bg-slate-100 text-slate-700 font-bold cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  min="0"
                  value={moduleCount}
                  onChange={(e) => setModuleCount(Math.max(0, parseInt(e.target.value) || 0))}
                  className="h-10 w-24 rounded-xl border border-slate-300 bg-white text-center font-bold text-slate-900"
                />
                <button
                  type="button"
                  onClick={() => setModuleCount(moduleCount + 1)}
                  className="w-10 h-10 rounded-xl border border-slate-300 bg-white flex items-center justify-center hover:bg-slate-100 text-slate-700 font-bold cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-500">Adet</span>
              </div>
            </div>

            {/* Simulation Delivery Round & Payment Choice */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Hedef Teslimat Turu
                </label>
                <select
                  value={round}
                  onChange={(e) => setRound(e.target.value)}
                  className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Tur 1">Tur 1 (Erken Teslim)</option>
                  <option value="Tur 2">Tur 2 (Standart Dönem)</option>
                  <option value="Tur 3">Tur 3 (Genişleme Aşaması)</option>
                  <option value="Tur 4">Tur 4 (İleri Tur)</option>
                </select>
                <span className="text-[11px] text-slate-500 block mt-1">
                  Onaylanan sözleşmedeki turda teslim edilir.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Ödeme Şekli
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentType("pesin")}
                    className={`h-11 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      paymentType === "pesin"
                        ? "bg-emerald-800 text-white border-emerald-900"
                        : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    Peşin Ödeme
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentType("vadeli")}
                    className={`h-11 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      paymentType === "vadeli"
                        ? "bg-emerald-800 text-white border-emerald-900"
                        : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    Vadeli Ödeme
                  </button>
                </div>
                <span className="text-[11px] text-slate-500 block mt-1">
                  İş birliği koşullarına göre değerlendirilir.
                </span>
              </div>
            </div>

            {/* Quick Contact Input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Talep Eden Firma / Ekip Adı
              </label>
              <Input
                placeholder="Örn: Alfa Mühendislik / Grup 3"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
          </div>

          {/* Right: Live Quote Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                Canlı Teklif Özeti
              </span>
              <Badge variant="solar" className="text-xs">
                Resmi Simülasyon Kuru
              </Badge>
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between items-center text-slate-300">
                <span>SmartBox ({smartboxCount} adet x 850 TL):</span>
                <span className="font-semibold text-white">
                  {totalSmartbox.toLocaleString("tr-TR")} TL
                </span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span>Enerji Modülü ({moduleCount} adet x 65 TL):</span>
                <span className="font-semibold text-white">
                  {totalModule.toLocaleString("tr-TR")} TL
                </span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span>Teslimat Turu:</span>
                <span className="font-semibold text-emerald-300">{round}</span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span>Ödeme Koşulu:</span>
                <span className="font-semibold text-amber-300 capitalize">
                  {paymentType === "pesin" ? "Peşin Ödeme" : "Vadeli (Görüşmeye Bağlı)"}
                </span>
              </div>

              <div className="flex justify-between items-center text-slate-300">
                <span>Kalite Standardı:</span>
                <span className="font-semibold text-white">Standart Kalite</span>
              </div>
            </div>

            {/* Grand Total */}
            <div className="mt-6 pt-5 border-t border-white/15">
              <div className="text-xs text-emerald-200">
                Tahmini Toplam Tutar
              </div>
              <div className="text-3xl sm:text-4xl font-black text-amber-400 mt-1">
                {grandTotal.toLocaleString("tr-TR")} TL
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                *Fiyatlar sipariş koşullarına göre görüşülebilir ve piyasa şartlarına göre güncellenebilir.
              </div>
            </div>

            {/* Official Disclaimer */}
            <div className="mt-6 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-emerald-100/80 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                <strong>Sipariş Onayı:</strong> Gerekli taraf ve ders yürütücüsü onayları tamamlandıktan sonra kesinleşir.
              </span>
            </div>

            {/* Submit Quote Button */}
            <div className="mt-6">
              {!isSubmitted ? (
                <Button
                  onClick={handleCalculateSubmit}
                  variant="solar"
                  className="w-full text-slate-950 font-bold gap-2 py-3 justify-center shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Bu Teklif Taslağını Onayla & Gönder</span>
                </Button>
              ) : (
                <div className="p-4 rounded-xl bg-emerald-600/30 border border-emerald-400/50 text-center space-y-2">
                  <div className="flex items-center justify-center gap-2 text-emerald-300 font-bold text-sm">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span>Teklif Taslağı Hazırlandı!</span>
                  </div>
                  <p className="text-xs text-emerald-100">
                    Siparişinizi kesinleştirmek için aşağıdaki iletişim formundan veya doğrudan{" "}
                    <a
                      href="mailto:enerjinova.iletisim@gmail.com"
                      className="underline font-bold text-amber-300"
                    >
                      enerjinova.iletisim@gmail.com
                    </a>{" "}
                    üzerinden bize iletebilirsiniz.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
