export type Stage = 'start' | 'plan' | 'do' | 'check' | 'finish';
export type Level = 1 | 2 | 3;

export interface Module {
  id: number;
  stage: Stage;
  level: Level;
  name: string;
  tagline: string;
  duration: string;
  objective: string;
  plain: string[];
  spineExample: string[];
  otherExample?: { domain: string; text: string };
  tool: string;
  proTerm?: { plain: string; pro: string; meaning: string };
  workshopId: number | null;
  templateIds: number[];
  discussion: string[];
  mistakes: string[];
  monday: string;
}

export type InteractionType = 'sort' | 'order' | 'choose' | 'checklist' | 'status' | 'assign';

export interface SortItem {
  text: string;
  bucket: string;
  why: string;
}
export interface SortInteraction {
  type: 'sort';
  prompt: string;
  buckets: string[];
  items: SortItem[];
}
export interface OrderInteraction {
  type: 'order';
  prompt: string;
  items: string[];
}
export interface ChooseOption {
  text: string;
  correct: boolean;
  feedback: string;
}
export interface ChooseInteraction {
  type: 'choose';
  prompt: string;
  scenario: string;
  options: ChooseOption[];
}
export interface ChecklistInteraction {
  type: 'checklist';
  prompt: string;
  model: string[];
  hint: string;
}
export interface StatusRow {
  task: string;
  status: 'green' | 'amber' | 'red';
  why: string;
}
export interface StatusInteraction {
  type: 'status';
  prompt: string;
  rows: StatusRow[];
}
export interface AssignRow {
  task: string;
  answer: string;
}
export interface AssignInteraction {
  type: 'assign';
  prompt: string;
  options: string[];
  rows: AssignRow[];
}

export type Interaction =
  | SortInteraction
  | OrderInteraction
  | ChooseInteraction
  | ChecklistInteraction
  | StatusInteraction
  | AssignInteraction;

export interface Workshop {
  id: number;
  title: string;
  minutes: number;
  level: Level;
  brief: string;
  materials: string[];
  steps: string[];
  expected: string;
  assess: string[];
  moduleId: number;
  interaction?: Interaction;
}

export interface Template {
  id: number;
  name: string;
  purpose: string;
  fields: string[];
  filledBy: string;
  filledWhen: string;
  example: string[];
}

export interface GlossaryEntry {
  plain: string;
  pro: string;
  meaning: string;
  example: string;
}

export interface AgendaDay {
  day: number;
  title: string;
  modules: number[];
  close: string;
}

export interface SimChoice {
  text: string;
  correct: boolean;
  feedback: string;
}
export interface SimBeat {
  n: number;
  beat: string;
  stage: Stage;
  situation: string;
  question: string;
  choices: SimChoice[];
  inject?: boolean;
}

export interface SpineSection {
  title: string;
  icon: string;
  moduleId: number;
  templateIds: number[];
  lines: string[];
}

export type ViewKey =
  | 'home'
  | 'path'
  | 'module'
  | 'spine'
  | 'workshops'
  | 'workshop'
  | 'templates'
  | 'glossary'
  | 'agenda'
  | 'simulation';

export interface Progress {
  completedModules: number[];
  workshopResults: Record<number, number>;
  simulationDone: boolean;
  bestSimulation: number | null;
}
