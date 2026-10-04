import { useProgramData } from '../hooks/useProgramData';
import { useI18n } from '../hooks/useI18n';
import { Pill, Collapsible, NumberedList } from '../components/ui';
import type { Module, Progress, ViewKey } from '../types';

interface ModulesProps {
  progress: Progress;
  onToggle: (id: string) => void;
  onSelect: (m: Module) => void;
  onNavigate: (key: ViewKey) => void;
}

export function Modules({ progress, onToggle, onSelect }: ModulesProps) {
  const { t } = useI18n();
  const data = useProgramData();
  const done = (id: string) => progress.completedModules.includes(id);

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-400">
          {data.modules.length} {t('modules.modulesNote')}
        </p>
        <Pill text={`${progress.completedModules.length} ${t('modules.complete')}`} tone="green" />
      </div>

      {data.modules.map((m) => {
        const isDone = done(m.id);
        return (
          <div key={m.id} className="card card-hover overflow-hidden">
            <div className="p-5 flex items-start gap-4">
              <button
                onClick={() => onToggle(m.id)}
                className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-lg transition-all ${
                  isDone
                    ? 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30'
                    : 'bg-slate-800 text-slate-500 hover:bg-slate-700'
                }`}
                title={isDone ? t('common.completed') : t('common.markComplete')}
              >
                {isDone ? '✓' : '○'}
              </button>
              <div className="flex-1 min-w-0">
                <button onClick={() => onSelect(m)} className="text-start w-full">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-mono text-xs text-brand-400">
                      {t('common.module')} {m.id}
                    </span>
                    {m.duration && <Pill text={m.duration} />}
                    {isDone && <Pill text={t('modules.complete')} tone="green" />}
                  </div>
                  <h3 className="font-bold text-white mt-1.5 hover:text-brand-300 transition-colors">
                    {m.title}
                  </h3>
                  {m.phase && <div className="text-xs text-slate-500 mt-1">{m.phase}</div>}
                </button>
              </div>
              <button onClick={() => onSelect(m)} className="btn-ghost text-sm shrink-0">
                {t('common.details')}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ModuleDetail({
  module,
  progress,
  onToggle,
  onNavigate,
}: {
  module: Module;
  progress: Progress;
  onToggle: (id: string) => void;
  onNavigate: (key: ViewKey) => void;
}) {
  const { t } = useI18n();
  const isDone = progress.completedModules.includes(module.id);
  const seq = module.sequence;

  return (
    <div className="space-y-5 animate-fade-in">
      <button onClick={() => onNavigate('modules')} className="btn-ghost text-sm">
        {t('common.backToCurriculum')}
      </button>

      <div className="card p-6 bg-gradient-to-br from-brand-900/30 to-slate-900">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <span className="font-mono text-sm text-brand-400">
                {t('common.module')} {module.id}
              </span>
              {module.duration && <Pill text={module.duration} />}
              {isDone && <Pill text={t('modules.complete')} tone="green" />}
            </div>
            <h2 className="text-2xl font-bold text-white">{module.title}</h2>
            {module.phase && <div className="text-sm text-slate-400 mt-1">{module.phase}</div>}
          </div>
          <button
            onClick={() => onToggle(module.id)}
            className={isDone ? 'btn-secondary' : 'btn-primary'}
          >
            {isDone ? t('common.completed') : t('common.markComplete')}
          </button>
        </div>
        {module.goal && (
          <p className="text-slate-300 mt-4 leading-relaxed border-s-2 border-brand-500 ps-4">
            {module.goal}
          </p>
        )}
        {module.pmbok && (
          <div className="mt-4 text-xs text-slate-500">
            <span className="font-semibold text-slate-400">{t('common.pmbokAlignment')}</span>{' '}
            {module.pmbok}
          </div>
        )}
      </div>

      {module.concepts.length > 0 && (
        <Collapsible
          title={`${t('modules.concepts')} (${module.concepts.length})`}
          defaultOpen
        >
          <NumberedList items={module.concepts} />
        </Collapsible>
      )}

      {seq.concept && (
        <Collapsible title={t('modules.pedagogicalSequence')} defaultOpen>
          <div className="space-y-4">
            <SeqRow label={t('modules.seqConcept')} text={seq.concept} />
            <SeqRow label={t('modules.seqExample')} text={seq.example} />
            <SeqRow label={t('modules.seqProblem')} text={seq.problem} tone="amber" />
            <SeqRow label={t('modules.seqWorkshop')} text={seq.workshop} tone="blue" />
            <SeqRow label={t('modules.seqDeliverable')} text={seq.deliverable} tone="green" />
            <SeqRow label={t('modules.seqApplication')} text={seq.application} />
          </div>
        </Collapsible>
      )}

      {module.concepts.length === 0 && !seq.concept && (
        <div className="card p-6 text-sm text-slate-500">{t('modules.emptyDetail')}</div>
      )}
    </div>
  );
}

function SeqRow({
  label,
  text,
  tone = 'slate',
}: {
  label: string;
  text: string;
  tone?: 'slate' | 'amber' | 'blue' | 'green';
}) {
  if (!text) return null;
  return (
    <div className="flex gap-4">
      <div className="w-32 shrink-0">
        <Pill text={label} tone={tone} />
      </div>
      <div className="text-sm text-slate-300 leading-relaxed flex-1">{text}</div>
    </div>
  );
}