/*
 * PAGE 5 — LET'S EXPLORE  (copy kept handy; page NOT built yet)
 * Verbatim from the Website Working Book. LOCKED contact/conversation page; Topmate route.
 * Must work for someone who followed the whole site AND someone who arrived directly.
 * Two easy routes: tell us what's on your mind, or book a conversation. Email + LinkedIn
 * remain available. Do NOT require a programme selection. Keep the form short.
 */

export const explore = {
  intro: [
    'Something on your mind?',
    'You don’t need to have it all figured out.',
    'Maybe it’s something you want to work through.',
    'Something you’d like to do differently.',
    'An idea you want to explore.',
    'Or perhaps you’re not quite sure yet.',
    'That’s okay.',
  ],
  form: {
    heading: 'Start with a conversation.',
    lead: 'Tell me a little about what’s on your mind.',
    fields: [
      { label: 'Name', type: 'text' },
      { label: 'Email', type: 'email' },
      { label: 'What would you like to explore?', type: 'textarea' },
    ],
    submit: 'Let’s explore →',
  },
  booking: {
    heading: 'Or, find a time that works.',
    lead: 'If you’d rather get straight to a conversation, choose a time and we’ll take it from there.',
    cta: 'Book a conversation →',
    integration: '[Topmate booking integration / link]',
  },
  direct: {
    heading: 'Prefer to reach out directly?',
    email: '[Alpha Shift email]',
    linkedin: '[LinkedIn profile]',
  },
  reassurance: [
    'That’s it.',
    'No elaborate intake form.',
    'No need to choose a programme before we’ve spoken.',
    'We’ll start where you are.',
  ],
};
