interface MapEmbedProps {
  query?: string;
  className?: string;
}

export default function MapEmbed({
  query = "Ormanjhi,Ranchi,Jharkhand",
  className = "",
}: MapEmbedProps) {
  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      <iframe
        title="Baba Motors Location"
        className="w-full h-full"
        style={{
          filter:
            "invert(92%) hue-rotate(180deg) brightness(0.9) contrast(0.9) saturate(0.6)",
        }}
        loading="lazy"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=13&output=embed`}
      />
      <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10" />
    </div>
  );
}
