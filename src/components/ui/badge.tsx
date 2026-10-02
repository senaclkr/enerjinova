import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "solar" | "emerald";
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "bg-emerald-100 text-emerald-800 border-emerald-200/80",
    secondary:
      "bg-slate-100 text-slate-800 border-slate-200",
    outline:
      "border-slate-300 text-slate-700 bg-transparent",
    solar:
      "bg-amber-50 text-amber-800 border-amber-200/80 shadow-xs",
    emerald:
      "bg-emerald-900/10 text-emerald-950 border-emerald-300 font-medium",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
