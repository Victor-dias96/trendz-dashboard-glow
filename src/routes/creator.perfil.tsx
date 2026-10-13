import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Shell, PageTitle, Demo } from "@/components/Shell";
import { niches } from "@/lib/demo";

export const Route = createFileRoute("/creator/perfil")({
  head: () => ({ meta: [{ title: "Editar perfil — Trendz Hub" }, { name: "description", content: "Edite dados, redes, métricas e formatos do seu perfil." }, { property: "og:title", content: "Editar perfil — Trendz Hub" }, { property: "og:description", content: "Perfil editável do creator." }] }),
  component: Edit,
});

const Sec = ({ t, children }: { t: string; children: ReactNode }) => <section className="card p-6"><h2 className="mb-4 text-lg font-black">{t}</h2>{children}</section>;
const F = ({ l, v }: { l: string; v: string }) => <label className="block text-xs text-muted-foreground">{l}<input className="field mt-1" defaultValue={v} /></label>;

function Toggles({ opts, init }: { opts: string[]; init: string[] }) {
  const [s, setS] = useState(init);
  return <div className="flex flex-wrap gap-2">{opts.map((o) => <button type="button" key={o} onClick={() => setS(s.includes(o) ? s.filter((x) => x !== o) : [...s, o])} className={`btn !py-1.5 ${s.includes(o) ? "btn-primary" : "btn-ghost"}`}>{o}</button>)}</div>;
}

function Edit() {
  const [saved, setSaved] = useState(false);
  return (
    <Shell>
      <PageTitle eyebrow="Área do creator" title="Perfil editável"><Demo /></PageTitle>
      <form onSubmit={(e) => { e.preventDefault(); setSaved(true); }} className="grid gap-6 lg:grid-cols-2">
        <Sec t="Dados"><div className="grid gap-3 sm:grid-cols-2"><F l="Nome artístico" v="Luna Reis" /><F l="Cidade" v="São Paulo" /><F l="E-mail" v="luna@demo.com" /><F l="Telefone" v="(11) 90000-0000" /></div></Sec>
        <Sec t="Redes sociais"><div className="grid gap-3 sm:grid-cols-2"><F l="Instagram" v="@lunareis" /><F l="TikTok" v="@lunareis" /><F l="YouTube" v="" /><F l="Twitch" v="" /></div></Sec>
        <Sec t="Métricas"><div className="grid gap-3 sm:grid-cols-3"><F l="Seguidores" v="482000" /><F l="Engajamento (%)" v="6,8" /><F l="Views médias" v="120000" /></div></Sec>
        <Sec t="Valores aproximados"><div className="grid gap-3 sm:grid-cols-3"><F l="Reels" v="R$ 4.000" /><F l="Stories" v="R$ 1.500" /><F l="Evento" v="R$ 8.000" /></div></Sec>
        <Sec t="Nichos"><Toggles opts={niches} init={["Moda", "Lifestyle"]} /></Sec>
        <Sec t="Formatos"><Toggles opts={["Reels", "Stories", "TikTok", "Vídeo longo", "Live", "Presença em evento"]} init={["Reels", "Stories"]} /></Sec>
        <Sec t="Tenho interesse em"><Toggles opts={["UGC", "Campanhas", "Eventos"]} init={["Campanhas", "Eventos"]} /></Sec>
        <div className="flex items-end"><button className="btn btn-primary w-full !py-3">{saved ? "✓ Alterações salvas (demo)" : "Salvar perfil"}</button></div>
      </form>
    </Shell>
  );
}
