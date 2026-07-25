import Image from "next/image";
import { SLOGAN_LOJA } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-2 text-center">
      <div className="flex flex-col items-center animate-fadeUp">
        <Image
          src="/Logo.png"
          alt="NAURE — Perfumes Árabes de Luxo"
          width={200}
          height={200}
          priority
          className="w-38 sm:w-46"
        />

        <p className="mt-4 max-w-md font-body text-xs tracking-wider2 text-gold-pale/90 sm:text-sm">
          {SLOGAN_LOJA}
        </p>

        <div className="ornament-divider mt-5 w-full max-w-xs">
          <span className="diamond" />
        </div>

        <p className="mt-5 max-w-lg font-body text-xs leading-relaxed text-ivory/60">
          Escolha seus favoritos e envie a seleção diretamente pelo WhatsApp —
          sem cadastro, sem complicação.
        </p>
      </div>
    </section>
  );
}