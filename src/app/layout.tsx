import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ARC — Apple Premium Reseller Colombia",
  description:
    "iPhone 17 Pro Max, MacBook, Apple Watch y AirPods. El ecosistema Apple completo, al mejor precio de Colombia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${instrumentSerif.variable} ${inter.variable}`}
    >
      <body className="bg-studio text-ink antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
