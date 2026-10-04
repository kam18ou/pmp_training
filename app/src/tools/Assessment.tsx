import { useState, useMemo } from 'react';
import { Pill } from '../components/ui';
import { useI18n } from '../hooks/useI18n';

interface Question {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
}

interface QuestionText {
  q: string;
  options: string[];
  explanation: string;
}

const SCHEMA: { correct: number }[] = [
  { correct: 2 },
  { correct: 1 },
  { correct: 1 },
  { correct: 1 },
  { correct: 1 },
  { correct: 1 },
  { correct: 2 },
  { correct: 2 },
];

export function Assessment({
  onComplete,
  bestScore,
}: {
  onComplete: (score: number) => void;
  bestScore: number | null;
}) {
  const { t, tList } = useI18n();

  const questions = useMemo<Question[]>(() => {
    const texts = tList<QuestionText>('assessment.questions');
    return SCHEMA.map((s, i) => ({
      ...s,
      q: texts[i]?.q ?? '',
      options: texts[i]?.options ?? [],
      explanation: texts[i]?.explanation ?? '',
    }));
  }, [tList]);

  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    Array(SCHEMA.length).fill(null),
  );
  const [submitted, setSubmitted] = useState(false);
  const [current, setCurrent] = useState(0);

  const score = answers.reduce<number>(
    (s, a, i) => s + (a === questions[i].correct ? 1 : 0),
    0,
  );
  const pct = Math.round((score / Math.max(questions.length, 1)) * 100);

  const pick = (i: number) => {
    if (submitted) return;
    setAnswers((a) => {
      const next = [...a];
      next[current] = i;
      return next;
    });
  };

  const submit = () => {
    setSubmitted(true);
    onComplete(pct);
  };

  const restart = () => {
    setAnswers(Array(SCHEMA.length).fill(null));
    setSubmitted(false);
    setCurrent(0);
  };

  if (submitted) {
    const tone = pct >= 80 ? 'green' : pct >= 60 ? 'amber' : 'red';
    return (
      <div className="space-y-5 animate-fade-in">
        <div className="card p-8 text-center">
          <div className="label uppercase tracking-wider">{t('assessment.title')}</div>
          <div
            className={`text-7xl font-bold mt-3 ${
              tone === 'green' ? 'text-emerald-400' : tone === 'amber' ? 'text-amber-400' : 'text-red-400'
            }`}
          >
            {pct}%
          </div>
          <div className="text-slate-500 mb-4">
            {score}/{questions.length} {t('assessment.score')}
          </div>
          <Pill
            text={
              pct >= 80
                ? t('assessment.tiers.proficient')
                : pct >= 60
                  ? t('assessment.tiers.developing')
                  : t('assessment.tiers.reactive')
            }
            tone={tone}
          />
          <div className="flex gap-3 justify-center mt-6">
            <button onClick={restart} className="btn-primary">
              {t('assessment.retake')}
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="section-title">{t('assessment.answerReview')}</h3>
          {questions.map((q, i) => {
            const correct = answers[i] === q.correct;
            return (
              <div key={i} className="card p-5">
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      correct ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'
                    }`}
                  >
                    {correct ? '✓' : '✗'}
                  </span>
                  <div className="text-sm text-slate-200 font-medium">{q.q}</div>
                </div>
                {!correct && (
                  <div className="text-xs text-emerald-300 mb-2 ps-9">
                    {t('assessment.correct')} {q.options[q.correct]}
                  </div>
                )}
                <div className="text-xs text-slate-500 ps-9">{q.explanation}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const q = questions[current];
  const answered = answers[current] !== null;

  if (!q) return null;

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="card p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="section-title">{t('assessment.title')}</h3>
            <p className="text-sm text-slate-400 mt-1">{t('assessment.desc')}</p>
          </div>
          {bestScore !== null && (
            <span className="text-sm text-slate-500">
              {t('assessment.best')}{' '}
              <span className="text-emerald-400 font-mono font-bold">{bestScore}%</span>
            </span>
          )}
        </div>
        <div className="mt-4 h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-brand-500 to-emerald-500 transition-all duration-300"
            style={{ width: `${((current + 1) / Math.max(questions.length, 1)) * 100}%` }}
          />
        </div>
        <div className="mt-2 text-xs text-slate-500">
          {t('assessment.questionOf', { n: current + 1, total: questions.length })}
        </div>
      </div>

      <div className="card p-6">
        <p className="text-lg text-white font-medium leading-relaxed mb-5">{q.q}</p>
        <div className="space-y-3">
          {q.options.map((opt, i) => {
            const sel = answers[current] === i;
            return (
              <button
                key={i}
                onClick={() => pick(i)}
                className={`w-full text-start p-4 rounded-lg border transition-all duration-200 ${
                  sel
                    ? 'border-brand-500 bg-brand-600/10'
                    : 'border-slate-700 hover:border-slate-600 hover:bg-slate-800/50'
                }`}
              >
                <span className="flex gap-3">
                  <span className="font-mono text-sm text-slate-500 shrink-0">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-sm text-slate-200">{opt}</span>
                </span>
              </button>
            );
          })}
        </div>
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            className="btn-ghost text-sm"
          >
            {t('assessment.previous')}
          </button>
          {current < questions.length - 1 ? (
            <button
              onClick={() => setCurrent((c) => Math.min(questions.length - 1, c + 1))}
              disabled={!answered}
              className="btn-primary text-sm"
            >
              {t('assessment.next')}
            </button>
          ) : (
            <button
              onClick={submit}
              disabled={answers.some((a) => a === null)}
              className="btn-primary text-sm"
            >
              {t('assessment.submit')}
            </button>
          )}
        </div>
        {answers.some((a) => a === null) && current === questions.length - 1 && (
          <div className="text-xs text-amber-400 mt-3 text-end">{t('assessment.answerAll')}</div>
        )}
      </div>
    </div>
  );
}