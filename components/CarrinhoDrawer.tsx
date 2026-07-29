"use client";

import Image from "next/image";
import { Perfume, formatarPreco } from "@/data/perfumes";
import { linkSelecao } from "@/lib/whatsapp";
import { sendGAEvent } from "@next/third-parties/google";

interface Props {
  itens: Perfume[];
  aberto: boolean;
  onAbrirFechar: (v: boolean) => void;
  onRemover: (id: string) => void;
}

export default function CarrinhoDrawer({ itens, aberto, onAbrirFechar, onRemover }: Props) {
  const total = itens.reduce((acc, p) => acc + p.precoCentavos, 0);

  return (
    <>
      <button
        type="button"
        onClick={() => onAbrirFechar(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-gold/50 bg-noir px-5 py-3 font-body text-xs uppercase tracking-wider2 text-gold-bright shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 focus-visible:ring-1 focus-visible:ring-gold-bright"
        aria-label="Abrir seleção"
      >
        Seleção
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-noir">
          {itens.length}
        </span>
      </button>

      {aberto && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/70 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Sua seleção"
          onClick={() => onAbrirFechar(false)}
        >
          <div
            className="marble-texture flex h-full w-full max-w-sm flex-col border-l border-gold/25 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl text-ivory">Sua seleção</h2>
              <button
                type="button"
                onClick={() => onAbrirFechar(false)}
                className="font-body text-2xl leading-none text-gold/70 hover:text-gold-bright"
                aria-label="Fechar"
              >
                ×
              </button>
            </div>

            <div className="ornament-divider my-4">
              <span className="diamond" />
            </div>

            {itens.length === 0 ? (
              <p className="mt-8 text-center font-body text-sm text-ivory/50">
                Nenhum perfume selecionado ainda. Toque em &ldquo;Adicionar à seleção&rdquo; nos
                perfumes que quiser perguntar de uma vez só.
              </p>
            ) : (
              <ul className="flex-1 space-y-4 overflow-y-auto pr-1">
                {itens.map((p) => (
                  <li key={p.id} className="flex items-center gap-3 border-b border-gold/10 pb-3">
                    <div className="relative h-14 w-14 shrink-0">
                      <Image src={p.imagem} alt={p.nome} fill unoptimized sizes="56px" className="object-contain" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-body text-sm text-ivory">{p.nome}</p>
                      <p className="font-body text-xs text-gold-bright">{formatarPreco(p.precoCentavos)}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemover(p.id)}
                      className="font-body text-xs text-ivory/40 hover:text-ivory"
                      aria-label={`Remover ${p.nome} da seleção`}
                    >
                      remover
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {itens.length > 0 && (
              <div className="mt-4 border-t border-gold/10 pt-4">
                <div className="flex justify-between font-body text-sm text-ivory/70">
                  <span>Total estimado</span>
                  <span className="text-gold-bright">{formatarPreco(total)}</span>
                </div>
                <a
                  href={linkSelecao(itens)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sendGAEvent("event", "generate_lead", { items: itens.length, value: total / 100 })}
                  className="mt-4 flex items-center justify-center border border-gold/50 bg-gold/10 px-4 py-3 font-body text-xs uppercase tracking-wider2 text-gold-bright transition-colors hover:bg-gold/20"
                >
                  Enviar seleção no WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
