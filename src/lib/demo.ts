export type Creator = {
  id: string;
  name: string;
  handle: string;
  photo: string;
  niches: string[];
  city: string;
  platforms: string[];
  followers: number;
  engagement: number;
  type: string;
  bio: string;
  formats: string[];
  campaigns: { brand: string; title: string; year: string }[];
};
const p = (n: number) => `https://i.pravatar.cc/400?img=${n}`;
export const creators: Creator[] = [
  {
    id: "luna-reis",
    name: "Luna Reis",
    handle: "@lunareis",
    photo: p(47),
    niches: ["Moda", "Lifestyle"],
    city: "São Paulo",
    platforms: ["Instagram", "TikTok"],
    followers: 482000,
    engagement: 6.8,
    type: "Macro",
    bio: "Criadora de conteúdo de moda autoral e streetwear, conectando tendências globais à cena paulistana.",
    formats: ["Reels", "Stories", "Presença em evento", "UGC"],
    campaigns: [
      { brand: "Nébula Beauty", title: "Lançamento Glow", year: "2026" },
      { brand: "UrbanStep", title: "Drop Verão", year: "2025" },
    ],
  },
  {
    id: "theo-santana",
    name: "Theo Santana",
    handle: "@theotech",
    photo: p(12),
    niches: ["Tecnologia", "Games"],
    city: "Rio de Janeiro",
    platforms: ["YouTube", "Twitch"],
    followers: 1250000,
    engagement: 4.2,
    type: "Mega",
    bio: "Reviews de tecnologia sem enrolação e lives de games competitivos.",
    formats: ["Vídeo longo", "Live", "Shorts"],
    campaigns: [{ brand: "Voltix", title: "Smartphone X9", year: "2026" }],
  },
  {
    id: "bia-moraes",
    name: "Bia Moraes",
    handle: "@biacozinha",
    photo: p(32),
    niches: ["Gastronomia"],
    city: "Salvador",
    platforms: ["Instagram", "TikTok"],
    followers: 96000,
    engagement: 9.1,
    type: "Micro",
    bio: "Receitas baianas com twist contemporâneo e roteiros gastronômicos.",
    formats: ["Reels", "UGC", "Receita patrocinada"],
    campaigns: [{ brand: "Sabor & Co", title: "Semana do Dendê", year: "2025" }],
  },
  {
    id: "kai-oliveira",
    name: "Kai Oliveira",
    handle: "@kaimove",
    photo: p(15),
    niches: ["Fitness", "Bem-estar"],
    city: "Florianópolis",
    platforms: ["Instagram", "YouTube"],
    followers: 310000,
    engagement: 7.4,
    type: "Macro",
    bio: "Treinos funcionais ao ar livre e rotina saudável à beira-mar.",
    formats: ["Reels", "Desafios", "Presença em evento"],
    campaigns: [{ brand: "PulseFit", title: "Desafio 30 dias", year: "2026" }],
  },
  {
    id: "manu-lima",
    name: "Manu Lima",
    handle: "@manubeauty",
    photo: p(45),
    niches: ["Beleza"],
    city: "Belo Horizonte",
    platforms: ["TikTok", "Instagram"],
    followers: 58000,
    engagement: 11.3,
    type: "Micro",
    bio: "Tutoriais de maquiagem para pele negra e resenhas honestas.",
    formats: ["UGC", "Tutorial", "Stories"],
    campaigns: [{ brand: "Nébula Beauty", title: "Base Inclusiva", year: "2026" }],
  },
  {
    id: "rafa-costa",
    name: "Rafa Costa",
    handle: "@rafaviaja",
    photo: p(53),
    niches: ["Viagem", "Lifestyle"],
    city: "Recife",
    platforms: ["Instagram", "YouTube"],
    followers: 720000,
    engagement: 5.5,
    type: "Macro",
    bio: "Explorando o Brasil fora do óbvio, de mochila e câmera na mão.",
    formats: ["Vlog", "Reels", "Cobertura de evento"],
    campaigns: [{ brand: "AzulMar Hotéis", title: "Rota Nordeste", year: "2025" }],
  },
];
export const niches = [
  "Moda",
  "Lifestyle",
  "Tecnologia",
  "Games",
  "Gastronomia",
  "Fitness",
  "Bem-estar",
  "Beleza",
  "Viagem",
];
export const cities = [...new Set(creators.map((c) => c.city))];
export const platforms = ["Instagram", "TikTok", "YouTube", "Twitch"];
export const types = ["Micro", "Macro", "Mega"];

