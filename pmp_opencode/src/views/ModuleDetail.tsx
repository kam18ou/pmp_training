import { useData } from '../data/useData';
import { Card, StageChip, LevelBadge } from '../components/ui';
import { useLang } from '../i18n/LangContext';
import type { ViewKey } from '../types';

interface ModuleDetailProps {
  moduleId: number;
  completed: number[];
  onToggle: (id: number) => void;
  onSelectModule: (id: number) => void;
  onNavigate: (k: ViewKey) => void;
}

export function ModuleDetail({
  moduleId,
  completed,
  onToggle,
  onSelectModule,
  onNavigate,
}: ModuleDetailProps) {
  const { t } = useLang();
  const { modules, workshops, templates } = useData();
  const m = modules.find((x) => x.id === moduleId);
  if (!m) return null;

  const isDone = completed.includes(m.id);
  const workshop = m.workshopId ? workshops.find((w) => w.id === m.workshopId) : undefined;
  const tpls = templates.filter((t) => m.templateIds.includes(t.id));
  const prev = modules.find((x) => x.id === m.id - 1);
  const next = modules.find((x) => x.id === m.id + 1);

  return (
    <div className="space-y-6 animate-fade-in">
      <button onClick={() => onNavigate('path')} className="btn-ghost text-sm">
        {t('backToPath')}
      </button>

      {/* Header */}
      <Card className="p-7 bg-gradient-to-br from-white to-brand-50/70">
        <div className="flex items-start justify-between gap-5 flex-wrap">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <span className="chip bg-brand-100 text-brand-700 font-mono">{t('module')} {m.id}</span>
              <StageChip stage={m.stage} />
              <LevelBadge level={m.level} />
              <span className="text-xs text-ink-faint font-mono">{m.duration}</span>
            </div>
            <h1 className="font-display text-3xl font-extrabold text-ink leading-tight">{m.name}</h1>
            <p className="text-lg text-ink-soft mt-2">{m.tagline}</p>
          </div>
          <button
            onClick={() => onToggle(m.id)}
            className={isDone ? 'btn-ghost' : 'btn-primary'}
          >
            {isDone ? t('completed') : t('markComplete')}
          </button>
        </div>
        <div className="mt-5 pt-5 border-t border-line">
          <div className="field-label mb-1">{t('learningObjective')}</div>
          <p className="text-[15px] text-ink leading-relaxed">{m.objective}</p>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Plain explanation */}
          <Card className="p-6">
            <h2 className="font-display text-lg font-extrabold text-ink mb-3">{t('inPlainWords')}</h2>
            <div className="space-y-3">
              {m.plain.map((p, i) => (
                <p key={i} className="prose-plain">
                  {p}
                </p>
              ))}
            </div>
            {m.proTerm && (
              <div className="mt-5 rounded-xl bg-violet-50 border border-violet-200 p-4">
                <div className="field-label mb-1">{t('proTerm')}</div>
                <p className="text-sm text-ink leading-relaxed">
                  <span className="font-bold text-violet-700">{m.proTerm.plain}</span> — {t('commonlyCalled')}{' '}
                  <span className="font-mono font-bold text-ink">{m.proTerm.pro}</span>.{' '}
                  {m.proTerm.meaning}
                </p>
              </div>
            )}
          </Card>

          {/* Spine example */}
          <Card className="p-6 border-t-4 border-t-amber-400">
            <div className="field-label mb-3">{t('spineLabel')}</div>
            <div className="space-y-3">
              {m.spineExample.map((p, i) => (
                <div
                  key={i}
                  className="flex gap-3 text-sm text-ink-soft leading-relaxed"
                >
                  <span className="text-amber-500 shrink-0 mt-0.5">▸</span>
                  <span>{p}</span>
                </div>
              ))}
            </div>
            {m.otherExample && (
              <div className="mt-4 pt-4 border-t border-line">
                <div className="field-label mb-1">{t('sameIdea')} {m.otherExample.domain}</div>
                <p className="text-sm text-ink-soft leading-relaxed">{m.otherExample.text}</p>
              </div>
            )}
          </Card>

          {/* Workshop */}
          {workshop && (
            <Card className="p-6 border-t-4 border-t-brand-500">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1">
                  <div className="field-label mb-2">{t('practiceNow')}</div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    {t('workshop')} {workshop.id} — {workshop.title}
                  </h3>
                  <p className="text-sm text-ink-soft mt-1.5 leading-relaxed">{workshop.brief}</p>
                  <div className="flex items-center gap-3 mt-3 text-[11px] text-ink-faint">
                    <span>⏱ {workshop.minutes} {t('minutes')}</span>
                    <span>{t('level')} {workshop.level}</span>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('workshops')}
                  className="btn-primary text-sm shrink-0"
                >
                  {t('openWorkshop')}
                </button>
              </div>
            </Card>
          )}

          {/* Monday */}
          <Card className="p-6 bg-gradient-to-br from-emerald-50 to-white">
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-lg">
                →
              </div>
              <div>
                <div className="field-label mb-1">{t('useMonday')}</div>
                <p className="text-sm text-ink leading-relaxed font-medium">{m.monday}</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Tool */}
          <Card className="p-5">
            <div className="field-label mb-2">{t('simpleTool')}</div>
            <p className="text-sm text-ink leading-relaxed">{m.tool}</p>
          </Card>

          {/* Templates */}
          {tpls.length > 0 && (
            <Card className="p-5">
              <div className="field-label mb-3">{t('templatesInModule')}</div>
              <div className="space-y-2">
                {tpls.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => onNavigate('templates')}
                    className="w-full text-start flex items-center gap-3 rounded-lg border border-line p-2.5 hover:border-brand-300 hover:bg-brand-50/50 transition-all"
                  >
                    <span className="font-mono text-xs text-ink-faint w-8 shrink-0">
                      T{String(t.id).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-medium text-ink">{t.name}</span>
                  </button>
                ))}
              </div>
            </Card>
          )}

          {/* Discussion */}
          <Card className="p-5">
            <div className="field-label mb-3">{t('discussGroup')}</div>
            <ol className="space-y-2.5">
              {m.discussion.map((q, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-ink-soft leading-relaxed">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-brand-100 text-brand-700 text-[11px] font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  {q}
                </li>
              ))}
            </ol>
          </Card>

          {/* Mistakes */}
          <Card className="p-5">
            <div className="field-label mb-3">{t('mistakesWatch')}</div>
            <ul className="space-y-2.5">
              {m.mistakes.map((mm, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-ink-soft leading-relaxed">
                  <span className="shrink-0 text-rose-400 mt-0.5">✗</span>
                  {mm}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      {/* Prev / next */}
      <div className="flex items-center justify-between gap-3 pt-2">
        {prev ? (
          <button onClick={() => onSelectModule(prev.id)} className="btn-ghost text-sm">
            ← {prev.id}. {prev.name}
          </button>
        ) : (
          <span />
        )}
        {next ? (
          <button onClick={() => onSelectModule(next.id)} className="btn-ghost text-sm">
            {next.id}. {next.name} →
          </button>
        ) : (
          <button onClick={() => onNavigate('simulation')} className="btn-primary text-sm">
            {t('takeWhenReady')}
          </button>
        )}
      </div>
    </div>
  );
}