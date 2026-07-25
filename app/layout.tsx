import type { Metadata } from "next";
import { Amiri, Poppins } from "next/font/google";
import GoldVeins from "@/components/GoldVeins";
import "./globals.css";

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
    icon: "/Logo.png", // Caminho a partir da pasta public
    shortcut: "/Logo.png",
    apple: "/Logo.png", // Para quando salvarem a página na tela inicial do iPhone
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
      </body>
    </html>
  );
}