export type Event = {
  id: string;
  name: string;
  image: string;
  category: string;
  city: string;
  date: string;
  audience: number;
  formats: string[];
  description: string;
  profile: string[];
  quotas: { name: string; price: string; left: number }[];
  activations: string[];
  creators: string[];
};
const u = (id: string) => `https://images.unsplash.com/${id}?w=1200&q=70&auto=format&fit=crop`;
export const events: Event[] = [
  {
    id: "neon-fest",
    name: "Neon Fest 2026",
    image: u("photo-1470229722913-7c0e2dbbafd3"),
    category: "Música",
    city: "São Paulo",
    date: "14 Nov 2026",
    audience: 45000,
    formats: ["Naming", "Estande", "Lounge VIP"],
    description:
      "Festival de música eletrônica e pop com dois palcos, arte digital e experiências imersivas.",
    profile: ["18–34 anos", "62% classe A/B", "Alta adoção digital"],
    quotas: [
      { name: "Master", price: "R$ 480 mil", left: 1 },
      { name: "Ouro", price: "R$ 180 mil", left: 3 },
      { name: "Prata", price: "R$ 60 mil", left: 6 },
    ],
    activations: [
      "Lounge instagramável",
      "Pulseira cashless co-branded",
      "Drop exclusivo",
      "Creators no backstage",
    ],
    creators: ["luna-reis", "rafa-costa"],
  },
  {
    id: "game-on",
    name: "Game On Expo",
    image: u("photo-1542751371-adc38448a05e"),
    category: "Games",
    city: "Rio de Janeiro",
    date: "02 Dez 2026",
    audience: 28000,
    formats: ["Arena", "Estande", "Torneio"],
    description: "Feira de games com campeonatos, lançamentos e área indie.",
    profile: ["16–30 anos", "78% masculino", "Gamers ativos"],
    quotas: [
      { name: "Arena", price: "R$ 250 mil", left: 1 },
      { name: "Estande", price: "R$ 45 mil", left: 8 },
    ],
    activations: ["Torneio patrocinado", "Demo de produto", "Meet & greet"],
    creators: ["theo-santana"],
  },
  {
    id: "sabores-bahia",
    name: "Sabores da Bahia",
    image: u("photo-1555939594-58d7cb561ad1"),
    category: "Gastronomia",
    city: "Salvador",
    date: "20 Jan 2027",
    audience: 15000,
    formats: ["Cozinha-show", "Estande"],
    description: "Festival gastronômico com chefs locais, feira de produtores e aulas abertas.",
    profile: ["25–50 anos", "Foodies", "Turistas"],
    quotas: [
      { name: "Apresenta", price: "R$ 120 mil", left: 1 },
      { name: "Apoio", price: "R$ 25 mil", left: 10 },
    ],
    activations: ["Aula patrocinada", "Sampling", "Conteúdo com creators"],
    creators: ["bia-moraes"],
  },
  {
    id: "run-sunset",
    name: "Sunset Run Floripa",
    image: u("photo-1452626038306-9aae5e071dd3"),
    category: "Esporte",
    city: "Florianópolis",
    date: "08 Mar 2027",
    audience: 8000,
    formats: ["Kit atleta", "Arena", "Hidratação"],
    description: "Corrida noturna de 5 e 10 km com festa pós-prova na praia.",
    profile: ["22–45 anos", "Estilo de vida ativo"],
    quotas: [
      { name: "Titular", price: "R$ 90 mil", left: 1 },
      { name: "Kit", price: "R$ 30 mil", left: 4 },
    ],
    activations: ["Arena de recovery", "Kit atleta", "Desafio com creators"],
    creators: ["kai-oliveira"],
  },
];

export type OpportunityStatus = "Em análise" | "Aprovada" | "Disponível" | "Recusada" | "Pendente";

export type Opportunity = {
  id: number;
  campaign: string;
  brand: string;
  brief: string;
  pay: string;
  format: string;
  deadline: string;
  status: OpportunityStatus;
};

export const opportunities: Opportunity[] = [
  {
    id: 1,
    campaign: "Glow Season",
    brand: "Nébula Beauty",
    brief: "Mostrar rotina de skincare noturna com o novo sérum.",
    pay: "R$ 4.500",
    format: "1 Reels + 3 Stories",
    deadline: "28 Out",
    status: "Em análise",
  },
  {
    id: 2,
    campaign: "Drop Neon",
    brand: "UrbanStep",
    brief: "Look urbano usando o tênis Neon em 3 cenários da cidade.",
    pay: "R$ 7.000",
    format: "TikTok + Reels",
    deadline: "05 Nov",
    status: "Aprovada",
  },
  {
    id: 3,
    campaign: "Backstage Neon Fest",
    brand: "Neon Fest",
    brief: "Cobertura ao vivo do backstage e lounge patrocinado.",
    pay: "R$ 12.000",
    format: "Presença + Stories",
    deadline: "14 Nov",
    status: "Disponível",
  },
  {
    id: 4,
    campaign: "UGC Verão",
    brand: "AzulMar Hotéis",
    brief: "Vídeos UGC verticais de experiência no resort.",
    pay: "R$ 2.800",
    format: "3 vídeos UGC",
    deadline: "20 Nov",
    status: "Recusada",
  },
];

