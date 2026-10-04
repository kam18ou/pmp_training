import type { Progress, ViewKey } from '../types';
import { useProgramData } from '../hooks/useProgramData';
import { useI18n } from '../hooks/useI18n';
import { StatCard, Pill } from '../components/ui';

interface DashboardProps {
  progress: Progress;
  onNavigate: (key: ViewKey) => void;
}

export function Dashboard({ progress, onNavigate }: DashboardProps) {
  const { t, tList } = useI18n();
  const data = useProgramData();
  const levelNames = tList<string>('maturity.levels');
  const modulePct = Math.round((progress.completedModules.length / data.modules.length) * 100);
  const wsPct = Math.round((progress.completedWorkshops.length / data.workshops.length) * 100);
  const toolRuns = Object.values(progress.toolRuns).reduce((a, b) => a + b, 0);

  const lifecycle = [
    { phase: 'Phase 0', label: t('dashboard.phase0'), module: 'Module 0' },
    { phase: 'Phase 1', label: t('dashboard.phase1'), module: 'Module 1' },
    { phase: 'Phase 2', label: t('dashboard.phase2'), module: 'Module 2' },
    { phase: 'Phase 3', label: t('dashboard.phase3'), module: 'Module 3' },
    { phase: 'Phase 4', label: t('dashboard.phase4'), module: 'Module 4' },
    { phase: 'Phase 5', label: t('dashboard.phase5'), module: 'Module 5' },
    { phase: 'Phase 6', label: t('dashboard.phase6'), module: 'Module 6' },
    { phase: 'Phase 7', label: t('dashboard.phase7'), module: 'Module 7' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero */}
      <div className="card p-8 bg-gradient-to-br from-brand-900/40 via-slate-900 to-slate-900 border-brand-800/50">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="max-w-2xl">
            <Pill text={t('dashboard.badge')} tone="blue" />
            <h2 className="text-3xl font-bold text-white mt-3 mb-2">
              {t('dashboard.heroTitle')}
            </h2>
            <p className="text-slate-400 leading-relaxed">
              {t('dashboard.heroBody')}
            </p>
          </div>
          <div className="flex flex-col gap-2 min-w-[180px]">
            <button onClick={() => onNavigate('capstone')} className="btn-primary">
              {t('dashboard.launch')}
            </button>
            <button onClick={() => onNavigate('modules')} className="btn-secondary">
              {t('dashboard.browse')}
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          label={t('dashboard.modulesComplete')}
          value={`${progress.completedModules.length}/${data.modules.length}`}
          sub={`${modulePct}% ${t('dashboard.ofCurriculum')}`}
          tone="blue"
        />
        <StatCard
          label={t('dashboard.workshopsDone')}
          value={`${progress.completedWorkshops.length}/${data.workshops.length}`}
          sub={`${wsPct}% ${t('dashboard.ofPortfolio')}`}
          tone="green"
        />
        <StatCard
          label={t('dashboard.toolRuns')}
          value={toolRuns}
          sub={t('dashboard.toolRunsSub')}
          tone="amber"
        />
        <StatCard
          label={t('dashboard.capstoneScore')}
          value={progress.capstoneScore !== null ? `${progress.capstoneScore}/100` : '—'}
          sub={progress.capstoneScore !== null ? t('dashboard.capstoneSub') : t('dashboard.notAttempted')}
        />
      </div>

      {/* Scores */}
      {(progress.assessmentScore !== null || progress.maturityLevel !== null) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {progress.assessmentScore !== null && (
            <div className="card p-5 flex items-center justify-between">
              <div>
                <div className="label">{t('dashboard.fieldAssessment')}</div>
                <div className="text-xl font-bold text-white">{progress.assessmentScore}%</div>
                <div className="text-xs text-slate-400 mt-0.5">{t('assessment.score')}</div>
              </div>
              <Pill
                text={progress.assessmentScore >= 80 ? t('dashboard.proficient') : t('dashboard.needsReview')}
                tone={progress.assessmentScore >= 80 ? 'green' : 'amber'}
              />
            </div>
          )}
          {progress.maturityLevel !== null && (
            <div className="card p-5 flex items-center justify-between">
              <div>
                <div className="label">{t('dashboard.maturityLevel')}</div>
                <div className="text-xl font-bold text-white">
                  {t('common.level')} {progress.maturityLevel}
                </div>
              </div>
              <Pill
                text={levelNames[progress.maturityLevel] || '—'}
                tone={progress.maturityLevel >= 3 ? 'green' : 'amber'}
              />
            </div>
          )}
        </div>
      )}

      {/* Lifecycle */}
      <div className="card p-6">
        <h3 className="section-title mb-4">{t('dashboard.lifecycle')}</h3>
        <div className="space-y-2">
          {lifecycle.map((s, i) => {
            const done = progress.completedModules.includes(String(i));
            return (
              <button
                key={i}
                onClick={() => onNavigate('modules')}
                className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-slate-800/50 transition-colors text-start group"
              >
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    done ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-slate-500'
                  }`}
                >
                  {done ? '✓' : i}
                </span>
                <span className="text-xs font-mono text-brand-400 shrink-0 w-16">{s.phase}</span>
                <span className="text-sm text-slate-300 flex-1 group-hover:text-white">
                  {s.label}
                </span>
                <span className="text-xs text-slate-600">{s.module}</span>
              </button>
            );
          })}
        </div>
        <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-500">
          {t('dashboard.crossCuttingNote')}
        </div>
      </div>

      {/* Tool shortcuts */}
      <div className="card p-6">
        <h3 className="section-title mb-4">{t('dashboard.interactiveTools')}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { k: 'bid-scorecard' as ViewKey, t: t('dashboard.toolBid'), d: t('dashboard.toolBidDesc') },
            { k: 'change-order' as ViewKey, t: t('dashboard.toolChange'), d: t('dashboard.toolChangeDesc') },
            { k: 'risk-register' as ViewKey, t: t('dashboard.toolRisk'), d: t('dashboard.toolRiskDesc') },
            { k: 'margin-calculator' as ViewKey, t: t('dashboard.toolMargin'), d: t('dashboard.toolMarginDesc') },
          ].map((tool) => (
            <button
              key={tool.k}
              onClick={() => onNavigate(tool.k)}
              className="card card-hover p-4 text-start"
            >
              <div className="font-medium text-white text-sm">{tool.t}</div>
              <div className="text-xs text-slate-500 mt-1">{tool.d}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}