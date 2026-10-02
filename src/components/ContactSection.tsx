"use client";

import React from "react";
import { Mail, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export function ContactSection() {
  const email = "enerjinova.iletisim@gmail.com";

  return (
    <section id="iletisim" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="space-y-3">
          <Badge variant="secondary" className="px-3 py-1 text-xs">
            İletişim
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            SmartBox alımı, B2B Enerji Modülü tedariği ve kurumsal iş birlikleri için
            bize resmi e-posta adresimiz üzerinden ulaşabilirsiniz.
          </p>
        </div>

        {/* Clean, Simple Contact Card with Subtle Snake Border */}
        <div className="snake-border-box card-hover-effect max-w-md mx-auto">
          <Card className="snake-border-inner border-0">
            <CardHeader className="pb-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-1">
                <Mail className="w-5 h-5" />
              </div>
              <CardTitle className="text-lg">Resmi E-Posta</CardTitle>
              <CardDescription>
                Doğrudan mesaj veya teklif iletmek için tıklayın
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href={`mailto:${email}`}
                className="text-lg sm:text-xl font-bold text-primary hover:underline block break-all"
              >
                {email}
              </a>

              <div className="p-3 rounded-lg bg-muted/50 border border-border text-xs text-muted-foreground flex items-center justify-center gap-2 text-left">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span>
                  Siparişler, yetkili kurul ve sözleşme onay süreçleri tamamlandıktan sonra kesinleşir.
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
