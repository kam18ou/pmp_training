import { useState, useMemo } from 'react';
import { useI18n } from '../hooks/useI18n';

export function ChangeOrderPricer({ onRun }: { onRun: () => void }) {
  const { t } = useI18n();
  const [laborHours, setLaborHours] = useState(8);
  const [laborRate, setLaborRate] = useState(110);
  const [materialCost, setMaterialCost] = useState(1200);
  const [subcontract, setSubcontract] = useState(0);
  const [marginTarget, setMarginTarget] = useState(35);
  const [description, setDescription] = useState('');

  const calc = useMemo(() => {
    const labor = laborHours * laborRate;
    const directCost = labor + materialCost + subcontract;
    const price = directCost / (1 - marginTarget / 100);
    const margin = price - directCost;
    return { labor, directCost, price, margin };
  }, [laborHours, laborRate, materialCost, subcontract, marginTarget]);

  const fmt = (n: number) =>
    n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="card p-5">
        <h3 className="section-title">{t('changeOrder.title')}</h3>
        <p className="text-sm text-slate-400 mt-1">{t('changeOrder.desc')}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="card p-6 space-y-5">
          <div>
            <label className="label block mb-1.5">{t('changeOrder.description')}</label>
            <input
              type="text"
              placeholder={t('changeOrder.descPlaceholder')}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input w-full"
            />
          </div>
          <NumberField label={t('changeOrder.laborHours')} value={laborHours} onChange={setLaborHours} step={0.5} min={0} />
          <NumberField label={t('changeOrder.laborRate')} value={laborRate} onChange={setLaborRate} step={5} min={0} />
          <NumberField label={t('changeOrder.material')} value={materialCost} onChange={setMaterialCost} step={25} min={0} />
          <NumberField label={t('changeOrder.subcontract')} value={subcontract} onChange={setSubcontract} step={50} min={0} />
          <div>
            <label className="label block mb-1.5">
              {t('changeOrder.targetMargin')}:{' '}
              <span className="text-brand-300 font-mono">{marginTarget}%</span>
            </label>
            <input
              type="range"
              min={10}
              max={55}
              value={marginTarget}
              onChange={(e) => setMarginTarget(+e.target.value)}
              className="w-full accent-brand-500"
            />
          </div>
          <button onClick={onRun} className="btn-primary w-full">
            {t('changeOrder.log')}
          </button>
        </div>

        <div className="space-y-4">
          <div className="card p-6">
            <div className="label uppercase tracking-wider text-xs mb-3">{t('changeOrder.quotedPrice')}</div>
            <div className="text-5xl font-bold text-emerald-400">{fmt(calc.price)}</div>
            <div className="mt-4 pt-4 border-t border-slate-800 space-y-2.5">
              <Row label={t('changeOrder.labor')} value={fmt(calc.labor)} sub={`${laborHours} h × ${fmt(laborRate)}`} />
              <Row label={t('changeOrder.materials')} value={fmt(materialCost)} />
              {subcontract > 0 && <Row label={t('changeOrder.subcontractLabel')} value={fmt(subcontract)} />}
              <Row label={t('changeOrder.totalDirect')} value={fmt(calc.directCost)} bold />
              <Row
                label={t('changeOrder.grossMargin')}
                value={fmt(calc.margin)}
                sub={`${marginTarget}% ${t('changeOrder.ofPrice')}`}
                tone="green"
              />
            </div>
          </div>
          <div className="card p-4 bg-red-500/10 border-red-800/40 text-xs text-slate-400 leading-relaxed">
            {t('changeOrder.warning')}
          </div>
        </div>
      </div>
    </div>
  );
}

function NumberField({
  label,
  value,
  onChange,
  step = 1,
  min = 0,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  step?: number;
  min?: number;
}) {
  return (
    <div>
      <label className="label block mb-1.5">{label}</label>
      <input
        type="number"
        step={step}
        min={min}
        value={value}
        onChange={(e) => onChange(Math.max(min, +e.target.value || 0))}
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
  tone?: 'green';
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className={`text-sm ${bold ? 'font-semibold text-white' : 'text-slate-400'}`}>{label}</div>
        {sub && <div className="text-xs text-slate-600">{sub}</div>}
      </div>
      <div className={`font-mono ${tone === 'green' ? 'text-emerald-400 font-bold' : 'text-slate-200'}`}>
        {value}
      </div>
    </div>
  );
}