import { useState, useMemo, type ReactNode } from 'react';
import { useLang } from '../i18n/LangContext';
import type {
  Interaction,
  SortInteraction,
  OrderInteraction,
  ChooseInteraction,
  ChecklistInteraction,
  StatusInteraction,
  AssignInteraction,
} from '../types';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---------- shared bits ---------- */
function ResultBanner({ percent, onRetry, children }: { percent: number; onRetry?: () => void; children?: ReactNode }) {
  const { t } = useLang();
  const tone = percent >= 80 ? 'emerald' : percent >= 50 ? 'amber' : 'rose';
  const styles = {
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    amber: 'bg-amber-50 text-amber-700 border-amber-200',
    rose: 'bg-rose-50 text-rose-700 border-rose-200',
  }[tone];
  return (
    <div className={`rounded-xl border p-4 text-sm animate-pop ${styles}`}>
      <div className="font-bold">
        {percent}% {percent >= 80 ? t('wellDone') : percent >= 50 ? t('nearlyThere') : t('checkModel')}
      </div>
      {children && <div className="mt-1 opacity-90">{children}</div>}
      {onRetry && (
        <button onClick={onRetry} className="btn-ghost text-xs mt-3">
          {t('tryAgain')}
        </button>
      )}
    </div>
  );
}

