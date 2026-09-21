/*
 * Alpha Shift — Home page content
 * ---------------------------------
 * BODY COPY IS VERBATIM from the approved Website Working Book (the source of truth).
 * Do not rewrite it into website language.
 *
 * The only non-Working-Book strings are small DESIGN LABELS (marked "// label"):
 * the mono eyebrows above sections and the "It could be —" lead into the chips.
 * These are UI furniture, not marketing copy — flag if you'd like them changed/removed.
 *
 * "Html" fields may carry light inline emphasis:
 *   <em>…</em>            → reflective serif italic
 *   <span class="serif">…</span> → serif italic word
 *   <span class="o">…</span> → Alpha Shift orange (used sparingly)
 */

export const brand = {
  name: 'Alpha Shift',
  tagline: 'Shift Thinking · Shape Success',
  line: 'Shift Thinking. Shape Success.',
};

export const nav = [
  { label: 'About', href: '#look' },
  { label: 'How we work', href: '#work' },
  { label: 'Meet Chetan', href: '#chetan' },
];

export const hero = {
  kicker: 'Alpha Shift',
  kickerLine: 'Shift Thinking. Shape Success.',
  headBefore: 'Something on your ',
  headAccent: 'mind',
  headAfter: '?',
  ledeHtml:
    'Something you’re thinking about. A problem you’re trying to solve. A conversation you’re not quite sure how to have. Or perhaps just a feeling that <em>something needs to move.</em>',
  chipsLead: 'It could be —', // label (frames the three approved possibilities as chips)
  // "It could be a conversation. A different perspective. A small decision." — verbatim, as chips.
  // The three possibilities carry the three brand pastels (orange stays reserved for CTA / highlights).
  chips: [
    { key: 'y', color: 'var(--yellow)', label: 'a conversation' },
    { key: 'l', color: 'var(--lavender)', label: 'a different perspective' },
    { key: 'g', color: 'var(--green)', label: 'a small decision' },
  ],
  ctas: [
    { label: 'Let’s explore', href: '#explore', style: 'primary', arrow: true },
    { label: 'How we work', href: '#work', style: 'ghost', arrow: false },
  ],
};

export const look = {
  eyebrow: 'A different way of looking', // label
  accentHtml: 'You don’t necessarily know what it is. <span class="o">And that’s okay.</span>',
  paras: [
    'Sometimes, you already know enough. Yet there’s still a missing piece. Something you can’t quite put your finger on.',
  ],
  softHtml: 'Or simply seeing something you thought you knew in a different way.',
  sketch: {
    src: '/sketches/river-crossing.jpeg',
    alt: 'A person crosses a river using boulders — the known ones dark, three coloured ones the possible next moves: a conversation, a different perspective, a small decision.',
    caption: 'Sketchnote', // label
    tilt: 'left' as const,
    panel: 'warm' as const,
    swatches: ['var(--orange)', 'var(--lavender)', 'var(--green)'],
  },
};

export const shift = {
  band: {
    label: 'Where the shift begins', // label
    headBefore: 'Make the ',
    headSerif: 'shift',
    subHtml:
      'Maybe it starts with a better question. Or a clearer observation. Perhaps you see a possibility you hadn’t considered. Perhaps you decide to do something differently. <span class="serif">And that’s where the shift begins.</span>',
  },
  row: {
    eyebrow: 'Make the shift', // label
    lead: 'Not everything needs a new plan. Sometimes, it needs a new way of looking at the old one.',
    accentHtml:
      'A thought becomes a possibility. A possibility becomes a decision. <span class="o">A decision becomes action.</span>',
    soft: 'Small shifts can change what happens next.',
    sketch: {
      src: '/sketches/thought-to-action.jpeg',
      alt: 'A person is thinking; the thought becomes a light bulb; then the person runs holding the bulb — something is done with the insight.',
      caption: 'Sketchnote', // label
      tilt: 'right' as const,
      panel: 'cool' as const,
    },
  },
};

export const manifesto = {
  headHtml: 'That’s what <span class="o">Alpha Shift</span> is about.',
  para: 'Creating the space to explore. To think differently. To see more clearly. To find what matters. And then to do something about it.',
};

export const work = {
  eyebrow: 'How we work',
  headHtml: 'We start <span class="serif">where you are.</span>',
  items: [
    'It might begin with a conversation.',
    'It might be a workshop that gets people thinking and doing.',
    'It might be a deeper journey with a leader, a team or an organisation.',
    'Or it might be something we haven’t put into a box yet.',
  ],
};

export const chetan = {
  eyebrow: 'Meet Chetan', // label
  heading: 'I’m Chetan.',
  para: 'I’ve spent my career moving between banking, fintech, marketing, education and business. Different industries. Different challenges. Different people.',
  constant: 'One thing has stayed constant:',
  soft: 'That’s the thinking behind Alpha Shift.',
  link: { label: 'Meet Chetan', href: '#chetan' },
  // Placeholder card until real founder photography is supplied (per brief).
  portrait: {
    mark: 'Chetan · Alpha Shift',
    quoteHtml:
      'Good answers don’t always come from knowing more. <span class="serif">Sometimes they come from looking differently.</span>',
    tags: 'Banking · Fintech · Marketing · Education · Business',
  },
};

export const closing = {
  headBefore: 'Ready to ',
  headSerif: 'explore',
  headAfter: '?',
  para: 'You don’t need to have it figured out. Bring the question. Bring the challenge. Bring the half-formed thought. We’ll start there.',
  cta: { label: 'Let’s explore', href: '#explore' },
};

export const footer = {
  // Verbatim from the Working Book (Chetan page) — the site's closing voice.
  copyHtml:
    'Sometimes the most useful thing we can do is <span class="o">look again</span> — at the situation, at the possibilities, and at ourselves.',
  links: [
    { label: 'A different way of looking', href: '#look' },
    { label: 'How we work', href: '#work' },
    { label: 'Meet Chetan', href: '#chetan' },
    { label: 'Let’s explore', href: '#explore' },
  ],
  copyright: '© 2026 Alpha Shift · Shift Thinking. Shape Success.',
};
