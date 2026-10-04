import { NAV_GROUPS, VIEW_TITLE_KEYS } from '../hooks/useProgramData';
import { useI18n } from '../hooks/useI18n';
import type { Progress, ViewKey } from '../types';

interface SidebarProps {
  current: ViewKey;
  onNavigate: (key: ViewKey) => void;
  progress: Progress;
  onReset: () => void;
}

const LANGS = [
  { code: 'en' as const, label: 'EN' },
  { code: 'fr' as const, label: 'FR' },
  { code: 'ar' as const, label: 'ع' },
];

export function Sidebar({ current, onNavigate, progress, onReset }: SidebarProps) {
  const { t, lang, setLang } = useI18n();
  const totalItems =
    progress.completedModules.length + progress.completedWorkshops.length;

  return (
    <aside className="w-64 shrink-0 bg-slate-900 border-e border-slate-800 flex flex-col h-full">
      {/* Brand */}
      <div className="p-5 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand-600/30">
            PM
          </div>
          <div className="min-w-0">
            <div className="font-bold text-white leading-tight truncate">{t('common.appTitle')}</div>
            <div className="text-xs text-slate-500 truncate">{t('common.appSubtitle')}</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4">
        {NAV_GROUPS.map((group) => (
          <div key={group.labelKey} className="mb-6">
            <div className="px-5 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
              {t(group.labelKey)}
            </div>
            <div className="space-y-1">
              {group.items.map((item) => {
                const active = current === item.key;
                const badge =
                  item.key === 'modules'
                    ? progress.completedModules.length
                    : item.key === 'workshops'
                      ? progress.completedWorkshops.length
                      : 0;
                return (
                  <button
                    key={item.key}
                    onClick={() => onNavigate(item.key)}
                    className={`w-full flex items-center gap-3 px-5 py-2 text-sm transition-all duration-150 ${
                      active
                        ? 'bg-brand-600/15 text-brand-300 border-e-2 border-brand-500 font-semibold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <span className="text-base opacity-80 shrink-0">{item.icon}</span>
                    <span className="flex-1 text-start">{t(item.labelKey)}</span>
                    {badge > 0 && (
                      <span className="badge-green text-[10px] shrink-0">{badge}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800 space-y-3">
        <div className="text-xs text-slate-500">
          <div className="flex justify-between mb-1">
            <span>{t('common.progress')}</span>
            <span className="text-slate-300">
              {totalItems} {t('common.items')}
            </span>
          </div>
          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-brand-500 to-emerald-500 transition-all duration-500"
              style={{ width: `${Math.min(100, totalItems * 3)}%` }}
            />
          </div>
        </div>
        <button onClick={onReset} className="btn-ghost w-full text-xs">
          {t('common.resetProgress')}
        </button>
        <div className="flex rounded-lg overflow-hidden border border-slate-700">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`flex-1 py-1.5 text-xs font-semibold transition-all duration-150 ${
                lang === l.code
                  ? 'bg-brand-600 text-white'
                  : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

export function TopBar({ current }: { current: ViewKey }) {
  const { t } = useI18n();
  return (
    <header className="h-14 border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm flex items-center justify-between px-6 sticky top-0 z-10">
      <h1 className="font-semibold text-white">{t(VIEW_TITLE_KEYS[current])}</h1>
      <div className="flex items-center gap-3 text-xs text-slate-500">
        <span className="badge-slate">10 Modules</span>
        <span className="badge-slate">22 Workshops</span>
        <span className="badge-slate">31 Templates</span>
      </div>
    </header>
  );
}