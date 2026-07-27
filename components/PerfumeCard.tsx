"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Perfume, formatarPreco } from "@/data/perfumes";

interface Props {
  perfume: Perfume;
  selecionado: boolean;
  onAbrir: (p: Perfume) => void;
  onAlternarSelecao: (id: string) => void;
  priority?: boolean;
}

export default function PerfumeCard({
  perfume,
  selecionado,
  onAbrir,
  onAlternarSelecao,
  priority = false,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  const precarregarImagemModal = () => {
    if (typeof window !== "undefined" && perfume.imagem) {
      const img = new window.Image();
      img.src = perfume.imagem;
    }
  };

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      
      if (entries[0]?.isIntersecting) {
        precarregarImagemModal();
        observer.disconnect(); 
      }
    },
    { rootMargin: "200px" } 
  );

  if (cardRef.current) {
    observer.observe(cardRef.current);
  }

  return () => observer.disconnect();
}, [perfume.imagem]);

  return (
    <div
      ref={cardRef}
      className="group relative flex flex-col rounded-sm border border-gold/15 bg-noir-soft/60 p-4 transition-colors hover:border-gold/40"
    >
      <button
        type="button"
        onClick={() => onAbrir(perfume)}
        onMouseEnter={precarregarImagemModal}
        className="flex flex-1 flex-col text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-gold-bright"
        aria-label={`Ver detalhes de ${perfume.nome}`}
      >
        <div className="mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-sm bg-noir/30 border border-gold/10 group-hover:border-gold/30 transition-colors flex flex-col">
          <div className="relative flex-1 p-2">
            <Image
                src={perfume.imagem}
                alt={perfume.nome}
                fill
                unoptimized
                priority={priority}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
          </div>

          <div className="relative z-10 bg-gold/5 backdrop-blur-sm border-t border-gold/10 py-1.5 text-center transition-colors group-hover:bg-gold/10">
            <span className="font-display text-[10px] sm:text-[11px] uppercase tracking-wider text-gold flex items-center justify-center gap-1 opacity-90 group-hover:opacity-100 group-hover:text-gold-bright">
              <span>✦</span> Clique para detalhes <span>✦</span>
            </span>
          </div>
        </div>

        <span className="mt-4 font-body text-[10px] uppercase tracking-wider2 text-gold/70">
          {perfume.familia}
        </span>
        <h3 className="mt-1 font-display text-xl text-ivory">{perfume.nome}</h3>
        <span className="mt-1 font-body text-xs text-ivory/50">
          {perfume.mililitros}ml · {perfume.genero}
        </span>

        <span className="mt-3 font-body text-sm font-medium text-gold-bright">
          {formatarPreco(perfume.precoCentavos)}
        </span>
      </button>

      <label className="mt-4 flex items-center gap-2.5 border-t border-gold/10 pt-3 font-body text-xs text-ivory/70 cursor-pointer hover:text-ivory transition-colors">
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            checked={selecionado}
            onChange={() => onAlternarSelecao(perfume.id)}
            className="sr-only"
          />
          <div
            className={`h-4 w-4 rounded-sm border transition-all flex items-center justify-center ${
              selecionado
                ? "border-gold bg-gold text-noir"
                : "border-gold/40 bg-noir-soft hover:border-gold/70"
            }`}
          >
            {selecionado && (
              <svg
                className="h-3 w-3 stroke-[3]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
        </div>
        Adicionar à seleção
      </label>
    </div>
  );
}