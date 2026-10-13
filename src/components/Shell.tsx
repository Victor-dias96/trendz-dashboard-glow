import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

const nav = [
  { to: "/marca", label: "Marca" },
  { to: "/creators", label: "Creators" },
  { to: "/eventos", label: "Eventos" },
  { to: "/creator", label: "Área do creator" },
  { to: "/admin", label: "Painel interno" },
] as const;

export function Shell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <div className="bg-brand py-1 text-center text-[11px] font-bold uppercase tracking-widest text-primary-foreground">
        Protótipo · todos os dados são de demonstração
      </div>
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="font-display text-lg font-black">
            trendz<span className="text-primary">.</span>hub
          </Link>
          <nav className="hidden gap-1 md:flex">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="rounded-full px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground" activeProps={{ className: "bg-secondary !text-primary" }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <button className="btn btn-ghost md:hidden" onClick={() => setOpen(!open)}>Menu</button>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t px-4 py-3 md:hidden">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm">{n.label}</Link>
            ))}
          </nav>
        )}
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
      <footer className="border-t py-8 text-center text-xs text-muted-foreground">Trendz Hub · MVP visual para apresentação</footer>
    </div>
  );
}

export function Demo() {
  return <span className="chip !bg-pink/15 !text-pink">DEMO</span>;
}

export function PageTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div className="min-w-0">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">{eyebrow}</p>
        <h1 className="text-3xl font-black sm:text-4xl">{title}</h1>
      </div>
      {children}
    </div>
  );
}

export function Stat({ label, value, tone = "primary" }: { label: string; value: string; tone?: "primary" | "pink" | "violet" }) {
  const c = { primary: "text-primary", pink: "text-pink", violet: "text-violet" }[tone];
  return (
    <div className="card p-5">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className={`mt-2 font-display text-3xl font-black ${c}`}>{value}</p>
    </div>
  );
}

export function StatusBadge({ s }: { s: string }) {
  const m: Record<string, string> = {
    Aprovada: "bg-primary/15 text-primary", "Em análise": "bg-violet/20 text-violet",
    Disponível: "bg-pink/15 text-pink", Recusada: "bg-destructive/15 text-destructive", Pendente: "bg-violet/20 text-violet",
  };
  return <span className={`chip ${m[s] ?? ""}`}>{s}</span>;
}
