# NAURE — Catálogo Online

Catálogo de perfumes com seleção múltipla e envio direto pra o WhatsApp.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## O que falta preencher antes de publicar

1. **`lib/config.ts`** — troque `WHATSAPP_NUMERO` pelo número real (só dígitos, com DDI 55 + DDD).
2. **`data/perfumes.ts`** — é o único arquivo com os dados dos perfumes. Troque:
   - `precoCentavos` (preço em centavos, ex: `18990` = R$ 189,90)
   - `notas.saida`, `notas.coracao`, `notas.fundo` (notas olfativas)
   - `descricao` (texto de cada perfume)

   Tudo que está como `"PREENCHER"` ou `0` é placeholder.

## Como publicar (gratuito)

O jeito mais simples é a Vercel (criadora do Next.js):

1. Suba esse projeto num repositório no GitHub
2. Crie conta em vercel.com, clique em "New Project" e importe o repositório
3. Deploy automático — toda vez que você editar `data/perfumes.ts` e enviar pro GitHub, o site atualiza sozinho

## Estrutura

- `data/perfumes.ts` — dados do catálogo (editar aqui no dia a dia)
- `lib/config.ts` — número de WhatsApp e nome da loja
- `lib/whatsapp.ts` — monta as mensagens enviadas pro WhatsApp
- `components/` — Hero (topo), Catalogo (grade + filtros), PerfumeCard, PerfumeModal, CarrinhoDrawer
- `public/perfumes/` — fotos dos frascos
- `public/logo.png` — logo NAURE

## Próximos passos (fora deste catálogo)

Este é só o catálogo estático, conforme pedido. O painel admin, dashboard
de vendas, pagamento com split (Mercado Pago) e frete (Melhor Envio) do
projeto completo entram na próxima fase, já mapeada no documento do
projeto.
