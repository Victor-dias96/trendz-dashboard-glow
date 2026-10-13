import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Shell, PageTitle, Stat, Demo } from "@/components/Shell";
import { CreatorCard, EventCard } from "@/components/Cards";
import { brandWorkspace, creators, events } from "@/lib/demo";

export const Route = createFileRoute("/marca")({
  head: () => ({
    meta: [
      { title: "Dashboard da marca — Trendz Hub" },
      { name: "description", content: "Campanhas, creators salvos e eventos em destaque." },
      { property: "og:title", content: "Dashboard da marca — Trendz Hub" },
      { property: "og:description", content: "Painel da marca no Trendz Hub." },
    ],
  }),
  component: Brand,
});

function Brand() {
  const nav = useNavigate();
  return (
    <Shell>
      <PageTitle eyebrow={brandWorkspace.eyebrow} title={brandWorkspace.title}>
        <Demo />
      </PageTitle>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const raw = new FormData(e.currentTarget).get("q");
          const q = typeof raw === "string" ? raw.trim() : "";
          void nav({ to: "/creators", search: q ? { q } : {} });
        }}
        className="mb-8"
      >
        <label className="block">
          <span className="sr-only">Buscar creators por nome, nicho ou cidade</span>
          <input
            name="q"
            className="field !rounded-full !px-5 !py-3"
            placeholder="Buscar por nome, nicho ou cidade..."
          />
        </label>
      </form>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {brandWorkspace.stats.map((stat) => (
          <Stat key={stat.label} label={stat.label} value={stat.value} tone={stat.tone} />
        ))}
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-black">Creators recomendados</h2>
            <Link to="/creators" className="text-sm text-primary">
              Ver todos →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {creators.slice(0, 3).map((c) => (
              <CreatorCard key={c.id} c={c} />
            ))}
          </div>
          <div className="mb-4 mt-10 flex items-center justify-between">
            <h2 className="text-xl font-black">Eventos em destaque</h2>
            <Link to="/eventos" className="text-sm text-primary">
              Ver todos →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {events.slice(0, 2).map((e) => (
              <EventCard key={e.id} e={e} />
            ))}
          </div>
        </div>
        <aside className="card h-fit p-6">
          <h2 className="mb-4 text-lg font-black">Próximas ações</h2>
          <ul className="space-y-4 text-sm">
            {brandWorkspace.nextActions.map((action) => (
              <li
                key={action.id}
                className="flex items-start justify-between gap-3 border-b pb-3 last:border-0"
              >
                <span>{action.title}</span>
                <span className="chip shrink-0">{action.when}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Shell>
  );
}
