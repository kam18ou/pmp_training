import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { useProgress } from './hooks/useProgress';
import { WORKSHOPS } from './data/workshops';
import { useLang, type UIKey } from './i18n/LangContext';
import type { ViewKey } from './types';

import { Home } from './views/Home';
import { LearningPath } from './views/LearningPath';
import { ModuleDetail } from './views/ModuleDetail';
import { SpineProject } from './views/SpineProject';
import { Workshops } from './views/Workshops';
import { WorkshopDetail } from './views/WorkshopDetail';
import { Templates } from './views/Templates';
import { Glossary } from './views/Glossary';
import { Agenda } from './views/Agenda';
import { Simulation } from './views/Simulation';

const VIEW_TITLES: Record<ViewKey, UIKey> = {
  home: 'home',
  path: 'pathTitle',
  module: 'module',
  spine: 'spine',
  workshops: 'workshops',
  workshop: 'workshop',
  templates: 'templatesTitle',
  glossary: 'glossary',
  agenda: 'agendaTitle',
  simulation: 'simulation',
};

export default function App() {
  const [view, setView] = useState<ViewKey>('home');
  const [moduleId, setModuleId] = useState(1);
  const [workshopId, setWorkshopId] = useState(1);
  const { t } = useLang();

  const {
    progress,
    completeModule,
    uncompleteModule,
    recordWorkshop,
    recordSimulation,
    reset,
    completedCount,
    modulePercent,
    workshopsDone,
  } = useProgress();

  const navigate = (key: ViewKey) => {
    setView(key);
    window.scrollTo({ top: 0 });
  };

  const selectModule = (id: number) => {
    setModuleId(id);
    navigate('module');
  };

  const selectWorkshop = (id: number) => {
    setWorkshopId(id);
    navigate('workshop');
  };

  const toggleModule = (id: number) => {
    if (progress.completedModules.includes(id)) uncompleteModule(id);
    else completeModule(id);
  };

  const render = () => {
    switch (view) {
      case 'home':
        return (
          <Home
            modulePercent={modulePercent}
            completedCount={completedCount}
            workshopsDone={workshopsDone}
            simulationBest={progress.bestSimulation}
            onNavigate={navigate}
          />
        );
      case 'path':
        return (
          <LearningPath
            completed={progress.completedModules}
            onSelect={selectModule}
            onNavigate={navigate}
          />
        );
      case 'module':
        return (
          <ModuleDetail
            moduleId={moduleId}
            completed={progress.completedModules}
            onToggle={toggleModule}
            onSelectModule={selectModule}
            onNavigate={navigate}
          />
        );
      case 'spine':
        return <SpineProject completed={progress.completedModules} onNavigate={navigate} />;
      case 'workshops':
        return <Workshops results={progress.workshopResults} onSelect={selectWorkshop} />;
      case 'workshop':
        return (
          <WorkshopDetail
            workshopId={workshopId}
            results={progress.workshopResults}
            onScore={recordWorkshop}
            onNavigate={(k) => {
              if (k === 'module') {
                const w = WORKSHOPS.find((x) => x.id === workshopId);
                if (w) setModuleId(w.moduleId);
              }
              navigate(k);
            }}
          />
        );
      case 'templates':
        return <Templates />;
      case 'glossary':
        return <Glossary />;
      case 'agenda':
        return <Agenda onNavigate={navigate} />;
      case 'simulation':
        return (
          <Simulation
            bestScore={progress.bestSimulation}
            done={progress.simulationDone}
            onFinish={recordSimulation}
            onNavigate={navigate}
          />
        );
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        current={view}
        onNavigate={navigate}
        modulePercent={modulePercent}
        completedCount={completedCount}
        workshopsDone={workshopsDone}
        onReset={() => {
          reset();
          navigate('home');
        }}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 border-b border-line bg-white/70 backdrop-blur-md flex items-center px-6 shrink-0">
          <h1 className="font-display font-bold text-ink">{t(VIEW_TITLES[view])}</h1>
          <span className="ms-auto text-xs text-ink-faint">
            SIMPLE → PRACTICAL → REPEATABLE → USEFUL
          </span>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto">{render()}</div>
        </main>
      </div>
    </div>
  );
}
