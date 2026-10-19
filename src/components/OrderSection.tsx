"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  ShoppingBag,
  CheckCircle2,
  Copy,
  Check,
  Building2,
  ShieldAlert,
  Coins,
  MessageSquare,
  Scale,
  Layers,
  ArrowRight,
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

export const ORDER_MARKETPLACE_URL =
  "https://dijital-sirketler-ligi-serhat-ata.ataserhat54.chatgpt.site/ogrenci?marketCompany=G01";

export function OrderSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(ORDER_MARKETPLACE_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const formFeatures = [
    {
      title: "Ürün Seçimi",
      desc: "Enerji Modülü (B2B) ve SmartBox nihai cihaz ilanları.",
      icon: Layers,
    },
    {
      title: "Adet Belirleme",
      desc: "Satışa açılan stok miktarınca esnek parti büyüklüğü.",
      icon: ShoppingBag,
    },
    {
      title: "Peşin / Vadeli Ödeme",
      desc: "Anlık likiditeye göre peşin veya vadeli ödeme opsiyonu.",
      icon: Coins,
    },
    {
      title: "Pazarlık İmkânı",
      desc: "Lig kuralları çerçevesinde teklif sunma ve pazarlık kanalı.",
      icon: Scale,
    },
    {
      title: "Mesaj & Not İletimi",
      desc: "Doğrudan şirket yöneticisine özel talep iletebilme.",
      icon: MessageSquare,
    },
  ];

  return (
    <section id="siparis" className="relative py-16 bg-background border-b border-border">
      <div id="siparis-modul" className="absolute -top-20" />
      <div id="siparis-smartbox" className="absolute -top-20" />
      <div id="siparis-b2b" className="absolute -top-20" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <Badge variant="secondary" className="px-3 py-0.5 text-xs font-semibold">
            Lig Pazarı Sipariş Kanalı
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Sipariş Formu ve Satın Alma Bağlantısı
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Ürün, adet, peşin/vadeli ödeme, pazarlık ve mesaj seçenekleri lig pazarındaki
            sipariş formunda bulunur.
          </p>
        </div>

        {/* 5 Features Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
          {formFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="p-3.5 rounded-lg border border-border bg-card/60 flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 text-primary font-semibold text-xs">
                  <div className="p-1 rounded bg-primary/10 text-primary">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span>{feat.title}</span>
                </div>
                <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Action Card */}
        <div className="mt-8 max-w-3xl mx-auto">
          <Card className="border-primary/40 bg-card shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-6 sm:p-8 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                    <Building2 className="w-4 h-4" />
                    <span>EnerjiNova A.Ş. (G01) Resmî Mağazası</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Lig Pazarında Sipariş Oluşturun
                  </h3>
                  <p className="text-xs text-muted-foreground max-w-lg leading-relaxed">
                    Alıcı kendi şirket hesabıyla giriş yapar; işlemi yetkili müdürü tamamlar.
                  </p>
                </div>

                <a
                  href={ORDER_MARKETPLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Lig Sipariş Formuna Git</span>
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </a>
              </div>

              {/* URL Display and Copy */}
              <div className="pt-2">
                <label className="text-[11px] font-semibold text-foreground mb-1 block">
                  Web sayfanıza eklenecek doğrudan satın alma bağlantısı:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={ORDER_MARKETPLACE_URL}
                    className="flex-1 h-9 px-3 text-xs bg-background/80 rounded-md border border-input text-muted-foreground font-mono truncate select-all"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleCopyLink}
                    className="gap-1.5 text-xs h-9 px-3 shrink-0"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-600 font-medium">Kopyalandı</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Kopyala</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Status Note */}
              <div className="pt-1 flex items-start gap-2.5 text-xs text-muted-foreground bg-muted/60 p-3 rounded-md border border-border/80">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed">
                  <strong>Lig Pazar Bilgisi:</strong> Lig içindeki pazar siparişine yönlendirir.
                  Şirket web mağazalarına genel geçiş, lig yöneticisinin onayını beklemeye devam eder.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
