"use client";

import React, { useState, useEffect } from "react";
import {
  Send,
  CheckCircle2,
  Package,
  Cpu,
  Building2,
  FileCheck2,
  RotateCcw,
  ExternalLink,
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

export function OrderSection() {
  const [companyCode, setCompanyCode] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<string>("module");
  const [quantity, setQuantity] = useState<number>(10);
  const [paymentTerm, setPaymentTerm] = useState<string>("pesin");
  const [deliveryRound, setDeliveryRound] = useState<string>("Tur 3");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderRef, setOrderRef] = useState("");

  // Allow preselection from hash or event
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#siparis-modul") {
        setSelectedProduct("module");
      } else if (hash === "#siparis-smartbox") {
        setSelectedProduct("smartbox");
      } else if (hash === "#siparis-b2b") {
        setSelectedProduct("b2b");
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const prices: Record<string, number> = {
    module: 65,
    smartbox: 850,
    b2b: 65,
  };

  const productNames: Record<string, string> = {
    module: "Enerji Modülü (B2B Tedarik - 65 ₺)",
    smartbox: "SmartBox (Nihai Cihaz - 850 ₺)",
    b2b: "B2B Stratejik Tedarik Protokolü",
  };

  const estimatedTotal = (prices[selectedProduct] || 0) * (Number(quantity) || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyCode || !contactEmail || !quantity) return;

    const randomRef = `ENOV-T3-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderRef(randomRef);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setCompanyCode("");
    setContactEmail("");
    setQuantity(10);
    setNotes("");
  };

  return (
    <section id="siparis" className="relative py-16 bg-background border-b border-border">
      <div id="siparis-modul" className="absolute -top-20" />
      <div id="siparis-smartbox" className="absolute -top-20" />
      <div id="siparis-b2b" className="absolute -top-20" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <Badge variant="secondary" className="px-3 py-0.5 text-xs">
            B2B & Nihai Ürün İşlem Kanalı
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Resmî Sipariş ve Tedarik Talep Formu
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            SmartBox üretici ortakları ve kurumsal alıcılar için doğrudan işlem formu.
            Talepleriniz sistem kayıtlarına ve sözleşme protokolüne anında aktarılır.
          </p>
        </div>

        <div className="mt-10 max-w-2xl mx-auto">
          {isSubmitted ? (
            <Card className="border-primary/50 shadow-md animate-fade-in bg-card">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-foreground">
                    Sipariş Talebi Başarıyla Oluşturuldu
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Talebiniz kayıt altına alınmış olup teslimat turu için tahsis planlamasına eklendi.
                  </p>
                </div>

                {/* Summary box */}
                <div className="p-4 rounded-lg bg-muted/40 border border-border text-left space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-border/60">
                    <span className="text-muted-foreground">Referans Kodu:</span>
                    <span className="font-bold text-primary">{orderRef}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/60">
                    <span className="text-muted-foreground">Alıcı Şirket Kodu:</span>
                    <span className="font-semibold text-foreground">{companyCode}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/60">
                    <span className="text-muted-foreground">İletişim:</span>
                    <span className="text-foreground">{contactEmail}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/60">
                    <span className="text-muted-foreground">Ürün:</span>
                    <span className="font-semibold text-foreground">
                      {productNames[selectedProduct]}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/60">
                    <span className="text-muted-foreground">Talep Edilen Miktar:</span>
                    <span className="font-semibold text-foreground">{quantity} Adet</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-border/60">
                    <span className="text-muted-foreground">Ödeme / Teslim Turu:</span>
                    <span className="text-foreground">
                      {paymentTerm === "pesin" ? "Peşin" : "Vadeli Takas"} • {deliveryRound}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 pt-2 text-sm font-bold">
                    <span>Tahmini Toplam Tutar:</span>
                    <span className="text-primary">{estimatedTotal.toLocaleString("tr-TR")} ₺</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
                  <Button size="sm" onClick={handleReset} variant="outline" className="gap-2">
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Yeni Sipariş Talebi Ver</span>
                  </Button>
                  <a href={`mailto:enerjinova.iletisim@gmail.com?subject=Sipariş Onayı - ${orderRef}&body=Sipariş Referansı: ${orderRef}%0AŞirket Kodu: ${companyCode}%0AÜrün: ${productNames[selectedProduct]}%0AMiktar: ${quantity} Adet`}>
                    <Button size="sm" className="gap-2">
                      <FileCheck2 className="w-3.5 h-3.5" />
                      <span>E-Posta Onayı Gönder</span>
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-border shadow-xs">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  <span>Sipariş & B2B Talep Formu</span>
                </CardTitle>
                <CardDescription className="text-xs">
                  Aşağıdaki alanları eksiksiz doldurarak siparişinizi resmi onay sürecine iletebilirsiniz.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Grid 1: Company code & Email */}
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-primary" />
                        <span>Alıcı Şirket Kodu *</span>
                      </label>
                      <Input
                        required
                        placeholder="Örn: G02, G05, NovaTech..."
                        value={companyCode}
                        onChange={(e) => setCompanyCode(e.target.value)}
                        className="text-xs h-9"
                      />
                      <span className="text-[10px] text-muted-foreground">
                        Simülasyondaki şirket kodunuz veya unvanınız
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        İletişim / E-Posta *
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="sirket@ornek.com"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="text-xs h-9"
                      />
                      <span className="text-[10px] text-muted-foreground">
                        Onay ve sözleşme bildirimi için
                      </span>
                    </div>
                  </div>

                  {/* Product selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-primary" />
                      <span>Talep Edilen Ürün / Hizmet *</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedProduct("module")}
                        className={`p-2.5 rounded-lg border text-left transition-all text-xs ${
                          selectedProduct === "module"
                            ? "border-primary bg-primary/5 text-foreground ring-1 ring-primary"
                            : "border-border bg-card hover:bg-muted text-muted-foreground"
                        }`}
                      >
                        <div className="font-bold text-foreground">Enerji Modülü</div>
                        <div className="text-[11px] text-primary font-semibold mt-0.5">65 ₺ / Adet</div>
                        <div className="text-[10px] text-muted-foreground mt-0.5">B2B Öz Üretim</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedProduct("smartbox")}
                        className={`p-2.5 rounded-lg border text-left transition-all text-xs ${
                          selectedProduct === "smartbox"
                            ? "border-primary bg-primary/5 text-foreground ring-1 ring-primary"
                            : "border-border bg-card hover:bg-muted text-muted-foreground"
                        }`}
                      >
                        <div className="font-bold text-foreground">SmartBox</div>
                        <div className="text-[11px] text-foreground font-semibold mt-0.5">850 ₺ / Adet</div>
                        <div className="text-[10px] text-muted-foreground mt-0.5">8 Bileşenli Cihaz</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedProduct("b2b")}
                        className={`p-2.5 rounded-lg border text-left transition-all text-xs ${
                          selectedProduct === "b2b"
                            ? "border-primary bg-primary/5 text-foreground ring-1 ring-primary"
                            : "border-border bg-card hover:bg-muted text-muted-foreground"
                        }`}
                      >
                        <div className="font-bold text-foreground">B2B Protokolü</div>
                        <div className="text-[11px] text-muted-foreground font-semibold mt-0.5">50–75 ₺ Bandı</div>
                        <div className="text-[10px] text-muted-foreground mt-0.5">Karşılıklı Takas</div>
                      </button>
                    </div>
                  </div>

                  {/* Quantity & Options */}
                  <div className="grid sm:grid-cols-3 gap-3.5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Talep Edilen Miktar (Adet) *
                      </label>
                      <Input
                        required
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="text-xs h-9"
                      />
                      <span className="text-[10px] text-muted-foreground">Minimum: 1 Adet</span>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Ödeme Koşulu
                      </label>
                      <select
                        aria-label="Ödeme Koşulu"
                        value={paymentTerm}
                        onChange={(e) => setPaymentTerm(e.target.value)}
                        className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-xs shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        <option value="pesin">Peşin Ödeme</option>
                        <option value="vadeli">Vadeli Sözleşmeli</option>
                      </select>
                      <span className="text-[10px] text-muted-foreground">Resmi tarife şartları</span>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">
                        Teslimat Turu
                      </label>
                      <select
                        aria-label="Teslimat Turu"
                        value={deliveryRound}
                        onChange={(e) => setDeliveryRound(e.target.value)}
                        className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-xs shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        <option value="Tur 3">Tur 3 (Mevcut Tur)</option>
                        <option value="Tur 4">Tur 4 (Gelecek Dönem)</option>
                      </select>
                      <span className="text-[10px] text-muted-foreground">Sözleşmeli teslim turu</span>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Özel Şartlar / Protokol Notu (Opsiyonel)
                    </label>
                    <Textarea
                      placeholder="Ek teslimat koşulları, karşılıklı girdi takas teklifiniz veya kurumsal notlarınız..."
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="text-xs"
                    />
                  </div>

                  {/* Subtotal Preview */}
                  <div className="p-3 rounded-lg bg-muted/40 border border-border flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">Tahmini İşlem Tutarı:</span>
                      <div className="text-xs text-muted-foreground">
                        {quantity} adet x {prices[selectedProduct]} ₺
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">
                        {estimatedTotal.toLocaleString("tr-TR")} ₺
                      </div>
                      <span className="text-[10px] text-muted-foreground">KDV / Vergi hariç</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" size="default" className="w-full gap-2 font-semibold">
                    <Send className="w-4 h-4" />
                    <span>Sipariş Talebini İlet ve Kaydet</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {/* External Alternative note */}
          <div className="mt-4 p-3 rounded-lg border border-dashed border-border bg-card/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <div className="text-[11px] text-muted-foreground">
              Google Forms veya Tally gibi harici bir form bağlantınız varsa, butonları doğrudan harici formunuza da bağlayabilirsiniz.
            </div>
            <a
              href="mailto:enerjinova.iletisim@gmail.com?subject=Siparis%20Talep%20Formu"
              className="text-xs text-primary font-medium hover:underline inline-flex items-center gap-1 shrink-0"
            >
              <span>E-posta Formu</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
