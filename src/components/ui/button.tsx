import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "solar" | "emerald";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer";

    const variants = {
      default:
        "bg-emerald-700 text-white shadow-sm hover:bg-emerald-800 hover:shadow-emerald-900/20 hover:shadow-md",
      emerald:
        "bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-700 text-white shadow-md hover:shadow-emerald-700/25 hover:from-emerald-900 hover:to-teal-800",
      solar:
        "bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold shadow-md hover:shadow-amber-500/30 hover:from-amber-600 hover:to-amber-700",
      secondary:
        "bg-emerald-50 text-emerald-900 border border-emerald-200/60 hover:bg-emerald-100/80",
      outline:
        "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:text-slate-900 shadow-xs",
      ghost: "hover:bg-slate-100 text-slate-700 hover:text-slate-900",
    };

    const sizes = {
      default: "h-11 px-5 py-2.5",
      sm: "h-9 rounded-lg px-3.5 text-xs",
      lg: "h-12 rounded-xl px-7 text-base font-semibold",
      icon: "h-10 w-10",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
