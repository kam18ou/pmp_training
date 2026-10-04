import type { Module } from '../../types';
import { MODULES_AR_A } from './modules.a';
import { MODULES_AR_B } from './modules.b';

export const MODULES_AR: Module[] = [...MODULES_AR_A, ...MODULES_AR_B];

export const STAGES_AR: { key: Module['stage']; name: string; blurb: string }[] = [
  { key: 'start', name: 'ابدأ', blurb: 'افهم ما يريده العميل' },
  { key: 'plan', name: 'خطّط', blurb: 'قرّر ماذا، ومن، وبماذا، ومتى' },
  { key: 'do', name: 'نفّذ', blurb: 'أنجز العمل وتعامل مع المفاجآت' },
  { key: 'check', name: 'افحص', blurb: 'تحقق من التقدم والجودة والتقارير' },
  { key: 'finish', name: 'أنهِ', blurb: 'اختبر وسلّم وأغلق' },
];
