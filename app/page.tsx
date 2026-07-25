import Hero from "@/components/Hero";
import Catalogo from "@/components/Catalogo";
import { perfumes } from "@/data/perfumes";

export default function Home() {
  return (
    <main>
      <Hero />
      <Catalogo perfumes={perfumes} />
      <footer className="border-t border-gold/10 py-8 text-center font-body text-[11px] text-ivory/30">
        NAURE — Perfumes Árabes de Luxo
      </footer>
    </main>
  );
}
