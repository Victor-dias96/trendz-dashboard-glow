import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell, PageTitle, Demo } from "@/components/Shell";
import { EventCard } from "@/components/Cards";
import { events } from "@/lib/demo";

type EventosSearch = { cadastrar?: true };

export const Route = createFileRoute("/eventos/")({
  validateSearch: (search: Record<string, unknown>): EventosSearch => {
    const raw = search.cadastrar;
    return raw === true || raw === "1" || raw === "true" ? { cadastrar: true } : {};
  },
  head: () => ({
    meta: [
      { title: "Eventos e patrocínios — Trendz Hub" },
      { name: "description", content: "Catálogo de eventos com cotas de patrocínio disponíveis." },
      { property: "og:title", content: "Eventos e patrocínios — Trendz Hub" },
      { property: "og:description", content: "Descubra eventos para patrocinar." },
    ],
  }),
  component: Events,
});

function Events() {
  const { cadastrar } = Route.useSearch();
  const [open, setOpen] = useState(cadastrar === true);
  const [sent, setSent] = useState(false);
  const [cat, setCat] = useState("");
  const cats = [...new Set(events.map((e) => e.category))];
  const list = events.filter((e) => !cat || e.category === cat);
  return (
    <Shell>
      <PageTitle eyebrow="Catálogo integrado" title="Eventos & patrocínios">
        <div className="flex flex-wrap items-center gap-3">
          <Demo />
          <button
            type="button"
            className="btn btn-ghost"
            aria-expanded={open}
            aria-controls="cadastro-evento"
            onClick={() => setOpen((value) => !value)}
          >
            + Cadastrar evento
          </button>
        </div>
      </PageTitle>
      <form
        id="cadastro-evento"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className={`${open ? "grid" : "hidden"} card mb-6 gap-3 p-6 sm:grid-cols-3`}
      >
        <div className="sm:col-span-3">
          <h2 className="text-lg font-black">Cadastro ilustrativo</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            O envio fica nesta tela. Nenhum dado sai do navegador.
          </p>
        </div>
        <label className="block text-xs text-muted-foreground">
          Nome do evento
          <input required className="field mt-1" name="nome" />
        </label>
        <label className="block text-xs text-muted-foreground">
          Cidade
          <input required className="field mt-1" name="cidade" />
        </label>
        <label className="block text-xs text-muted-foreground">
          Data
          <input required className="field mt-1" name="data" />
        </label>
        <div className="sm:col-span-3">
          <button type="submit" className="btn btn-primary">
            {sent ? "✓ Cadastro registrado (demo)" : "Enviar cadastro"}
          </button>
        </div>
      </form>
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
        {["", ...cats].map((c) => (
          <button
            type="button"
            key={c || "todos"}
            aria-pressed={cat === c}
            onClick={() => setCat(c)}
            className={`btn !py-1.5 ${cat === c ? "btn-primary" : "btn-ghost"}`}
          >
            {c || "Todos"}
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((e, index) => (
          <EventCard key={e.id} e={e} index={index} />
        ))}
      </div>
    </Shell>
  );
}
