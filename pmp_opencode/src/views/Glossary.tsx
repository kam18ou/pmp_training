import { useState } from 'react';
import { useData } from '../data/useData';
import { Card } from '../components/ui';
import { useLang } from '../i18n/LangContext';

export function Glossary() {
  const { t } = useLang();
  const { glossary } = useData();
  const [query, setQuery] = useState('');

  const filtered = glossary.filter(
    (g) =>
      !query ||
      g.plain.toLowerCase().includes(query.toLowerCase()) ||
      g.pro.toLowerCase().includes(query.toLowerCase()) ||
      g.meaning.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-display text-3xl font-extrabold text-ink">{t('glossary')}</h1>
        <p className="text-ink-soft mt-2 max-w-3xl">
          {t('glossaryIntro')}
        </p>
      </div>

      <input
        type="text"
        placeholder={t('searchTerm')}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input max-w-sm"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((g, i) => (
          <Card key={i} className="p-5 card-lift">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="font-display font-extrabold text-ink">{g.plain}</span>
              <span className="text-ink-faint text-xs">→</span>
              <span className="font-mono text-sm font-bold text-violet-700">{g.pro}</span>
            </div>
            <p className="text-sm text-ink-soft mt-2 leading-relaxed">{g.meaning}</p>
            <div className="mt-3 rounded-lg bg-amber-50/70 border border-amber-100 px-3 py-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                {t('spineProjectLabel')}
              </span>
              <p className="text-xs text-ink-soft mt-0.5 leading-relaxed">{g.example}</p>
            </div>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <Card className="p-10 text-center text-ink-faint">
          {t('noTermsMatch')} “{query}”.
        </Card>
      )}
    </div>
  );
}