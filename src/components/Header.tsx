"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

import Logo from "./Logo";
import { DEALER, callLink, whatsappLink } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Buy Cars", href: "/cars" },
  { label: "Sell / Exchange", href: "/sell" },
  { label: "Finance", href: "/finance" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect page scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Active navigation
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-[100]
        w-full
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-[#81605e36]/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.20)]"
            : "bg-gradient-to-r from-[#81605e36] via-[#81605e36] to-[#81605e36]"
        }
      `}
    >
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

      {/* ================= DESKTOP / MAIN HEADER ================= */}
      <div className="container-page">
        <div className="flex h-[76px] items-center justify-between gap-5 lg:h-[82px]">
          
          {/* ================= LOGO ================= */}
       <Link
  href="/"
  aria-label="Baba Motors Home"
  className="flex shrink-0 items-center"
>
  <Logo dark />
</Link>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav
            aria-label="Main navigation"
            className="
              hidden
              lg:flex
              items-center
              gap-0.5
              rounded-full
              border
              border-white/15
              bg-black/10
              p-1.5
              backdrop-blur-md
            "
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    whitespace-nowrap
                    rounded-full
                    px-4
                    py-2.5
                    text-[14px]
                    font-medium
                    transition-all
                    duration-200
                    xl:px-5
                    xl:text-[15px]
                    ${
                      active
                        ? "bg-white text-[#b5120e] font-semibold shadow-sm"
                        : "text-white/85 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* ================= DESKTOP ACTION BUTTONS ================= */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            
            {/* Request Call */}
            <a
              href={callLink()}
              className="
                group
                inline-flex
                items-center
                gap-2.5
                rounded-full
                bg-white
                px-4
                py-2.5
                text-[14px]
                font-semibold
                text-[#b5120e]
                shadow-md
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-lg
                xl:px-5
              "
            >
              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-[#b5120e]
                  text-white
                  transition-transform
                  duration-200
                  group-hover:rotate-[-8deg]
                "
              >
                <Phone size={13} strokeWidth={2.5} />
              </span>

              <span>Request Call</span>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappLink(
                "Hi, I'm interested in a car from Baba Motors."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                px-3
                py-2.5
                text-[14px]
                font-semibold
                text-white/90
                transition-all
                duration-200
                hover:bg-white/10
                hover:text-white
              "
            >
              <MessageCircle size={17} strokeWidth={2} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/10
              text-white
              transition-all
              duration-200
              hover:bg-white/15
              lg:hidden
            "
          >
            {open ? (
              <X size={23} strokeWidth={2} />
            ) : (
              <Menu size={23} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          overflow-hidden
          border-t
          border-white/10
          bg-[#980d09]/98
          backdrop-blur-xl
          transition-all
          duration-300
          lg:hidden
          ${
            open
              ? "max-h-[700px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <div className="container-page py-5">
          
          {/* Mobile Navigation */}
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-1"
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3.5
                    text-[15px]
                    font-medium
                    transition-all
                    duration-200
                    ${
                      active
                        ? "bg-white text-[#b5120e] font-semibold"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  <span>{link.label}</span>

                  <ChevronRight
                    size={17}
                    className={active ? "opacity-100" : "opacity-40"}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Action Buttons */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            
            {/* Call */}
            <a
              href={callLink()}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-white
                px-4
                py-3.5
                text-sm
                font-semibold
                text-[#b5120e]
                shadow-md
                transition-all
                hover:bg-white/90
              "
            >
              <Phone size={17} strokeWidth={2.2} />
              Call Now
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappLink(
                "Hi, I'm interested in a car from Baba Motors."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-white/25
                bg-white/10
                px-4
                py-3.5
                text-sm
                font-semibold
                text-white
                transition-all
                hover:bg-white/15
              "
            >
              <MessageCircle size={17} strokeWidth={2.2} />
              WhatsApp
            </a>
          </div>

          {/* Address */}
          <div className="mt-5 border-t border-white/10 pt-4">
            <p className="text-xs leading-5 text-white/50">
              {DEALER.address}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}