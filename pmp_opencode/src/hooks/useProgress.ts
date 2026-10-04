import { useEffect, useState, useCallback } from 'react';
import type { Progress } from '../types';
import { MODULES } from '../data/modules';

const STORAGE_KEY = 'pm-basics-progress-v1';

const EMPTY: Progress = {
  completedModules: [],
  workshopResults: {},
  simulationDone: false,
  bestSimulation: null,
};

function load(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...EMPTY };
    return { ...EMPTY, ...JSON.parse(raw) };
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
      /* storage unavailable — fail silently */
    }
  }, [progress]);

  const completeModule = useCallback((id: number) => {
    setProgress((p) =>
      p.completedModules.includes(id) ? p : { ...p, completedModules: [...p.completedModules, id] },
    );
  }, []);

  const uncompleteModule = useCallback((id: number) => {
    setProgress((p) => ({ ...p, completedModules: p.completedModules.filter((m) => m !== id) }));
  }, []);

  const recordWorkshop = useCallback((id: number, percent: number) => {
    setProgress((p) => ({
      ...p,
      workshopResults: { ...p.workshopResults, [id]: Math.max(p.workshopResults[id] ?? 0, percent) },
    }));
  }, []);

  const recordSimulation = useCallback((percent: number) => {
    setProgress((p) => ({
      ...p,
      simulationDone: true,
      bestSimulation: Math.max(p.bestSimulation ?? 0, percent),
    }));
  }, []);

  const reset = useCallback(() => setProgress({ ...EMPTY }), []);

  const completedCount = progress.completedModules.length;
  const modulePercent = Math.round((completedCount / MODULES.length) * 100);
  const workshopsDone = Object.keys(progress.workshopResults).length;

  return {
    progress,
    completeModule,
    uncompleteModule,
    recordWorkshop,
    recordSimulation,
    reset,
    completedCount,
    modulePercent,
    workshopsDone,
  };
}
