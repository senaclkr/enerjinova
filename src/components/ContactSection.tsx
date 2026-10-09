"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  ShieldCheck,
  Send,
  CheckCircle2,
  Copy,
  ExternalLink,
  ShoppingBag,
  Building2,
  User,
  Phone,
  Package,
  FileText,
  Clock,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const OFFICIAL_EMAIL = "enerjinova.iletisim@gmail.com";
const B2B_MARKETPLACE_URL =
  "https://dijital-sirketler-ligi-serhat-ata.ataserhat54.chatgpt.site/ogrenci";

const PRODUCT_OPTIONS = [
  { id: "module", label: "Enerji Modülü (65 ₺ / adet)" },
  { id: "smartbox", label: "SmartBox Nihai Cihaz (850 ₺ / adet)" },
  { id: "b2b", label: "B2B Tedarik Sözleşmesi (50–75 ₺ bandı)" },
  { id: "other", label: "Diğer / Özel Kurumsal Talep" },
];

const PAYMENT_OPTIONS = [
  "Peşin Ödeme",
  "Vadeli Ödeme (Vade Turunda)",
  "Karşılıklı Takas / B2B Mahsuplaşma",
  "Görüşülmek Üzere",
];

export function ContactSection() {
  const [selectedProduct, setSelectedProduct] = useState("module");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [paymentOption, setPaymentOption] = useState("Peşin Ödeme");
  const [notes, setNotes] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lastGeneratedBody, setLastGeneratedBody] = useState("");

  // Listen to product selection events from other components
  useEffect(() => {
    const handleProductSelect = (event: Event) => {
      const customEvent = event as CustomEvent<{ productId: string }>;
      if (customEvent.detail?.productId) {
        setSelectedProduct(customEvent.detail.productId);
      }
    };

    window.addEventListener("enerjinova-select-product", handleProductSelect);
    return () => {
      window.removeEventListener("enerjinova-select-product", handleProductSelect);
    };
  }, []);

  const buildMailContent = () => {
    const productName =
      PRODUCT_OPTIONS.find((p) => p.id === selectedProduct)?.label ||
      selectedProduct;

    const subject = `[EnerjiNova Ürün Talebi] ${productName} - ${company || fullName || "Müşteri Talebi"}`;

    const body = `Merhaba EnerjiNova Yetkilisi,

Web siteniz üzerinden ürün/hizmet talep formunu doldurdum. Detaylar aşağıdadır:

--------------------------------------------------
TALEP DETAYLARI
--------------------------------------------------
• Talep Edilen Ürün / Hizmet : ${productName}
• Ad Soyad / Yetkili       : ${fullName || "-"}
• Şirket / Kurum Adı       : ${company || "-"}
• İletişim E-Posta         : ${email || "-"}
• Telefon Numarası         : ${phone || "-"}
• Talep Edilen Adet        : ${quantity} Adet
• Tercih Edilen Ödeme Türü : ${paymentOption}

EK NOTLAR / AÇIKLAMA:
${notes.trim() ? notes.trim() : "Ek bir not belirtilmemiştir."}

--------------------------------------------------
Sözleşme ve teslimat şartları konusunda geri dönüşünüzü rica ederim.

Saygılarımla,
${fullName || company || "Alıcı / Müşteri"}`;

    return { subject, body };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { subject, body } = buildMailContent();
    setLastGeneratedBody(body);

    const mailtoUrl = `mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Trigger user's mail client (no backend or external API required)
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(lastGeneratedBody);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  return (
    <section id="iletisim" className="py-20 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="secondary" className="px-3 py-1 text-xs">
            İletişim & Sipariş
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Ürün Talep ve İletişim Formu
          </h2>
          <p className="text-base text-muted-foreground">
            Enerji Modülü, SmartBox veya B2B tedarik ortaklığı için formu doldurarak
            doğrudan <strong className="text-foreground">{OFFICIAL_EMAIL}</strong> adresine
            talebinizi iletebilirsiniz.
          </p>
        </div>

        {/* B2B Marketplace Prominent Banner */}
        <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-5 card-hover-effect">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-sm">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div className="space-y-1 text-left">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-foreground text-base sm:text-lg">
                  Dijital Şirketler Ligi B2B Pazar Yeri
                </span>
                <Badge variant="default" className="text-[10px] bg-primary">
                  Canlı Satın Alma Portalı
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Siparişinizi beklemeden dijital pazar yeri üzerinden doğrudan vermek,
                yetkili B2B ligi sözleşme ve satın alma işlemlerini anında tamamlamak için
                öğrenci/kurumsal pazar yerini kullanabilirsiniz.
              </p>
            </div>
          </div>
          <a
            href={B2B_MARKETPLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto shrink-0"
          >
            <Button className="w-full md:w-auto gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 shadow-xs">
              <span>B2B Pazar Yerine Git</span>
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Form (7 cols) */}
          <div className="lg:col-span-7">
            <Card className="border-border shadow-xs">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>Resmi Talep Formu</span>
                </div>
                <CardTitle className="text-xl sm:text-2xl mt-1">
                  Ürün & Tedarik Talebi Oluşturun
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Formu doldurduğunuzda bilgileriniz düzenlenerek resmi e-posta adresimize ({OFFICIAL_EMAIL}) iletilmek üzere hazırlanır.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Product Choice */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-primary" />
                      <span>İlgilendiğiniz Ürün veya Hizmet *</span>
                    </label>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {PRODUCT_OPTIONS.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedProduct(item.id)}
                          className={`p-2.5 rounded-lg border text-left text-xs transition-all flex items-center justify-between ${selectedProduct === item.id
                            ? "border-primary bg-primary/10 text-foreground font-semibold shadow-2xs"
                            : "border-border bg-card text-muted-foreground hover:bg-muted"
                            }`}
                        >
                          <span>{item.label}</span>
                          {selectedProduct === item.id && (
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 ml-1" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Company */}
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-primary" />
                        <span>Yetkili Adı Soyadı *</span>
                      </label>
                      <Input
                        type="text"
                        required
                        placeholder="Örn: Sena Çeliker"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-primary" />
                        <span>Şirket / Takım Adı</span>
                      </label>
                      <Input
                        type="text"
                        placeholder="Örn: G02 Şirketi / Bağımsız"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-primary" />
                        <span>E-Posta Adresiniz *</span>
                      </label>
                      <Input
                        type="email"
                        required
                        placeholder="ornek@sirket.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-primary" />
                        <span>Telefon Numarası</span>
                      </label>
                      <Input
                        type="tel"
                        placeholder="05XX XXX XX XX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Quantity and Payment Option */}
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                        <Package className="w-3.5 h-3.5 text-primary" />
                        <span>Talep Miktarı (Adet)</span>
                      </label>
                      <Input
                        type="number"
                        min="1"
                        placeholder="1"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        <span>Ödeme / Ticari Tercih</span>
                      </label>
                      <select
                        value={paymentOption}
                        onChange={(e) => setPaymentOption(e.target.value)}
                        className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-xs text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 outline-none"
                      >
                        {PAYMENT_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-background text-foreground">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Talep Notları ve Ek Detaylar
                    </label>
                    <Textarea
                      rows={3}
                      placeholder="Teslimat turu, parti büyüklüğü veya özel anlaşma taleplerinizi buraya yazabilirsiniz..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full gap-2 py-5 text-sm font-semibold shadow-xs"
                    >
                      <Send className="w-4 h-4" />
                      <span>Talebi E-Posta ile Gönder</span>
                    </Button>
                  </div>
                </form>

                {/* Feedback / Post-Submit Status */}
                {submitted && (
                  <div className="mt-5 p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-3 animate-fade-in">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                          Talebiniz Hazırlandı & E-Posta İstemciniz Açıldı
                        </div>
                        <p className="text-xs text-emerald-700 dark:text-emerald-300 leading-relaxed">
                          E-posta programınız otomatik açılmadıysa aşağıdaki butona tıklayarak talep metnini panoya kopyalayabilir ve doğrudan <strong className="underline">{OFFICIAL_EMAIL}</strong> adresine gönderebilirsiniz.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={handleCopy}
                        className="text-xs gap-1.5 bg-background border-emerald-300 text-emerald-800 hover:bg-emerald-100"
                      >
                        {copied ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Panoya Kopyalandı!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Metni Panoya Kopyala</span>
                          </>
                        )}
                      </Button>
                      <a
                        href={`mailto:${OFFICIAL_EMAIL}?subject=${encodeURIComponent(
                          `[EnerjiNova Talep] - ${fullName || "Müşteri"}`
                        )}&body=${encodeURIComponent(lastGeneratedBody)}`}
                        className="inline-block"
                      >
                        <Button
                          type="button"
                          size="sm"
                          variant="ghost"
                          className="text-xs text-emerald-700 hover:text-emerald-900 hover:bg-emerald-100"
                        >
                          E-postayı Tekrar Aç
                        </Button>
                      </a>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Side Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Email Card */}
            <Card className="border-border shadow-xs card-hover-effect">
              <CardHeader className="pb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-1">
                  <Mail className="w-5 h-5" />
                </div>
                <CardTitle className="text-lg">Doğrudan E-Posta İletişimi</CardTitle>
                <CardDescription className="text-xs">
                  Resmi teklif, teknik şartname veya doğrudan kurumsal yazışma için
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href={`mailto:${OFFICIAL_EMAIL}`}
                  className="text-lg sm:text-xl font-bold text-primary hover:underline block break-all"
                >
                  {OFFICIAL_EMAIL}
                </a>

                <div className="p-3 rounded-lg bg-muted/60 border border-border text-xs text-muted-foreground flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>
                    Gelen tüm B2B talepleri iş günlerinde 24 saat içerisinde yanıtlanır.
                  </span>
                </div>
              </CardContent>
            </Card>


            {/* Contract & Approval Assurance */}
            <div className="p-4 rounded-xl border border-border bg-card space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Resmi Onay & Protokol</span>
              </div>
              <p className="leading-relaxed">
                Tüm sipariş ve B2B tedarik talepleri, yetkili kurul onayı ve karşılıklı sözleşme imzalandıktan sonra resmi teslimat turunda kesinleşir.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-[11px] text-primary font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Enerji Modülü: 65 ₺ • SmartBox: 850 ₺</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
