import type { ProgramData } from '../../types';
import { MODULES_FR } from './modules';
import { WORKSHOPS_FR_A } from './workshops.a';
import { WORKSHOPS_FR_B } from './workshops.b';
import { TEMPLATES_FR } from './templates';
import { CARDS_FR } from './cards';
import { KPIS_FR } from './kpis';

export const PROGRAM_FR: ProgramData = {
  workshops: [...WORKSHOPS_FR_A, ...WORKSHOPS_FR_B],
  modules: MODULES_FR,
  templates: TEMPLATES_FR,
  kpis: KPIS_FR,
  cards: CARDS_FR,
};