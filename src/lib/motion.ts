import type { CSSProperties } from "react";

const STAGGER_MS = 35;
const STAGGER_CAP = 6;

export function enterStyle(index: number): CSSProperties {
  const step = Math.min(Math.max(index, 0), STAGGER_CAP);
  return { "--enter-delay": `${step * STAGGER_MS}ms` };
}

export function progressStyle(percent: number): CSSProperties {
  return { "--progress": `${percent}%` };
}
