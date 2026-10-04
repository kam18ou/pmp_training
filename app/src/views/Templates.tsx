import { useState } from 'react';
import { useProgramData } from '../hooks/useProgramData';
import { useI18n } from '../hooks/useI18n';
import { Pill } from '../components/ui';

export function Templates() {
  const { t } = useI18n();
  const data = useProgramData();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState<string | null>(null);

  const filtered = data.templates.filter(
    (tpl) =>
      !query ||
      tpl.name.toLowerCase().includes(query.toLowerCase()) ||
      tpl.purpose.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder={t('templates.searchPlaceholder')}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input flex-1"
        />
        <Pill text={`${filtered.length} ${t('templates.shown')}`} tone="blue" />
      </div>

      <div className="card p-4 bg-brand-900/20 border-brand-800/40 text-sm text-slate-300">
        {t('templates.adoptionNote')}
      </div>

      <div className="space-y-2">
        {filtered.map((tpl) => {
          const isOpen = open === tpl.id;
          return (
            <div key={tpl.id} className="card overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? null : tpl.id)}
                className="w-full flex items-center gap-4 px-5 py-3.5 text-start hover:bg-slate-800/50 transition-colors"
              >
                <span className="font-mono text-xs text-slate-600 shrink-0 w-10">
                  T{tpl.id.padStart(2, '0')}
                </span>
                <span className="font-medium text-white text-sm flex-1">{tpl.name}</span>
                {tpl.fields.length > 0 && (
                  <Pill text={`${tpl.fields.length} ${t('templates.fields')}`} />
                )}
                <span className={`text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                  ▾
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 animate-fade-in">
                  {tpl.purpose && (
                    <p className="text-slate-300 text-sm leading-relaxed mb-4 border-s-2 border-brand-500 ps-4">
                      {tpl.purpose}
                    </p>
                  )}
                  {tpl.fields.length > 0 ? (
                    <div>
                      <div className="label mb-2">{t('templates.requiredFields')}</div>
                      <ul className="space-y-1.5">
                        {tpl.fields.map((f, i) => (
                          <li key={i} className="flex gap-2.5 text-sm text-slate-400">
                            <span className="text-brand-400 shrink-0">▪</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="text-sm text-slate-500">{t('templates.noFields')}</div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}