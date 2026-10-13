import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell, PageTitle, Demo, StatusBadge } from "@/components/Shell";
import { opportunities } from "@/lib/demo";

export const Route = createFileRoute("/creator/oportunidades")({
  head: () => ({ meta: [{ title: "Oportunidades — Trendz Hub" }, { name: "description", content: "Campanhas abertas, remuneração, prazos e status de candidatura." }, { property: "og:title", content: "Oportunidades — Trendz Hub" }, { property: "og:description", content: "Oportunidades para creators." }] }),
  component: Opps,
});

function Opps() {
  const [applied, setApplied] = useState<number[]>([]);
  return (
    <Shell>
      <PageTitle eyebrow="Área do creator" title="Oportunidades"><Demo /></PageTitle>
      <div className="grid gap-5 md:grid-cols-2">
        {opportunities.map((o) => {
          const status = applied.includes(o.id) ? "Em análise" : o.status;
          return (
            <div key={o.id} className="card space-y-4 p-6">
              <div className="flex items-start justify-between gap-3">
                <div><p className="text-xs font-bold uppercase tracking-widest text-pink">{o.brand}</p><h2 className="mt-1 text-xl font-black">{o.campaign}</h2></div>
                <StatusBadge s={status} />
              </div>
              <p className="text-sm text-muted-foreground">{o.brief}</p>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="rounded-xl bg-surface p-3"><p className="text-[11px] text-muted-foreground">Remuneração</p><p className="font-bold text-primary">{o.pay}</p></div>
                <div className="rounded-xl bg-surface p-3"><p className="text-[11px] text-muted-foreground">Formato</p><p className="font-bold">{o.format}</p></div>
                <div className="rounded-xl bg-surface p-3"><p className="text-[11px] text-muted-foreground">Prazo</p><p className="font-bold">{o.deadline}</p></div>
              </div>
              {status === "Disponível" && <button onClick={() => setApplied([...applied, o.id])} className="btn btn-primary w-full">Candidatar-se</button>}
            </div>
          );
        })}
      </div>
    </Shell>
  );
}
