import { useState } from 'react';
import { useData } from '../data/useData';
import { Card } from '../components/ui';
import { useLang } from '../i18n/LangContext';

export function Templates() {
  const { t } = useLang();
  const { templates } = useData();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState<number | null>(null);

  const filtered = templates.filter(
    (t2) =>
      !query ||
      t2.name.toLowerCase().includes(query.toLowerCase()) ||
      t2.purpose.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-display text-3xl font-extrabold text-ink">{t('templatesTitle')}</h1>
        <p className="text-ink-soft mt-2 max-w-3xl">
          {t('templatesIntro')}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <input
          type="text"
          placeholder={t('search')}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input flex-1 min-w-[200px] max-w-sm"
        />
        <span className="text-sm text-ink-faint">{filtered.length} {t('shown')}</span>
      </div>

      <div className="space-y-3">
        {filtered.map((t2) => {
          const isOpen = open === t2.id;
          return (
            <Card key={t2.id} className="overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? null : t2.id)}
                className="w-full flex items-center gap-4 px-5 py-4 text-start hover:bg-brand-50/40 transition-colors"
              >
                <span className="font-mono text-xs text-ink-faint shrink-0 w-9">
                  T{String(t2.id).padStart(2, '0')}
                </span>
                <span className="font-display font-bold text-ink flex-1">{t2.name}</span>
                <span className="chip bg-slate-100 text-ink-soft hidden sm:inline-flex">
                  {t2.fields.length} {t('fields')}
                </span>
                <span
                  className={`text-ink-faint transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                >
                  ▾
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-6 animate-fade-in">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-ink-soft leading-relaxed mb-4">{t2.purpose}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="chip bg-brand-50 text-brand-700">✎ {t('filledBy')}: {t2.filledBy}</span>
                        <span className="chip bg-amber-50 text-amber-700">⏱ {t('filledWhen')}: {t2.filledWhen}</span>
                      </div>
                      <div className="field-label mb-2">{t('fields')}</div>
                      <ul className="space-y-1.5">
                        {t2.fields.map((f, i) => (
                          <li key={i} className="flex gap-2.5 text-sm text-ink-soft">
                            <span className="text-brand-400 shrink-0">▪</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-line bg-gradient-to-br from-white to-amber-50/40 p-4">
                      <div className="field-label mb-2">{t('filledExample')}</div>
                      <div className="space-y-2">
                        {t2.example.map((e, i) => (
                          <div
                            key={i}
                            className="text-xs font-mono text-ink-soft bg-white/70 border border-line rounded-lg px-3 py-2 leading-relaxed"
                          >
                            {e}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}