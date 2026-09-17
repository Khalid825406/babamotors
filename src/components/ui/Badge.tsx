interface BadgeProps {
  label: string;
  premium?: boolean;
}

export default function Badge({ label, premium = false }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
        premium
          ? "bg-black text-gold border border-gold"
          : "bg-black text-white"
      }`}
    >
      {label}
    </span>
  );
}
