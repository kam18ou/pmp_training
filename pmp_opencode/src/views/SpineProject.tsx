import { useData } from '../data/useData';
import { Card } from '../components/ui';
import { useLang } from '../i18n/LangContext';
import type { ViewKey } from '../types';

interface SpineProjectProps {
  completed: number[];
  onNavigate: (k: ViewKey) => void;
}

export function SpineProject({ completed, onNavigate }: SpineProjectProps) {
  const { t } = useLang();
  const { spine, templates, modules } = useData();
  const unlocked = (moduleId: number) => completed.includes(moduleId);
  const openSections = spine.filter((s) => unlocked(s.moduleId)).length;

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-display text-3xl font-extrabold text-ink">{t('spine')}</h1>
        <p className="text-ink-soft mt-2 max-w-3xl">
          {t('spineDesc')}
        </p>
      </div>

      <Card className="p-5 flex flex-wrap items-center justify-between gap-4 bg-gradient-to-br from-white to-amber-50/60">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-amber-400/40">
            📷
          </div>
          <div>
            <div className="font-display font-extrabold text-ink">{t('spineFolder')}</div>
            <div className="text-sm text-ink-soft">
              {openSections} {t('of')} {spine.length} {t('sectionsBuilt')} · {modules.length} {t('modulesToComplete')}
            </div>
          </div>
        </div>
        <div className="flex-1 max-w-xs">
          <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transition-all duration-700"
              style={{ width: `${(openSections / spine.length) * 100}%` }}
            />
          </div>
        </div>
      </Card>

      {openSections === 0 && (
        <Card className="p-8 text-center">
          <div className="text-4xl mb-3">🔒</div>
          <div className="font-display font-bold text-ink">{t('emptyFolderTitle')}</div>
          <p className="text-sm text-ink-soft mt-2 max-w-md mx-auto">
            {t('emptyFolderBody')}
          </p>
          <button onClick={() => onNavigate('path')} className="btn-primary mt-5">
            {t('goToPath')}
          </button>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {spine.map((s) => {
          const open = unlocked(s.moduleId);
          return (
            <Card
              key={s.title}
              className={`p-5 transition-all ${open ? 'opacity-100' : 'opacity-60'}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">{open ? s.icon : '🔒'}</span>
                <h3 className="font-display font-bold text-ink flex-1">{s.title}</h3>
                {open ? (
                  <span className="chip bg-emerald-100 text-emerald-700">{t('built')}</span>
                ) : (
                  <span className="chip bg-slate-100 text-ink-faint">{t('module')} {s.moduleId}</span>
                )}
              </div>
              {open ? (
                <>
                  <ul className="space-y-2">
                    {s.lines.map((l, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-ink-soft leading-relaxed">
                        <span className="text-amber-500 shrink-0 mt-0.5">▸</span>
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-3 border-t border-line flex flex-wrap gap-2">
                    {s.templateIds.map((tid) => {
                      const tpl = templates.find((x) => x.id === tid);
                      if (!tpl) return null;
                      return (
                        <button
                          key={tid}
                          onClick={() => onNavigate('templates')}
                          className="text-[11px] font-semibold text-brand-600 hover:text-brand-700 bg-brand-50 px-2 py-1 rounded-md"
                        >
                          ▤ {tpl.name}
                        </button>
                      );
                    })}
                  </div>
                </>
              ) : (
                <button
                  onClick={() => onNavigate('path')}
                  className="text-sm text-ink-faint hover:text-brand-600 font-medium"
                >
                  {t('unlock')} {s.moduleId} {t('toUnlock')}
                </button>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}