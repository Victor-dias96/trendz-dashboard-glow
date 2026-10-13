import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { fmt, type Creator, type Event } from "@/lib/demo";

export function CreatorCard({ c }: { c: Creator }) {
  const [added, setAdded] = useState(false);
  return (
    <div className="card group overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={c.photo}
          alt={c.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="chip absolute left-3 top-3 !bg-background/80 !text-foreground">
          {c.type}
        </span>
      </div>
      <div className="space-y-3 p-5">
        <div>
          <h3 className="text-lg font-bold">{c.name}</h3>
          <p className="text-sm text-muted-foreground">
            {c.handle} · {c.city}
          </p>
        </div>
        <div className="flex flex-wrap gap-1">
          {c.niches.map((n) => (
            <span key={n} className="chip">
              {n}
            </span>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">{c.platforms.join(" · ")}</p>
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="rounded-xl bg-surface p-2">
            <p className="font-display font-black text-primary">{fmt(c.followers)}</p>
            <p className="text-[11px] text-muted-foreground">alcance</p>
          </div>
          <div className="rounded-xl bg-surface p-2">
            <p className="font-display font-black text-pink">{c.engagement}%</p>
            <p className="text-[11px] text-muted-foreground">engajamento</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Link to="/creators/$id" params={{ id: c.id }} className="btn btn-primary flex-1">
            Ver perfil
          </Link>
          <button type="button" onClick={() => setAdded(!added)} className="btn btn-ghost flex-1">
            {added ? "✓ Na lista" : "Adicionar à lista"}
          </button>
        </div>
      </div>
    </div>
  );
}

export function EventCard({ e }: { e: Event }) {
  return (
    <div className="card group overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={e.image}
          alt={e.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="chip absolute left-3 top-3 !bg-primary !text-primary-foreground">
          {e.category}
        </span>
      </div>
      <div className="space-y-3 p-5">
        <h3 className="text-lg font-bold">{e.name}</h3>
        <p className="text-sm text-muted-foreground">
          {e.city} · {e.date} · {fmt(e.audience)} pessoas
        </p>
        <div className="flex flex-wrap gap-1">
          {e.formats.map((f) => (
            <span key={f} className="chip">
              {f}
            </span>
          ))}
        </div>
        <Link to="/eventos/$id" params={{ id: e.id }} className="btn btn-primary w-full">
          Ver oportunidade
        </Link>
      </div>
    </div>
  );
}

export function InterestButton({ label }: { label: string }) {
  const [sent, setSent] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setSent(true)}
      className="btn btn-primary w-full !py-3 text-base"
    >
      {sent ? "✓ Interesse enviado à Trendz (demo)" : label}
    </button>
  );
}