function CheckButton({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) {
  const { t } = useLang();
  return (
    <button onClick={onClick} disabled={disabled} className="btn-primary text-sm">
      {t('checkAnswers')}
    </button>
  );
}

/* ---------- SORT ---------- */
function SortEngine({ data, onScore }: { data: SortInteraction; onScore: (p: number) => void }) {
  const { t } = useLang();
  const items = useMemo(() => shuffle(data.items), [data]);
  const [placed, setPlaced] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);

  const score = checked
    ? Math.round(
        (items.filter((it, i) => placed[i] === it.bucket).length / items.length) * 100,
      )
    : 0;

  return (
    <div className="space-y-4">
      <p className="prose-plain">{data.prompt}</p>
      <div className="space-y-2.5">
        {items.map((it, i) => {
          const pick = placed[i];
          const isRight = checked && pick === it.bucket;
          const isWrong = checked && pick !== it.bucket;
          return (
            <div
              key={i}
              className={`rounded-xl border p-3 transition-all ${
                isRight
                  ? 'border-emerald-300 bg-emerald-50/60'
                  : isWrong
                    ? 'border-rose-300 bg-rose-50/60'
                    : 'border-line bg-white'
              }`}
            >
              <div className="text-sm font-medium text-ink">{it.text}</div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {data.buckets.map((b) => (
                  <button
                    key={b}
                    disabled={checked}
                    onClick={() => setPlaced((p) => ({ ...p, [i]: b }))}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                      pick === b
                        ? 'bg-brand-600 text-white'
                        : 'bg-slate-100 text-ink-soft hover:bg-brand-100 hover:text-brand-700'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
              {checked && (
                <div className="text-xs text-ink-soft mt-2">
                  <span className="font-bold">{it.bucket}</span> — {it.why}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {!checked ? (
        <CheckButton onClick={() => setChecked(true)} disabled={Object.keys(placed).length < items.length} />
      ) : (
        <ResultBanner
          percent={score}
          onRetry={() => {
            setPlaced({});
            setChecked(false);
          }}
        />
      )}
      {checked && <button onClick={() => onScore(score)} className="btn-primary text-sm">{t('saveResult')}</button>}
    </div>
  );
}

/* ---------- ORDER ---------- */
function OrderEngine({ data, onScore }: { data: OrderInteraction; onScore: (p: number) => void }) {
  const { t } = useLang();
  const pool = useMemo(() => shuffle(data.items), [data]);
  const [seq, setSeq] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  const score = checked
    ? Math.round((data.items.filter((it, i) => seq[i] === it).length / data.items.length) * 100)
    : 0;

  return (
    <div className="space-y-4">
      <p className="prose-plain">{data.prompt}</p>
      <div className="rounded-xl border border-line bg-white p-4">
        <div className="field-label mb-2">{t('yourSequence')}</div>
        {seq.length === 0 ? (
          <div className="text-sm text-ink-faint italic">{t('clickInOrder')}</div>
        ) : (
          <ol className="space-y-1.5">
            {seq.map((s, i) => {
              const right = checked && s === data.items[i];
              const wrong = checked && s !== data.items[i];
              return (
                <li
                  key={i}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm cursor-pointer ${
                    right ? 'bg-emerald-50 text-emerald-700' : wrong ? 'bg-rose-50 text-rose-700' : 'bg-brand-50 text-ink'
                  }`}
                  onClick={() => {
                    if (checked) return;
                    setSeq((q) => q.filter((x) => x !== s));
                  }}
                  title={t('clickToRemove')}
                >
                  <span className="w-6 h-6 rounded-full bg-white border border-line flex items-center justify-center text-xs font-bold font-mono">
                    {i + 1}
                  </span>
                  {s}
                </li>
              );
            })}
          </ol>
        )}
      </div>
      {checked && (
        <div className="rounded-xl border border-line bg-white p-4">
          <div className="field-label mb-2">{t('correctOrder')}</div>
          <ol className="space-y-1">
            {data.items.map((it, i) => (
              <li key={i} className="text-sm text-ink-soft">
                <span className="font-mono font-bold text-brand-600">{i + 1}.</span> {it}
              </li>
            ))}
          </ol>
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {pool
          .filter((p) => !seq.includes(p))
          .map((p, i) => (
            <button
              key={i}
              disabled={checked}
              onClick={() => setSeq((q) => [...q, p])}
              className="px-3 py-2 rounded-lg text-sm bg-white border border-line text-ink hover:border-brand-400 hover:bg-brand-50 transition-all"
            >
              {p}
            </button>
          ))}
      </div>
      {!checked ? (
        <CheckButton onClick={() => setChecked(true)} disabled={seq.length !== data.items.length} />
      ) : (
        <ResultBanner
          percent={score}
          onRetry={() => {
            setSeq([]);
            setChecked(false);
          }}
        />
      )}
      {checked && <button onClick={() => onScore(score)} className="btn-primary text-sm">{t('saveResult')}</button>}
    </div>
  );
}

/* ---------- CHOOSE ---------- */
function ChooseEngine({ data, onScore }: { data: ChooseInteraction; onScore: (p: number) => void }) {
  const { t } = useLang();
  const [picked, setPicked] = useState<number | null>(null);
  const [attempts, setAttempts] = useState(0);

  const correctIdx = data.options.findIndex((o) => o.correct);
  const solved = picked === correctIdx;

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4">
        <div className="field-label mb-1">{t('scenario')}</div>
        <p className="text-sm text-ink leading-relaxed">{data.scenario}</p>
        <p className="text-sm font-bold text-ink mt-3">{data.prompt}</p>
      </div>
      <div className="space-y-2.5">
        {data.options.map((o, i) => {
          const isPicked = picked === i;
          const showState = isPicked || (solved && o.correct);
          return (
            <button
              key={i}
              disabled={solved}
              onClick={() => {
                setPicked(i);
                setAttempts((a) => a + 1);
              }}
              className={`w-full text-start p-4 rounded-xl border-2 transition-all duration-200 ${
                showState
                  ? o.correct
                    ? 'border-emerald-400 bg-emerald-50'
                    : 'border-rose-400 bg-rose-50'
                  : 'border-line bg-white hover:border-brand-300 hover:bg-brand-50/50'
              }`}
            >
              <span className="text-sm text-ink font-medium">{o.text}</span>
              {showState && (
                <span className="block text-xs mt-2 font-semibold">
                  {o.correct ? '✓ ' : '✗ '}
                  <span className="font-normal text-ink-soft">{o.feedback}</span>
                </span>
              )}
            </button>
          );
        })}
      </div>
      {solved && (
        <ResultBanner percent={attempts === 1 ? 100 : 50}>
          {attempts === 1 ? t('firstTry') : t('afterAttempts').replace('{n}', String(attempts))}
        </ResultBanner>
      )}
      {solved && (
        <button onClick={() => onScore(attempts === 1 ? 100 : 50)} className="btn-primary text-sm">
          {t('saveResult')}
        </button>
      )}
    </div>
  );
}

/* ---------- CHECKLIST ---------- */
function ChecklistEngine({ data, onScore }: { data: ChecklistInteraction; onScore: (p: number) => void }) {
  const { t } = useLang();
  const [text, setText] = useState('');
  const [revealed, setRevealed] = useState(false);

  const userItems = text
    .split('\n')
    .map((l) => l.trim().toLowerCase())
    .filter(Boolean);

  const matched = revealed
    ? data.model.filter((m) => userItems.some((u) => u.length > 4 && (m.toLowerCase().includes(u) || u.includes(m.toLowerCase().slice(0, 14)))))
    : [];
  const score = revealed ? Math.round((matched.length / data.model.length) * 100) : 0;

  return (
    <div className="space-y-4">
      <p className="prose-plain">{data.prompt}</p>
      <p className="text-xs text-ink-faint">{t('hint')}: {data.hint}</p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={7}
        placeholder={t('onePerLine')}
        className="input font-mono text-sm leading-relaxed"
      />
      {!revealed ? (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setRevealed(true)}
            disabled={userItems.length === 0}
            className="btn-primary text-sm"
          >
            {t('compareModel')}
          </button>
          <button
            onClick={() => {
              setText(data.model.join('\n'));
              setRevealed(true);
            }}
            className="btn-ghost text-sm"
          >
            {t('justShowModel')}
          </button>
        </div>
      ) : (
        <>
          <ResultBanner
            percent={score}
            onRetry={() => {
              setRevealed(false);
            }}
          />
          <div className="rounded-xl border border-line bg-white p-4">
            <div className="field-label mb-2">{t('modelChecklist')}</div>
            <ul className="space-y-1.5">
              {data.model.map((m, i) => {
                const hit = matched.includes(m);
                return (
                  <li key={i} className="flex gap-2.5 text-sm">
                    <span className={hit ? 'text-emerald-500' : 'text-ink-faint'}>{hit ? '✓' : '○'}</span>
                    <span className={hit ? 'text-ink' : 'text-ink-soft'}>{m}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <button onClick={() => onScore(score)} className="btn-primary text-sm">
            {t('saveResult')}
          </button>
        </>
      )}
    </div>
  );
}

/* ---------- STATUS ---------- */
function StatusEngine({ data, onScore }: { data: StatusInteraction; onScore: (p: number) => void }) {
  const { t } = useLang();
  const [picks, setPicks] = useState<Record<number, 'green' | 'amber' | 'red'>>({});
  const [checked, setChecked] = useState(false);
  const score = checked
    ? Math.round((data.rows.filter((r, i) => picks[i] === r.status).length / data.rows.length) * 100)
    : 0;

  const lights: { k: 'green' | 'amber' | 'red'; emoji: string; label: string }[] = [
    { k: 'green', emoji: '🟢', label: t('ok') },
    { k: 'amber', emoji: '🟠', label: t('attention') },
    { k: 'red', emoji: '🔴', label: t('blocked') },
  ];

  return (
    <div className="space-y-4">
      <p className="prose-plain">{data.prompt}</p>
      <div className="space-y-2.5">
        {data.rows.map((r, i) => {
          const pick = picks[i];
          const right = checked && pick === r.status;
          const wrong = checked && pick && pick !== r.status;
          return (
            <div
              key={i}
              className={`rounded-xl border p-3.5 transition-all ${
                right ? 'border-emerald-300 bg-emerald-50/60' : wrong ? 'border-rose-300 bg-rose-50/60' : 'border-line bg-white'
              }`}
            >
              <div className="flex flex-wrap items-center gap-3">
                <div className="text-sm font-medium text-ink flex-1 min-w-[160px]">{r.task}</div>
                <div className="flex gap-1.5">
                  {lights.map((l) => (
                    <button
                      key={l.k}
                      disabled={checked}
                      onClick={() => setPicks((p) => ({ ...p, [i]: l.k }))}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                        pick === l.k
                          ? 'bg-brand-600 text-white'
                          : 'bg-slate-100 text-ink-soft hover:bg-brand-100'
                      }`}
                    >
                      {l.emoji} {l.label}
                    </button>
                  ))}
                </div>
              </div>
              {checked && (
                <div className="text-xs text-ink-soft mt-2">
                  <span className="font-bold">
                    {r.status === 'green' ? '🟢' : r.status === 'amber' ? '🟠' : '🔴'} {t('correctStatus')}
                  </span>{' '}
                  {r.why}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {!checked ? (
        <CheckButton onClick={() => setChecked(true)} disabled={Object.keys(picks).length < data.rows.length} />
      ) : (
        <ResultBanner
          percent={score}
          onRetry={() => {
            setPicks({});
            setChecked(false);
          }}
        />
      )}
      {checked && <button onClick={() => onScore(score)} className="btn-primary text-sm">{t('saveResult')}</button>}
    </div>
  );
}

/* ---------- ASSIGN ---------- */
function AssignEngine({ data, onScore }: { data: AssignInteraction; onScore: (p: number) => void }) {
  const { t } = useLang();
  const [picks, setPicks] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  const score = checked
    ? Math.round((data.rows.filter((r, i) => picks[i] === r.answer).length / data.rows.length) * 100)
    : 0;

  return (
    <div className="space-y-4">
      <p className="prose-plain">{data.prompt}</p>
      <div className="space-y-2.5">
        {data.rows.map((r, i) => {
          const right = checked && picks[i] === r.answer;
          const wrong = checked && picks[i] && picks[i] !== r.answer;
          return (
            <div
              key={i}
              className={`flex flex-wrap items-center gap-3 rounded-xl border p-3.5 transition-all ${
                right ? 'border-emerald-300 bg-emerald-50/60' : wrong ? 'border-rose-300 bg-rose-50/60' : 'border-line bg-white'
              }`}
            >
              <div className="text-sm font-medium text-ink flex-1 min-w-[160px]">{r.task}</div>
              <select
                disabled={checked}
                value={picks[i] ?? ''}
                onChange={(e) => setPicks((p) => ({ ...p, [i]: e.target.value }))}
                className="input w-auto min-w-[150px] text-sm"
              >
                <option value="">{t('chooseOne')}</option>
                {data.options.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
              {checked && !right && (
                <span className="text-xs text-emerald-600 font-semibold">→ {r.answer}</span>
              )}
            </div>
          );
        })}
      </div>
      {!checked ? (
        <CheckButton onClick={() => setChecked(true)} disabled={Object.keys(picks).length < data.rows.length} />
      ) : (
        <ResultBanner
          percent={score}
          onRetry={() => {
            setPicks({});
            setChecked(false);
          }}
        />
      )}
      {checked && <button onClick={() => onScore(score)} className="btn-primary text-sm">{t('saveResult')}</button>}
    </div>
  );
}

/* ---------- dispatcher ---------- */
export function InteractionEngine({
  data,
  onScore,
}: {
  data: Interaction;
  onScore: (percent: number) => void;
}) {
  switch (data.type) {
    case 'sort':
      return <SortEngine data={data} onScore={onScore} />;
    case 'order':
      return <OrderEngine data={data} onScore={onScore} />;
    case 'choose':
      return <ChooseEngine data={data} onScore={onScore} />;
    case 'checklist':
      return <ChecklistEngine data={data} onScore={onScore} />;
    case 'status':
      return <StatusEngine data={data} onScore={onScore} />;
    case 'assign':
      return <AssignEngine data={data} onScore={onScore} />;
  }
}
