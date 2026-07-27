import { Perfume, formatarPreco } from "@/data/perfumes";
import { WHATSAPP_NUMERO } from "@/lib/config";

function linkBase(mensagem: string): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

export function linkPerfumeUnico(perfume: Perfume): string {
  const mensagem =
    `Olá! Tenho interesse no perfume *${perfume.nome}* (${perfume.mililitros}ml) ` +
    `do catálogo NAURE. Pode me passar mais informações?`;
  return linkBase(mensagem);
}

export function linkSelecao(itens: Perfume[]): string {
  if (itens.length === 0) return linkBase("Olá! Gostaria de saber mais sobre os perfumes NAURE.");

  const linhas = itens.map(
    (p, i) => `${i + 1}. ${p.nome} (${p.mililitros}ml) — ${formatarPreco(p.precoCentavos)}`
  );

  const mensagem =
    `Olá! Vim pelo catálogo NAURE e tenho interesse nos seguintes perfumes:\n\n` +
    linhas.join("\n") +
    `\n\nPode me ajudar a fechar o pedido?`;

  return linkBase(mensagem);
}
