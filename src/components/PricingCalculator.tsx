"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Calculator,
  Plus,
  Minus,
  Send,
  CheckCircle,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

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
    });
    setIsSubmitted(true);
  };

  return (
    <section id="hesaplayici" className="py-20 bg-muted/30 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="secondary" className="px-3 py-1 text-xs">
            İnteraktif Simülasyon Aracı
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            B2B Sipariş & Maliyet Hesaplayıcı
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Şirketiniz veya ekibiniz için ihtiyaç duyduğunuz Enerji Modülü ve SmartBox miktarlarını
            belirleyerek anında şeffaf maliyet dökümü ve resmi teklif taslağı oluşturun.
          </p>
        </div>

        <div className="mt-12 max-w-5xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Controls Card */}
          <div className="lg:col-span-7">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">Sipariş Parametreleri</CardTitle>
                </div>
                <CardDescription>
                  Almak istediğiniz ürün miktarlarını ve teslimat detaylarını belirleyin
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5">
                {/* SmartBox Counter */}
                <div className="p-4 rounded-lg border border-border bg-background space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-sm text-foreground">
                        SmartBox (Nihai Ürün)
                      </div>
                      <div className="text-xs text-muted-foreground">
                        850 TL / adet (Standart Kalite)
                      </div>
                    </div>
                    <span className="text-sm font-bold text-foreground">
                      {totalSmartbox.toLocaleString("tr-TR")} TL
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => setSmartboxCount(Math.max(0, smartboxCount - 1))}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <Input
                      type="number"
                      min="0"
                      value={smartboxCount}
                      onChange={(e) =>
                        setSmartboxCount(Math.max(0, parseInt(e.target.value) || 0))
                      }
                      className="w-20 text-center font-bold"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => setSmartboxCount(smartboxCount + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                    <span className="text-xs text-muted-foreground">Adet</span>
                  </div>
                </div>

                {/* Enerji Modülü Counter */}
                <div className="p-4 rounded-lg border border-primary/30 bg-primary/5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-sm text-foreground flex items-center gap-1.5">
                        <span>Enerji Modülü</span>
                        <Badge variant="default" className="text-[10px] py-0 px-1.5">
                          B2B
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        65 TL / adet (Minimum 1 adet)
                      </div>
                    </div>
                    <span className="text-sm font-bold text-primary">
                      {totalModule.toLocaleString("tr-TR")} TL
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => setModuleCount(Math.max(0, moduleCount - 1))}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <Input
                      type="number"
                      min="0"
                      value={moduleCount}
                      onChange={(e) =>
                        setModuleCount(Math.max(0, parseInt(e.target.value) || 0))
                      }
                      className="w-20 text-center font-bold"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => setModuleCount(moduleCount + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                    <span className="text-xs text-muted-foreground">Adet</span>
                  </div>
                </div>

                {/* Round and Payment */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Hedef Teslimat Turu
                    </label>
                    <select
                      value={round}
                      onChange={(e) => setRound(e.target.value)}
                      className="h-9 w-full rounded-md border border-input bg-background px-3 text-xs text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="Tur 1">Tur 1 (Erken Teslim)</option>
                      <option value="Tur 2">Tur 2 (Standart Dönem)</option>
                      <option value="Tur 3">Tur 3 (Genişleme Aşaması)</option>
                      <option value="Tur 4">Tur 4 (İleri Tur)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      Ödeme Şekli
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        type="button"
                        variant={paymentType === "pesin" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setPaymentType("pesin")}
                      >
                        Peşin
                      </Button>
                      <Button
                        type="button"
                        variant={paymentType === "vadeli" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setPaymentType("vadeli")}
                      >
                        Vadeli
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Talep Eden Firma / Ekip Adı
                  </label>
                  <Input
                    placeholder="Örn: Alfa Mühendislik / Grup 3"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Summary Card */}
          <div className="lg:col-span-5">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Canlı Teklif Özeti</CardTitle>
                  <Badge variant="outline">Simülasyon Kuru</Badge>
                </div>
                <CardDescription>
                  Hesaplanan maliyet dökümü
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between items-center text-muted-foreground">
                  <span>SmartBox ({smartboxCount} adet x 850 TL):</span>
                  <span className="font-semibold text-foreground">
                    {totalSmartbox.toLocaleString("tr-TR")} TL
                  </span>
                </div>

                <div className="flex justify-between items-center text-muted-foreground">
                  <span>Enerji Modülü ({moduleCount} adet x 65 TL):</span>
                  <span className="font-semibold text-foreground">
                    {totalModule.toLocaleString("tr-TR")} TL
                  </span>
                </div>

                <div className="flex justify-between items-center text-muted-foreground">
                  <span>Teslimat Turu:</span>
                  <span className="font-semibold text-foreground">{round}</span>
                </div>

                <div className="flex justify-between items-center text-muted-foreground">
                  <span>Ödeme Koşulu:</span>
                  <span className="font-semibold text-foreground capitalize">
                    {paymentType === "pesin" ? "Peşin Ödeme" : "Vadeli (Görüşmeye Bağlı)"}
                  </span>
                </div>

                <div className="flex justify-between items-center text-muted-foreground">
                  <span>Kalite Standardı:</span>
                  <span className="font-semibold text-foreground">Standart Kalite</span>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="text-xs text-muted-foreground">
                    Tahmini Toplam Tutar:
                  </div>
                  <div className="text-3xl font-bold text-primary mt-1">
                    {grandTotal.toLocaleString("tr-TR")} TL
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-1">
                    *Piyasa şartları ve sipariş koşullarına göre görüşülebilir.
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-muted/50 border border-border text-xs text-muted-foreground flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong>Sipariş Onayı:</strong> Taraf ve ders yürütücüsü onayları tamamlandıktan sonra kesinleşir.
                  </span>
                </div>
              </CardContent>

              <CardFooter className="pt-2">
                {!isSubmitted ? (
                  <Button
                    onClick={handleCalculateSubmit}
                    variant="default"
                    className="w-full gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Teklif Taslağını Onayla</span>
                  </Button>
                ) : (
                  <div className="w-full p-3 rounded-lg bg-primary/10 border border-primary/20 text-center space-y-1">
                    <div className="flex items-center justify-center gap-1.5 text-primary font-semibold text-xs">
                      <CheckCircle className="w-4 h-4" />
                      <span>Teklif Taslağı Oluşturuldu</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground">
                      Talebinizi aşağıdaki formdan bize iletebilirsiniz.
                    </p>
                  </div>
                )}
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
