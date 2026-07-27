export type Familia =
  | "Amadeirado"
  | "Doce"
  | "Cítrico"
  | "Floral"
  | "Âmbar/Especiado"
  | "Frutado";

export type Genero = "Masculino" | "Feminino" | "Unissex";

export interface Perfume {
  id: string;
  nome: string;
  imagem: string;
  precoCentavos: number;
  mililitros: number;
  genero: Genero;
  familia: Familia;
  notas: {
    saida: string[];
    coracao: string[];
    fundo: string[];
  };
  descricao: string;
  destaque?: boolean;
}

export const perfumes: Perfume[] = [
  {
    id: "al-noble-wazeer",
    nome: "Al Noble Wazeer",
    imagem: "/perfumes/Al-Noble-Wazeer.webp",
    precoCentavos: 44999,
    mililitros: 100,
    genero: "Masculino",
    familia: "Âmbar/Especiado",
    notas: {
      saida: ["Cardamomo", "Bergamota"],
      coracao: ["Oud", "Rosa"],
      fundo: ["Âmbar", "Almíscar", "Sândalo"],
    },
    descricao:
      "Um oriental amadeirado de presença marcante, com abertura especiada e fundo âmbar profundo — feito para durar o dia inteiro.",
  },
  {
    id: "asad",
    nome: "Asad",
    imagem: "/perfumes/Asad.webp",
    precoCentavos: 46799,
    mililitros: 100,
    genero: "Masculino",
    familia: "Âmbar/Especiado",
    notas: {
      saida: ["Canela", "Maçã", "Anis-estrelado"],
      coracao: ["Âmbar", "Tabaco"],
      fundo: ["Oud", "Baunilha", "Almíscar"],
    },
    descricao:
      "Perfume gourmand oriental, quente e envolvente, com toque de tabaco e fundo adocicado de oud e baunilha.",
  },
  {
    id: "atheeri",
    nome: "Atheeri",
    imagem: "/perfumes/Atheeri.webp",
    precoCentavos: 69999,
    mililitros: 100,
    genero: "Unissex",
    familia: "Doce",
    notas: {
      saida: ["Pera", "Bergamota"],
      coracao: ["Pralinê", "Jasmim"],
      fundo: ["Baunilha", "Tonka", "Almíscar"],
    },
    descricao:
      "Gourmand amadeirado suave, com abertura frutada e coração de pralinê — aconchegante, sem ser enjoativo.",
  },
  {
    id: "badee-al-oud-sublime",
    nome: "Badee Al Oud Sublime",
    imagem: "/perfumes/Badee-Al-Oud-Sublime.webp",
    precoCentavos: 42499,
    mililitros: 100,
    genero: "Unissex",
    familia: "Amadeirado",
    notas: {
      saida: ["Açafrão", "Pimenta-rosa"],
      coracao: ["Rosa", "Oud"],
      fundo: ["Âmbar", "Almíscar", "Sândalo"],
    },
    descricao:
      "Um dos perfis mais clássicos da perfumaria árabe: oud e rosa em equilíbrio, com fundo amadeirado profundo.",
  },
  {
    id: "bareeq-al-dhahab",
    nome: "Bareeq Al Dhahab",
    imagem: "/perfumes/Bareeq-Al-Dhahab.webp",
    precoCentavos: 36999,
    mililitros: 100,
    genero: "Feminino",
    familia: "Doce",
    notas: {
      saida: ["Pera", "Bergamota"],
      coracao: ["Jasmim", "Flor de laranjeira"],
      fundo: ["Baunilha", "Almíscar", "Sândalo"],
    },
    descricao:
      "Floral gourmand luminoso — nome que remete a \"brilho de ouro\", com uma doçura elegante do início ao fim.",
  },
  {
    id: "club-de-nuit-intense-man",
    nome: "Club de Nuit Intense Man",
    imagem: "/perfumes/Club-De-Nuit-Intense-Man.webp",
    precoCentavos: 49999,
    mililitros: 105,
    genero: "Masculino",
    familia: "Amadeirado",
    notas: {
      saida: ["Limão", "Maçã", "Abacaxi", "Bergamota"],
      coracao: ["Rosa", "Jasmim", "Bétula"],
      fundo: ["Almíscar", "Ambroxan", "Baunilha"],
    },
    descricao:
      "Um dos perfumes mais reconhecidos do mercado árabe — abertura cítrica vibrante que evolui para um fundo amadeirado almiscarado, com projeção e fixação muito acima da média para a faixa de preço.",
    destaque: true,
  },
  {
    id: "delilah-blanc",
    nome: "Delilah Blanc",
    imagem: "/perfumes/Delilah-Blanc.webp",
    precoCentavos: 47599,
    mililitros: 100,
    genero: "Feminino",
    familia: "Floral",
    notas: {
      saida: ["Bergamota", "Pera"],
      coracao: ["Jasmim", "Tuberosa"],
      fundo: ["Almíscar", "Baunilha", "Sândalo"],
    },
    descricao:
      "Floral branco clássico, elegante e limpo — tuberosa e jasmim sobre uma base macia de almíscar e baunilha.",
  },
  {
    id: "durrat-al-aroos",
    nome: "Durrat Al Aroos",
    imagem: "/perfumes/Durrat-Al-Aroos.webp",
    precoCentavos: 38999,
    mililitros: 100,
    genero: "Feminino",
    familia: "Doce",
    notas: {
      saida: ["Pera", "Bergamota"],
      coracao: ["Jasmim", "Orquídea"],
      fundo: ["Baunilha", "Caramelo", "Almíscar"],
    },
    descricao:
      "\"Pérola da Noiva\" — floral gourmand açucarado, pensado para ocasiões especiais.",
  },
  {
    id: "fakhar-women",
    nome: "Fakhar Women",
    imagem: "/perfumes/Fakhar-Women.webp",
    precoCentavos: 49999,
    mililitros: 100,
    genero: "Feminino",
    familia: "Floral",
    notas: {
      saida: ["Pimenta-rosa", "Bergamota"],
      coracao: ["Rosa", "Jasmim"],
      fundo: ["Almíscar", "Âmbar", "Patchouli"],
    },
    descricao:
      "Floral amadeirado sofisticado, com abertura levemente picante e fundo de patchouli e âmbar.",
  },
  {
    id: "habik-for-women",
    nome: "Habik For Women",
    imagem: "/perfumes/Habik-For-Women.webp",
    precoCentavos: 39999,
    mililitros: 100,
    genero: "Feminino",
    familia: "Âmbar/Especiado",
    notas: {
      saida: ["Açafrão", "Bergamota"],
      coracao: ["Rosa", "Oud"],
      fundo: ["Âmbar", "Almíscar", "Sândalo"],
    },
    descricao:
      "Oriental floral intenso, com oud e rosa desde a abertura — perfil marcante para quem gosta de presença.",
  },
  {
    id: "hayaati",
    nome: "Hayaati",
    imagem: "/perfumes/Hayaati.webp",
    precoCentavos: 37499,
    mililitros: 100,
    genero: "Unissex",
    familia: "Doce",
    notas: {
      saida: ["Pera", "Ameixa"],
      coracao: ["Pralinê", "Rosa"],
      fundo: ["Baunilha", "Tonka", "Almíscar"],
    },
    descricao:
      "\"Minha Vida\" — gourmand adocicado e envolvente, com boa fixação e apelo unissex.",
  },
  {
    id: "layaan",
    nome: "Layaan",
    imagem: "/perfumes/Layaan.webp",
    precoCentavos: 53999,
    mililitros: 100,
    genero: "Feminino",
    familia: "Floral",
    notas: {
      saida: ["Bergamota", "Pera"],
      coracao: ["Jasmim", "Rosa"],
      fundo: ["Almíscar", "Baunilha"],
    },
    descricao:
      "Floral frutado suave, fácil de usar no dia a dia sem perder sofisticação.",
  },
  {
    id: "liwan",
    nome: "Liwan",
    imagem: "/perfumes/Liwan.webp",
    precoCentavos: 39999,
    mililitros: 100,
    genero: "Unissex",
    familia: "Amadeirado",
    notas: {
      saida: ["Bergamota", "Cardamomo"],
      coracao: ["Oud", "Rosa"],
      fundo: ["Âmbar", "Almíscar", "Sândalo"],
    },
    descricao:
      "Amadeirado oriental equilibrado, bom ponto de entrada para quem ainda não usa oud puro.",
  },
  {
    id: "mayar",
    nome: "Mayar",
    imagem: "/perfumes/Mayar.webp",
    precoCentavos: 39999,
    mililitros: 100,
    genero: "Unissex",
    familia: "Cítrico",
    notas: {
      saida: ["Limão", "Bergamota", "Tangerina"],
      coracao: ["Lavanda", "Jasmim"],
      fundo: ["Almíscar", "Cedro", "Âmbar"],
    },
    descricao:
      "Cítrico fresco do início ao fim, com fundo amadeirado leve — ótimo para dias quentes.",
  },
  {
    id: "petra",
    nome: "Petra",
    imagem: "/perfumes/Petra.webp",
    precoCentavos: 47999,
    mililitros: 100,
    genero: "Unissex",
    familia: "Frutado",
    notas: {
      saida: ["Rum", "Ameixa", "Gengibre"],
      coracao: ["Tuberosa", "Coco"],
      fundo: ["Baunilha", "Almíscar", "Pralinê"],
    },
    descricao:
      "Floral frutado gourmet compartilhável — abertura adocicada de rum e ameixa, coração cremoso de coco e tuberosa, fundo de baunilha e pralinê. Longa duração.",
    destaque: true,
  },
  {
    id: "sabah-al-ward",
    nome: "Sabah Al Ward",
    imagem: "/perfumes/Sabah-Al-Ward.webp",
    precoCentavos: 36899,
    mililitros: 100,
    genero: "Feminino",
    familia: "Floral",
    notas: {
      saida: ["Bergamota", "Pera"],
      coracao: ["Rosa", "Peônia"],
      fundo: ["Almíscar", "Baunilha", "Sândalo"],
    },
    descricao:
      "\"Manhã de Rosas\" — floral romântico e leve, com rosa e peônia em destaque.",
  },
  {
    id: "souvenir-floral-bouquet",
    nome: "Souvenir Floral Bouquet",
    imagem: "/perfumes/Souvenir.webp",
    precoCentavos: 52999,
    mililitros: 100,
    genero: "Feminino",
    familia: "Floral",
    notas: {
      saida: ["Bergamota", "Pera"],
      coracao: ["Rosa", "Jasmim", "Lírio-do-vale"],
      fundo: ["Almíscar", "Baunilha", "Sândalo"],
    },
    descricao:
      "Buquê floral clássico multifacetado — rosa, jasmim e lírio-do-vale sobre uma base macia e almiscarada.",
  },
  {
    id: "yara-elixir",
    nome: "Yara Elixir",
    imagem: "/perfumes/Yara-Elixir.webp",
    precoCentavos: 44999,
    mililitros: 100,
    genero: "Feminino",
    familia: "Doce",
    notas: {
      saida: ["Flor de laranjeira", "Ameixa"],
      coracao: ["Orquídea", "Baunilha"],
      fundo: ["Sândalo", "Almíscar", "Tonka"],
    },
    descricao:
      "Versão mais intensa e âmbar da Yara — gourmand quente, com orquídea e baunilha em destaque. Um dos best-sellers da categoria.",
    destaque: true,
  },
  {
    id: "yara-moi",
    nome: "Yara Moi",
    imagem: "/perfumes/Yara-Moi.webp",
    precoCentavos: 38999,
    mililitros: 100,
    genero: "Feminino",
    familia: "Doce",
    notas: {
      saida: ["Pera", "Tangerina"],
      coracao: ["Jasmim", "Orquídea"],
      fundo: ["Baunilha", "Sândalo", "Almíscar"],
    },
    descricao:
      "Floral frutado doce e leve — a variação mais fresca da linha Yara, ótima para uso diurno.",
  },
];

export function formatarPreco(centavos: number): string {
  if (centavos <= 0) return "Consulte o valor";
  return (centavos / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
