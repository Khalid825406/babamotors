import type { Metadata, Viewport } from "next";
import { Poppins, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Baba Motors | Quality Used Cars in Ranchi",
  description:
    "Baba Motors — Quality pre-owned cars in Ranchi with finance assistance, easy exchange, and test drives. Near Madhuvan Dhaba, Chakla, Ormanjhi, Ranchi, Jharkhand.",
};

export const viewport: Viewport = {
  themeColor: "#111111",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <Header />
        <main className="flex-1 lg:pb-0" >{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
