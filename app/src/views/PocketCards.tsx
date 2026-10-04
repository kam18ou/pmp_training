import { useState } from 'react';
import { useProgramData } from '../hooks/useProgramData';
import { useI18n } from '../hooks/useI18n';
import { Pill } from '../components/ui';

export function PocketCards() {
  const { t } = useI18n();
  const data = useProgramData();
  const [active, setActive] = useState(data.cards[0]?.num ?? null);
  const card = data.cards.find((c) => c.num === active);

  if (!card) {
    return (
      <div className="card p-10 text-center text-slate-500">No pocket cards found.</div>
    );
  }

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="card p-4 bg-amber-500/10 border-amber-800/40 text-sm text-slate-300">
        {t('cards.intro')}
      </div>

      <div className="flex flex-wrap gap-2">
        {data.cards.map((c) => (
          <button
            key={c.num}
            onClick={() => setActive(c.num)}
            className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
              active === c.num
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30'
                : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
            }`}
          >
            {t('cards.cardButton', { n: c.num })}
          </button>
        ))}
      </div>

      <div className="card overflow-hidden">
        <div className="p-5 bg-gradient-to-br from-brand-900/30 to-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-brand-400">
              {t('cards.pocketLabel')} {card.num}
            </span>
            <Pill text={t('cards.cardLabel')} tone="amber" />
          </div>
          <h3 className="font-bold text-white mt-2">{card.title}</h3>
        </div>
        <div className="p-6 bg-slate-950/50">
          <div className="max-w-2xl mx-auto">
            {card.lines.map((l, i) => {
              const isRule = /^RULE:/i.test(l);
              const numbered = /^(\d+)\./.test(l);
              return (
                <div
                  key={i}
                  className={`flex gap-3 py-1.5 text-sm leading-relaxed ${
                    isRule
                      ? 'mt-3 pt-3 border-t border-red-500/30 text-red-300 font-medium'
                      : numbered
                        ? 'text-slate-300'
                        : 'text-slate-400 font-medium'
                  }`}
                >
                  {!isRule && !numbered && <span className="text-amber-500/70 shrink-0">│</span>}
                  <span>{l}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}