import type { GlossaryEntry } from '../types';

export const GLOSSARY: GlossaryEntry[] = [
  {
    plain: 'A project',
    pro: 'Project',
    meaning: 'Temporary work done once to achieve one specific result, with a beginning and an end.',
    example: 'Installing the CCTV system — done once, finished on handover day.',
  },
  {
    plain: 'Daily work',
    pro: 'Operations',
    meaning: 'The repeating work that keeps the business running, with no single end date.',
    example: 'The monthly fire-alarm service round.',
  },
  {
    plain: 'What the customer needs',
    pro: 'Requirements',
    meaning: 'The written, agreed list of what the project must deliver.',
    example: '"16 cameras covering warehouse and reception, remote viewing, working before 20 June."',
  },
  {
    plain: 'The visit before quoting',
    pro: 'Site survey',
    meaning: 'A walk of the site with a checklist to collect the physical facts before designing or pricing.',
    example: 'Marking camera positions on the floor plan and photographing each one.',
  },
  {
    plain: 'What we will and will not do',
    pro: 'Scope',
    meaning: 'The agreed border of the project — the work included, and just as importantly, the work excluded.',
    example: 'Installation included; electrical works and the internet subscription excluded.',
  },
  {
    plain: 'Breaking the project into tasks',
    pro: 'Work Breakdown Structure (WBS)',
    meaning: 'The complete list of tasks that, taken together, produce the whole project.',
    example: 'Eleven tasks from site survey to handover.',
  },
  {
    plain: 'Who is responsible',
    pro: 'Responsibility table (RACI)',
    meaning: 'A table giving each task exactly one owner. RACI is the advanced version: Responsible, Accountable, Consulted, Informed.',
    example: 'Cable installation — Team A; configuration — Karim.',
  },
  {
    plain: 'What we need before we start',
    pro: 'Resource list',
    meaning: 'People, equipment, materials, tools, and documents required for the project.',
    example: 'Two technicians, 16 cameras, cable, a cable tester, and the floor plan.',
  },
  {
    plain: 'What must happen before what',
    pro: 'Dependencies',
    meaning: 'The rule that one task cannot start until another is finished.',
    example: 'You cannot configure cameras that are not yet mounted.',
  },
  {
    plain: 'Buying for the project',
    pro: 'Procurement',
    meaning: 'The sequence: identify → request quotations → compare → order → receive → check.',
    example: 'Ordering the recorder on day one because it has a two-week lead time.',
  },
  {
    plain: 'The full cost of a person per hour',
    pro: 'Burdened labour rate',
    meaning: 'Wage plus all company costs on top: taxes, insurance, vehicle, and non-billable time.',
    example: 'A $28 wage can mean a $48 burdened rate — use $48 in the budget.',
  },
  {
    plain: 'Cost, price, and the difference',
    pro: 'Margin',
    meaning: 'Margin = (Price − Cost) ÷ Price. It is read from the price, never from the cost.',
    example: 'Cost $18,700, price $24,500 → margin 23.7%.',
  },
  {
    plain: 'Something that might happen',
    pro: 'Risk',
    meaning: 'A possible future event with a planned response and an owner.',
    example: 'The recorder may arrive late — so it is ordered on day one.',
  },
  {
    plain: 'Something that already happened',
    pro: 'Problem',
    meaning: 'A real event that has already occurred and needs a decision now.',
    example: 'The recorder has arrived late — the schedule must change today.',
  },
  {
    plain: 'A change asked for after the start',
    pro: 'Change request',
    meaning: 'A written, signed request to add or change work, with its effect on time and price.',
    example: 'Four extra warehouse cameras, priced $1,850, signed before work starts.',
  },
  {
    plain: 'How the project is doing',
    pro: 'Status report',
    meaning: 'A short, regular statement of what is finished, in progress, not started, and blocked.',
    example: 'Cabling green, loading-bay cameras red, configuration amber.',
  },
  {
    plain: 'The final check with the customer',
    pro: 'Acceptance test',
    meaning: 'The agreed test that proves the system works, signed by the customer.',
    example: 'Walking all 16 cameras, recording, and playback with the customer beside you.',
  },
  {
    plain: 'Giving the customer the finished system',
    pro: 'Handover',
    meaning: 'The organized transfer of the completed system, its documents, and its responsibility.',
    example: 'The folder: serial numbers, sealed passwords, instructions, signed tests, warranty.',
  },
  {
    plain: 'What we learned for next time',
    pro: 'Lessons learned',
    meaning: 'A short, specific, actionable list of what to repeat and what to change next project.',
    example: '"Order the recorder the day the contract is signed."',
  },
];
