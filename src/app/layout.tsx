import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enerjinova.vercel.app"),
  title: "EnerjiNova A.Ş. | SmartBox ve Enerji Modülü Çözümleri",
  description:
    "Geleceğin enerjisini üretirken, geleceği tüketmeyen bir dünya inşa ediyoruz. SmartBox ekosistemi, B2B Enerji Modülü tedariği ve sürdürülebilir teknoloji çözümleri.",
  keywords: [
    "EnerjiNova",
    "SmartBox",
    "Enerji Modülü",
    "B2B Tedarik",
    "Yenilenebilir Enerji",
    "Sürdürülebilirlik",
    "Teknoloji",
  ],
  authors: [{ name: "EnerjiNova A.Ş." }],
  openGraph: {
    title: "EnerjiNova A.Ş. | SmartBox ve Enerji Modülü",
    description:
      "Geleceğin enerjisini üretirken, geleceği tüketmeyen bir dünya inşa etmek. SmartBox ekosisteminin güvenilir güç kaynağı.",
    url: "https://enerjinova.vercel.app",
    siteName: "EnerjiNova A.Ş.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "EnerjiNova A.Ş. Logo",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
