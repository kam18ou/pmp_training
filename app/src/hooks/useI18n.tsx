import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { TRANSLATIONS, type Lang, type Dict } from '../i18n/translations';

const STORAGE_KEY = 'pmp-formation-lang';

type Dir = 'ltr' | 'rtl';

interface I18nContextValue {
  lang: Lang;
  dir: Dir;
  setLang: (lang: Lang) => void;
  /** Translate a dotted key, e.g. t('dashboard.heroTitle'). Falls back to English, then the key. */
  t: (key: string, vars?: Record<string, string | number>) => string;
  /** Resolve a translated list (including lists of objects), e.g. tList<Criterion>('bid.criteria'). */
  tList: <T>(key: string) => T[];
}

const I18nContext = createContext<I18nContextValue | null>(null);

function detectInitialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'fr' || stored === 'ar') return stored;
  } catch {
    /* ignore */
  }
  const browser = typeof navigator !== 'undefined' ? navigator.language.slice(0, 2) : 'en';
  if (browser === 'fr') return 'fr';
  if (browser === 'ar') return 'ar';
  return 'en';
}

function resolve(dict: unknown, key: string): unknown {
  if (dict == null) return undefined;
  const parts = key.split('.');
  let cur: unknown = dict;
  for (const p of parts) {
    if (cur && typeof cur === 'object' && p in (cur as Record<string, unknown>)) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return undefined;
    }
  }
  return cur;
}

function applyVars(s: string, vars?: Record<string, string | number>): string {
  if (!vars) return s;
  return s.replace(/\{(\w+)\}/g, (_, name) => String(vars[name] ?? ''));
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);
  const dir: Dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang, dir]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  const lookup = useCallback(
    (key: string): unknown => resolve(TRANSLATIONS[lang], key) ?? resolve(TRANSLATIONS.en, key),
    [lang],
  );

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const val = lookup(key);
      return typeof val === 'string' ? applyVars(val, vars) : key;
    },
    [lookup],
  );

  const tList = useCallback(
    <T,>(key: string): T[] => {
      const val = lookup(key);
      return Array.isArray(val) ? (val as T[]) : [];
    },
    [lookup],
  );

  return (
    <I18nContext.Provider value={{ lang, dir, setLang, t, tList }}>{children}</I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within an I18nProvider');
  return ctx;
}

export type { Lang, Dir, Dict };
