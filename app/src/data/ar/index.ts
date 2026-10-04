import type { ProgramData } from '../../types';
import { MODULES_AR } from './modules';
import { WORKSHOPS_AR_A } from './workshops.a';
import { WORKSHOPS_AR_B } from './workshops.b';
import { TEMPLATES_AR } from './templates';
import { CARDS_AR } from './cards';
import { KPIS_AR } from './kpis';

export const PROGRAM_AR: ProgramData = {
  workshops: [...WORKSHOPS_AR_A, ...WORKSHOPS_AR_B],
  modules: MODULES_AR,
  templates: TEMPLATES_AR,
  kpis: KPIS_AR,
  cards: CARDS_AR,
};