"use client";

import { useMemo, useState } from "react";
import { Perfume, Familia } from "@/data/perfumes";
import PerfumeCard from "./PerfumeCard";
import PerfumeModal from "./PerfumeModal";
import CarrinhoDrawer from "./CarrinhoDrawer";

const FAMILIAS: (Familia | "Todas")[] = [
  "Todas",
  "Amadeirado",
  "Doce",
  "Cítrico",
  "Floral",
  "Âmbar/Especiado",
  "Frutado",
];

export default function Catalogo({ perfumes }: { perfumes: Perfume[] }) {
  const [filtro, setFiltro] = useState<Familia | "Todas">("Todas");
  const [modalPerfume, setModalPerfume] = useState<Perfume | null>(null);
  const [selecionados, setSelecionados] = useState<Set<string>>(new Set());
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const lista = useMemo(
    () => (filtro === "Todas" ? perfumes : perfumes.filter((p) => p.familia === filtro)),
    [perfumes, filtro]
  );

  const itensSelecionados = useMemo(
    () => perfumes.filter((p) => selecionados.has(p.id)),
    [perfumes, selecionados]
  );

  function alternarSelecao(id: string) {
    setSelecionados((atual) => {
      const novo = new Set(atual);
      novo.has(id) ? novo.delete(id) : novo.add(id);
      return novo;
    });
  }

  function remover(id: string) {
    setSelecionados((atual) => {
      const novo = new Set(atual);
      novo.delete(id);
      return novo;
    });
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {FAMILIAS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFiltro(f)}
            className={`rounded-full border px-4 py-1.5 font-body text-[11px] uppercase tracking-wider2 transition-colors ${
              filtro === f
                ? "border-gold bg-gold/15 text-gold-bright"
                : "border-gold/20 text-ivory/50 hover:border-gold/40 hover:text-ivory"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
        {/* Adicionado o parâmetro 'index' no loop */}
        {lista.map((p, index) => (
          <PerfumeCard
            key={p.id}
            perfume={p}
            selecionado={selecionados.has(p.id)}
            onAbrir={setModalPerfume}
            onAlternarSelecao={alternarSelecao}
            priority={index < 8} 
          />
        ))}
      </div>

      {lista.length === 0 && (
        <p className="mt-16 text-center font-body text-sm text-ivory/50">
          Nenhum perfume nessa família ainda.
        </p>
      )}

      {modalPerfume && (
        <PerfumeModal
          perfume={modalPerfume}
          selecionado={selecionados.has(modalPerfume.id)}
          onFechar={() => setModalPerfume(null)}
          onAlternarSelecao={alternarSelecao}
        />
      )}

      <CarrinhoDrawer
        itens={itensSelecionados}
        aberto={carrinhoAberto}
        onAbrirFechar={setCarrinhoAberto}
        onRemover={remover}
      />
    </section>
  );
}