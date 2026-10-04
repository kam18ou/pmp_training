import { useState, useMemo } from 'react';
import { Pill } from '../components/ui';
import { useI18n } from '../hooks/useI18n';

const CRITERIA_IDS = [
  'credit',
  'scope',
  'schedule',
  'capability',
  'availability',
  'margin',
  'relationship',
  'liability',
  'subcontractor',
  'access',
] as const;

export function BidScorecard({ onRun }: { onRun: () => void }) {
  const { t, tList } = useI18n();
  const criteria = useMemo(() => {
    const texts = tList<{ name: string; desc: string }>('bid.criteria');
    return CRITERIA_IDS.map((id, i) => ({
      id,
      ...(texts[i] ?? { name: id, desc: '' }),
    }));
  }, [tList]);

  const [scores, setScores] = useState<Record<string, number>>(
    () => Object.fromEntries(CRITERIA_IDS.map((c) => [c, 5])),
  );
  const [rfpName, setRfpName] = useState('');

  const total = useMemo(
    () => criteria.reduce((sum, c) => sum + (scores[c.id] ?? 0), 0),
    [criteria, scores],
  );

  const verdict = useMemo(() => {
    if (total >= 75)
      return {
        label: t('bid.verdict.mustBid'),
        tone: 'green' as const,
        advice: t('bid.verdict.mustBidAdvice'),
      };
    if (total >= 60)
      return {
        label: t('bid.verdict.conditional'),
        tone: 'amber' as const,
        advice: t('bid.verdict.conditionalAdvice'),
      };
    return {
      label: t('bid.verdict.noBid'),
      tone: 'red' as const,
      advice: t('bid.verdict.noBidAdvice'),
    };
  }, [total, t]);

  const reset = () => {
    setScores(Object.fromEntries(CRITERIA_IDS.map((c) => [c, 5])));
    setRfpName('');
  };

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="card p-5">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h3 className="section-title">{t('bid.title')}</h3>
            <p className="text-sm text-slate-400 mt-1">
              {t('bid.desc')} <span className="text-emerald-300">{t('bid.mustBid')}</span> ·{' '}
              <span className="text-amber-300">{t('bid.conditional')}</span> ·{' '}
              <span className="text-red-300">{t('bid.noBid')}</span>.
            </p>
          </div>
          <div className="flex gap-2">
            <button onClick={reset} className="btn-secondary text-sm">{t('common.reset')}</button>
            <button
              onClick={() => {
                onRun();
                reset();
              }}
              className="btn-primary text-sm"
            >
              {t('bid.logReset')}
            </button>
          </div>
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder={t('bid.rfpPlaceholder')}
            value={rfpName}
            onChange={(e) => setRfpName(e.target.value)}
            className="input w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-3">
          {criteria.map((c) => (
            <div key={c.id} className="card p-4">
              <div className="flex items-center justify-between gap-3 mb-2">
                <div>
                  <div className="font-medium text-white text-sm">{c.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{c.desc}</div>
                </div>
                <span
                  className={`font-mono text-lg font-bold w-12 text-end ${
                    scores[c.id] >= 7
                      ? 'text-emerald-400'
                      : scores[c.id] >= 4
                        ? 'text-amber-400'
                        : 'text-red-400'
                  }`}
                >
                  {scores[c.id]}
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={10}
                value={scores[c.id]}
                onChange={(e) => setScores((s) => ({ ...s, [c.id]: +e.target.value }))}
                className="w-full accent-brand-500 cursor-pointer"
              />
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="card p-6 text-center sticky top-20">
            <div className="label uppercase tracking-wider text-xs">{t('bid.total')}</div>
            <div
              className={`text-6xl font-bold mt-2 ${
                verdict.tone === 'green'
                  ? 'text-emerald-400'
                  : verdict.tone === 'amber'
                    ? 'text-amber-400'
                    : 'text-red-400'
              }`}
            >
              {total}
            </div>
            <div className="text-xs text-slate-500 mb-4">{t('bid.outOf')}</div>
            <Pill text={verdict.label} tone={verdict.tone} />
            <p className="text-sm text-slate-400 mt-4 leading-relaxed text-start">{verdict.advice}</p>
            {rfpName && (
              <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-500">
                {t('bid.scoringFor')}: <span className="text-slate-300">{rfpName}</span>
              </div>
            )}
          </div>
          <div className="card p-4 bg-amber-500/10 border-amber-800/40 text-xs text-slate-400 leading-relaxed">
            {t('bid.estimating')}
          </div>
        </div>
      </div>
    </div>
  );
}