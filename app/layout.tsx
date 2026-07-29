import type { Metadata } from "next";
import { Amiri, Poppins } from "next/font/google";
import GoldVeins from "@/components/GoldVeins";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const amiri = Amiri({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NAURE — Perfumes Árabes de Luxo",
  description: "Catálogo de perfumes árabes NAURE. Escolha seus favoritos e feche pelo WhatsApp.",

  icons: {
    icon: "/Logo.png", 
    shortcut: "/Logo.png",
    apple: "/Logo.png", 
  },
};   

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${amiri.variable} ${poppins.variable}`}>
      <body className="marble-texture relative font-body">
        <div className="pointer-events-none fixed inset-0 z-0">
          <GoldVeins />
        </div>
        <div className="relative z-10">{children}</div>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  );
}



