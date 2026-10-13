import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Shell, Demo } from "@/components/Shell";
import { CreatorCard, InterestButton } from "@/components/Cards";
import { events, creators, fmt } from "@/lib/demo";

export const Route = createFileRoute("/eventos/$id")({
  loader: ({ params }) => { const e = events.find((x) => x.id === params.id); if (!e) throw notFound(); return e; },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.name ?? "Evento"} — Trendz Hub` }, { name: "description", content: loaderData?.description ?? "Evento" }, { property: "og:title", content: `${loaderData?.name ?? "Evento"} — Trendz Hub` }, { property: "og:description", content: loaderData?.description ?? "Evento" }, ...(loaderData ? [{ property: "og:image", content: loaderData.image }, { name: "twitter:image", content: loaderData.image }] : [])] }),
  component: Detail,
});

function Detail() {
  const e = Route.useLoaderData();
  const rel = creators.filter((c) => e.creators.includes(c.id));
  return (
    <Shell>
      <Link to="/eventos" className="mb-6 inline-block text-sm text-muted-foreground">← Voltar aos eventos</Link>
      <div className="relative mb-8 overflow-hidden rounded-3xl">
        <img src={e.image} alt={e.name} className="h-72 w-full object-cover sm:h-96" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <div className="mb-3 flex gap-2"><span className="chip !bg-primary !text-primary-foreground">{e.category}</span><Demo /></div>
          <h1 className="text-3xl font-black sm:text-5xl">{e.name}</h1>
          <p className="mt-2 text-muted-foreground">{e.city} · {e.date} · {fmt(e.audience)} pessoas estimadas</p>
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <section className="card p-6"><h2 className="mb-3 text-lg font-black">Sobre o evento</h2><p className="text-muted-foreground">{e.description}</p></section>
          <div className="grid gap-6 sm:grid-cols-2">
            <section className="card p-6"><h2 className="mb-3 font-black">Perfil do público</h2><ul className="space-y-2 text-sm">{e.profile.map((x) => <li key={x}>• {x}</li>)}</ul></section>
            <section className="card p-6"><h2 className="mb-3 font-black">Possibilidades de ativação</h2><div className="flex flex-wrap gap-1">{e.activations.map((x) => <span key={x} className="chip">{x}</span>)}</div></section>
          </div>
          <section><h2 className="mb-4 text-lg font-black">Creators relacionados</h2><div className="grid gap-4 sm:grid-cols-2">{rel.map((c) => <CreatorCard key={c.id} c={c} />)}</div></section>
        </div>
        <aside className="card h-fit space-y-4 p-6">
          <h2 className="text-lg font-black">Cotas disponíveis</h2>
          {e.quotas.map((q) => (
            <div key={q.name} className="flex items-center justify-between rounded-xl bg-surface p-4">
              <div><p className="font-bold">{q.name}</p><p className="text-xs text-muted-foreground">{q.left} disponível(is)</p></div>
              <p className="font-display font-black text-primary">{q.price}</p>
            </div>
          ))}
          <InterestButton label="Demonstrar interesse" />
        </aside>
      </div>
    </Shell>
  );
}
