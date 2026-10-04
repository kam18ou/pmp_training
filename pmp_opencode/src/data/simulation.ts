import type { SimBeat } from '../types';

/**
 * The final simulation: the spine CCTV project, played end to end.
 * 16 beats, 2 injects (beats 11 and 12) delivered as sealed envelopes on the day.
 */
export const SIMULATION: SimBeat[] = [
  {
    n: 1,
    beat: 'Understand the request',
    stage: 'start',
    situation:
      'Samira Okon, facilities manager at Northgate Ltd, calls: "We had tools go missing from the warehouse last month. I think we need CCTV. Can you give me a price?"',
    question: 'What is your first move?',
    choices: [
      { text: 'Send a price for a standard 8-camera package the same afternoon.', correct: false, feedback: 'You quoted before understanding. "CCTV" could be four cameras or forty — and you just guessed.' },
      { text: 'Arrange a visit, and prepare the questions you will ask about what actually needs protecting.', correct: true, feedback: 'Right. The trigger tells you the real need: warehouse theft. Everything else follows from that.' },
      { text: 'Tell her CCTV will not help and suggest an alarm instead.', correct: false, feedback: 'You solved the problem before diagnosing it. Her need is evidence and deterrence — CCTV may be exactly right.' },
    ],
  },
  {
    n: 2,
    beat: 'Ask the questions',
    stage: 'start',
    situation: 'You are sitting with Samira. She repeats: "Just give me something that covers the warehouse."',
    question: 'Which question matters most right now?',
    choices: [
      { text: '"Which brand of camera do you prefer?"', correct: false, feedback: 'A product question. You do not even know the areas yet.' },
      { text: '"What happened, which areas were hit, and what do you already have on site?"', correct: true, feedback: 'Exactly. Why, where, and what exists — the three questions that shape every other decision.' },
      { text: '"What is your budget?"', correct: false, feedback: 'Useful later, but as an opener it ends the conversation about needs before it starts.' },
    ],
  },
  {
    n: 3,
    beat: 'Site survey',
    stage: 'start',
    situation:
      'Samira walks you through the building: 3 office floors plus a 400 m² warehouse with a loading bay. There is an old 4-camera DVR, dead, in a cupboard.',
    question: 'What do you do during the walk?',
    choices: [
      { text: 'Listen carefully and tell her you will send a quote by email.', correct: false, feedback: 'You left with no facts. How long are the cable runs? Where is the rack? What power exists?' },
      { text: 'Walk with the checklist, mark positions on the floor plan, photograph each one, and measure the long runs.', correct: true, feedback: 'Perfect. Facts on paper beat memory every time — and the photos let you design from your desk.' },
      { text: 'Photograph the warehouse only — that is where the problem is.', correct: false, feedback: 'The loading bay and rear door are how things leave the building. The survey covers the whole journey.' },
    ],
  },
  {
    n: 4,
    beat: 'Define the scope',
    stage: 'plan',
    situation:
      'Back at the office you draft the offer. Samira mentioned the reception and the offices "would be nice to have covered too".',
    question: 'How do you handle the border of the project?',
    choices: [
      { text: 'Include everything she mentioned — it is easier than discussing it.', correct: false, feedback: 'Every included item you never priced is money lost. And you set the expectation that asking means getting.' },
      { text: 'Write two columns — included and not included — with the old DVR removal and electrical works clearly excluded, and send it for her confirmation.', correct: true, feedback: 'Correct. Both sides of the border, in writing, confirmed before starting. This one sheet prevents most later arguments.' },
      { text: 'Include the offices, but say nothing about removing the old DVR or electrical works.', correct: false, feedback: 'Silent exclusions become disputes. If it is not written as excluded, the customer will assume it is included.' },
    ],
  },
  {
    n: 5,
    beat: 'Break it into tasks',
    stage: 'plan',
    situation: 'Scope agreed: 16 cameras, a recorder, 2 switches, cabling, installation, configuration, testing, and user training.',
    question: 'What do you do next?',
    choices: [
      { text: 'Call the team and tell them to start Monday — you will direct them on site.', correct: false, feedback: 'No list means something is forgotten — usually testing or training, the two tasks nobody enjoys.' },
      { text: 'Write the task list: eleven tasks from site survey to handover, each small enough for one person to finish.', correct: true, feedback: 'Yes. One verb, one object, one owner later. The list is the project’s memory.' },
      { text: 'Order the cameras first, then figure out the rest.', correct: false, feedback: 'Equipment before tasks is how you buy the wrong quantities. The task list tells you what to order.' },
    ],
  },
  {
    n: 6,
    beat: 'Assign responsibilities',
    stage: 'plan',
    situation: 'Eleven tasks, three people available: Karim the engineer, Team A (two technicians), and Amel the coordinator.',
    question: 'How do you assign them?',
    choices: [
      { text: 'Put "the team" on the installation tasks — they will sort it out.', correct: false, feedback: '"The team" is nobody. Two technicians each assuming the other mounted the rear cameras is how a Friday becomes a Monday.' },
      { text: 'One name per task: Karim owns survey, configuration, and testing; Team A owns cabling and mounting; Amel owns training and documentation.', correct: true, feedback: 'Exactly right. One task, one name — even if the same person owns many tasks.' },
      { text: 'Assign everything to Karim because he is the most experienced.', correct: false, feedback: 'You have created a bottleneck and trained nobody. Karim cannot be on every ladder.' },
    ],
  },
  {
    n: 7,
    beat: 'List what you need',
    stage: 'plan',
    situation: 'You are checking the van before loading for the first site day.',
    question: 'What is on your checklist?',
    choices: [
      { text: 'Cameras, recorder, switches, cable — the big items.', correct: false, feedback: 'Missing connectors, labels, and a tester, the crew is back in the van at 4pm heading to a supplier.' },
      { text: 'All five categories: people, equipment, materials, tools, and documents — including the floor plan and the scope sheet.', correct: true, feedback: 'Perfect. Five categories, nothing forgotten — and the documents mean no argument about what was agreed.' },
      { text: 'Whatever fits in the van; you can buy the rest on site.', correct: false, feedback: 'Buying on site means paying retail, losing an hour, and disappointing the customer who is watching.' },
    ],
  },
  {
    n: 8,
    beat: 'Build the schedule',
    stage: 'plan',
    situation: 'Samira wants the system working before the stock check on 20 June. Today is 3 June.',
    question: 'How do you schedule it?',
    choices: [
      { text: 'Start everything Monday and see how it goes.', correct: false, feedback: '"See how it goes" means the recorder arrives the day after you needed it. Schedules exist to be checked, not hoped for.' },
      { text: 'Order the recorder today (2-week lead), schedule cabling in week 1 while it ships, and work backwards from 20 June with one buffer afternoon.', correct: true, feedback: 'Exactly. Long-lead items ordered on day one, dependency-respected sequence, and a buffer before the deadline.' },
      { text: 'Tell Samira 20 June is impossible and demand an extra month.', correct: false, feedback: 'Before planning? A professional sequences first, then reports honestly whether the date is achievable.' },
    ],
  },
  {
    n: 9,
    beat: 'Identify the risks',
    stage: 'plan',
    situation: 'The schedule is drawn. You have one week before site work starts.',
    question: 'What do you do with that week?',
    choices: [
      { text: 'Nothing — you will deal with problems when they appear.', correct: false, feedback: 'A risk with no response is a surprise waiting for the deadline.' },
      { text: 'Write the register: switches may be backordered, warehouse access is limited 09:00–11:00, the loading bay pallets may not be cleared — each with a response and an owner.', correct: true, feedback: 'Correct. A named owner and one response per risk. "Watch it" is not a response.' },
      { text: 'Call Samira and warn her that many things could go wrong.', correct: false, feedback: 'You transferred your anxiety without a plan. Bring responses, never just worries.' },
    ],
  },
  {
    n: 10,
    beat: 'Start the work',
    stage: 'do',
    situation: 'Monday morning, week 1. The crew is on site. The first cameras are going up.',
    question: 'What is your routine from today?',
    choices: [
      { text: 'Work hard all week and report at the end if there is time.', correct: false, feedback: 'By Friday, three small things have become one big thing — and Samira hears about it on the deadline.' },
      { text: 'A two-minute morning checkpoint on status, and a one-paragraph daily report with two photos sent to Samira.', correct: true, feedback: 'Exactly. Two minutes a day, one paragraph with photos. Samira never has to call to ask how it is going.' },
      { text: 'Wait for Samira to call you for an update.', correct: false, feedback: 'Silence breeds doubt. A customer who has to chase you assumes the worst.' },
    ],
  },
  {
    n: 11,
    beat: 'INJECT — the supplier delay',
    stage: 'do',
    inject: true,
    situation:
      'Envelope 1, opened Tuesday of week 2: the supplier calls — the recorder will arrive 5 days late, the day after your planned configuration day. You promised Samira a working system on 18 June.',
    question: 'What do you do first?',
    choices: [
      { text: 'Say nothing, keep mounting cameras, and hope the schedule absorbs it.', correct: false, feedback: 'Samira planned the stock check around the 18th. She finds out on the day nothing works — when nothing can be done.' },
      { text: 'Call Samira today, keep the crew on cabling and mounting, re-plan testing around the new delivery, and confirm a revised date while it is still cheap to move things.', correct: true, feedback: 'Correct. You bring the problem and the solution together, the crew keeps productive, and the trust survives because you told her immediately.' },
      { text: 'Cancel the order and buy whatever recorder is cheapest and in stock.', correct: false, feedback: 'A different recorder may not support 16 channels or the storage she needs. You would trade a delay for a defect.' },
    ],
  },
  {
    n: 12,
    beat: 'INJECT — the customer change',
    stage: 'do',
    inject: true,
    situation:
      'Envelope 2, opened Wednesday: Samira walks in while Team A is finishing the warehouse cameras. "Since you’re here — can you add four cameras in the rear corner? Same thing, you’re already on site."',
    question: 'What do you say?',
    choices: [
      { text: '"Sure, no problem" — and install them that afternoon.', correct: false, feedback: 'You donated four cameras and a day of labour. Free work, done, can never be invoiced without a fight.' },
      { text: '"Of course — let me write it down. Four cameras plus cabling and configuration, about one extra day. I’ll send you the price this evening, and we start once you sign it."', correct: true, feedback: 'The script, word for word. Warm, professional, paid — and Samira respects it because it is how real companies work.' },
      { text: '"No, that is not in the contract."', correct: false, feedback: 'Technically right and commercially wrong. She is happy to pay; you just refused the work and cooled the relationship.' },
    ],
  },
  {
    n: 13,
    beat: 'Report progress',
    stage: 'check',
    situation: 'Friday lunchtime, week 2. You sit down to write the weekly report.',
    question: 'What must the report contain?',
    choices: [
      { text: 'A list of everything that went well this week.', correct: false, feedback: 'A report that hides the blocked cameras is not a report — it is a brochure. Samira needs the red items.' },
      { text: 'Progress, what is complete, what is blocked, risks, next week — and the one decision you need from Samira, with its effect on time and price.', correct: true, feedback: 'Exactly. The last line is the most valuable: it forces the decision that moves the project forward.' },
      { text: 'A single line: "All on track."', correct: false, feedback: 'With two blocked positions and a slipped recorder, "all on track" is not optimism — it is a lie.' },
    ],
  },
  {
    n: 14,
    beat: 'Test the system',
    stage: 'check',
    situation: 'The recorder arrived and is configured. All 16 cameras are mounted and showing images.',
    question: 'How do you finish?',
    choices: [
      { text: 'Tell Samira the system is live and send the invoice.', correct: false, feedback: 'Untested is unfinished. One camera at the wrong angle becomes her problem — and your warranty visit.' },
      { text: 'Run the test list with Samira beside you: image per camera, recording, playback, storage, remote viewing, logins — and get it signed.', correct: true, feedback: 'Correct. Let her press the buttons: she learns the system and accepts the result at the same time. The signature ends the argument before it starts.' },
      { text: 'Test it yourself quickly in the morning and email her the results.', correct: false, feedback: 'A test the customer never saw is a test the customer can dispute. Acceptance needs a witness.' },
    ],
  },
  {
    n: 15,
    beat: 'Prepare the handover',
    stage: 'finish',
    situation: 'Testing passed. Handover day is tomorrow.',
    question: 'What do you assemble tonight?',
    choices: [
      { text: 'The invoice — the customer has everything else they need.', correct: false, feedback: 'If you keep the passwords, the project is not finished, it is paused. And you will be on the phone next week.' },
      { text: 'The handover folder: serial numbers, sealed passwords, two instruction pages, signed tests, warranty, maintenance schedule, support contact.', correct: true, feedback: 'Exactly — and hand it physically, then train the receptionist who will actually use it, not the manager who never will.' },
      { text: 'A quick email summarising what was installed.', correct: false, feedback: 'Passwords in an email, no signed tests, no warranty sheet. The folder is what closes the project properly.' },
    ],
  },
  {
    n: 16,
    beat: 'Close the project',
    stage: 'finish',
    situation: 'The folder is handed over. The system is accepted. The team is tired but proud.',
    question: 'What is the last thing you do?',
    choices: [
      { text: 'Move everyone to the next project — there is no time for ceremony.', correct: false, feedback: 'An unclosed project is still consuming attention: invoice unsent, retention unrecorded, lessons unwritten.' },
      { text: 'Close it: send the final invoice, record the 10% retention in the calendar, and hold a 20-minute team talk to write three specific lessons for the next project.', correct: true, feedback: 'Perfect closure. The invoice is sent, the money is tracked, and "order the recorder the day the contract is signed" becomes company knowledge — not one team’s memory.' },
      { text: 'Call Samira to ask if there is anything else she needs.', correct: false, feedback: 'A friendly call, but it is not closure. The invoice and the lessons are what actually finish the project.' },
    ],
  },
];