export type StatTone = "primary" | "pink" | "violet";

export type DemoStat = {
  label: string;
  value: string;
  tone: StatTone;
};

export const brandWorkspace = {
  eyebrow: "Nébula Beauty · marca",
  title: "Olá, Nébula 👋",
  stats: [
    { label: "Campanhas ativas", value: "4", tone: "primary" },
    { label: "Creators salvos", value: "23", tone: "pink" },
    { label: "Oportunidades", value: "12", tone: "violet" },
    { label: "Eventos acompanhados", value: "3", tone: "primary" },
  ] satisfies DemoStat[],
  nextActions: [
    { id: "roteiro-luna", title: "Aprovar roteiro de Luna Reis", when: "Hoje" },
    { id: "proposta-neon", title: "Responder proposta Neon Fest", when: "Amanhã" },
    { id: "briefing-glow", title: "Briefing campanha Glow", when: "18 Out" },
    { id: "relatorio", title: "Relatório de resultados", when: "25 Out" },
  ],
};

export const adminWorkspace = {
  eyebrow: "Equipe Trendz",
  title: "Painel interno",
  stats: [
    { label: "Creators", value: "1.284", tone: "primary" },
    { label: "Marcas", value: "86", tone: "pink" },
    { label: "Campanhas", value: "37", tone: "violet" },
    { label: "Eventos", value: "24", tone: "primary" },
  ] satisfies DemoStat[],
  pending: [
    { id: 1, who: "Manu Lima", kind: "Novo creator" },
    { id: 2, who: "Sunset Run Floripa", kind: "Novo evento" },
    { id: 3, who: "Voltix", kind: "Nova marca" },
    { id: 4, who: "Theo Santana → Neon Fest", kind: "Manifestação de interesse" },
  ],
};

const demoCreator = creators.find((creator) => creator.id === "luna-reis");
if (!demoCreator) {
  throw new Error("Creator de demonstração luna-reis ausente");
}

export const creatorWorkspace = {
  eyebrow: `${demoCreator.name} · creator`,
  title: `Seu hub, ${demoCreator.name.split(" ")[0]} ✨`,
  completeness: 78,
  completenessHint: "Adicione valores aproximados e mídia kit para chegar a 100%.",
  stats: [
    { label: "Candidaturas", value: "6", tone: "pink" },
    { label: "Aprovadas", value: "2", tone: "primary" },
  ] satisfies DemoStat[],
  notifications: [
    { id: "urban", tone: "primary" as const, text: "UrbanStep aprovou sua candidatura" },
    { id: "neon", tone: "pink" as const, text: "Nova oportunidade no Neon Fest" },
    { id: "review", tone: "violet" as const, text: "Trendz revisou seu perfil" },
  ],
};

export const creatorProfile = {
  creator: demoCreator,
  email: "luna@demo.com",
  phone: "(11) 90000-0000",
  networks: ["Instagram", "TikTok", "YouTube", "Twitch"].map((label) => ({
    label,
    value: demoCreator.platforms.includes(label) ? demoCreator.handle : "",
  })),
  metrics: [
    { label: "Seguidores", value: String(demoCreator.followers) },
    { label: "Engajamento (%)", value: String(demoCreator.engagement).replace(".", ",") },
    { label: "Views médias", value: "120000" },
  ],
  rates: [
    { label: "Reels", value: "R$ 4.000" },
    { label: "Stories", value: "R$ 1.500" },
    { label: "Evento", value: "R$ 8.000" },
  ],
  selectedNiches: demoCreator.niches,
  formatOptions: ["Reels", "Stories", "TikTok", "Vídeo longo", "Live", "Presença em evento"],
  selectedFormats: ["Reels", "Stories"],
  interestOptions: ["UGC", "Campanhas", "Eventos"],
  selectedInterests: ["Campanhas", "Eventos"],
};

export const fmt = (n: number) =>
  n >= 1e6
    ? (n / 1e6).toFixed(1).replace(".", ",") + "M"
    : n >= 1e3
      ? Math.round(n / 1e3) + "k"
      : String(n);
