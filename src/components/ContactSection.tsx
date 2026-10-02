"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Mail,
  Copy,
  Check,
  Send,
  Building,
  User,
  MessageSquare,
  ShieldCheck,
  HelpCircle,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    teamName: "",
    fullName: "",
    email: "",
    productInterest: "Enerji Modülü (65 TL)",
    quantity: "10",
    round: "Tur 1",
    message: "",
  });

  const email = "enerjinova.iletisim@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#059669", "#10b981", "#f59e0b", "#064e3b"],
    });
    setIsSent(true);
  };

  const faqs = [
    {
      q: "Siparişler ne zaman ve nasıl kesinleşir?",
      a: "Tüm alım-satım ve B2B tedarik talepleri, alıcı ile EnerjiNova arasında varılan mutabakatın ardından taraf ve ders yürütücüsü onayları tamamlandığında kesinlik kazanır.",
    },
    {
      q: "Vadeli ödeme şartları nasıl belirleniyor?",
      a: "Vadeli ödeme talepleri; sipariş adedi, hedef teslim turu ve geçmiş iş birliği dengesine göre değerlendirilir. Karşılıklı uzlaşma esastır.",
    },
    {
      q: "Minimum sipariş miktarı gerçekten 1 adet mi?",
      a: "Evet! Hem 65 TL'lik Enerji Modülü hem de 850 TL'lik SmartBox için minimum sipariş 1 adettir. Böylece ekipler ihtiyaç duydukları kadar esnek alım yapabilir.",
    },
    {
      q: "Fiyatlarda indirim veya piyasa güncellemesi oluyor mu?",
      a: "Fiyatlandırma prensibimiz gereği sipariş koşullarına göre görüşülebilir; simülasyon dinamikleri, hammadde ve piyasa koşullarına bağlı olarak fiyatlar güncellenebilir.",
    },
  ];

  return (
    <section id="iletisim" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="solar" className="px-3.5 py-1 text-xs">
            Bize Ulaşın & Sipariş İletin
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            İş Birliği & Sipariş Talepleri
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            SmartBox alımı, Enerji Modülü B2B tedariği veya ders simülasyonu ortaklıkları
            için bize resmi iletişim adresimiz üzerinden her zaman ulaşabilirsiniz.
          </p>
        </div>

        {/* Official Email Highlight Card */}
        <div className="mt-12 max-w-2xl mx-auto bg-gradient-to-r from-emerald-950 to-slate-800 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 text-center shadow-xl">
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-400">
            Resmi Şirket E-Posta Adresi
          </span>
          <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`mailto:${email}`}
              className="text-xl sm:text-2xl font-black text-amber-300 hover:text-amber-200 transition-colors underline decoration-amber-400/40 hover:decoration-amber-300"
            >
              {email}
            </a>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white border border-white/20 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Kopyalandı</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Kopyala</span>
                </>
              )}
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            Simülasyon teklifleri ve sözleşme onay metinlerini doğrudan bu adrese iletebilirsiniz.
          </p>
        </div>

        {/* Contact Form and FAQ Grid */}
        <div className="mt-14 grid lg:grid-cols-12 gap-10 items-start">
          {/* Interactive B2B Order Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-700" />
              <span>B2B Teklif & Sözleşme Talep Formu</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Formu doldurduğunuzda talebiniz doğrudan EnerjiNova yetkililerine iletilir.
            </p>

            {isSent ? (
              <div className="mt-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  Talebiniz Başarıyla Alındı!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Sayın <strong>{formData.fullName || "Yetkili"}</strong>,{" "}
                  <strong>{formData.teamName || "Ekibiniz"}</strong> adına iletilen{" "}
                  <strong>{formData.quantity} adet {formData.productInterest}</strong> talebi
                  kaydedildi. Ders yürütücüsü ve sözleşme onayı için ekibimiz sizinle iletişime geçecektir.
                </p>
                <div className="pt-2">
                  <a
                    href={`mailto:${email}?subject=EnerjiNova%20Siparis%20Talebi%20-%20${encodeURIComponent(
                      formData.teamName || "B2B"
                    )}&body=Talep:%20${encodeURIComponent(
                      formData.quantity
                    )}%20adet%20${encodeURIComponent(
                      formData.productInterest
                    )}%0ATeslim%20Turu:%20${encodeURIComponent(
                      formData.round
                    )}%0AYetkili:%20${encodeURIComponent(
                      formData.fullName
                    )}%0AMesaj:%20${encodeURIComponent(formData.message)}`}
                  >
                    <Button variant="emerald" className="gap-2">
                      <Send className="w-4 h-4" />
                      <span>E-Posta Programında Aç</span>
                    </Button>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Firma / Ekip Adı *
                    </label>
                    <Input
                      required
                      placeholder="Örn: Beta Şirketi / 2. Grup"
                      value={formData.teamName}
                      onChange={(e) =>
                        setFormData({ ...formData, teamName: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Yetkili Adı Soyadı *
                    </label>
                    <Input
                      required
                      placeholder="Adınız Soyadınız"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    İletişim E-Postası *
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="ornek@universite.edu.tr"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Talep Edilen Ürün
                    </label>
                    <select
                      className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-xs text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      value={formData.productInterest}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          productInterest: e.target.value,
                        })
                      }
                    >
                      <option value="Enerji Modülü (65 TL)">Enerji Modülü (65 TL)</option>
                      <option value="SmartBox (850 TL)">SmartBox (850 TL)</option>
                      <option value="Her İkisi / Karma">Her İkisi / Karma</option>
                      <option value="B2B Ortaklık">B2B Ortaklık</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Miktar (Adet)
                    </label>
                    <Input
                      type="number"
                      min="1"
                      placeholder="1"
                      value={formData.quantity}
                      onChange={(e) =>
                        setFormData({ ...formData, quantity: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Teslim Turu
                    </label>
                    <select
                      className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-xs text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      value={formData.round}
                      onChange={(e) =>
                        setFormData({ ...formData, round: e.target.value })
                      }
                    >
                      <option value="Tur 1">Tur 1</option>
                      <option value="Tur 2">Tur 2</option>
                      <option value="Tur 3">Tur 3</option>
                      <option value="Tur 4">Tur 4</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Özel Not / Teklif Koşulları
                  </label>
                  <Textarea
                    placeholder="Vadeli ödeme talebi, teslimat şartları veya simülasyona dair eklemek istediğiniz detaylar..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="emerald"
                    className="w-full gap-2 justify-center py-3 text-sm font-bold shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Teklif ve Sipariş Talebini İlet</span>
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Simülasyon Rehberi</span>
              </div>
              <h3 className="text-2xl font-bold text-white mt-1">
                Sıkça Sorulan Sorular
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                EnerjiNova ile ticaret yaparken merak edilen tüm prosedürler
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-emerald-400 shrink-0 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs text-slate-300 leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-emerald-100/90 leading-relaxed">
                <strong>Ders Kapsamı Güvencesi:</strong> EnerjiNova A.Ş., tüm simülasyon dönemi boyunca şeffaf fiyatlama, adil B2B ortaklığı ve zamanında parça tedariki taahhüt eder.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
