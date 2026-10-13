import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Shell, Demo } from "@/components/Shell";
import { InterestButton } from "@/components/Cards";
import { creators, fmt } from "@/lib/demo";

export const Route = createFileRoute("/creators/$id")({
  loader: ({ params }) => { const c = creators.find((x) => x.id === params.id); if (!c) throw notFound(); return c; },
  head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.name ?? "Creator"} — Trendz Hub` }, { name: "description", content: loaderData?.bio ?? "Perfil de creator" }, { property: "og:title", content: `${loaderData?.name ?? "Creator"} — Trendz Hub` }, { property: "og:description", content: loaderData?.bio ?? "Perfil de creator" }] }),
  component: Profile,
});

function Profile() {
  const c = Route.useLoaderData();
  return (
    <Shell>
      <Link to="/creators" className="mb-6 inline-block text-sm text-muted-foreground">← Voltar ao catálogo</Link>
      <div className="grid gap-8 lg:grid-cols-[340px_1fr]">
        <div className="card h-fit overflow-hidden">
          <img src={c.photo} alt={c.name} className="aspect-square w-full object-cover" />
          <div className="space-y-4 p-6">
            <div className="flex items-center justify-between"><h1 className="text-2xl font-black">{c.name}</h1><Demo /></div>
            <p className="text-sm text-muted-foreground">{c.handle} · {c.city}</p>
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="rounded-xl bg-surface p-3"><p className="font-display text-2xl font-black text-primary">{fmt(c.followers)}</p><p className="text-xs text-muted-foreground">seguidores</p></div>
              <div className="rounded-xl bg-surface p-3"><p className="font-display text-2xl font-black text-pink">{c.engagement}%</p><p className="text-xs text-muted-foreground">engajamento</p></div>
            </div>
            <InterestButton label="Tenho interesse" />
          </div>
        </div>
        <div className="space-y-6">
          <section className="card p-6"><h2 className="mb-3 text-lg font-black">Biografia</h2><p className="text-muted-foreground">{c.bio}</p></section>
          <div className="grid gap-6 sm:grid-cols-3">
            <section className="card p-6"><h2 className="mb-3 font-black">Nichos</h2><div className="flex flex-wrap gap-1">{c.niches.map((n) => <span key={n} className="chip">{n}</span>)}</div></section>
            <section className="card p-6"><h2 className="mb-3 font-black">Redes sociais</h2><div className="flex flex-wrap gap-1">{c.platforms.map((n) => <span key={n} className="chip !text-primary">{n}</span>)}</div></section>
            <section className="card p-6"><h2 className="mb-3 font-black">Formatos</h2><div className="flex flex-wrap gap-1">{c.formats.map((n) => <span key={n} className="chip">{n}</span>)}</div></section>
          </div>
          <section className="card p-6">
            <h2 className="mb-4 text-lg font-black">Histórico de campanhas</h2>
            <ul className="divide-y">{c.campaigns.map((k) => <li key={k.title} className="flex justify-between py-3"><span><b>{k.brand}</b> — {k.title}</span><span className="text-muted-foreground">{k.year}</span></li>)}</ul>
          </section>
        </div>
      </div>
    </Shell>
  );
}
