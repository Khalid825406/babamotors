import type { Metadata } from "next";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import Location from "@/components/home/Location";
import { DEALER, callLink, whatsappLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Baba Motors",
  description: "Get in touch with Baba Motors, Ranchi — call, WhatsApp, or visit our showroom.",
};

export default function ContactPage() {
  const contactItems = [
    { icon: MapPin, label: "Address", value: DEALER.address },
    { icon: Phone, label: "Phone", value: DEALER.phone, href: callLink() },
    { icon: MessageCircle, label: "WhatsApp", value: DEALER.whatsapp, href: whatsappLink() },
    { icon: Mail, label: "Email", value: DEALER.email, href: `mailto:${DEALER.email}` },
  ];

  return (
    <div className="pt-[60px] bg-[#111111]">
      <PageHero title="Contact Baba Motors" subtitle="We're here to help you find your next car." />

      <section className="bg-black py-16 border-t border-white/5">
        <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contactItems.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <div className="bg-charcoal border border-white/10 p-6 h-full hover:border-gold transition-colors">
                <Icon size={24} className="text-gold" strokeWidth={1.5} />
                <p className="text-xs uppercase text-white/40 mt-4">{label}</p>
                <p className="text-sm font-semibold text-white mt-1">{value}</p>
              </div>
            );
            return href ? (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </div>
      </section>

      <Location />
    </div>
  );
}
