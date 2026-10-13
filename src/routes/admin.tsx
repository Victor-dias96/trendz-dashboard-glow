import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Shell, PageTitle, Stat, Demo, StatusBadge } from "@/components/Shell";
import {
  adminWorkspace,
  creators,
  events,
  opportunities,
  type OpportunityStatus,
} from "@/lib/demo";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Painel interno — Trendz Hub" },
      {
        name: "description",
        content: "Gestão de creators, marcas, campanhas, eventos e aprovações.",
      },
      { property: "og:title", content: "Painel interno — Trendz Hub" },
      { property: "og:description", content: "Painel operacional da equipe Trendz." },
    ],
  }),
  component: Admin,
});

function Admin() {
  const [done, setDone] = useState<Record<number, OpportunityStatus>>({});
  return (
    <Shell>
      <PageTitle eyebrow={adminWorkspace.eyebrow} title={adminWorkspace.title}>
        <Demo />
      </PageTitle>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {adminWorkspace.stats.map((stat) => (
          <Stat key={stat.label} label={stat.label} value={stat.value} tone={stat.tone} />
        ))}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        Totais ilustrativos para a apresentação. O catálogo navegável tem {creators.length} creators
        e {events.length} eventos.
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <section className="card p-6">
          <h2 className="mb-4 text-lg font-black">Aprovações pendentes</h2>
          <ul className="space-y-3">
            {adminWorkspace.pending.map((item) => {
              const decision = done[item.id];
              return (
                <li
                  key={item.id}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-surface p-4"
                >
                  <div className="min-w-0">
                    <p className="font-bold">{item.who}</p>
                    <p className="text-xs text-muted-foreground">{item.kind}</p>
                  </div>
                  {decision ? (
                    <StatusBadge s={decision} />
                  ) : (
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setDone({ ...done, [item.id]: "Aprovada" })}
                        className="btn btn-primary !py-1.5"
                      >
                        Aprovar
                      </button>
                      <button
                        type="button"
                        onClick={() => setDone({ ...done, [item.id]: "Recusada" })}
                        className="btn btn-ghost !py-1.5"
                      >
                        Recusar
                      </button>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
        <section className="card p-6">
          <h2 className="mb-4 text-lg font-black">Status das candidaturas</h2>
          <ul className="divide-y">
            {opportunities.map((o) => (
              <li key={o.id} className="flex items-center justify-between gap-3 py-3 text-sm">
                <span>
                  <b>{o.campaign}</b> · {o.brand}
                </span>
                <StatusBadge s={o.status} />
              </li>
            ))}
          </ul>
        </section>
        <section className="card p-6 lg:col-span-2">
          <h2 className="mb-4 text-lg font-black">Eventos com cotas disponíveis</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs text-muted-foreground">
                <tr>
                  <th scope="col" className="py-2">
                    Evento
                  </th>
                  <th scope="col">Cidade</th>
                  <th scope="col">Data</th>
                  <th scope="col">Cotas livres</th>
                  <th scope="col">
                    <span className="sr-only">Ação</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {events.map((e) => (
                  <tr key={e.id}>
                    <td className="py-3 font-bold">{e.name}</td>
                    <td>{e.city}</td>
                    <td>{e.date}</td>
                    <td className="text-primary">{e.quotas.reduce((a, q) => a + q.left, 0)}</td>
                    <td>
                      <Link to="/eventos/$id" params={{ id: e.id }} className="text-primary">
                        Abrir →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </Shell>
  );
}
