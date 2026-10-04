import type { ViewKey } from '../types';
import { useData } from '../data/useData';
import { Card, ProgressRing, CountUp } from '../components/ui';
import { useLang } from '../i18n/LangContext';

const STEPS: Record<'en' | 'fr' | 'ar', [string, string][]> = {
  en: [
    ['Explain', 'One concept, in plain words'],
    ['Show', 'A CCTV project you recognise'],
    ['Do', 'A short workshop, in pairs'],
    ['Discuss', 'What worked, what to change'],
    ['Repeat', 'Until it becomes a habit'],
  ],
  fr: [
    ['Expliquer', 'Un concept, en mots simples'],
    ['Montrer', 'Un projet de vidéosurveillance que vous connaissez'],
    ['Faire', 'Un atelier court, en binôme'],
    ['Discuter', 'Ce qui a marché, ce qu’il faut changer'],
    ['Répéter', 'Jusqu’à ce que ce soit un réflexe'],
  ],
  ar: [
    ['اشرح', 'مفهوم واحد، بكلمات بسيطة'],
    ['اعرض', 'مشروع كاميرات تعرفه'],
    ['نفّذ', 'ورشة قصيرة في مجموعات ثنائية'],
    ['ناقش', 'ما نجح وما يجب تغييره'],
    ['كرّر', 'حتى يصبح عادة'],
  ],
};

interface HomeProps {
  modulePercent: number;
  completedCount: number;
  workshopsDone: number;
  simulationBest: number | null;
  onNavigate: (k: ViewKey) => void;
}

export function Home({ modulePercent, completedCount, workshopsDone, simulationBest, onNavigate }: HomeProps) {
  const { lang, t } = useLang();
  const { modules, stages } = useData();
  const nextModule = modules.find((m) => m.id === completedCount + 1);
  const steps = STEPS[lang];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-violet-accent p-8 md:p-12 shadow-xl shadow-brand-500/30 animate-gradient-shift bg-[length:200%_200%]">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 animate-float" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-300/40 rounded-full blur-3xl translate-y-1/2 animate-float" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="relative">
          <span className="chip bg-white/20 text-white backdrop-blur-sm">{t('heroChip')}</span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white mt-4 leading-tight max-w-3xl">
            {t('heroTitle')}
          </h1>
          <p className="text-white/85 text-lg mt-4 max-w-2xl leading-relaxed">
            {t('heroBody')}
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <button
              onClick={() => onNavigate('path')}
              className="px-5 py-3 rounded-xl bg-white text-brand-700 font-bold shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
            >
              {completedCount === 0 ? t('startPath') : t('continueLearning')}
            </button>
            <button
              onClick={() => onNavigate('simulation')}
              className="px-5 py-3 rounded-xl bg-white/15 text-white font-bold backdrop-blur-sm border border-white/30 hover:bg-white/25 transition-all active:scale-[0.98]"
            >
              {t('trySimulation')}
            </button>
          </div>
        </div>
      </div>

      {/* Progress snapshot */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 flex items-center gap-5">
          <ProgressRing percent={modulePercent} size={88} stroke={9} />
          <div>
            <div className="font-display text-xl font-extrabold text-ink">{t('yourProgress')}</div>
            <div className="text-sm text-ink-soft mt-0.5">
              <span className="font-bold text-brand-600"><CountUp to={completedCount} /></span> {t('modulesComplete')}
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="font-display text-xl font-extrabold text-ink">
            <CountUp to={workshopsDone} /> {t('of15')}
          </div>
          <div className="text-sm text-ink-soft mt-0.5">{t('workshopsFinished')}</div>
          <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-accent to-brand-500 rounded-full transition-all duration-500"
              style={{ width: `${(workshopsDone / 15) * 100}%` }}
            />
          </div>
        </Card>
        <Card className="p-6">
          <div className="font-display text-xl font-extrabold text-ink">
            {simulationBest === null ? t('notAttempted') : `${simulationBest}%`}
          </div>
          <div className="text-sm text-ink-soft mt-0.5">{t('simulation')} — {t('spineProjectLabel')}</div>
          <button
            onClick={() => onNavigate('simulation')}
            className="text-sm font-semibold text-brand-600 hover:text-brand-700 mt-3"
          >
            {simulationBest === null ? t('takeWhenReady') : t('playAgain')}
          </button>
        </Card>
      </div>

      {/* How it works */}
      <div>
        <h2 className="font-display text-2xl font-extrabold text-ink mb-1">{t('howLessonsWork')}</h2>
        <p className="text-sm text-ink-soft mb-4">{t('howLessonsSub')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {steps.map(([title, desc], i) => (
            <Card key={title} className="p-4 relative overflow-hidden animate-stagger-fade-in" lift>
              <div style={{ animationDelay: `${i * 60}ms` }} />
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-brand-50 rounded-full" />
              <div className="relative">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-600 to-violet-accent text-white font-bold font-display flex items-center justify-center text-sm">
                  {i + 1}
                </div>
                <div className="font-display font-bold text-ink mt-3">{title}</div>
                <div className="text-xs text-ink-soft mt-1">{desc}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* The journey */}
      <div>
        <h2 className="font-display text-2xl font-extrabold text-ink mb-1">{t('journey')}</h2>
        <p className="text-sm text-ink-soft mb-4">{t('journeySub')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {stages.map((st) => {
            const mods = modules.filter((m) => m.stage === st.key);
            const done = mods.filter((m) => m.id <= completedCount).length;
            return (
              <button
                key={st.key}
                onClick={() => onNavigate('path')}
                className="text-start card card-lift p-4 border-t-4 hover:shadow-lg transition-shadow"
                style={{ borderTopColor: st.color }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-extrabold text-sm" style={{ color: st.color }}>
                    {st.name}
                  </span>
                  <span className="text-[10px] font-mono text-ink-faint">
                    {done}/{mods.length}
                  </span>
                </div>
                <div className="text-xs text-ink-soft mt-1.5 leading-relaxed">
                  {st.blurb}
                </div>
                <div className="mt-3 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${(done / mods.length) * 100}%`, backgroundColor: st.color }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Spine project */}
      <Card className="p-6 bg-gradient-to-br from-white to-brand-50/60">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-xl">
            <span className="chip bg-amber-100 text-amber-700">{t('spineChip')}</span>
            <h2 className="font-display text-2xl font-extrabold text-ink mt-3">
              {t('spineTitle')}
            </h2>
            <p className="text-sm text-ink-soft mt-2 leading-relaxed">
              {t('spineDesc')}
            </p>
          </div>
          <button onClick={() => onNavigate('spine')} className="btn-primary">
            {t('openProject')}
          </button>
        </div>
      </Card>

      {nextModule && completedCount > 0 && (
        <Card className="p-5 flex flex-wrap items-center justify-between gap-4 border-s-4 border-s-brand-500">
          <div>
            <div className="text-xs text-ink-faint font-semibold uppercase tracking-wider">{t('upNext')}</div>
            <div className="font-display font-bold text-ink mt-0.5">
              {t('module')} {nextModule.id} — {nextModule.name}
            </div>
          </div>
          <button onClick={() => onNavigate('path')} className="btn-ghost text-sm">
            {t('goToModule')}
          </button>
        </Card>
      )}
    </div>
  );
}