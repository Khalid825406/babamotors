import {
  CalendarDays,
  Gauge,
  Fuel,
  Settings2,
  UserRound,
  Cog,
  Route,
  Palette,
  ShieldCheck,
  FileText,
} from "lucide-react";
import type { Car } from "@/lib/types";
import { formatKm } from "@/lib/cars";

export default function SpecsGrid({ car }: { car: Car }) {
  const specs = [
    { icon: CalendarDays, label: "Year", value: String(car.year) },
    { icon: Gauge, label: "KM Driven", value: formatKm(car.kmDriven) },
    { icon: Fuel, label: "Fuel", value: car.fuel },
    { icon: Settings2, label: "Transmission", value: car.transmission },
    { icon: UserRound, label: "Owner", value: car.owner },
    { icon: Cog, label: "Engine", value: car.engine },
    { icon: Route, label: "Mileage", value: car.mileage },
    { icon: Palette, label: "Color", value: car.color },
    { icon: ShieldCheck, label: "Insurance", value: car.insurance },
    { icon: FileText, label: "Registration", value: car.registration },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
      {specs.map(({ icon: Icon, label, value }) => (
        <div key={label} className="flex items-start gap-3 border border-white/10 p-4 bg-charcoal">
          <Icon size={20} className="text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
          <div>
            <p className="text-xs uppercase text-white/40 tracking-wide">{label}</p>
            <p className="text-sm font-semibold text-white mt-0.5">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
