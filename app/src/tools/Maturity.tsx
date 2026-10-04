import { useState, useMemo } from 'react';
import { useI18n } from '../hooks/useI18n';

interface Dimension {
  key: string;
  label: string;
  l1: string;
  l3: string;
  l5: string;
}

const KEY_ORDER = [
  'bidding',
  'scope',
  'planning',
  'procurement',
  'quality',
  'closeout',
  'safety',
  'sla',
];

export function Maturity({
  onComplete,
  currentLevel,
}: {
  onComplete: (level: number) => void;
  currentLevel: number | null;
}) {
  const { t, tList } = useI18n();

  const dimensions = useMemo<Dimension[]>(() => {
    const texts = tList<{ label: string; l1: string; l3: string; l5: string }>(
      'maturity.dimensions',
    );
    return KEY_ORDER.map((key, i) => {
      const tx = texts[i];
      return {
        key,
        label: tx?.label ?? key,
        l1: tx?.l1 ?? '',
        l3: tx?.l3 ?? '',
        l5: tx?.l5 ?? '',
      };
    });
  }, [tList]);

  const levelLabels = useMemo(() => tList<string>('maturity.levels'), [tList]);
  const priorities = useMemo(() => tList<string>('maturity.priorities'), [tList]);

  const [ratings, setRatings] = useState<Record<string, number>>(() =>
    Object.fromEntries(KEY_ORDER.map((k) => [k, 1])),
  );

  const avg = useMemo(
    () => Math.round(Object.values(ratings).reduce((a, b) => a + b, 0) / Math.max(dimensions.length, 1)),
    [ratings, dimensions],
  );

  const submit = () => onComplete(avg);

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="card p-5">
        <h3 className="section-title">{t('maturity.title')}</h3>
        <p className="text-sm text-slate-400 mt-1">{t('maturity.desc')}</p>
      </div>

      <div className="space-y-3">
        {dimensions.map((d) => (
          <div key={d.key} className="card p-5">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-white text-sm">{d.label}</div>
                <div className="mt-1.5 space-y-1 text-xs">
                  <div className="text-slate-500">
                    <span className="text-red-400/70">L1:</span> {d.l1}
                  </div>
                  <div className="text-slate-500">
                    <span className="text-amber-400/70">L3:</span> {d.l3}
                  </div>
                  <div className="text-slate-500">
                    <span className="text-emerald-400/70">L5:</span> {d.l5}
                  </div>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    onClick={() => setRatings((r) => ({ ...r, [d.key]: n }))}
                    className={`w-9 h-9 rounded-lg font-mono text-sm font-bold transition-all ${
                      ratings[d.key] === n
                        ? n >= 4
                          ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                          : n === 3
                            ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30'
                            : 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                        : 'bg-slate-800 text-slate-500 hover:bg-slate-700'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-6 bg-gradient-to-br from-brand-900/30 to-slate-900">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <div className="label uppercase tracking-wider text-xs">{t('maturity.assessed')}</div>
            <div className="text-4xl font-bold text-white mt-1">
              {t('common.level')} {avg}{' '}
              <span className="text-lg font-normal text-slate-400">
                — {levelLabels[avg] ?? ''}
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              {avg <= 2 ? priorities[0] : avg === 3 ? priorities[1] : priorities[2]}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            {currentLevel !== null && currentLevel !== avg && (
              <span className="text-xs text-slate-500">
                {t('maturity.previously')}{' '}
                <span className="text-slate-300">
                  {t('common.level')} {currentLevel}
                </span>
              </span>
            )}
            <button onClick={submit} className="btn-primary">
              {t('maturity.save')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}