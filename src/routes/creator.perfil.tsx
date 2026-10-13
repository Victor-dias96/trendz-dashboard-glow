import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { toast } from "sonner";
import { Shell, PageTitle, Demo } from "@/components/Shell";
import { creatorProfile, niches } from "@/lib/demo";

export const Route = createFileRoute("/creator/perfil")({
  head: () => ({
    meta: [
      { title: "Editar perfil — Trendz Hub" },
      { name: "description", content: "Edite dados, redes, métricas e formatos do seu perfil." },
      { property: "og:title", content: "Editar perfil — Trendz Hub" },
      { property: "og:description", content: "Perfil editável do creator." },
    ],
  }),
  component: Edit,
});

const Sec = ({ t, children }: { t: string; children: ReactNode }) => (
  <section className="card p-6">
    <h2 className="mb-4 text-lg font-black">{t}</h2>
    {children}
  </section>
);
const F = ({ l, v }: { l: string; v: string }) => (
  <label className="block text-xs text-muted-foreground">
    {l}
    <input className="field mt-1" defaultValue={v} />
  </label>
);

function Toggles({
  opts,
  init,
  label,
}: {
  opts: readonly string[];
  init: readonly string[];
  label: string;
}) {
  const [s, setS] = useState<string[]>([...init]);
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {opts.map((o) => (
        <button
          type="button"
          key={o}
          aria-pressed={s.includes(o)}
          onClick={() => setS(s.includes(o) ? s.filter((x) => x !== o) : [...s, o])}
          className={`btn !py-1.5 ${s.includes(o) ? "btn-primary" : "btn-ghost"}`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function Edit() {
  const [saved, setSaved] = useState(false);
  return (
    <Shell>
      <PageTitle eyebrow="Área do creator" title="Perfil editável">
        <Demo />
      </PageTitle>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSaved(true);
          toast.success("Perfil salvo (demo)");
        }}
        className="grid gap-6 lg:grid-cols-2"
      >
        <Sec t="Dados">
          <div className="grid gap-3 sm:grid-cols-2">
            <F l="Nome artístico" v={creatorProfile.creator.name} />
            <F l="Cidade" v={creatorProfile.creator.city} />
            <F l="E-mail" v={creatorProfile.email} />
            <F l="Telefone" v={creatorProfile.phone} />
          </div>
        </Sec>
        <Sec t="Redes sociais">
          <div className="grid gap-3 sm:grid-cols-2">
            {creatorProfile.networks.map((network) => (
              <F key={network.label} l={network.label} v={network.value} />
            ))}
          </div>
        </Sec>
        <Sec t="Métricas">
          <div className="grid gap-3 sm:grid-cols-3">
            {creatorProfile.metrics.map((metric) => (
              <F key={metric.label} l={metric.label} v={metric.value} />
            ))}
          </div>
        </Sec>
        <Sec t="Valores aproximados">
          <div className="grid gap-3 sm:grid-cols-3">
            {creatorProfile.rates.map((rate) => (
              <F key={rate.label} l={rate.label} v={rate.value} />
            ))}
          </div>
        </Sec>
        <Sec t="Nichos">
          <Toggles label="Nichos" opts={niches} init={creatorProfile.selectedNiches} />
        </Sec>
        <Sec t="Formatos">
          <Toggles
            label="Formatos"
            opts={creatorProfile.formatOptions}
            init={creatorProfile.selectedFormats}
          />
        </Sec>
        <Sec t="Tenho interesse em">
          <Toggles
            label="Interesses"
            opts={creatorProfile.interestOptions}
            init={creatorProfile.selectedInterests}
          />
        </Sec>
        <div className="flex items-end">
          <button
            className={`btn btn-primary btn-action w-full !py-3 ${saved ? "btn-confirmed" : ""}`}
          >
            {saved ? "✓ Alterações salvas (demo)" : "Salvar perfil"}
          </button>
        </div>
      </form>
    </Shell>
  );
}
