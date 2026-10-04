import { useState, useMemo } from 'react';
import { useData } from '../data/useData';
import { Card, ProgressRing, Confetti } from '../components/ui';
import { useLang } from '../i18n/LangContext';
import type { ViewKey } from '../types';

type SimPhase = 'intro' | 'playing' | 'results';

interface SimulationProps {
  bestScore: number | null;
  done: boolean;
  onFinish: (percent: number) => void;
  onNavigate: (k: ViewKey) => void;
}

export function Simulation({ bestScore, done, onFinish, onNavigate }: SimulationProps) {
  const { t } = useLang();
  const { simulation, stages } = useData();
  const stageNameOf = (s: string) => stages.find((x) => x.key === s)?.name ?? s;
  const [phase, setPhase] = useState<SimPhase>('intro');
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [log, setLog] = useState<{ beat: number; correct: boolean }[]>([]);

  const beat = simulation[idx];
  const total = simulation.length;
  const pct = Math.round((correctCount / total) * 100);

  const start = () => {
    setPhase('playing');
    setIdx(0);
    setPicked(null);
    setCorrectCount(0);
    setLog([]);
  };

  const choose = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    const correctIdx = beat.choices.findIndex((c) => c.correct);
    const ok = i === correctIdx;
    if (ok) setCorrectCount((c) => c + 1);
    setLog((l) => [...l, { beat: beat.n, correct: ok }]);
  };

  const nextBeat = () => {
    if (idx + 1 < total) {
      setIdx((i) => i + 1);
      setPicked(null);
    } else {
      onFinish(pct);
      setPhase('results');
    }
  };

  const progress = useMemo(() => Math.round(((idx + (picked !== null ? 1 : 0)) / total) * 100), [idx, picked, total]);

  /* ---------- intro ---------- */
  if (phase === 'intro') {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-accent via-brand-700 to-brand-800 p-8 md:p-12 shadow-xl shadow-violet-500/30">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-80 h-80 bg-amber-300/40 rounded-full blur-3xl -translate-y-1/2" />
          </div>
          <div className="relative">
            <span className="chip bg-white/20 text-white backdrop-blur-sm">🏁 {t('simulation')}</span>
            <h1 className="font-display text-4xl font-extrabold text-white mt-4 leading-tight max-w-2xl">
              {t('simHeroTitle')}
            </h1>
            <p className="text-white/85 mt-4 max-w-2xl leading-relaxed">
              {t('simHeroBody')}
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <button
                onClick={start}
                className="px-5 py-3 rounded-xl bg-white text-brand-700 font-bold shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
              >
                {done ? `${t('playAgain')}` : t('beginSim')}
              </button>
              {done && bestScore !== null && (
                <span className="px-5 py-3 rounded-xl bg-white/15 text-white font-bold backdrop-blur-sm border border-white/30">
                  {t('simBest')} {bestScore}%
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-5">
            <div className="text-2xl mb-2">📷</div>
            <div className="font-display font-bold text-ink">{t('simOneProject')}</div>
            <p className="text-sm text-ink-soft mt-1">
              {t('simOneProjectDesc')}
            </p>
          </Card>
          <Card className="p-5">
            <div className="text-2xl mb-2">✉️</div>
            <div className="font-display font-bold text-ink">{t('simTwoInjects')}</div>
            <p className="text-sm text-ink-soft mt-1">
              {t('simTwoInjectsDesc')}
            </p>
          </Card>
          <Card className="p-5">
            <div className="text-2xl mb-2">🎯</div>
            <div className="font-display font-bold text-ink">{t('simNoPerfect')}</div>
            <p className="text-sm text-ink-soft mt-1">
              {t('simNoPerfectDesc')}
            </p>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="font-display text-lg font-extrabold text-ink mb-3">{t('sixteenBeats')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {simulation.map((b) => (
              <div
                key={b.n}
                className={`text-xs rounded-lg px-3 py-2 border ${
                  b.inject
                    ? 'border-amber-200 bg-amber-50 text-amber-700 font-bold'
                    : 'border-line bg-slate-50 text-ink-soft'
                }`}
              >
                {b.inject ? '✉️ ' : ''}{b.n}. {b.beat}
              </div>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  /* ---------- results ---------- */
  if (phase === 'results') {
    const tone = pct >= 80 ? 'from-emerald-500 to-emerald-600' : pct >= 60 ? 'from-amber-400 to-amber-600' : 'from-rose-400 to-rose-600';
    const headline = pct >= 80 ? t('simHeadHigh') : pct >= 60 ? t('simHeadMid') : t('simHeadLow');
    return (
      <div className="space-y-6 animate-fade-in">
        {pct >= 80 && <Confetti />}
        <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${tone} p-8 md:p-12 shadow-xl text-center`}>
          <div className="text-white/90 text-sm font-bold uppercase tracking-widest">{t('simFinalScore')}</div>
          <div className="font-display text-7xl font-extrabold text-white mt-3">{pct}%</div>
          <div className="text-white/85 mt-2">
            {correctCount} {t('of')} {total} {t('rightFirstTry')}
          </div>
          <p className="text-white/90 mt-5 max-w-xl mx-auto text-lg font-medium leading-relaxed">
            {headline}
          </p>
          <div className="flex gap-3 justify-center mt-7 flex-wrap">
            <button
              onClick={start}
              className="px-5 py-3 rounded-xl bg-white text-ink font-bold shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
            >
              {t('playAgainBtn')}
            </button>
            <button
              onClick={() => onNavigate('path')}
              className="px-5 py-3 rounded-xl bg-white/15 text-white font-bold backdrop-blur-sm border border-white/30 hover:bg-white/25 transition-all active:scale-[0.98]"
            >
              {t('backToPathBtn')}
            </button>
          </div>
        </div>

        <Card className="p-6">
          <h2 className="font-display text-lg font-extrabold text-ink mb-4">{t('beatByBeat')}</h2>
          <div className="space-y-2">
            {simulation.map((b) => {
              const entry = log.find((l) => l.beat === b.n);
              return (
                <div
                  key={b.n}
                  className={`flex items-center gap-3 rounded-lg border px-4 py-2.5 ${
                    entry?.correct
                      ? 'border-emerald-200 bg-emerald-50/60'
                      : 'border-rose-200 bg-rose-50/60'
                  }`}
                >
                  <span className="font-mono text-xs font-bold w-6 shrink-0 text-ink-faint">{b.n}</span>
                  <span className="text-sm text-ink flex-1">{b.beat}</span>
                  <span>{entry?.correct ? '✅' : '❌'}</span>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    );
  }

  /* ---------- playing ---------- */
  const pickedOption = picked !== null ? beat.choices[picked] : null;
  const correctIdx = beat.choices.findIndex((c) => c.correct);
  const solved = picked !== null;

  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      {/* progress */}
      <Card className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-ink-faint">
            {t('beat')} {beat.n} {t('of')} {total}
          </span>
          <span className="text-xs text-ink-faint font-mono">{correctCount} {t('correctSoFar')}</span>
        </div>
        <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-600 to-violet-accent rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </Card>

      {/* inject banner */}
      {beat.inject && (
        <div className="rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50 p-5 animate-pop">
          <div className="flex items-center gap-3">
            <span className="text-2xl">✉️</span>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-amber-700">
                {t('sealedEnvelope')}
              </div>
              <p className="text-sm text-ink-soft mt-0.5">
                {t('sealedDesc')}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* situation */}
      <Card className="p-7">
        <div className="flex items-center gap-3 mb-4">
          <span className="chip bg-brand-100 text-brand-700 font-mono">{stageNameOf(beat.stage)}</span>
          <h2 className="font-display text-lg font-extrabold text-ink">{beat.beat}</h2>
        </div>
        <p className="text-[15px] text-ink leading-relaxed">{beat.situation}</p>
        <p className="font-display font-bold text-ink mt-5 text-lg">{beat.question}</p>
      </Card>

      {/* choices */}
      <div className="space-y-3">
        {beat.choices.map((c, i) => {
          const isPicked = picked === i;
          const showState = isPicked || (solved && i === correctIdx);
          return (
            <button
              key={i}
              disabled={solved}
              onClick={() => choose(i)}
              className={`w-full text-start p-5 rounded-2xl border-2 transition-all duration-200 ${
                showState
                  ? c.correct
                    ? 'border-emerald-400 bg-emerald-50'
                    : 'border-rose-400 bg-rose-50'
                  : 'border-line bg-white hover:border-brand-300 hover:bg-brand-50/50 active:scale-[0.99]'
              }`}
            >
              <span className="text-sm font-medium text-ink leading-relaxed">{c.text}</span>
              {showState && (
                <span className="block text-xs mt-2.5 leading-relaxed">
                  <span className="font-bold">{c.correct ? t('correctCall') : t('wrongCall')}</span>
                  <span className="text-ink-soft">{c.feedback}</span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {solved && (
        <Card className="p-5 animate-pop">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <ProgressRing
                percent={Math.round(((correctCount) / (idx + 1)) * 100)}
                size={52}
                stroke={6}
              />
              <div className="text-sm text-ink-soft">
                {pickedOption?.correct ? (
                  <span className="font-bold text-emerald-600">{t('correctCall')}</span>
                ) : (
                  <span className="font-bold text-rose-600">{t('wrongCall')}</span>
                )}
              </div>
            </div>
            <button onClick={nextBeat} className="btn-primary">
              {idx + 1 < total ? t('nextBeat') : t('seeFinal')}
            </button>
          </div>
        </Card>
      )}
    </div>
  );
}