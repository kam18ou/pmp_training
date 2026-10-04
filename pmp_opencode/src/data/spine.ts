import type { SpineSection } from '../types';

export const SPINE: SpineSection[] = [
  { title: 'Project information', icon: '◈', moduleId: 1, templateIds: [1], lines: [
    'Project: Office CCTV installation — Northgate Ltd.',
    'Customer: Samira Okon, Facilities Manager.',
    'Site: 14 Merlin Road, Northgate — 3 floors + 400 m² warehouse.',
    'Project manager: Karim. Team: Team A (2 technicians), Amel (coordinator).',
    'Start 3 June · Working system by 18 June · Stock check 20 June.',
  ]},
  { title: 'Customer requirements', icon: '💬', moduleId: 2, templateIds: [2], lines: [
    'Trigger: tools went missing from the warehouse in May.',
    'Cover: warehouse, loading bay, rear door, reception, offices.',
    'Old 4-camera DVR is dead — to be replaced, not reused.',
    'Remote viewing needed, from the owner’s phone.',
    'Must work before the stock check on 20 June.',
  ]},
  { title: 'Site survey', icon: '🗺', moduleId: 3, templateIds: [3], lines: [
    '16 camera positions marked across 3 floors + warehouse.',
    'Rack: server room floor 1, 2U free, power available.',
    'Longest cable run: loading bay → rack = 62 m.',
    'Constraint: warehouse closed to us 09:00–11:00 (forklifts).',
    'Every position photographed and measured.',
  ]},
  { title: 'Scope', icon: '▦', moduleId: 4, templateIds: [4], lines: [
    'Included: 16 cameras, recorder, 2 switches, storage, cabling, installation, configuration, testing, user training.',
    'Not included: removing the old DVR, electrical works, internet subscription, clearing the warehouse, renovation.',
    'Confirmed by the customer before the order was placed.',
  ]},
  { title: 'Task list', icon: '▤', moduleId: 5, templateIds: [5], lines: [
    '1 Survey · 2 Design · 3 Order · 4 Receive & check · 5 Cabling',
    '6 Mount cameras · 7 Recorder & switches · 8 Configure',
    '9 Test · 10 Train customer · 11 Hand over.',
    'Eleven tasks — each small enough for one person to finish.',
  ]},
  { title: 'Responsibilities', icon: '👤', moduleId: 6, templateIds: [6], lines: [
    'Survey, configuration, testing — Karim (engineer).',
    'Cabling and mounting — Team A (2 technicians).',
    'User training and documentation — Amel (coordinator).',
    'One task, one name. Backups agreed in advance.',
  ]},
  { title: 'Materials', icon: '📦', moduleId: 7, templateIds: [7], lines: [
    'Equipment: 16 IP cameras, 32-ch recorder, 2 PoE switches, 8 TB storage.',
    'Materials: 4 boxes Cat6, connectors, ties, labels, 6U wall rack.',
    'Tools: crimp tool, cable tester, 2 ladders, laptop.',
    'Documents: floor plan, requirements form, scope sheet.',
  ]},
  { title: 'Schedule', icon: '📅', moduleId: 8, templateIds: [8], lines: [
    'Mon wk1: survey + design. Tue: delivery & check.',
    'Wed: cabling. Thu: mount cameras + rack. Fri: configuration.',
    'Mon wk2: testing. Tue wk2: training + handover.',
    'Buffer: Friday afternoon, kept empty. Recorder ordered day one (2-week lead).',
  ]},
  { title: 'Budget', icon: '＄', moduleId: 10, templateIds: [10], lines: [
    'Equipment and materials: $11,400.',
    'Labour (burdened rate): $6,900. Other: $400.',
    'Total cost: $18,700. Price: $24,500.',
    'Margin 23.7% — below the 28% target; price adjusted before sending.',
  ]},
  { title: 'Risk register', icon: '⚠', moduleId: 11, templateIds: [11], lines: [
    'RISK: switches backordered → order split, second supplier identified (owner: Amel).',
    'RISK: warehouse access 09–11 → cabling moved to afternoons (owner: Karim).',
    'PROBLEM: loading bay blocked by pallets → customer asked to clear by Thursday.',
    'Every entry has a response and an owner — never just a worry.',
  ]},
  { title: 'Changes', icon: '✎', moduleId: 12, templateIds: [12], lines: [
    'Request: 4 extra cameras in the warehouse rear corner.',
    'Adds: 4 cameras, 90 m cable, configuration — one extra day.',
    'Effect: finish moves from Tuesday to Wednesday.',
    'Price $1,850. Signed by the customer before the work started.',
  ]},
  { title: 'Test results', icon: '✓', moduleId: 15, templateIds: [15], lines: [
    'All 16 cameras live at the right angle — pass.',
    'Recording, playback, storage, remote viewing — pass.',
    'User can find a clip unaided — pass.',
    'Signed by the customer on handover day.',
  ]},
  { title: 'Handover package', icon: '🗂', moduleId: 16, templateIds: [16], lines: [
    'Equipment list with serial numbers.',
    'IP addresses and passwords, sealed and signed across the flap.',
    'Two instruction pages, signed tests, warranty, maintenance date, support contact.',
    'Handed physically — with a 15-minute walkthrough for the actual user.',
  ]},
  { title: 'Closure & lessons', icon: '🎓', moduleId: 17, templateIds: [17, 18], lines: [
    'Acceptance signed 18 June. Final invoice sent 19 June.',
    '10% retention for 12 months, noted in the calendar.',
    'Lesson 1: order the recorder the day the contract is signed.',
    'Lesson 2: check warehouse access hours before scheduling cabling.',
    'Lesson 3: send the daily report with photos — the customer stopped calling twice a day.',
  ]},
];