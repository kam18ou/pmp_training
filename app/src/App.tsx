import { useState } from 'react';
import { Sidebar, TopBar } from './components/Sidebar';
import { useProgress } from './hooks/useProgress';
import type { Module, ViewKey, Workshop } from './types';

import { Dashboard } from './views/Dashboard';
import { Modules, ModuleDetail } from './views/Modules';
import { Workshops, WorkshopDetail } from './views/Workshops';
import { Templates } from './views/Templates';
import { PocketCards } from './views/PocketCards';
import { KPIs } from './views/KPIs';

import { BidScorecard } from './tools/BidScorecard';
import { ChangeOrderPricer } from './tools/ChangeOrderPricer';
import { RiskRegister } from './tools/RiskRegister';
import { MarginCalculator } from './tools/MarginCalculator';
import { Capstone } from './tools/Capstone';
import { Assessment } from './tools/Assessment';
import { Maturity } from './tools/Maturity';

export default function App() {
  const [view, setView] = useState<ViewKey>('dashboard');
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const { progress, toggleModule, toggleWorkshop, recordToolRun, setScore, reset } = useProgress();

  const navigate = (key: ViewKey) => {
    setView(key);
    if (key !== 'module-detail') setSelectedModule(null);
    if (key !== 'workshop-detail') setSelectedWorkshop(null);
    window.scrollTo({ top: 0 });
  };

  const selectModule = (m: Module) => {
    setSelectedModule(m);
    setView('module-detail');
    window.scrollTo({ top: 0 });
  };

  const selectWorkshop = (w: Workshop) => {
    setSelectedWorkshop(w);
    setView('workshop-detail');
    window.scrollTo({ top: 0 });
  };

  const render = () => {
    switch (view) {
      case 'dashboard':
        return <Dashboard progress={progress} onNavigate={navigate} />;
      case 'modules':
        return (
          <Modules
            progress={progress}
            onToggle={toggleModule}
            onSelect={selectModule}
            onNavigate={navigate}
          />
        );
      case 'module-detail':
        return selectedModule ? (
          <ModuleDetail
            module={selectedModule}
            progress={progress}
            onToggle={toggleModule}
            onNavigate={navigate}
          />
        ) : (
          <Dashboard progress={progress} onNavigate={navigate} />
        );
      case 'workshops':
        return (
          <Workshops
            progress={progress}
            onToggle={toggleWorkshop}
            onSelect={selectWorkshop}
            onNavigate={navigate}
          />
        );
      case 'workshop-detail':
        return selectedWorkshop ? (
          <WorkshopDetail
            workshop={selectedWorkshop}
            progress={progress}
            onToggle={toggleWorkshop}
            onNavigate={navigate}
          />
        ) : (
          <Dashboard progress={progress} onNavigate={navigate} />
        );
      case 'templates':
        return <Templates />;
      case 'pocket-cards':
        return <PocketCards />;
      case 'kpis':
        return <KPIs />;
      case 'bid-scorecard':
        return <BidScorecard onRun={() => recordToolRun('bid-scorecard')} />;
      case 'change-order':
        return <ChangeOrderPricer onRun={() => recordToolRun('change-order')} />;
      case 'risk-register':
        return <RiskRegister onRun={() => recordToolRun('risk-register')} />;
      case 'margin-calculator':
        return <MarginCalculator onRun={() => recordToolRun('margin-calculator')} />;
      case 'capstone':
        return (
          <Capstone
            onComplete={(s) => setScore('capstoneScore', s)}
            bestScore={progress.capstoneScore}
          />
        );
      case 'assessment':
        return (
          <Assessment
            onComplete={(s) => setScore('assessmentScore', s)}
            bestScore={progress.assessmentScore}
          />
        );
      case 'maturity':
        return (
          <Maturity
            onComplete={(l) => setScore('maturityLevel', l)}
            currentLevel={progress.maturityLevel}
          />
        );
      default:
        return <Dashboard progress={progress} onNavigate={navigate} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        current={view}
        onNavigate={navigate}
        progress={progress}
        onReset={() => {
          reset();
          navigate('dashboard');
        }}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar current={view} />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto">{render()}</div>
        </main>
      </div>
    </div>
  );
}
