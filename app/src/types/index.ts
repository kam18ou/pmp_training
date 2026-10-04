export interface Workshop {
  id: number;
  title: string;
  phase: string;
  line: string;
  level?: string;
  duration: string;
  groupSize: string;
  prerequisite: string;
  scenario: string;
  objectives: string[];
  roles: string[];
  inputs: string[];
  tasks: string[];
  deliverables: string;
  facilitator: string;
  mistakes: string[];
  rubric: { tier: string; desc: string }[];
  transfer: string;
  variations: { small: string; large: string };
}

export interface Module {
  id: string;
  title: string;
  duration: string;
  phase: string;
  goal: string;
  pmbok: string;
  concepts: string[];
  sequence: {
    concept: string;
    example: string;
    problem: string;
    workshop: string;
    deliverable: string;
    application: string;
  };
}

export interface Template {
  id: string;
  name: string;
  purpose: string;
  fields: string[];
}

export interface KPI {
  num: number;
  name: string;
  formula: string;
  target: string;
  trigger: string;
}

export interface PocketCard {
  num: number;
  title: string;
  lines: string[];
}

export interface ProgramData {
  workshops: Workshop[];
  modules: Module[];
  templates: Template[];
  kpis: KPI[];
  cards: PocketCard[];
}

export type ViewKey =
  | 'dashboard'
  | 'modules'
  | 'module-detail'
  | 'workshops'
  | 'workshop-detail'
  | 'templates'
  | 'pocket-cards'
  | 'kpis'
  | 'bid-scorecard'
  | 'change-order'
  | 'risk-register'
  | 'margin-calculator'
  | 'capstone'
  | 'assessment'
  | 'maturity';

export interface Progress {
  completedModules: string[];
  completedWorkshops: number[];
  toolRuns: Record<string, number>;
  capstoneScore: number | null;
  assessmentScore: number | null;
  maturityLevel: number | null;
}
