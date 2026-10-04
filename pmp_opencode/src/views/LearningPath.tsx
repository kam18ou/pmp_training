import { useData } from '../data/useData';
import { Card, StageChip, LevelBadge } from '../components/ui';
import { useLang } from '../i18n/LangContext';
import type { ViewKey } from '../types';

interface LearningPathProps {
  completed: number[];
  onSelect: (id: number) => void;
  onNavigate: (k: ViewKey) => void;
}

export function LearningPath({ completed, onSelect, onNavigate }: LearningPathProps) {
  const { t } = useLang();
  const { modules, stages } = useData();
  const done = (id: number) => completed.includes(id);

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="font-display text-3xl font-extrabold text-ink">{t('pathTitle')}</h1>
        <p className="text-ink-soft mt-2">
          {t('pathIntro')}
        </p>
      </div>

      {stages.map((st) => {
        const mods = modules.filter((m) => m.stage === st.key);
        const stageDone = mods.filter((m) => done(m.id)).length;
        return (
          <div key={st.key}>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-display font-extrabold"
                style={{ backgroundColor: st.color }}
              >
                {mods[0].id}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="font-display text-xl font-extrabold" style={{ color: st.color }}>
                    {st.name}
                  </h2>
                  <span className="text-xs text-ink-faint font-mono">
                    {stageDone}/{mods.length} {t('done')}
                  </span>
                </div>
                <p className="text-sm text-ink-soft">{st.blurb}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {mods.map((m) => {
                const isDone = done(m.id);
                return (
                  <button
                    key={m.id}
                    onClick={() => onSelect(m.id)}
                    className={`text-start card card-lift p-5 flex items-start gap-4 relative overflow-hidden group ${
                      isDone ? 'border-emerald-200' : ''
                    }`}
                  >
                    {isDone && (
                      <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-50 rounded-full -translate-y-8 translate-x-8" />
                    )}
                    <div
                      className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-display font-extrabold text-lg transition-transform duration-200 group-hover:scale-110 ${
                        isDone ? 'bg-emerald-500 text-white' : 'bg-brand-50 text-brand-600'
                      }`}
                    >
                      {isDone ? '✓' : m.id}
                    </div>
                    <div className="flex-1 min-w-0 relative">
                      <div className="flex items-center gap-2 flex-wrap mb-1.5">
                        <StageChip stage={m.stage} />
                        <LevelBadge level={m.level} />
                        <span className="text-[11px] text-ink-faint font-mono">{m.duration}</span>
                      </div>
                      <h3 className="font-display font-bold text-ink leading-snug">
                        {m.name}
                      </h3>
                      <p className="text-sm text-ink-soft mt-1 leading-relaxed">
                        {m.tagline}
                      </p>
                      <div className="flex items-center gap-3 mt-2.5 text-[11px] text-ink-faint">
                        {m.workshopId && (
                          <span>✎ {t('workshop')} {m.workshopId}</span>
                        )}
                        {m.templateIds.length > 0 && (
                          <span>
                            ▤ {m.templateIds.length} {t('templates')}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      <Card className="p-6 bg-gradient-to-br from-white to-violet-50/60">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-extrabold text-ink">{t('finishedAll')}</h3>
            <p className="text-sm text-ink-soft mt-1">
              {t('finishedAllSub')}
            </p>
          </div>
          <button
            onClick={() => onNavigate('simulation')}
            className="btn-primary"
          >
            {t('openSimulation')}
          </button>
        </div>
      </Card>
    </div>
  );
}