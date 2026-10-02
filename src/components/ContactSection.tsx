"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Mail, Copy, Check, Send, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [isSent, setIsSent] = useState(false);

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
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    setIsSent(true);
  };

  const faqs = [
    {
      id: "faq-1",
      q: "Siparişler ne zaman ve nasıl kesinleşir?",
      a: "Tüm alım-satım ve B2B tedarik talepleri, alıcı ile EnerjiNova arasında varılan mutabakatın ardından taraf ve ders yürütücüsü onayları tamamlandığında kesinlik kazanır.",
    },
    {
      id: "faq-2",
      q: "Vadeli ödeme şartları nasıl belirleniyor?",
      a: "Vadeli ödeme talepleri; sipariş adedi, hedef teslim turu ve geçmiş iş birliği dengesine göre değerlendirilir. Karşılıklı uzlaşma esastır.",
    },
    {
      id: "faq-3",
      q: "Minimum sipariş miktarı gerçekten 1 adet mi?",
      a: "Evet! Hem 65 TL'lik Enerji Modülü hem de 850 TL'lik SmartBox için minimum sipariş 1 adettir. Böylece ekipler ihtiyaç duydukları kadar esnek alım yapabilir.",
    },
    {
      id: "faq-4",
      q: "Fiyatlarda indirim veya piyasa güncellemesi oluyor mu?",
      a: "Fiyatlandırma prensibimiz gereği sipariş koşullarına göre görüşülebilir; simülasyon dinamikleri, hammadde ve piyasa koşullarına bağlı olarak fiyatlar güncellenebilir.",
    },
  ];

  return (
    <section id="iletisim" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="secondary" className="px-3 py-1 text-xs">
            Bize Ulaşın & Sipariş İletin
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            İş Birliği & Sipariş Talepleri
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            SmartBox alımı, Enerji Modülü B2B tedariği veya ders simülasyonu ortaklıkları
            için bize resmi iletişim adresimiz üzerinden her zaman ulaşabilirsiniz.
          </p>
        </div>

        {/* Official Email Card */}
        <div className="mt-10 max-w-xl mx-auto">
          <Card className="text-center">
            <CardHeader className="pb-2">
              <span className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">
                Resmi İletişim E-Postası
              </span>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`mailto:${email}`}
                  className="text-lg sm:text-xl font-bold text-foreground hover:text-primary transition-colors underline"
                >
                  {email}
                </a>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopyEmail}
                  className="gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-primary" />
                      <span>Kopyalandı</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Kopyala</span>
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Form and FAQ Grid */}
        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-start">
          {/* Form Card */}
          <div className="lg:col-span-7">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">B2B Sipariş Talep Formu</CardTitle>
                </div>
                <CardDescription>
                  Formu doldurarak ekibiniz adına resmi sipariş veya görüşme talebi başlatın
                </CardDescription>
              </CardHeader>

              <CardContent>
                {isSent ? (
                  <div className="p-6 rounded-lg bg-muted/50 border border-border text-center space-y-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto">
                      <Check className="w-5 h-5" />
                    </div>
                    <div className="font-bold text-foreground">
                      Talebiniz Kaydedildi!
                    </div>
                    <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                      Sayın {formData.fullName || "Yetkili"}, {formData.teamName || "Ekibiniz"} adına
                      iletilen talep alındı. Ders yürütücüsü ve sözleşme onay süreci için görüşülecektir.
                    </p>
                    <div className="pt-2">
                      <a
                        href={`mailto:${email}?subject=EnerjiNova%20Siparis%20Talebi&body=Yetkili:%20${encodeURIComponent(
                          formData.fullName
                        )}%0AEkip:%20${encodeURIComponent(formData.teamName)}`}
                      >
                        <Button variant="outline" size="sm">
                          E-Posta Programında Aç
                        </Button>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1">
                          Firma / Ekip Adı *
                        </label>
                        <Input
                          required
                          placeholder="Örn: Beta Şirketi"
                          value={formData.teamName}
                          onChange={(e) =>
                            setFormData({ ...formData, teamName: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1">
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
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        İletişim E-Postası *
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder="ekip@ornek.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>

                    <div className="grid sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1">
                          Talep Edilen Ürün
                        </label>
                        <select
                          className="h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-ring"
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
                          <option value="Her İkisi">Her İkisi</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1">
                          Miktar (Adet)
                        </label>
                        <Input
                          type="number"
                          min="1"
                          value={formData.quantity}
                          onChange={(e) =>
                            setFormData({ ...formData, quantity: e.target.value })
                          }
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-1">
                          Teslim Turu
                        </label>
                        <select
                          className="h-9 w-full rounded-md border border-input bg-background px-2.5 text-xs text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-ring"
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
                      <label className="block text-xs font-semibold text-foreground mb-1">
                        Not / Teklif Koşulları
                      </label>
                      <Textarea
                        placeholder="Vadeli ödeme talebi veya eklemek istediğiniz koşullar..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>

                    <Button type="submit" className="w-full gap-2">
                      <Send className="w-4 h-4" />
                      <span>Talebi İlet</span>
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* FAQ Card */}
          <div className="lg:col-span-5 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sıkça Sorulan Sorular</CardTitle>
                <CardDescription>
                  Simülasyon sürecine dair önemli bilgiler
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {faqs.map((faq) => (
                  <div key={faq.id} className="p-3.5 rounded-lg border border-border bg-muted/20">
                    <div className="font-semibold text-sm text-foreground">
                      {faq.q}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="p-4 rounded-lg border border-border bg-muted/30 flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div className="text-xs text-muted-foreground">
                <strong className="text-foreground">Ders Yürütücüsü Onayı:</strong> Tüm siparişler ders yürütücüsü ve tarafların ortak mutabakatı sonrası geçerlilik kazanır.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
