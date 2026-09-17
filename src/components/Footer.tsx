"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ChevronDown,
  ArrowUp,
} from "lucide-react";
import Logo from "./Logo";
import { DEALER, callLink, whatsappLink } from "@/lib/constants";

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.1c0-.8.2-1.4 1.4-1.4h1.5V5.2c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8.1v2.8h2.4V21h3Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="17.1" cy="6.9" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const LINK_GROUPS = [
  {
    title: "Buy",
    links: [
      { label: "Used Cars", href: "/cars" },
      { label: "Featured Cars", href: "/cars?featured=true" },
      { label: "Compare Cars", href: "/cars" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Exchange", href: "/sell" },
      { label: "Sell Your Car", href: "/sell" },
      { label: "Finance", href: "/finance" },
      { label: "Test Drive", href: "/cars" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/contact" },
      { label: "Privacy", href: "/contact" },
      { label: "Terms", href: "/contact" },
    ],
  },
];

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 lg:border-none">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-4 lg:py-0 lg:pointer-events-none lg:cursor-default"
      >
        <h4 className="text-xs font-semibold uppercase tracking-wider text-gold lg:mb-4">
          {title}
        </h4>
        <ChevronDown
          size={16}
          className={`text-white/50 transition-transform lg:hidden ${open ? "rotate-180" : ""}`}
        />
      </button>
      <ul
        className={`space-y-2.5 text-sm text-white/70 overflow-hidden transition-all lg:!max-h-none lg:!pb-0 lg:block ${
          open ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="hover:text-gold transition-colors inline-block py-0.5">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-black text-white">
      <div className="gold-line !w-full !h-[2px]" />

      <div className="container-page py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr] gap-x-10 gap-y-2 lg:gap-y-0">
          <div className="pb-6 lg:pb-0 border-b border-white/10 lg:border-none mb-2 lg:mb-0">
            <Logo dark />
            <p className="text-sm text-white/60 mt-4 leading-relaxed max-w-[220px]">
              Quality Used Cars in Ranchi.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="#"
                aria-label="Baba Motors on Facebook"
                className="w-9 h-9 flex items-center justify-center border border-white/15 text-white/70 hover:border-gold hover:text-gold transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Baba Motors on Instagram"
                className="w-9 h-9 flex items-center justify-center border border-white/15 text-white/70 hover:border-gold hover:text-gold transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Baba Motors on WhatsApp"
                className="w-9 h-9 flex items-center justify-center border border-white/15 text-white/70 hover:border-gold hover:text-gold transition-colors"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <FooterLinkGroup key={group.title} title={group.title} links={group.links} />
          ))}

          <div className="pt-6 lg:pt-0">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span>{DEALER.address}</span>
              </li>
              <li>
                <a
                  href={callLink()}
                  className="flex items-center gap-2.5 hover:text-gold transition-colors"
                >
                  <Phone size={16} className="text-gold shrink-0" />
                  <span>{DEALER.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-gold transition-colors"
                >
                  <MessageCircle size={16} className="text-gold shrink-0" />
                  <span>{DEALER.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${DEALER.email}`}
                  className="flex items-center gap-2.5 hover:text-gold transition-colors"
                >
                  <Mail size={16} className="text-gold shrink-0" />
                  <span>{DEALER.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center sm:text-left">
            © 2026 Baba Motors. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/60 hover:text-gold transition-colors"
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
