/*
 * PAGE 3 — PROGRAMMES  (copy kept handy; page NOT built yet)
 * Verbatim from the Website Working Book. Seven sketchnote-led cards + crisp overlays.
 *
 * Interaction (agreed): CARD (name + one-line promise + sketchnote + "Take a closer look →")
 *   → OVERLAY (recognition line + a little more meaning + Try This + depth + "Let's explore →").
 * The sketchnote is NOT repeated inside the overlay. Two invitations, two jobs:
 *   "Take a closer look" = curious about this programme · "Let's explore" = take it further.
 */

export const depthLine =
  'Choose the depth: 60 mins — Open it up · 180 mins — Work it through · 360 mins — Make it usable.';

export interface Programme {
  no: string;
  name: string;
  promise: string; // card one-liner
  sketchnote: string; // drawing direction (not shown as copy)
  overlay: {
    recognition: string;
    meaning: string[];
    tryThis: string[];
    note?: string;
  };
}

export const programmes: Programme[] = [
  {
    no: '01',
    name: 'THINK BETTER',
    promise: 'See possibilities. Solve better problems.',
    sketchnote:
      'Person asking “What else?” with visibly different thought paths / ways of approaching the situation. Keep it simple enough to read at card size.',
    overlay: {
      recognition: 'Keep coming back to the same answer? Or wondering if there’s another way?',
      meaning: [
        'More ways to approach a real situation.',
        'Beyond the obvious.',
        'Sideways.',
        'Logically.',
        'Through better questions.',
        'Not more thinking. More ways to think.',
      ],
      tryThis: ['Got an answer?', 'Ask “What else?”', 'Then ask it again.'],
    },
  },
  {
    no: '02',
    name: 'COMMUNICATE CONFIDENTLY',
    promise: 'Be clear. Be heard. Have the conversations that matter.',
    sketchnote:
      'Same person in three phases: mixed symbols / clutter → unnecessary symbols crossed out in red → clean speech bubble with aligned letters/numbers. Progression is clutter → selection → clarity.',
    overlay: {
      recognition: 'Got something important to say — but not quite sure how to say it?',
      meaning: [
        'Know what matters.',
        'Find the words.',
        'Say what you mean — clearly and confidently.',
        'Clarity before confidence.',
      ],
      tryThis: ['Before an important conversation, ask:', 'What do I really want them to understand?', 'Start there.'],
    },
  },
  {
    no: '03',
    name: 'STORYTELLING',
    promise: 'Turn ideas into stories people remember.',
    sketchnote:
      'Loose two-part visual. “Keep an eye on the target.” → eye + target. “The sun sets between the mountains.” → the listener visualises the scene. Core idea: Words → Picture → Memory.',
    overlay: {
      recognition: 'Have something worth sharing — and want people to remember it?',
      meaning: [
        'Find the story in what you want to say.',
        'Give it shape.',
        'Use words that help people see it.',
        'Make the point worth remembering.',
      ],
      tryThis: ['Think of something you need to explain.', 'Instead of asking:', '“What do I want to say?”', 'Ask:', '“What do I want them to see?”'],
    },
  },
  {
    no: '04',
    name: 'OWNING THE ROLE',
    promise: 'Step up. Take charge. Create movement.',
    sketchnote:
      'Two moments with the same person. First: the person steps up. Second: the same person is helped higher by someone already on the podium. The assisting person is Alpha Shift orange. Support, not rescue.',
    overlay: {
      recognition: 'Stepping into more responsibility — without necessarily feeling completely ready?',
      meaning: [
        'Step into the responsibility you’ve been given — or chosen to take on.',
        'Understand what the role now asks of you.',
        'Use what you already bring.',
        'You don’t have to have it all figured out to step up.',
      ],
      tryThis: ['Ask:', 'What does this role need from me now?', 'And:', 'What am I already bringing to it?'],
    },
  },
  {
    no: '05',
    name: 'PEAK PERFORMANCE',
    promise: 'Understand your mind. Access its power.',
    sketchnote:
      'Performance dials / controls. The point is not maximum on every dial, but the right combination for the moment — the state that enables best performance. Show optimum rather than maximum.',
    overlay: {
      recognition: 'Ever had days when everything just seems to click — and others when it doesn’t?',
      meaning: [
        'Your best performance isn’t always about trying harder.',
        'Notice what brings out your best.',
        'Understand the state you’re in.',
        'Learn how to find your way back to it.',
        'Your best is already something you’ve experienced.',
      ],
      tryThis: ['Think of a time when you were really good at what you were doing.', 'What was different about you in that moment?'],
    },
  },
  {
    no: '06',
    name: 'NAVIGATE UNCERTAINTY',
    promise: 'Not sweating over the future.',
    sketchnote:
      'OPEN VISUAL. Should communicate: “I don’t know exactly what’s ahead, but I can still decide what to do next.” Avoid Home’s stepping-stone/boulder territory. (Final concept still open.)',
    overlay: {
      recognition: 'Spending too much time worrying about what might happen next?',
      meaning: [
        'We can’t know everything that’s coming.',
        'But we can notice what’s happening now.',
        'Separate what we can influence from what we can’t.',
        'And find a useful next step.',
        'You don’t need to know what happens next to decide what you do next.',
      ],
      tryThis: ['Ask yourself:', 'What do I know?', 'What can I influence?', 'What can I do next?'],
      note: 'Public-facing copy deliberately avoids the word “anxiety” (not positioned as clinical treatment).',
    },
  },
  {
    no: '07',
    name: 'PERSONAL BRANDING',
    promise: 'Show up with clarity. Be remembered for what matters.',
    sketchnote:
      'A few footsteps lead towards a podium. A person stands on the podium in a spotlight and speaks through a megaphone. Speech / connection / digital-platform symbols emerge. Keep the journey visible without making it corporate.',
    overlay: {
      recognition: 'Do people know what you bring — and what you’d like to be known for?',
      meaning: [
        'There’s probably more to you than the part people usually see.',
        'Things you’re good at.',
        'Things you’ve done.',
        'Things you know about.',
        'Things you care about.',
        'And perhaps a few things people wouldn’t expect.',
        'It’s all part of you.',
        'The question is how you let people discover it — in person and online.',
      ],
      tryThis: ['What are three things about you that are worth knowing?', 'Are you giving people a chance to discover them?'],
    },
  },
];
