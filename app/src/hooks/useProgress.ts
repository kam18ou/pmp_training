import { useEffect, useState, useCallback } from 'react';
import type { Progress } from '../types';

const STORAGE_KEY = 'pmp-formation-progress';

const EMPTY: Progress = {
  completedModules: [],
  completedWorkshops: [],
  toolRuns: {},
  capstoneScore: null,
  assessmentScore: null,
  maturityLevel: null,
};

function load(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...EMPTY };
    const parsed = JSON.parse(raw);
    return { ...EMPTY, ...parsed };
  } catch {
    return { ...EMPTY };
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => load());

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      /* storage unavailable (private mode) — fail silently */
    }
  }, [progress]);

  const toggleModule = useCallback((id: string) => {
    setProgress((p) => {
      const has = p.completedModules.includes(id);
      return {
        ...p,
        completedModules: has
          ? p.completedModules.filter((m) => m !== id)
          : [...p.completedModules, id],
      };
    });
  }, []);

  const toggleWorkshop = useCallback((id: number) => {
    setProgress((p) => {
      const has = p.completedWorkshops.includes(id);
      return {
        ...p,
        completedWorkshops: has
          ? p.completedWorkshops.filter((w) => w !== id)
          : [...p.completedWorkshops, id],
      };
    });
  }, []);

  const recordToolRun = useCallback((tool: string) => {
    setProgress((p) => ({
      ...p,
      toolRuns: { ...p.toolRuns, [tool]: (p.toolRuns[tool] ?? 0) + 1 },
    }));
  }, []);

  const setScore = useCallback(
    (key: 'capstoneScore' | 'assessmentScore' | 'maturityLevel', value: number | null) => {
      setProgress((p) => ({ ...p, [key]: value }));
    },
    [],
  );

  const reset = useCallback(() => setProgress({ ...EMPTY }), []);

  return { progress, toggleModule, toggleWorkshop, recordToolRun, setScore, reset };
}
