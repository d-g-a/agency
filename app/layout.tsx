import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const sans = Inter_Tight({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: { default: "aa-cr — An act of collective recklessness", template: "%s — aa-cr" },
  description: "aa-cr is a booking and artist agency. An act of collective recklessness.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
