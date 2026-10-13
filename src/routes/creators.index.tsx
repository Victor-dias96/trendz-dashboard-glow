import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell, PageTitle, Demo } from "@/components/Shell";
import { CreatorCard } from "@/components/Cards";
import { creators, niches, cities, platforms, types } from "@/lib/demo";

type CreatorsSearch = { q?: string };

export const Route = createFileRoute("/creators/")({
  validateSearch: (search: Record<string, unknown>): CreatorsSearch => {
    const raw = search.q;
    if (typeof raw !== "string") return {};
    const q = raw.trim();
    return q ? { q } : {};
  },
  head: () => ({
    meta: [
      { title: "Catálogo de creators — Trendz Hub" },
      { name: "description", content: "Busque creators por nicho, cidade, plataforma e alcance." },
      { property: "og:title", content: "Catálogo de creators — Trendz Hub" },
      { property: "og:description", content: "Encontre o creator ideal para sua marca." },
    ],
  }),
  component: Catalog,
});

function matchesQuery(creator: (typeof creators)[number], query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    creator.name.toLowerCase().includes(q) ||
    creator.handle.toLowerCase().includes(q) ||
    creator.city.toLowerCase().includes(q) ||
    creator.niches.some((niche) => niche.toLowerCase().includes(q))
  );
}

function Catalog() {
  const { q: initialQuery = "" } = Route.useSearch();
  const [q, setQ] = useState(initialQuery);
  const [niche, setNiche] = useState("");
  const [city, setCity] = useState("");
  const [plat, setPlat] = useState("");
  const [type, setType] = useState("");
  const [min, setMin] = useState(0);
  const list = creators.filter(
    (c) =>
      matchesQuery(c, q) &&
      (!niche || c.niches.includes(niche)) &&
      (!city || c.city === city) &&
      (!plat || c.platforms.includes(plat)) &&
      (!type || c.type === type) &&
      c.followers >= min,
  );
  const sel = (v: string, set: (s: string) => void, opts: string[], label: string) => (
    <select aria-label={label} className="field" value={v} onChange={(e) => set(e.target.value)}>
      <option value="">{label}</option>
      {opts.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  );
  return (
    <Shell>
      <PageTitle eyebrow="Catálogo" title="Creators">
        <Demo />
      </PageTitle>
      <div className="card mb-8 grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-6">
        <label className="lg:col-span-2">
          <span className="sr-only">Buscar por nome, nicho ou cidade</span>
          <input
            className="field"
            placeholder="Buscar por nome, nicho ou cidade..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </label>
        {sel(niche, setNiche, niches, "Nicho")}
        {sel(city, setCity, cities, "Cidade")}
        {sel(plat, setPlat, platforms, "Plataforma")}
        {sel(type, setType, types, "Tipo de creator")}
        <select
          aria-label="Seguidores mínimos"
          className="field lg:col-span-2"
          value={min}
          onChange={(e) => setMin(+e.target.value)}
        >
          <option value={0}>Seguidores: qualquer</option>
          <option value={50000}>50k+</option>
          <option value={300000}>300k+</option>
          <option value={1000000}>1M+</option>
        </select>
      </div>
      <p className="mb-4 text-sm text-muted-foreground">{list.length} creators encontrados</p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c, index) => (
          <CreatorCard key={c.id} c={c} index={index} />
        ))}
      </div>
    </Shell>
  );
}
