import { useProgramData } from '../hooks/useProgramData';
import { useI18n } from '../hooks/useI18n';
import { Pill } from '../components/ui';

export function KPIs() {
  const { t } = useI18n();
  const data = useProgramData();

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="card p-4 bg-emerald-500/10 border-emerald-800/40 text-sm text-slate-300">
        {data.kpis.length} {t('kpis.intro')}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data.kpis.map((k) => {
          const isGate = k.num >= 17;
          const tone: 'green' | 'amber' | 'blue' = isGate ? 'green' : k.num <= 6 ? 'blue' : 'amber';
          return (
            <div key={k.num} className="card card-hover p-5">
              <div className="flex items-start gap-3">
                <span className="shrink-0 w-9 h-9 rounded-lg bg-slate-800 text-slate-300 font-mono text-xs font-bold flex items-center justify-center">
                  {String(k.num).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-sm leading-snug">{k.name}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Pill text={k.target.replace(/\*\*/g, '')} tone={tone} />
                    {isGate && <Pill text={t('kpis.complianceGate')} tone="red" />}
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 space-y-2">
                <div>
                  <div className="label text-[11px] uppercase tracking-wider mb-0.5">
                    {t('kpis.formula')}
                  </div>
                  <code className="text-xs text-brand-300 font-mono break-all">{k.formula.replace(/`/g, '')}</code>
                </div>
                <div>
                  <div className="label text-[11px] uppercase tracking-wider mb-0.5">
                    {t('kpis.trigger')}
                  </div>
                  <div className="text-xs text-slate-400">{k.trigger.replace(/\*\*/g, '')}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}