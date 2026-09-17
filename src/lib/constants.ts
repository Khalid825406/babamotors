export const DEALER = {
  name: "Baba Motors",
  address: "Near Madhuvan Dhaba, Chakla, Ormanjhi, Ranchi, Jharkhand",
  phone: "+91 90000 00000",
  phoneRaw: "+919000000000",
  whatsapp: "+91 90000 00000",
  whatsappRaw: "919000000000",
  email: "info@babamotors.in",
  mapsUrl: "https://maps.google.com/?q=Madhuvan+Dhaba+Chakla+Ormanjhi+Ranchi+Jharkhand",
};

export function whatsappLink(message?: string) {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${DEALER.whatsappRaw}${text}`;
}

export function callLink() {
  return `tel:${DEALER.phoneRaw}`;
}
