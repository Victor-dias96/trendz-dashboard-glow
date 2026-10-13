import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell, PageTitle, Stat, Demo, StatusBadge } from "@/components/Shell";
import { opportunities } from "@/lib/demo";

export const Route = createFileRoute("/creator/")({
  head: () => ({ meta: [{ title: "Dashboard do creator — Trendz Hub" }, { name: "description", content: "Oportunidades, candidaturas e prazos do creator." }, { property: "og:title", content: "Dashboard do creator — Trendz Hub" }, { property: "og:description", content: "Sua área de creator no Trendz Hub." }] }),
  component: CreatorDash,
});

function CreatorDash() {
  return (
    <Shell>
      <PageTitle eyebrow="Luna Reis · creator" title="Seu hub, Luna ✨">
        <div className="flex gap-2"><Demo /><Link to="/creator/perfil" className="btn btn-ghost">Editar perfil</Link><Link to="/creator/oportunidades" className="btn btn-primary">Oportunidades</Link></div>
      </PageTitle>
      <div className="grid gap-4 lg:grid-cols-4">
        <div className="card p-5 lg:col-span-2">
          <div className="flex justify-between text-sm"><span className="text-muted-foreground">Completude do perfil</span><b className="text-primary">78%</b></div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-surface"><div className="h-full w-[78%] rounded-full bg-brand" /></div>
          <p className="mt-3 text-xs text-muted-foreground">Adicione valores aproximados e mídia kit para chegar a 100%.</p>
        </div>
        <Stat label="Candidaturas" value="6" tone="pink" />
        <Stat label="Aprovadas" value="2" />
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <section className="card p-6 lg:col-span-2">
          <h2 className="mb-4 text-lg font-black">Oportunidades recomendadas</h2>
          <div className="space-y-3">
            {opportunities.map((o) => (
              <div key={o.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-surface p-4">
                <div className="min-w-0"><p className="font-bold">{o.campaign}</p><p className="text-xs text-muted-foreground">{o.brand} · {o.format}</p></div>
                <div className="flex items-center gap-3"><span className="font-display font-black text-primary">{o.pay}</span><StatusBadge s={o.status} /></div>
              </div>
            ))}
          </div>
        </section>
        <div className="space-y-6">
          <section className="card p-6">
            <h2 className="mb-4 text-lg font-black">Prazos</h2>
            <ul className="space-y-3 text-sm">{opportunities.slice(0, 3).map((o) => <li key={o.id} className="flex justify-between"><span>{o.campaign}</span><span className="chip">{o.deadline}</span></li>)}</ul>
          </section>
          <section className="card p-6">
            <h2 className="mb-4 text-lg font-black">Notificações</h2>
            <ul className="space-y-3 text-sm">
              <li><span className="text-primary">●</span> UrbanStep aprovou sua candidatura</li>
              <li><span className="text-pink">●</span> Nova oportunidade no Neon Fest</li>
              <li><span className="text-violet">●</span> Trendz revisou seu perfil</li>
            </ul>
          </section>
        </div>
      </div>
    </Shell>
  );
}
