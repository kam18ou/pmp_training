import { useData } from '../data/useData';
import { LevelBadge } from '../components/ui';
import { useLang } from '../i18n/LangContext';
import type { InteractionType } from '../types';

interface WorkshopsProps {
  results: Record<number, number>;
  onSelect: (id: number) => void;
}

const INTERACTION_LABEL: Record<InteractionType, Record<'en' | 'fr' | 'ar', string>> = {
  sort: { en: 'Sort', fr: 'Trier', ar: 'صنّف' },
  order: { en: 'Sequence', fr: 'Séquence', ar: 'رتّب' },
  choose: { en: 'Decide', fr: 'Décider', ar: 'قرّر' },
  checklist: { en: 'Build a list', fr: 'Créer une liste', ar: 'ابنِ قائمة' },
  status: { en: 'Set status', fr: 'Définir statut', ar: 'اضبط الحالة' },
  assign: { en: 'Assign', fr: 'Attribuer', ar: 'أسنِد' },
};

export function Workshops({ results, onSelect }: WorkshopsProps) {
  const { lang, t } = useLang();
  const { workshops, modules } = useData();

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-display text-3xl font-extrabold text-ink">{t('workshops')}</h1>
        <p className="text-ink-soft mt-2 max-w-3xl">
          {lang === 'ar'
            ? 'خمس عشرة ورشة قصيرة — من 20 إلى 30 دقيقة لكل واحدة. كل ورشة تنتمي إلى وحدة، وكل واحدة تفاعلية: صنّف، رتّب، قرّر، ابنِ. الأخطاء هنا مجانية.'
            : lang === 'fr'
              ? 'Quinze exercices pratiques courts — de 20 à 30 minutes chacun. Chacun appartient à un module, et chacun est interactif : trier, séquencer, décider, construire. Les erreurs ici sont gratuites.'
              : 'Fifteen short practice exercises — 20 to 30 minutes each. Each one belongs to a module, and each one is interactive: sort, sequence, decide, build. Mistakes here are free.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {workshops.map((w) => {
          const score = results[w.id];
          const mod = modules.find((m) => m.id === w.moduleId);
          return (
            <button
              key={w.id}
              onClick={() => onSelect(w.id)}
              className="text-start card card-lift p-5 flex items-start gap-4"
            >
              <div
                className={`shrink-0 w-12 h-12 rounded-xl flex flex-col items-center justify-center font-display font-extrabold text-white ${
                  score !== undefined ? 'bg-emerald-500' : 'bg-gradient-to-br from-brand-600 to-violet-accent'
                }`}
              >
                {score !== undefined ? (
                  <span className="text-lg">✓</span>
                ) : (
                  <span className="text-lg">{w.id}</span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                  <span className="chip bg-slate-100 text-ink-soft font-mono">W{w.id}</span>
                  <LevelBadge level={w.level} />
                  <span className="text-[11px] text-ink-faint font-mono">⏱ {w.minutes} {t('minutes')}</span>
                  {w.interaction && (
                    <span className="chip bg-violet-100 text-violet-700">
                      {INTERACTION_LABEL[w.interaction.type][lang]}
                    </span>
                  )}
                </div>
                <h3 className="font-display font-bold text-ink leading-snug">{w.title}</h3>
                <p className="text-sm text-ink-soft mt-1 leading-relaxed line-clamp-2">{w.brief}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[11px] text-ink-faint">{t('module')} {w.moduleId}{mod ? ` · ${mod.name}` : ''}</span>
                  {score !== undefined ? (
                    <span className="chip bg-emerald-100 text-emerald-700">{score}%</span>
                  ) : (
                    <span className="text-xs font-semibold text-brand-600">{t('startHere')} →</span>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}