"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Perfume, formatarPreco } from "@/data/perfumes";
import { linkPerfumeUnico } from "@/lib/whatsapp";

interface Props {
  perfume: Perfume;
  selecionado: boolean;
  onFechar: () => void;
  onAlternarSelecao: (id: string) => void;
}

export default function PerfumeModal({ perfume, selecionado, onFechar, onAlternarSelecao }: Props) {
  const fecharRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    fecharRef.current?.focus();
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onFechar();
    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [onFechar]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={perfume.nome}
      onClick={onFechar}
    >
      <div
        className="marble-texture relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-sm border border-gold/25 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={fecharRef}
          type="button"
          onClick={onFechar}
          className="absolute right-4 top-4 font-body text-2xl leading-none text-gold/70 hover:text-gold-bright focus-visible:ring-1 focus-visible:ring-gold-bright"
          aria-label="Fechar"
        >
          ×
        </button>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-[260px]">
            <Image
              src={perfume.imagem}
              alt={perfume.nome}
              fill
              sizes="(max-width: 640px) 80vw, 260px"
              unoptimized
              priority
              loading="eager"
              className="object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-body text-[10px] uppercase tracking-wider2 text-gold/70">
              {perfume.familia} · {perfume.genero}
            </span>
            <h2 className="mt-1 font-display text-3xl text-ivory">{perfume.nome}</h2>
            <span className="mt-1 font-body text-sm text-ivory/50">{perfume.mililitros}ml</span>
            <span className="mt-3 font-body text-lg text-gold-bright">
              {formatarPreco(perfume.precoCentavos)}
            </span>

            <p className="mt-4 font-body text-sm leading-relaxed text-ivory/70">{perfume.descricao}</p>

            <div className="ornament-divider my-5 w-full">
              <span className="diamond" />
            </div>

            <dl className="space-y-2 font-body text-xs text-ivory/70">
              <div>
                <dt className="text-gold/70">Saída</dt>
                <dd>{perfume.notas.saida.join(", ")}</dd>
              </div>
              <div>
                <dt className="text-gold/70">Coração</dt>
                <dd>{perfume.notas.coracao.join(", ")}</dd>
              </div>
              <div>
                <dt className="text-gold/70">Fundo</dt>
                <dd>{perfume.notas.fundo.join(", ")}</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-col gap-3">
              <label className="flex items-center gap-2 font-body text-xs text-ivory/70">
                <input
                  type="checkbox"
                  checked={selecionado}
                  onChange={() => onAlternarSelecao(perfume.id)}
                  className="h-4 w-4 accent-gold"
                />
                Adicionar à seleção
              </label>

              <a
                href={linkPerfumeUnico(perfume)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-gold/50 bg-gold/10 px-4 py-3 font-body text-xs uppercase tracking-wider2 text-gold-bright transition-colors hover:bg-gold/20"
              >
                Perguntar sobre este no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
