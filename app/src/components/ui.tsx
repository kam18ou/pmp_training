import { useState, type ReactNode } from 'react';

/** Collapsible detail section used in module/workshop views. */
export function Collapsible({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-3.5 text-start hover:bg-slate-800/50 transition-colors"
      >
        <span className="font-semibold text-white">{title}</span>
        <span
          className={`text-slate-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          ▾
        </span>
      </button>
      {open && <div className="px-5 pb-5 pt-1 animate-fade-in">{children}</div>}
    </div>
  );
}

export function List({ items, marker = '•', className = '' }: { items: string[]; marker?: string; className?: string }) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
          <span className="text-brand-400 shrink-0 mt-0.5">{marker}</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
          <span className="shrink-0 w-5 h-5 rounded-full bg-brand-600/20 text-brand-300 text-xs font-bold flex items-center justify-center mt-0.5">
            {i + 1}
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ol>
  );
}

export function Pill({ text, tone = 'slate' }: { text: string; tone?: 'blue' | 'green' | 'amber' | 'red' | 'slate' }) {
  const cls = {
    blue: 'badge-blue',
    green: 'badge-green',
    amber: 'badge-amber',
    red: 'badge-red',
    slate: 'badge-slate',
  }[tone];
  return <span className={cls}>{text}</span>;
}

export function EmptyState({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="card p-12 text-center">
      <div className="text-4xl mb-3 opacity-40">▤</div>
      <div className="font-semibold text-slate-300">{title}</div>
      {hint && <div className="text-sm text-slate-500 mt-1">{hint}</div>}
    </div>
  );
}

export function StatCard({
  label,
  value,
  sub,
  tone = 'blue',
}: {
  label: string;
  value: string | number;
  sub?: string;
  tone?: 'blue' | 'green' | 'amber';
}) {
  const ring = {
    blue: 'from-brand-500/20',
    green: 'from-emerald-500/20',
    amber: 'from-amber-500/20',
  }[tone];
  return (
    <div className={`card p-5 bg-gradient-to-br ${ring} to-slate-900`}>
      <div className="label text-xs uppercase tracking-wider">{label}</div>
      <div className="text-3xl font-bold text-white mt-1">{value}</div>
      {sub && <div className="text-xs text-slate-400 mt-1">{sub}</div>}
    </div>
  );
}
