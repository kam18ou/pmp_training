import { useState } from 'react';
import { useData } from '../data/useData';
import { Card } from '../components/ui';
import { useLang } from '../i18n/LangContext';
import type { ViewKey } from '../types';

const DAY_ICONS = ['🌱', '🧱', '🗓', '⚡', '🏁'];

interface AgendaProps {
  onNavigate: (k: ViewKey) => void;
}

export function Agenda({ onNavigate }: AgendaProps) {
  const { t } = useLang();
  const { agenda, agendaCompressed, postTraining, modules } = useData();
  const [compressed, setCompressed] = useState(false);
  const days = compressed ? agendaCompressed : agenda;

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-display text-3xl font-extrabold text-ink">{t('agendaTitle')}</h1>
        <p className="text-ink-soft mt-2 max-w-3xl">
          {t('agendaIntro')}
        </p>
      </div>

      <div className="inline-flex rounded-xl border border-line bg-white p-1">
        <button
          onClick={() => setCompressed(false)}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
            !compressed ? 'bg-brand-600 text-white' : 'text-ink-soft hover:text-ink'
          }`}
        >
          {t('days5')}
        </button>
        <button
          onClick={() => setCompressed(true)}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
            compressed ? 'bg-brand-600 text-white' : 'text-ink-soft hover:text-ink'
          }`}
        >
          {t('days3')}
        </button>
      </div>

      <div className="space-y-4">
        {days.map((d) => (
          <Card key={d.day} className="p-6 card-lift">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-600 to-violet-accent flex flex-col items-center justify-center text-white shadow-lg shadow-brand-500/30">
                <span className="text-lg leading-none">{DAY_ICONS[d.day - 1]}</span>
                <span className="text-[9px] font-bold mt-0.5">{t('day')} {d.day}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg font-extrabold text-ink">{d.title}</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {d.modules.map((mid) => {
                    const m = modules.find((x) => x.id === mid);
                    if (!m) return null;
                    return (
                      <span
                        key={mid}
                        className="chip bg-slate-100 text-ink-soft"
                        title={m.tagline}
                      >
                        {m.id}. {m.name}
                      </span>
                    );
                  })}
                </div>
                <div className="mt-4 pt-3 border-t border-line text-sm text-ink-soft">
                  <span className="font-bold text-ink">{t('closeOfDay')}</span>
                  {d.close}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-gradient-to-br from-white to-emerald-50/60">
        <h2 className="font-display text-xl font-extrabold text-ink mb-4">
          {t('afterCourse')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {postTraining.map((p) => (
            <div key={p.window} className="rounded-xl border border-line bg-white p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                {p.window}
              </div>
              <p className="text-sm text-ink-soft mt-2 leading-relaxed">{p.action}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 flex flex-wrap items-center justify-between gap-4 border-s-4 border-s-violet-accent">
        <div>
          <h3 className="font-display text-lg font-extrabold text-ink">{t('readyAssessment')}</h3>
          <p className="text-sm text-ink-soft mt-1">
            {t('readyAssessmentSub')}
          </p>
        </div>
        <button onClick={() => onNavigate('simulation')} className="btn-primary">
          {t('startSimulation')}
        </button>
      </Card>
    </div>
  );
}