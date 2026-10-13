import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Shell, PageTitle, Demo } from "@/components/Shell";
import { EventCard } from "@/components/Cards";
import { events } from "@/lib/demo";

export const Route = createFileRoute("/eventos/")({
  head: () => ({ meta: [{ title: "Eventos e patrocínios — Trendz Hub" }, { name: "description", content: "Catálogo de eventos com cotas de patrocínio disponíveis." }, { property: "og:title", content: "Eventos e patrocínios — Trendz Hub" }, { property: "og:description", content: "Descubra eventos para patrocinar." }] }),
  component: Events,
});

function Events() {
  const [cat, setCat] = useState("");
  const cats = [...new Set(events.map((e) => e.category))];
  const list = events.filter((e) => !cat || e.category === cat);
  return (
    <Shell>
      <PageTitle eyebrow="Catálogo integrado" title="Eventos & patrocínios">
        <div className="flex items-center gap-3"><Demo /><button className="btn btn-ghost" onClick={() => alert("Cadastro de evento — disponível na versão final (demo)")}>+ Cadastrar evento</button></div>
      </PageTitle>
      <div className="mb-6 flex flex-wrap gap-2">
        {["", ...cats].map((c) => <button key={c} onClick={() => setCat(c)} className={`btn !py-1.5 ${cat === c ? "btn-primary" : "btn-ghost"}`}>{c || "Todos"}</button>)}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{list.map((e) => <EventCard key={e.id} e={e} />)}</div>
    </Shell>
  );
}
