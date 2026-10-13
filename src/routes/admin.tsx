import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shell, PageTitle, Stat, Demo, StatusBadge } from "@/components/Shell";
import { events, opportunities, creators } from "@/lib/demo";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Painel interno — Trendz Hub" }, { name: "description", content: "Gestão de creators, marcas, campanhas, eventos e aprovações." }, { property: "og:title", content: "Painel interno — Trendz Hub" }, { property: "og:description", content: "Painel operacional da equipe Trendz." }] }),
  component: Admin,
});

const pending = [
  { id: 1, who: "Manu Lima", kind: "Novo creator" },
  { id: 2, who: "Sunset Run Floripa", kind: "Novo evento" },
  { id: 3, who: "Voltix", kind: "Nova marca" },
  { id: 4, who: "Theo Santana → Neon Fest", kind: "Manifestação de interesse" },
];

function Admin() {
  const [done, setDone] = useState<Record<number, string>>({});
  return (
    <Shell>
      <PageTitle eyebrow="Equipe Trendz" title="Painel interno"><Demo /></PageTitle>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat label="Creators" value={String(creators.length * 214)} />
        <Stat label="Marcas" value="86" tone="pink" />
        <Stat label="Campanhas" value="37" tone="violet" />
        <Stat label="Eventos" value={String(events.length * 6)} />
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="card p-6">
          <h2 className="mb-4 text-lg font-black">Aprovações pendentes</h2>
          <ul className="space-y-3">
            {pending.map((p) => (
              <li key={p.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-surface p-4">
                <div className="min-w-0"><p className="font-bold">{p.who}</p><p className="text-xs text-muted-foreground">{p.kind}</p></div>
                {done[p.id] ? <StatusBadge s={done[p.id] ?? ""} /> : (
                  <div className="flex gap-2">
                    <button onClick={() => setDone({ ...done, [p.id]: "Aprovada" })} className="btn btn-primary !py-1.5">Aprovar</button>
                    <button onClick={() => setDone({ ...done, [p.id]: "Recusada" })} className="btn btn-ghost !py-1.5">Recusar</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>
        <section className="card p-6">
          <h2 className="mb-4 text-lg font-black">Status das candidaturas</h2>
          <ul className="divide-y">
            {opportunities.map((o) => <li key={o.id} className="flex items-center justify-between gap-3 py-3 text-sm"><span><b>{o.campaign}</b> · {o.brand}</span><StatusBadge s={o.status} /></li>)}
          </ul>
        </section>
        <section className="card p-6 lg:col-span-2">
          <h2 className="mb-4 text-lg font-black">Eventos com cotas disponíveis</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs text-muted-foreground"><tr><th className="py-2">Evento</th><th>Cidade</th><th>Data</th><th>Cotas livres</th><th /></tr></thead>
              <tbody className="divide-y">
                {events.map((e) => (
                  <tr key={e.id}><td className="py-3 font-bold">{e.name}</td><td>{e.city}</td><td>{e.date}</td><td className="text-primary">{e.quotas.reduce((a, q) => a + q.left, 0)}</td><td><Link to="/eventos/$id" params={{ id: e.id }} className="text-primary">Abrir →</Link></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Shell>
  );
}
