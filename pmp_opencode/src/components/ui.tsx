import { useState, useEffect, type ReactNode } from 'react';
import { useLang } from '../i18n/LangContext';
import { useData } from '../data/useData';

/* ---------- Progress ring ---------- */
export function ProgressRing({
  percent,
  size = 72,
  stroke = 8,
  label,
}: {
  percent: number;
  size?: number;
  stroke?: number;
  label?: ReactNode;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (Math.min(100, percent) / 100) * c;
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#ece9f5"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#ring-grad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(0.22,1,0.36,1)' }}
        />
        <defs>
          <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#6366f1" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {label ?? (
          <>
            <span className="font-display font-extrabold text-ink" style={{ fontSize: size * 0.26 }}>
              {percent}%
            </span>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- Stage chip ---------- */
const STAGE_HEX: Record<string, string> = {
  start: '#6366f1',
  plan: '#8b5cf6',
  do: '#f59e0b',
  check: '#0ea5e9',
  finish: '#10b981',
};
export function StageChip({ stage, className = '' }: { stage: string; className?: string }) {
  const { stages } = useData();
  const s = stages.find((x) => x.key === stage);
  const color = s?.color ?? STAGE_HEX[stage];
  return (
    <span
      className={`chip-stage ${className}`}
      style={{ backgroundColor: `${color}1f`, color }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
      {s?.name ?? stage}
    </span>
  );
}
export function stageHex(stage: string) {
  return STAGE_HEX[stage];
}

/* ---------- Level badge ---------- */
const LEVEL_META: Record<number, { key: string; cls: string }> = {
  1: { key: 'level1', cls: 'bg-brand-50 text-brand-700' },
  2: { key: 'level2', cls: 'bg-violet-50 text-violet-700' },
  3: { key: 'level3', cls: 'bg-amber-50 text-amber-700' },
};
export function LevelBadge({ level }: { level: number }) {
  const { t } = useLang();
  const m = LEVEL_META[level];
  return <span className={`chip ${m.cls}`}>{t(m.key as 'level1')}</span>;
}

/* ---------- Card ---------- */
export function Card({ children, className = '', lift = false }: { children: ReactNode; className?: string; lift?: boolean }) {
  return <div className={`card ${lift ? 'card-lift' : ''} ${className}`}>{children}</div>;
}

/* ---------- Section heading ---------- */
export function SectionTitle({ children, sub }: { children: ReactNode; sub?: string }) {
  return (
    <div className="mb-4">
      <h2 className="font-display text-2xl font-extrabold text-ink">{children}</h2>
      {sub && <p className="text-sm text-ink-soft mt-1">{sub}</p>}
    </div>
  );
}

/* ---------- Empty state ---------- */

/* ---------- Count up ---------- */
export function CountUp({ to, duration = 1000 }: { to: number; duration?: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * to));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [to, duration]);

  return <>{value}</>;
}

/* ---------- Confetti ---------- */
export function Confetti() {
  const particles = Array.from({ length: 30 });
  const colors = ['#6366f1', '#8b5cf6', '#f59e0b', '#10b981', '#0ea5e9'];
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((_, i) => {
        const left = Math.random() * 100;
        const animDuration = 1.5 + Math.random() * 2;
        const delay = Math.random() * 0.5;
        const bg = colors[Math.floor(Math.random() * colors.length)];
        return (
          <div
            key={i}
            className="absolute top-[-20px] w-2.5 h-3.5 rounded-sm animate-fade-in"
            style={{
              left: `${left}%`,
              backgroundColor: bg,
              animation: `confetti-fall ${animDuration}s ease-in-out ${delay}s forwards`,
            }}
          />
        );
      })}
    </div>
  );
}

