import { useState, useMemo } from 'react';
import { Pill } from '../components/ui';
import { useI18n } from '../hooks/useI18n';

interface Risk {
  id: number;
  desc: string;
  category: string;
  prob: number;
  impact: number;
  owner: string;
  response: string;
}

const CATEGORY_KEYS = ['Technical', 'Schedule', 'Commercial', 'Safety', 'Regulatory'];
const RESPONSE_KEYS = ['Prevent', 'Mitigate', 'Transfer', 'Accept'];

const SEED: Risk[] = [
  {
    id: 1,
    desc: 'Core switch delivery slips past the cutover window',
    category: 'Schedule',
    prob: 3,
    impact: 4,
    owner: 'PM',
    response: 'Mitigate',
  },
  {
    id: 2,
    desc: 'Energized circuit found in cabinet not isolated by electrical sub',
    category: 'Safety',
    prob: 2,
    impact: 5,
    owner: 'Foreman',
    response: 'Prevent',
  },
];

export function RiskRegister({ onRun }: { onRun: () => void }) {
  const { t, tList } = useI18n();
  const categories = useMemo(() => tList<string>('risk.categories'), [tList]);
  const responses = useMemo(() => tList<string>('risk.responses'), [tList]);

  const catLabel = (key: string) => categories[CATEGORY_KEYS.indexOf(key)] ?? key;
  const respLabel = (key: string) => responses[RESPONSE_KEYS.indexOf(key)] ?? key;

  const [risks, setRisks] = useState<Risk[]>(SEED);
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState(CATEGORY_KEYS[0]);
  const [prob, setProb] = useState(3);
  const [impact, setImpact] = useState(3);
  const [owner, setOwner] = useState('PM');
  const [response, setResponse] = useState(RESPONSE_KEYS[0]);

  const score = (r: Risk) => r.prob * r.impact;

  const sorted = [...risks].sort((a, b) => score(b) - score(a));

  const add = () => {
    if (!desc.trim()) return;
    setRisks((r) => [
      ...r,
      { id: Date.now(), desc: desc.trim(), category, prob, impact, owner, response },
    ]);
    setDesc('');
    onRun();
  };

  const remove = (id: number) => setRisks((r) => r.filter((x) => x.id !== id));

  const tone = (s: number) => (s >= 12 ? 'red' : s >= 6 ? 'amber' : 'green') as 'red' | 'amber' | 'green';

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="card p-5">
        <h3 className="section-title">{t('risk.title')}</h3>
        <p className="text-sm text-slate-400 mt-1">{t('risk.desc')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="card p-6 space-y-4">
          <div className="label uppercase tracking-wider text-xs">{t('risk.add')}</div>
          <input
            type="text"
            placeholder={t('risk.descPlaceholder')}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && add()}
            className="input w-full"
          />
          <div className="grid grid-cols-2 gap-3">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input"
            >
              {CATEGORY_KEYS.map((c) => (
                <option key={c} value={c}>
                  {catLabel(c)}
                </option>
              ))}
            </select>
            <select value={response} onChange={(e) => setResponse(e.target.value)} className="input">
              {RESPONSE_KEYS.map((c) => (
                <option key={c} value={c}>
                  {respLabel(c)}
                </option>
              ))}
            </select>
          </div>
          <Slider label={t('risk.probability')} value={prob} onChange={setProb} />
          <Slider label={t('risk.impact')} value={impact} onChange={setImpact} />
          <input
            type="text"
            placeholder={t('risk.ownerPlaceholder')}
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            className="input w-full"
          />
          <button onClick={add} className="btn-primary w-full" disabled={!desc.trim()}>
            {t('risk.addBtn')}
          </button>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="label uppercase tracking-wider text-xs">
              {t('risk.register')} ({risks.length})
            </div>
            <Pill text={t('risk.sorted')} tone="blue" />
          </div>
          {sorted.length === 0 ? (
            <div className="text-sm text-slate-500 text-center py-8">{t('risk.noRisks')}</div>
          ) : (
            <div className="space-y-3 max-h-[420px] overflow-y-auto ps-1">
              {sorted.map((r) => {
                const s = score(r);
                return (
                  <div key={r.id} className="rounded-lg bg-slate-800/50 border border-slate-700 p-3.5">
                    <div className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-slate-200 leading-snug">{r.desc}</div>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          <Pill text={catLabel(r.category)} />
                          <Pill text={respLabel(r.response)} tone="blue" />
                          <span className="badge-slate">{r.owner}</span>
                        </div>
                      </div>
                      <div className="shrink-0 text-end">
                        <div
                          className={`text-2xl font-bold font-mono ${
                            tone(s) === 'red'
                              ? 'text-red-400'
                              : tone(s) === 'amber'
                                ? 'text-amber-400'
                                : 'text-emerald-400'
                          }`}
                        >
                          {s}
                        </div>
                        <div className="text-[10px] text-slate-600">
                          {r.prob}×{r.impact}
                        </div>
                      </div>
                      <button
                        onClick={() => remove(r.id)}
                        className="shrink-0 text-slate-600 hover:text-red-400 transition-colors text-sm"
                        title={t('risk.remove')}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
}) {
  return (
    <div>
      <label className="label block mb-1.5">
        {label}: <span className="text-brand-300 font-mono">{value}</span>
      </label>
      <input
        type="range"
        min={1}
        max={5}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        className="w-full accent-brand-500"
      />
    </div>
  );
}