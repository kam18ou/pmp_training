import { useState } from 'react';
import { useData } from '../data/useData';
import { Card, LevelBadge, Confetti } from '../components/ui';
import { InteractionEngine } from '../components/interactions';
import { useLang } from '../i18n/LangContext';
import type { ViewKey } from '../types';

interface WorkshopDetailProps {
  workshopId: number;
  results: Record<number, number>;
  onScore: (id: number, percent: number) => void;
  onNavigate: (k: ViewKey) => void;
}

export function WorkshopDetail({ workshopId, results, onScore, onNavigate }: WorkshopDetailProps) {
  const { t } = useLang();
  const { workshops, modules } = useData();
  const w = workshops.find((x) => x.id === workshopId);
  const [tab, setTab] = useState<'brief' | 'practice'>('brief');
  const [celebrate, setCelebrate] = useState(false);
  if (!w) return null;

  const mod = modules.find((m) => m.id === w.moduleId);
  const score = results[w.id];

  return (
    <div className="space-y-6 animate-fade-in">
      {celebrate && <Confetti />}
      <button onClick={() => onNavigate('workshops')} className="btn-ghost text-sm">
        {t('backToWorkshops')}
      </button>

      <Card className="p-7 bg-gradient-to-br from-white to-violet-50/60">
        <div className="flex items-start justify-between gap-5 flex-wrap">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <span className="chip bg-violet-100 text-violet-700 font-mono">{t('workshop')} {w.id}</span>
              <LevelBadge level={w.level} />
              <span className="text-xs text-ink-faint font-mono">⏱ {w.minutes} {t('minutes')}</span>
              {score !== undefined && (
                <span className="chip bg-emerald-100 text-emerald-700">{t('best')} {score}%</span>
              )}
            </div>
            <h1 className="font-display text-3xl font-extrabold text-ink leading-tight">{w.title}</h1>
            <p className="text-ink-soft mt-2 leading-relaxed">{w.brief}</p>
          </div>
        </div>
        {mod && (
          <button
            onClick={() => onNavigate('module')}
            className="mt-5 text-xs font-semibold text-brand-600 hover:text-brand-700 bg-brand-50 px-3 py-1.5 rounded-lg"
          >
            {t('belongsTo')} {mod.id} — {mod.name} →
          </button>
        )}
      </Card>

      <div className="flex gap-2 border-b border-line">
        {(['brief', 'practice'] as const).map((t2) => (
          <button
            key={t2}
            onClick={() => setTab(t2)}
            className={`px-4 py-2.5 text-sm font-semibold border-b-2 transition-all ${
              tab === t2
                ? 'border-brand-500 text-brand-700'
                : 'border-transparent text-ink-faint hover:text-ink'
            }`}
          >
            {t2 === 'brief' ? t('trainerBrief') : w.interaction ? t('practiceNow') : t('exercise')}
          </button>
        ))}
      </div>

      {tab === 'brief' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="field-label mb-3">{t('howToRun')}</div>
            <ol className="space-y-3">
              {w.steps.map((s, i) => (
                <li key={i} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-700 text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </Card>
          <div className="space-y-6">
            <Card className="p-6">
              <div className="field-label mb-3">{t('materials')}</div>
              <ul className="space-y-2">
                {w.materials.map((mm, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-ink-soft">
                    <span className="text-ink-faint">▪</span>
                    {mm}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6">
              <div className="field-label mb-2">{t('expectedResult')}</div>
              <p className="text-sm text-ink leading-relaxed">{w.expected}</p>
            </Card>
            <Card className="p-6">
              <div className="field-label mb-3">{t('assessOn')}</div>
              <ul className="space-y-2">
                {w.assess.map((a, i) => (
                  <li key={i} className="flex gap-2.5 text-sm text-ink-soft">
                    <span className="text-emerald-400 shrink-0">✓</span>
                    {a}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-ink-faint mt-3">
                {t('threeTiers')}
              </p>
            </Card>
          </div>
        </div>
      ) : (
        <Card className="p-6">
          {w.interaction ? (
            <InteractionEngine
              data={w.interaction}
              onScore={(p) => {
                onScore(w.id, p);
                if (p >= 80) {
                  setCelebrate(true);
                  setTimeout(() => setCelebrate(false), 3500);
                }
              }}
            />
          ) : (
            <p className="prose-plain">{t('runsOnPaper')}</p>
          )}
        </Card>
      )}
    </div>
  );
}