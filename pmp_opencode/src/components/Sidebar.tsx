import type { ViewKey } from '../types';
import { ProgressRing } from './ui';
import { useLang, type UIKey } from '../i18n/LangContext';

const NAV: { key: ViewKey; labelKey: UIKey; icon: string; groupKey: UIKey }[] = [
  { key: 'home', labelKey: 'home', icon: '◈', groupKey: 'startHere' },
  { key: 'path', labelKey: 'path', icon: '🗺', groupKey: 'startHere' },
  { key: 'spine', labelKey: 'spine', icon: '📷', groupKey: 'startHere' },
  { key: 'workshops', labelKey: 'workshops', icon: '✎', groupKey: 'practice' },
  { key: 'templates', labelKey: 'templates', icon: '▤', groupKey: 'practice' },
  { key: 'glossary', labelKey: 'glossary', icon: '💬', groupKey: 'practice' },
  { key: 'agenda', labelKey: 'agenda', icon: '📅', groupKey: 'practice' },
  { key: 'simulation', labelKey: 'simulation', icon: '🏁', groupKey: 'assessment' },
];

interface SidebarProps {
  current: ViewKey;
  onNavigate: (key: ViewKey) => void;
  modulePercent: number;
  completedCount: number;
  workshopsDone: number;
  onReset: () => void;
}

export function Sidebar({
  current,
  onNavigate,
  modulePercent,
  completedCount,
  workshopsDone,
  onReset,
}: SidebarProps) {
  const { lang, setLang, t } = useLang();
  const groups = [...new Set(NAV.map((n) => n.groupKey))];

  return (
    <aside className="w-64 shrink-0 bg-white/80 backdrop-blur-md border-e border-line flex flex-col h-full">
      {/* Brand */}
      <div className="p-5 border-b border-line">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-violet-accent flex items-center justify-center text-white font-display font-extrabold text-lg shadow-lg shadow-brand-500/30">
            PM
          </div>
          <div className="min-w-0">
            <div className="font-display font-extrabold text-ink leading-tight">PM Basics</div>
            <div className="text-[11px] text-ink-faint">{t('noJargon')}</div>
          </div>
          <div className="ms-auto flex items-center rounded-lg border border-line bg-white overflow-hidden text-[11px] font-bold">
            {(['en', 'fr', 'ar'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-label={`Language: ${l}`}
                className={`px-2 py-1 transition-colors ${
                  lang === l ? 'bg-brand-600 text-white' : 'text-ink-soft hover:bg-brand-50'
                }`}
              >
                {l === 'ar' ? 'ع' : l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4">
        {groups.map((group) => (
          <div key={group} className="mb-5">
            <div className="px-5 mb-2 text-[10px] font-bold uppercase tracking-widest text-ink-faint">
              {t(group)}
            </div>
            <div className="space-y-0.5">
              {NAV.filter((n) => n.groupKey === group).map((item) => {
                const active = current === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => onNavigate(item.key)}
                    className={`w-full flex items-center gap-3 px-5 py-2.5 text-sm font-medium transition-all duration-200 rounded-s-xl relative ${
                      active
                        ? 'bg-brand-50 text-brand-700 font-semibold'
                        : 'text-ink-soft hover:text-ink hover:bg-brand-50/50'
                    }`}
                  >
                    {active && (
                      <span className="absolute inset-y-1 start-0 w-1 rounded-full bg-gradient-to-b from-brand-500 to-violet-accent" />
                    )}
                    <span className="text-base opacity-80 shrink-0 w-5 text-center transition-transform duration-200 group-hover:scale-110">{item.icon}</span>
                    <span className="flex-1 text-start">{t(item.labelKey)}</span>
                    {item.key === 'simulation' && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-line">
        <div className="flex items-center gap-3">
          <ProgressRing percent={modulePercent} size={56} stroke={6} />
          <div className="text-xs text-ink-soft leading-relaxed">
            <div className="font-semibold text-ink">{completedCount} {t('ofModules')}</div>
            <div>{workshopsDone} {t('workshopsDone')}</div>
          </div>
        </div>
        <button
          onClick={onReset}
          className="btn-ghost w-full text-xs mt-3"
          title="Reset all progress"
        >
          {t('resetProgress')}
        </button>
      </div>
    </aside>
  );
}
