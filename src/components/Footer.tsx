"use client";

import React from "react";
import Image from "next/image";
import { Mail, ShieldCheck, Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="relative h-12 w-40">
              <Image
                src="/logo.png"
                alt="EnerjiNova A.Ş."
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Geleceğin enerjisini üretirken, geleceği tüketmeyen bir dünya inşa etmek.
              SmartBox ekosisteminde uzmanlaştığımız Enerji Modülü üretimi ile öncü teknoloji şirketi.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>Standart Kalite & Sözleşmeli Teslimat</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-bold text-white text-sm uppercase tracking-wider">
              Hızlı Erişim
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hakkimizda"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Kurumsal & Misyon
                </a>
              </li>
              <li>
                <a
                  href="#urunler"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Enerji Modülü & SmartBox
                </a>
              </li>
              <li>
                <a
                  href="#mimari"
                  className="hover:text-emerald-400 transition-colors"
                >
                  8 Bileşen Mimarisi
                </a>
              </li>
              <li>
                <a
                  href="#fiyat-listesi"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Fiyat Listesi & Koşullar
                </a>
              </li>
              <li>
                <a
                  href="#hesaplayici"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Sipariş Hesaplayıcı
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Simulation disclaimer */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="font-bold text-white text-sm uppercase tracking-wider">
              İletişim & Onay
            </h5>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-emerald-400" />
                <a
                  href="mailto:enerjinova.iletisim@gmail.com"
                  className="text-amber-300 font-semibold hover:underline"
                >
                  enerjinova.iletisim@gmail.com
                </a>
              </div>
              <p className="text-[11px] text-slate-400">
                Sipariş onayları gerekli taraf ve ders yürütücüsü onayları tamamlandıktan sonra yürürlüğe girer.
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer pt-2"
            >
              <span>Yukarı Çık</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © {new Date().getFullYear()} EnerjiNova A.Ş. — Tüm Hakları Saklıdır.
          </div>
          <div className="text-[11px] text-slate-500">
            Ders Simülasyonu Kapsamında Hazırlanmıştır
          </div>
        </div>
      </div>
    </footer>
  );
}
