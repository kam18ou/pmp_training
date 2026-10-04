import { useState } from 'react';
import { useProgramData } from '../hooks/useProgramData';
import { useI18n } from '../hooks/useI18n';
import { Pill, NumberedList, List } from '../components/ui';
import type { Progress, ViewKey, Workshop } from '../types';

interface WorkshopsProps {
  progress: Progress;
  onToggle: (id: number) => void;
  onSelect: (w: Workshop) => void;
  onNavigate: (key: ViewKey) => void;
}

export function Workshops({ progress, onToggle, onSelect }: WorkshopsProps) {
  const { t } = useI18n();
  const data = useProgramData();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<string>('all');

  const phases = ['all', ...new Set(data.workshops.map((w) => w.phase.split('—')[0].trim()))];

  const filtered = data.workshops.filter((w) => {
    const matchesQuery =
      !query ||
      w.title.toLowerCase().includes(query.toLowerCase()) ||
      w.line.toLowerCase().includes(query.toLowerCase()) ||
      w.scenario.toLowerCase().includes(query.toLowerCase());
    const matchesPhase = filter === 'all' || w.phase.startsWith(filter);
    return matchesQuery && matchesPhase;
  });

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex flex-wrap gap-3 items-center">
        <input
          type="text"
          placeholder={t('workshops.searchPlaceholder')}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input flex-1 min-w-[200px]"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="input min-w-[160px]"
        >
          {phases.map((p) => (
            <option key={p} value={p}>
              {p === 'all' ? t('workshops.allPhases') : p}
            </option>
          ))}
        </select>
        <Pill text={`${filtered.length} ${t('workshops.shown')}`} tone="blue" />
      </div>

      {filtered.length === 0 && (
        <div className="card p-10 text-center text-slate-500">
          {t('workshops.noMatch')}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filtered.map((w) => {
          const isDone = progress.completedWorkshops.includes(w.id);
          return (
            <div key={w.id} className="card card-hover p-5 flex flex-col">
              <div className="flex items-start gap-3">
                <button
                  onClick={() => onToggle(w.id)}
                  className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-all ${
                    isDone
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'bg-slate-800 text-slate-500 hover:bg-slate-700'
                  }`}
                  title={isDone ? t('common.completed') : t('common.markComplete')}
                >
                  {isDone ? '✓' : '○'}
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-mono text-xs text-brand-400">W{w.id}</span>
                    {w.duration && <Pill text={w.duration.split('(')[0].trim()} />}
                  </div>
                  <button onClick={() => onSelect(w)} className="text-start w-full">
                    <h3 className="font-bold text-white text-sm leading-snug hover:text-brand-300 transition-colors">
                      {w.title}
                    </h3>
                  </button>
                  {w.line && <div className="text-xs text-slate-500 mt-1.5">{w.line}</div>}
                  {w.phase && <div className="text-xs text-brand-400/70 mt-0.5">{w.phase}</div>}
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {w.objectives.length} {t('workshops.objectives')} · {w.tasks.length}{' '}
                  {t('workshops.tasks')}
                </span>
                <button onClick={() => onSelect(w)} className="btn-ghost text-xs">
                  {t('common.open')}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function WorkshopDetail({
  workshop,
  progress,
  onToggle,
  onNavigate,
}: {
  workshop: Workshop;
  progress: Progress;
  onToggle: (id: number) => void;
  onNavigate: (key: ViewKey) => void;
}) {
  const { t } = useI18n();
  const isDone = progress.completedWorkshops.includes(workshop.id);
  const [open, setOpen] = useState<Record<string, boolean>>({
    scenario: true,
    objectives: true,
  });

  const section = (key: string, title: string, children: React.ReactNode, count?: number) => (
    <div className="card overflow-hidden">
      <button
        onClick={() => setOpen((o) => ({ ...o, [key]: !o[key] }))}
        className="w-full flex items-center justify-between px-5 py-3 text-start hover:bg-slate-800/50 transition-colors"
      >
        <span className="font-semibold text-white text-sm">
          {title}
          {count !== undefined && (
            <span className="text-slate-600 font-normal ms-2">({count})</span>
          )}
        </span>
        <span className={`text-slate-500 transition-transform ${open[key] ? 'rotate-180' : ''}`}>▾</span>
      </button>
      {open[key] && <div className="px-5 pb-5 animate-fade-in">{children}</div>}
    </div>
  );

  return (
    <div className="space-y-4 animate-fade-in">
      <button onClick={() => onNavigate('workshops')} className="btn-ghost text-sm">
        {t('common.backToWorkshops')}
      </button>

      <div className="card p-6 bg-gradient-to-br from-brand-900/30 to-slate-900">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span className="font-mono text-sm text-brand-400">
                {t('common.workshop')} {workshop.id}
              </span>
              {isDone && <Pill text={t('modules.complete')} tone="green" />}
            </div>
            <h2 className="text-2xl font-bold text-white">{workshop.title}</h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {workshop.phase && <Pill text={workshop.phase} tone="blue" />}
              {workshop.duration && <Pill text={workshop.duration} />}
            </div>
          </div>
          <button
            onClick={() => onToggle(workshop.id)}
            className={isDone ? 'btn-secondary' : 'btn-primary'}
          >
            {isDone ? t('common.completed') : t('common.markComplete')}
          </button>
        </div>
      </div>

      {section('scenario', t('workshops.scenario'), (
        <p className="text-slate-300 leading-relaxed border-s-2 border-amber-500/50 ps-4">
          {workshop.scenario}
        </p>
      ))}

      {section(
        'objectives',
        t('workshops.objectivesTitle'),
        <NumberedList items={workshop.objectives} />,
        workshop.objectives.length,
      )}

      {section('roles', t('workshops.roles'), <List items={workshop.roles} marker="▸" />, workshop.roles.length)}

      {section('inputs', t('workshops.inputs'), <List items={workshop.inputs} marker="▣" />, workshop.inputs.length)}

      {section('tasks', t('workshops.tasksTitle'), <NumberedList items={workshop.tasks} />, workshop.tasks.length)}

      {section(
        'deliverables',
        t('workshops.deliverables'),
        <p className="text-emerald-300 text-sm leading-relaxed">{workshop.deliverables}</p>,
      )}

      {section('facilitator', t('workshops.facilitator'), (
        <p className="text-slate-300 text-sm leading-relaxed">{workshop.facilitator}</p>
      ))}

      {section('mistakes', t('workshops.mistakes'), <List items={workshop.mistakes} marker="✗" />, workshop.mistakes.length)}

      {section(
        'rubric',
        t('workshops.rubric'),
        <div className="space-y-2">
          {workshop.rubric.map((r, i) => (
            <div key={i} className="flex gap-3 items-start p-2.5 rounded-lg bg-slate-800/40">
              <Pill text={r.tier} tone={r.tier === 'Exemplary' ? 'green' : r.tier === 'Deficient' ? 'red' : 'blue'} />
              <span className="text-sm text-slate-300">{r.desc}</span>
            </div>
          ))}
        </div>,
        workshop.rubric.length,
      )}

      {section('transfer', t('workshops.transfer'), (
        <p className="text-brand-300 text-sm leading-relaxed border-s-2 border-brand-500 ps-4">
          {workshop.transfer}
        </p>
      ))}

      {(workshop.variations.small || workshop.variations.large) && (
        section('variations', t('workshops.variations'), (
          <div className="space-y-3">
            {workshop.variations.small && (
              <div>
                <Pill text={t('workshops.shop5')} />
                <p className="text-sm text-slate-300 mt-1.5">{workshop.variations.small}</p>
              </div>
            )}
            {workshop.variations.large && (
              <div>
                <Pill text={t('workshops.firm30')} />
                <p className="text-sm text-slate-300 mt-1.5">{workshop.variations.large}</p>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}