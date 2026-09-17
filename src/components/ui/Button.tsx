import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "premium" | "ghost-dark";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  icon?: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-black text-white hover:bg-charcoal hover:border-gold border border-black",
  secondary:
    "bg-white text-black border border-black hover:bg-black hover:text-white",
  premium:
    "bg-black text-gold border border-gold hover:bg-charcoal",
  "ghost-dark":
    "bg-transparent text-white border border-white/40 hover:border-gold hover:text-gold",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
  icon,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}
