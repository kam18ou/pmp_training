import { useState, useMemo } from 'react';
import { Pill } from '../components/ui';
import { useI18n } from '../hooks/useI18n';

type Phase = 'brief' | 'playing' | 'results';

interface Choice {
  id: string;
  text: string;
  points: number;
  feedback: string;
  best?: boolean;
}

interface Round {
  milestone: string;
  title: string;
  inject: string;
  question: string;
  choices: Choice[];
}

interface RoundText {
  inject: string;
  question: string;
  choices: string[];
  feedback: string[];
}

const CHOICE_IDS = ['a', 'b', 'c'];

const ROUND_SCHEMA: { points: number[]; best: number }[] = [
  { points: [0, 20, 8], best: 1 },
  { points: [20, 0, 6], best: 0 },
  { points: [0, 20, 8], best: 1 },
  { points: [0, 20, 4], best: 1 },
  { points: [20, 0, 6], best: 0 },
];

export function Capstone({
  onComplete,
  bestScore,
}: {
  onComplete: (score: number) => void;
  bestScore: number | null;
}) {
  const { t, tList } = useI18n();

  const rounds = useMemo<Round[]>(() => {
    const texts = tList<RoundText>('capstone.rounds');
    const titles = tList<string>('capstone.milestoneTitles');
    const milestones = tList<string>('capstone.milestones');
    return ROUND_SCHEMA.map((s, i) => {
      const tx = texts[i];
      return {
        milestone: milestones[i] ?? `M${i + 1}`,
        title: titles[i] ?? `M${i + 1}`,
        inject: tx?.inject ?? '',
        question: tx?.question ?? '',
        choices: tx
          ? tx.choices.map((text, j) => ({
              id: CHOICE_IDS[j],
              text,
              points: s.points[j] ?? 0,
              best: j === s.best,
              feedback: tx.feedback[j] ?? '',
            }))
          : [],
      };
    });
  }, [tList]);

  const [phase, setPhase] = useState<Phase>('brief');
  const [roundIdx, setRoundIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Choice[]>([]);

  const totalPossible = useMemo(
    () => rounds.reduce((s, r) => s + Math.max(...r.choices.map((c) => c.points)), 0),
    [rounds],
  );

  const start = () => {
    setPhase('playing');
    setRoundIdx(0);
    setSelected(null);
    setAnswers([]);
  };

  const choose = (choice: Choice) => {
    if (selected) return;
    setSelected(choice.id);
    setAnswers((a) => [...a, choice]);
  };

  const next = () => {
    if (roundIdx + 1 < rounds.length) {
      setRoundIdx((i) => i + 1);
      setSelected(null);
    } else {
      const score = answers.reduce((s, c) => s + c.points, 0);
      const pct = Math.round((score / Math.max(totalPossible, 1)) * 100);
      onComplete(pct);
      setPhase('results');
    }
  };

  const scored = useMemo(() => {
    const score = answers.reduce((s, c) => s + c.points, 0);
    return {
      score,
      pct: Math.round((score / Math.max(totalPossible, 1)) * 100),
    };
  }, [answers, totalPossible]);

  if (phase === 'brief') {
    return (
      <div className="space-y-5 animate-fade-in">
        <div className="card p-8 bg-gradient-to-br from-brand-900/40 via-slate-900 to-slate-900 border-brand-800/50">
          <Pill text={t('capstone.badge')} tone="blue" />
          <h2 className="text-3xl font-bold text-white mt-3 mb-2">{t('capstone.title')}</h2>
          <p className="text-slate-300 leading-relaxed max-w-3xl">{t('capstone.intro')}</p>
          <p className="text-slate-400 leading-relaxed max-w-3xl mt-3 text-sm">{t('capstone.intro2')}</p>
          <div className="flex items-center gap-3 mt-6">
            <button onClick={start} className="btn-primary">
              {t('capstone.begin')}
            </button>
            {bestScore !== null && (
              <span className="text-sm text-slate-500">
                {t('capstone.bestScore')}:{' '}
                <span className="text-emerald-400 font-mono font-bold">{bestScore}/100</span>
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {rounds.map((r, i) => (
            <div key={i} className="card p-4">
              <div className="font-mono text-xs text-brand-400">{r.milestone}</div>
              <div className="text-sm font-medium text-slate-300 mt-1.5 leading-snug">{r.title}</div>
            </div>
          ))}
        </div>
        <div className="card p-4 bg-amber-500/10 border-amber-800/40 text-xs text-slate-400">
          {t('capstone.trainerTip')}
        </div>
      </div>
    );
  }

  if (phase === 'results') {
    const { score, pct } = scored;
    const grade = pct >= 95 ? t('capstone.gradeDistinction') : pct >= 80 ? t('capstone.gradePass') : t('capstone.gradeReview');
    const tone = pct >= 80 ? 'green' : pct >= 60 ? 'amber' : 'red';

    return (
      <div className="space-y-5 animate-fade-in">
        <div className="card p-8 text-center bg-gradient-to-br from-slate-900 to-slate-900">
          <div className="label uppercase tracking-wider">{t('capstone.finalScore')}</div>
          <div
            className={`text-7xl font-bold mt-3 ${
              tone === 'green' ? 'text-emerald-400' : tone === 'amber' ? 'text-amber-400' : 'text-red-400'
            }`}
          >
            {pct}
          </div>
          <div className="text-slate-500 mb-4">{t('capstone.outOf')}</div>
          <Pill text={grade} tone={tone} />
          <p className="text-slate-400 mt-5 max-w-xl mx-auto text-sm leading-relaxed">
            {pct >= 80 ? t('capstone.passText') : t('capstone.failText')}
          </p>
          <div className="flex gap-3 justify-center mt-6">
            <button onClick={start} className="btn-primary">
              {t('capstone.playAgain')}
            </button>
          </div>

          {score > 0 && totalPossible > 0 && pct >= 95 && (
            <div className="text-xs text-slate-500 mt-3">{score}/{totalPossible}</div>
          )}
        </div>

        <div className="space-y-3">
          <h3 className="section-title">{t('capstone.debrief')}</h3>
          {rounds.map((r, i) => {
            const ans = answers[i];
            const best = r.choices.find((c) => c.best);
            const gotBest = ans?.best;
            return (
              <div key={i} className="card p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-brand-400">{r.milestone}</span>
                  <span className="font-semibold text-white text-sm">{r.title}</span>
                  <span className="ms-auto">
                    {gotBest ? (
                      <Pill text={t('capstone.optimal')} tone="green" />
                    ) : ans && ans.points > 0 ? (
                      <Pill text={t('capstone.partial')} tone="amber" />
                    ) : (
                      <Pill text={t('capstone.failed')} tone="red" />
                    )}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-3">{r.inject}</p>
                {ans && (
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <span className="text-slate-600 shrink-0">{t('capstone.yourAnswer')}</span>
                      <span className={ans.points > 0 ? 'text-slate-300' : 'text-red-300'}>
                        {ans.text}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-slate-600 shrink-0">{t('capstone.feedback')}</span>
                      <span className="text-slate-400">{ans.feedback}</span>
                    </div>
                    {!gotBest && best && (
                      <div className="flex gap-2">
                        <span className="text-emerald-600 shrink-0">{t('capstone.optimalLabel')}</span>
                        <span className="text-emerald-300">{best.text}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // playing
  const round = rounds[roundIdx];
  const chosen = round?.choices.find((c) => c.id === selected) ?? null;
  const pct = ((roundIdx + 1) / Math.max(rounds.length, 1)) * 100;

  if (!round) return null;

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Progress */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-brand-400">{round.milestone}</span>
            <span className="font-semibold text-white">{round.title}</span>
          </div>
          <span className="text-xs text-slate-500">
            {t('capstone.round')} {roundIdx + 1} {t('capstone.of')} {rounds.length}
          </span>
        </div>
        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-500 to-emerald-500 transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Inject */}
      <div className="card p-6 border-amber-800/40 bg-amber-500/5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-amber-400">⚠</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
            {t('capstone.inject')}
          </span>
        </div>
        <p className="text-slate-300 leading-relaxed">{round.inject}</p>
      </div>

      {/* Question */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-white mb-4">{round.question}</h3>
        <div className="space-y-3">
          {round.choices.map((c) => {
            const isSel = selected === c.id;
            const reveal = selected !== null;
            return (
              <button
                key={c.id}
                onClick={() => choose(c)}
                disabled={reveal}
                className={`w-full text-start p-4 rounded-lg border transition-all duration-200 ${
                  isSel
                    ? c.best
                      ? 'border-emerald-500 bg-emerald-500/10'
                      : c.points > 0
                        ? 'border-amber-500 bg-amber-500/10'
                        : 'border-red-500 bg-red-500/10'
                    : reveal
                      ? 'border-slate-800 opacity-50'
                      : 'border-slate-700 hover:border-brand-500 hover:bg-slate-800/50 cursor-pointer'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="font-mono text-sm text-slate-500 shrink-0 mt-0.5">
                    {c.id.toUpperCase()}
                  </span>
                  <span className="text-sm text-slate-200 leading-relaxed">{c.text}</span>
                  {reveal && isSel && (
                    <span className="ms-auto shrink-0">
                      <Pill
                        text={`${c.points} ${t('capstone.pts')}`}
                        tone={c.best ? 'green' : c.points > 0 ? 'amber' : 'red'}
                      />
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback */}
      {chosen && (
        <div className="card p-6 animate-fade-in border-s-4 border-s-brand-500">
          <div className="flex items-center gap-2 mb-2">
            <Pill
              text={
                chosen.best
                  ? t('capstone.optimalResponse')
                  : chosen.points > 0
                    ? t('capstone.partialResponse')
                    : t('capstone.wrongCall')
              }
              tone={chosen.best ? 'green' : chosen.points > 0 ? 'amber' : 'red'}
            />
          </div>
          <p className="text-slate-300 leading-relaxed text-sm">{chosen.feedback}</p>
          <button onClick={next} className="btn-primary mt-5">
            {roundIdx + 1 < rounds.length ? t('capstone.nextRound') : t('capstone.seeFinal')}
          </button>
        </div>
      )}
    </div>
  );
}