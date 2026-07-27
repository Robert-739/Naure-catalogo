# NAURE — Catálogo de Perfumes Árabes

Catálogo online que fiz para uma pequena marca de perfumes árabes. As clientes já vinham pedindo um catálogo organizado, então construí essa primeira versão: navegação por família olfativa, detalhes de cada perfume num modal e um fluxo de seleção que manda o pedido inteiro formatado direto pro WhatsApp.

É um pré-projeto de propósito. Antes de investir tempo numa loja completa, quis validar com quem realmente ia usar (a marca e as clientes dela) se esse formato resolvia o problema. Resolveu, e agora tá servindo de base pra próxima fase.

**Site:** https://naure-catalogo.vercel.app/
**Deploy:** Vercel

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Design autoral baseado na identidade visual da marca

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Onde editar o catálogo

Os dados dos perfumes (nome, preço, notas olfativas, descrição) ficam todos em `data/perfumes.ts` — é o único arquivo que precisa mexer no dia a dia pra atualizar o catálogo. O número de WhatsApp fica em `lib/config.ts`.

## Próxima fase

Esse catálogo é a base de uma loja completa que já está desenhada:

- Painel administrativo (cadastro/edição de produtos sem mexer em código)
- Dashboard de vendas (mais vendido, por família olfativa, faturamento)
- Pagamento via Pix e cartão com split automático (Mercado Pago), pra já sair com a comissão separada na hora da venda
- Cálculo de frete integrado
- Banco de dados no Supabase
