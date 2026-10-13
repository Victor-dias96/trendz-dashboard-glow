import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/Shell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trendz Hub — marcas, creators e eventos" },
      { name: "description", content: "Plataforma que conecta marcas, creators e oportunidades de eventos e patrocínio." },
      { property: "og:title", content: "Trendz Hub" },
      { property: "og:description", content: "Conecte marcas, creators e eventos em um só lugar." },
    ],
  }),
  component: Index,
});

const paths = [
  { to: "/marca", t: "Sou uma marca", d: "Encontre creators e eventos alinhados à sua campanha.", c: "text-primary" },
  { to: "/creator", t: "Sou creator", d: "Receba oportunidades e gerencie suas candidaturas.", c: "text-pink" },
  { to: "/eventos", t: "Quero cadastrar um evento", d: "Mostre suas cotas para marcas e creators certos.", c: "text-violet" },
] as const;

function Index() {
  return (
    <Shell>
      <section className="relative overflow-hidden rounded-3xl border bg-surface px-6 py-20 sm:px-12">
        <div className="bg-glow absolute inset-0 opacity-80" />
        <div className="relative max-w-3xl">
          <p className="chip mb-6 !bg-primary/15 !text-primary">NOVO · Trendz Hub</p>
          <h1 className="text-4xl font-black leading-[1.05] sm:text-6xl">
            Onde marcas, creators e eventos <span className="text-gradient">viram trend.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Um hub para descobrir talentos, montar campanhas e fechar patrocínios — com curadoria Trendz.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {paths.map((p) => (
          <Link key={p.to} to={p.to} className="card group p-7 transition hover:-translate-y-1 hover:border-primary/50">
            <h2 className={`text-xl font-black ${p.c}`}>{p.t} →</h2>
            <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
          </Link>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-black">Por que o Trendz Hub</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Curadoria real", "Creators avaliados pela equipe Trendz."],
            ["Métricas claras", "Alcance e engajamento lado a lado."],
            ["Eventos + creators", "Combine patrocínio e conteúdo na mesma proposta."],
            ["Tudo num painel", "Interesses, candidaturas e prazos centralizados."],
          ].map(([t, d]) => (
            <div key={t} className="card p-6"><div className="mb-4 h-1.5 w-10 rounded-full bg-brand" /><h3 className="font-bold">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
