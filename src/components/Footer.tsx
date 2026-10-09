"use client";

import React from "react";
import Image from "next/image";
import { Mail, ShieldCheck, ArrowUp, ShoppingBag, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const OFFICIAL_EMAIL = "enerjinova.iletisim@gmail.com";
const B2B_MARKETPLACE_URL =
  "https://dijital-sirketler-ligi-serhat-ata.ataserhat54.chatgpt.site/ogrenci";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-muted/40 border-t border-border text-xs text-muted-foreground">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="relative h-10 w-36">
              <Image
                src="/logo.png"
                alt="EnerjiNova A.Ş."
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="leading-relaxed max-w-sm">
              Geleceğin enerjisini üretirken, geleceği tüketmeyen bir dünya inşa etmek.
              SmartBox ekosisteminde uzmanlaştığımız Enerji Modülü üretimi ile öncü teknoloji şirketi.
            </p>
            <div className="flex items-center gap-2 text-foreground font-medium">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Standart Kalite & Sözleşmeli Teslimat</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="font-semibold text-foreground text-sm">
              Hızlı Erişim
            </div>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="#hakkimizda"
                  className="hover:text-foreground transition-colors"
                >
                  Kurumsal & Misyon
                </a>
              </li>
              <li>
                <a
                  href="#urunler"
                  className="hover:text-foreground transition-colors"
                >
                  Enerji Modülü & SmartBox
                </a>
              </li>
              <li>
                <a
                  href="#mimari"
                  className="hover:text-foreground transition-colors"
                >
                  8 Bileşen Mimarisi
                </a>
              </li>
              <li>
                <a
                  href="#fiyat-listesi"
                  className="hover:text-foreground transition-colors"
                >
                  Fiyat Listesi & Koşullar
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="hover:text-foreground transition-colors font-medium text-primary"
                >
                  Ürün Talep & İletişim Formu
                </a>
              </li>
              <li>
                <a
                  href={B2B_MARKETPLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors inline-flex items-center gap-1 text-primary font-medium"
                >
                  <ShoppingBag className="w-3 h-3" />
                  <span>B2B Pazar Yeri Portalı</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-semibold text-foreground text-sm">
              İletişim & Satın Alma
            </div>
            <div className="p-3.5 rounded-lg border border-border bg-card space-y-2">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href={`mailto:${OFFICIAL_EMAIL}`}
                  className="hover:underline text-primary break-all"
                >
                  {OFFICIAL_EMAIL}
                </a>
              </div>
              <p className="text-[11px] text-muted-foreground">
                Sipariş onayları kurumsal sözleşme ve yetkili onayları ile kesinleşir.
              </p>
              <div className="pt-1">
                <a
                  href={B2B_MARKETPLACE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-primary hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>B2B Satın Alma / Pazar Yeri Linki</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="gap-1 text-xs text-muted-foreground hover:text-foreground px-0"
            >
              <span>Yukarı Dön</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-muted-foreground">
          <div>
            © {new Date().getFullYear()} EnerjiNova A.Ş. — Tüm Hakları Saklıdır.
          </div>
          <div>SmartBox & B2B Enerji Çözümleri • enerjinova.iletisim@gmail.com</div>
        </div>
      </div>
    </footer>
  );
}
