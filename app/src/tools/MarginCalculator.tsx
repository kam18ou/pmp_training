import { useState, useMemo } from 'react';
import { Pill } from '../components/ui';
import { useI18n } from '../hooks/useI18n';

export function MarginCalculator({ onRun }: { onRun: () => void }) {
  const { t } = useI18n();
  const [hours, setHours] = useState(160);
  const [wage, setWage] = useState(38);
  const [burdenPct, setBurdenPct] = useState(42);
  const [equipment, setEquipment] = useState(12000);
  const [otherCost, setOtherCost] = useState(2500);
  const [price, setPrice] = useState(32000);

  const calc = useMemo(() => {
    const burdenedRate = wage * (1 + burdenPct / 100);
    const laborCost = hours * burdenedRate;
    const totalCost = laborCost + equipment + otherCost;
    const margin = price - totalCost;
    const marginPct = price > 0 ? (margin / price) * 100 : 0;
    const breakEven = totalCost;
    const priceFor35 = totalCost / (1 - 0.35);
    return { burdenedRate, laborCost, totalCost, margin, marginPct, breakEven, priceFor35 };
  }, [hours, wage, burdenPct, equipment, otherCost, price]);

  const fmt = (n: number) =>
    n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  const healthy = calc.marginPct >= 28;

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="card p-5">
        <h3 className="section-title">{t('margin.title')}</h3>
        <p className="text-sm text-slate-400 mt-1">{t('margin.desc')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="card p-6 space-y-5">
          <Num label={t('margin.hours')} value={hours} onChange={setHours} step={5} />
          <Num label={t('margin.wage')} value={wage} onChange={setWage} step={1} />
          <div>
            <label className="label block mb-1.5">
              {t('margin.burden')} <span className="text-brand-300 font-mono">{burdenPct}%</span>
            </label>
            <input
              type="range"
              min={0}
              max={80}
              value={burdenPct}
              onChange={(e) => setBurdenPct(+e.target.value)}
              className="w-full accent-brand-500"
            />
          </div>
          <Num label={t('margin.equipment')} value={equipment} onChange={setEquipment} step={250} />
          <Num label={t('margin.other')} value={otherCost} onChange={setOtherCost} step={100} />
          <Num label={t('margin.price')} value={price} onChange={setPrice} step={500} />
          <button onClick={onRun} className="btn-primary w-full">
            {t('margin.log')}
          </button>
        </div>

        <div className="space-y-4">
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="label uppercase tracking-wider text-xs">{t('margin.result')}</div>
              <Pill
                text={healthy ? t('margin.healthy') : t('margin.atRisk')}
                tone={healthy ? 'green' : 'red'}
              />
            </div>
            <div className="text-5xl font-bold mb-1" style={{ color: healthy ? '#34d399' : '#f87171' }}>
              {calc.marginPct.toFixed(1)}%
            </div>
            <div className="text-xs text-slate-500 mb-5">{t('margin.grossOnPrice')}</div>
            <div className="space-y-2.5 pt-4 border-t border-slate-800">
              <Row label={t('margin.burdenedRate')} value={`${fmt(calc.burdenedRate)}/hr`} />
              <Row label={t('margin.laborCost')} value={fmt(calc.laborCost)} sub={`${hours} h`} />
              <Row label={t('margin.totalCost')} value={fmt(calc.totalCost)} bold />
              <Row label={t('margin.marginDollar')} value={fmt(calc.margin)} tone={healthy ? 'green' : 'red'} />
              <Row label={t('margin.breakEven')} value={fmt(calc.breakEven)} />
              <Row label={t('margin.priceFor35')} value={fmt(calc.priceFor35)} tone="blue" />
            </div>
          </div>
          <div className="card p-4 bg-amber-500/10 border-amber-800/40 text-xs text-slate-400 leading-relaxed">
            {t('margin.note')}
          </div>
        </div>
      </div>
    </div>
  );
}

function Num({
  label,
  value,
  onChange,
  step = 1,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  step?: number;
}) {
  return (
    <div>
      <label className="label block mb-1.5">{label}</label>
      <input
        type="number"
        step={step}
        min={0}
        value={value}
        onChange={(e) => onChange(Math.max(0, +e.target.value || 0))}
        className="input w-full font-mono"
      />
    </div>
  );
}

function Row({
  label,
  value,
  sub,
  bold,
  tone,
}: {
  label: string;
  value: string;
  sub?: string;
  bold?: boolean;
  tone?: 'green' | 'red' | 'blue';
}) {
  const color =
    tone === 'green' ? 'text-emerald-400' : tone === 'red' ? 'text-red-400' : tone === 'blue' ? 'text-brand-300' : 'text-slate-200';
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className={`text-sm ${bold ? 'font-semibold text-white' : 'text-slate-400'}`}>{label}</div>
        {sub && <div className="text-xs text-slate-600">{sub}</div>}
      </div>
      <div className={`font-mono ${bold ? 'font-bold' : ''} ${color}`}>{value}</div>
    </div>
  );
}