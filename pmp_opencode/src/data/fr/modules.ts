import type { Module } from '../../types';
import { MODULES_FR_A } from './modules.a';
import { MODULES_FR_B } from './modules.b';

export const MODULES_FR: Module[] = [...MODULES_FR_A, ...MODULES_FR_B];

export const STAGES_FR: { key: Module['stage']; name: string; blurb: string }[] = [
  { key: 'start', name: 'COMMENCER', blurb: 'Comprendre ce que le client veut' },
  { key: 'plan', name: 'PLANIFIER', blurb: 'Décider quoi, qui, avec quoi, et quand' },
  { key: 'do', name: 'RÉALISER', blurb: 'Réaliser le travail et gérer les surprises' },
  { key: 'check', name: 'VÉRIFIER', blurb: 'Vérifier l’avancement, la qualité et le reporting' },
  { key: 'finish', name: 'CLÔTURER', blurb: 'Tester, livrer, et clôturer' },
];
