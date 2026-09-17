interface LogoProps {
  dark?: boolean;
}

export default function Logo({ dark = false }: LogoProps) {
  const textColor = dark ? "text-white" : "text-black";
  return (
    <div className="flex flex-col leading-none select-none">
      <span className={`font-display text-2xl font-bold tracking-wide ${textColor}`}>
        BABA<span className="text-gold">.</span>
      </span>
      <span className="flex items-center gap-1.5">
        <span className="gold-line !w-4" />
        <span className={`text-[10px] font-semibold uppercase tracking-[0.25em] ${dark ? "text-white/70" : "text-text-secondary"}`}>
          Motors
        </span>
      </span>
    </div>
  );
}
