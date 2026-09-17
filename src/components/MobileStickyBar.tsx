"use client";

import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { callLink, whatsappLink } from "@/lib/constants";

export default function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-gold/30 grid grid-cols-3">
      <a
        href={callLink()}
        className="flex flex-col items-center justify-center gap-1 py-2.5 text-white active:text-gold"
      >
        <Phone size={18} />
        <span className="text-[11px] font-semibold uppercase tracking-wide">Call</span>
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 py-2.5 text-white border-x border-white/10 active:text-gold"
      >
        <MessageCircle size={18} />
        <span className="text-[11px] font-semibold uppercase tracking-wide">WhatsApp</span>
      </a>
      <Link
        href="/cars"
        className="flex flex-col items-center justify-center gap-1 py-2.5 text-gold"
      >
        <CalendarCheck size={18} />
        <span className="text-[11px] font-semibold uppercase tracking-wide">Test Drive</span>
      </Link>
    </div>
  );
}
