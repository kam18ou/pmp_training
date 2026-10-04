import type { AgendaDay } from '../types';

export const AGENDA: AgendaDay[] = [
  {
    day: 1,
    title: 'Understanding projects and the customer',
    modules: [1, 2, 3],
    close: 'Workshop 3 — a real survey checklist on a real building plan.',
  },
  {
    day: 2,
    title: 'Defining and organising the work',
    modules: [4, 5, 6, 7],
    close: 'The spine project has scope, tasks, owners, and a materials list.',
  },
  {
    day: 3,
    title: 'Schedule, procurement, and money',
    modules: [8, 9, 10],
    close: 'The spine project has a one-week schedule and an honest budget.',
  },
  {
    day: 4,
    title: 'Running the work and handling surprises',
    modules: [11, 12, 13, 14],
    close: 'First inject, handled live: a supplier delay and a customer change.',
  },
  {
    day: 5,
    title: 'Quality, handover, and the full simulation',
    modules: [15, 16, 17],
    close: 'Final simulation — the complete spine project file, handed in.',
  },
];

export const AGENDA_COMPRESSED: AgendaDay[] = [
  {
    day: 1,
    title: 'Projects, customers, and the survey',
    modules: [1, 2, 3, 4],
    close: 'A completed survey checklist and a two-column scope sheet.',
  },
  {
    day: 2,
    title: 'Organising the work',
    modules: [5, 6, 7, 8, 9, 10],
    close: 'The spine project has tasks, owners, materials, schedule, and budget.',
  },
  {
    day: 3,
    title: 'Execution and the full simulation',
    modules: [11, 12, 13, 14, 15, 16, 17],
    close: 'Final simulation — never compressed, it is the assessment.',
  },
];

export const POST_TRAINING_PLAN: { window: string; action: string }[] = [
  { window: 'Days 1–30', action: 'Use templates 4 (scope), 12 (change request), and 13 (daily report) on the next live project.' },
  { window: 'Days 31–60', action: 'Add templates 5 (task list), 6 (responsibility), and 8 (schedule) to every new job.' },
  { window: 'Days 61–90', action: 'Run one internal lessons-learned session using template 18, and read it before the next kick-off.' },
];
