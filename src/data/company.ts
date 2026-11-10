/**
 * Company content: every claim on the site comes from here, so copy changes
 * happen in one place. Outside figures carry a source in `sources`.
 */

export const hero = {
  eyebrow: 'Research-first AI company',
  title: 'We experiment first.',
  titleAccent: 'Then we drop it for you.',
  lede: 'AgentDrops builds agentic products, voice agents and custom software. Every one starts as an experiment in our lab, tested against real conditions, before a line of production code is written for you.',
  primary: { label: 'Start with an experiment', href: '/contact/' },
  secondary: { label: 'See how the lab works', href: '/lab/' },
};

/** The industry numbers behind the research-first approach. */
export const problem = {
  eyebrow: 'Why research first',
  title: 'AI has a production problem, not a model problem.',
  lede: 'Most AI projects go straight from a demo to a deadline. The step in between, the one that answers whether it works, is the step that gets skipped.',
  stats: [
    {
      value: '88%',
      label: 'of enterprise AI proofs of concept never reach wide deployment.',
      source: 'IDC with Lenovo, via CIO.com, 2025',
    },
    {
      value: '40%+',
      label: 'of agentic AI projects are expected to be canceled by the end of 2027.',
      source: 'Gartner, 2025',
    },
  ],
  close:
    'None of those failures is about the model being too weak. They come from questions nobody asked first: what does success look like, where does it break, what does each task cost, and what happens when it goes wrong. We answer those before we build. That is the whole company.',
};

export type ServiceIcon = 'bot' | 'voice' | 'code' | 'flask' | 'workflow';

export interface Service {
  slug: string;
  icon: ServiceIcon;
  name: string;
  short: string;
  summary: string;
  points: string[];
  note?: string;
}

export const services: Service[] = [
  {
    slug: 'agentic-products',
    icon: 'bot',
    name: 'Agentic products',
    short: 'Agents that take a goal and finish real work.',
    summary:
      'AI agents that take a goal, use your tools and data, and complete real work. Not chatbots with ambitions.',
    points: [
      'Multi-step agents for operations, support, sales, finance and internal workflows',
      'Tool use and integrations with your CRM, ERP, ticketing, databases and APIs',
      'Multi-agent orchestration for work that spans teams and systems',
      'Guardrails, permission scopes, human approval and kill switches by default',
      'Evaluation suites that prove an agent does the job before it gets write access',
    ],
  },
  {
    slug: 'voice-agents',
    icon: 'voice',
    name: 'Voice agents',
    short: 'Phone and in-app agents that hold a real conversation.',
    summary:
      'Voice agents that answer, qualify, book and follow up, and know when to hand the call to a person.',
    points: [
      'Inbound and outbound calling: support, booking, qualification, reminders',
      'End-to-end latency designed and measured against natural turn-taking',
      'Interruption handling, end-of-turn detection and graceful hand-off',
      'Multilingual and accent-aware conversations',
      'Telephony and contact-centre integration, call analytics and QA',
    ],
    note: 'People answer each other in under about 300 ms. We measure our voice agents against that bar, not against a demo.',
  },
  {
    slug: 'custom-software',
    icon: 'code',
    name: 'Custom software',
    short: 'When the answer is software, not an agent.',
    summary:
      'Web platforms, internal tools, mobile apps and APIs, built on modern typed stacks your team can own.',
    points: [
      'Web platforms, internal tools, dashboards and portals',
      'Mobile apps',
      'APIs, data pipelines and integrations',
      'AI features embedded into products you already run',
      'Typed, tested and documented, built to be maintained by your team',
    ],
  },
  {
    slug: 'applied-research',
    icon: 'flask',
    name: 'Applied research',
    short: 'Know whether it works before you commit.',
    summary:
      'Feasibility sprints, model evaluations and prototypes for teams that need evidence before a budget.',
    points: [
      'Feasibility sprints: can this be done with today’s models, at what quality and cost?',
      'Model and vendor evaluation on your data and your tasks',
      'Evaluation design: the test sets and success metrics your system will be judged by',
      'Prototypes, with a written report of what worked, what didn’t and why',
    ],
  },
  {
    slug: 'automation',
    icon: 'workflow',
    name: 'AI automation',
    short: 'Connect the tools you already use.',
    summary:
      'Workflow automation, document AI and retrieval over your own knowledge, with monitoring once it is live.',
    points: [
      'Workflow automation across the tools you already use',
      'Document processing, extraction and classification',
      'Retrieval (RAG) over your knowledge base, built for accuracy and speed',
      'Monitoring and observability for AI systems already in production',
    ],
  },
];

/** Lab to Drop: the method every project follows. */
export const method = {
  eyebrow: 'How we work',
  title: 'From lab to drop, in six steps.',
  lede: 'Every project follows the same path. If the experiments say an idea will not work, you hear it at step three, before you have paid for a build.',
  steps: [
    {
      n: '01',
      name: 'Question',
      body: 'We define the job, the user and what success means, in numbers.',
      out: 'A one-page brief with success criteria',
    },
    {
      n: '02',
      name: 'Experiment',
      body: 'We test models, prompts, tools and architectures against real cases and edge cases.',
      out: 'An experiment log of what we tried and measured',
    },
    {
      n: '03',
      name: 'Evidence',
      body: 'We show you accuracy, latency, cost per task and failure modes.',
      out: 'A go or no-go decision, made on data',
    },
    {
      n: '04',
      name: 'Build',
      body: 'We build the production version on the approach the evidence picked.',
      out: 'Working software, tested and reviewed',
    },
    {
      n: '05',
      name: 'Drop',
      body: 'We release it into your business with monitoring, guardrails and a rollback plan.',
      out: 'A live product, not a pilot',
    },
    {
      n: '06',
      name: 'Measure',
      body: 'We track it against the criteria from step one and keep improving it.',
      out: 'Ongoing reports and iterations',
    },
  ],
  closer: 'A fast “no” is a result too.',
};

export const differentiators = [
  {
    title: 'Research is the first deliverable',
    body: 'You see the experiments, not just the demo. The log is yours to keep.',
  },
  {
    title: 'Success criteria before code',
    body: 'Every project starts with how it will be measured, agreed in writing.',
  },
  {
    title: 'Built for production, not pilots',
    body: 'We design for the small share of AI projects that ship, from day one.',
  },
  {
    title: 'Safe by default',
    body: 'Least-privilege access, human approval on risky actions, audit logs and kill switches are part of the build.',
  },
  {
    title: 'Model-agnostic',
    body: 'We use the model the evidence picks, and switch when a better one arrives.',
  },
  {
    title: 'You own everything',
    body: 'Code, prompts, evaluation sets and documentation belong to you.',
  },
];

/** The fields every experiment record carries. Shown as a format, not as results. */
export const experimentRecord = {
  id: 'EXP-000',
  title: 'Voice booking agent: turn latency',
  fields: [
    { k: 'Question', v: 'Can a voice agent book appointments without callers noticing a delay?' },
    {
      k: 'Success',
      v: 'p95 end-to-end turn latency under 800 ms; booking completed without a human',
    },
    { k: 'Variables', v: 'Speech models, LLM, streaming strategy, end-of-turn detection' },
    { k: 'Test set', v: 'Recorded real-world calls, including interruptions and background noise' },
    { k: 'Kill rule', v: 'If the target is missed on every configuration, we stop and report' },
  ],
  verdict: 'Drop only if the success line holds',
};

export const researchAreas = [
  {
    name: 'Agent reliability',
    question: 'What makes an agent a colleague you can trust with write access?',
    body: 'Planning, tool use, recovery from its own mistakes, and the guardrails that keep it inside the lines.',
  },
  {
    name: 'Voice and conversation',
    question: 'Can a voice agent follow a real conversation, interruptions and all?',
    body: 'Latency budgets, end-of-turn detection, barge-in and hand-off to a person.',
  },
  {
    name: 'Evaluation',
    question: 'How do you know it will behave in production?',
    body: 'Test sets built from real cases, regression checks in CI and metrics that match the business goal.',
  },
  {
    name: 'Cost and speed',
    question: 'What does each task cost, and how fast can it run?',
    body: 'Model routing, caching and architecture choices measured per task, not per demo.',
  },
];

export const labRules = [
  'Every experiment states its question and success line before it runs.',
  'Every experiment has a kill rule, and we follow it.',
  'Failed experiments are recorded and reported, not hidden.',
  'Results are measured on real cases, not on hand-picked examples.',
];

export const principles = [
  { title: 'Experiment before you build.', body: 'The lab comes first. Always.' },
  {
    title: 'Measure what matters.',
    body: 'Accuracy, latency, cost and outcomes. Not impressions.',
  },
  { title: 'Say what doesn’t work.', body: 'Honest results beat impressive demos.' },
  { title: 'Ship real things.', body: 'A product in use beats a pilot in a slide deck.' },
  {
    title: 'Keep humans in charge.',
    body: 'Agents act on your behalf, inside limits you set.',
  },
];

export const audiences = [
  { name: 'Startups', body: 'Turning an AI idea into a product people pay for.' },
  { name: 'Growing businesses', body: 'Automating operations, support and sales.' },
  {
    name: 'Enterprises',
    body: 'Agents and voice systems that pass security and compliance review.',
  },
  { name: 'Product teams', body: 'Adding AI features to software they already run.' },
];

export const faq = [
  {
    q: 'What does “research-first” mean in practice?',
    a: 'Before we build anything, we run short experiments on your real cases: which models work, how fast, at what cost and where they fail. You get the results and a go or no-go recommendation before any production build starts.',
  },
  {
    q: 'What if the experiments say it won’t work?',
    a: 'Then we tell you, with the data, and you have spent a fraction of a build budget to find out. A fast “no” saves months.',
  },
  {
    q: 'Which models and platforms do you use?',
    a: 'Whichever the evidence picks for your task. We are model-agnostic and work across the major model providers and open models, and we design so you can switch later.',
  },
  {
    q: 'Who owns the code and the data?',
    a: 'You do. Code, prompts, evaluation sets and documentation are handed over, and your data is only used for your project.',
  },
  {
    q: 'How do you keep agents safe?',
    a: 'Least-privilege access, human approval for risky actions, audit logs, rate limits and a kill switch are part of every agent we ship, not an add-on.',
  },
  {
    q: 'Can you work with our existing systems?',
    a: 'Yes. Most of our work connects to tools you already run: CRMs, ERPs, ticketing, telephony, databases and internal APIs.',
  },
];

export const story = {
  eyebrow: 'Company',
  title: 'Researchers who ship.',
  paragraphs: [
    'AgentDrops is a research-first AI company. We build agentic products, voice agents and custom software, and we test every idea in our lab before we build it for you.',
    'We started from a simple observation: most AI projects fail between the demo and production, and they fail for reasons that could have been found in a week of honest experiments. So we made those experiments the first thing we do.',
    'What survives the lab is what we build. What we build, we drop: released into your business as a working product, with the evidence that it works.',
  ],
  name: {
    title: 'Why “AgentDrops”',
    body: 'An agent acts on your behalf. A drop is a release that has earned its way out of the lab. Put together, that is the promise: agents and software that arrive working, because they were proven first.',
  },
};

export const cta = {
  title: 'Bring us the idea. We’ll bring the evidence.',
  body: 'Tell us what you want to build. We will tell you how we would test it, and what a first experiment would show.',
  label: 'Start a conversation',
  href: '/contact/',
};

export const sources = [
  {
    label:
      'CIO.com, 25 March 2025: IDC and Lenovo research finds 88% of AI proofs of concept never reach wide deployment',
    href: 'https://www.cio.com/article/3850763/88-of-ai-pilots-fail-to-reach-production-but-thats-not-all-on-it.html',
  },
  {
    label: 'Gartner, 25 June 2025: over 40% of agentic AI projects will be canceled by end of 2027',
    href: 'https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027',
  },
  {
    label: 'Human conversational turn-taking, Journal of Cognition, 2023',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10077995/',
  },
];

/** The person behind AgentDrops, shown on the contact page. */
export const founder = {
  name: 'Anantha Narayanan',
  role: 'Founder, AgentDrops',
  intro: 'Prefer to talk to a person? Reach me directly on any of these.',
  links: [
    { kind: 'email', label: 'Email', handle: 'ananthanarayanan431@gmail.com' },
    { kind: 'github', label: 'GitHub', handle: 'ananthanarayanan431' },
    { kind: 'linkedin', label: 'LinkedIn', handle: 'rananthanarayananofficial' },
  ],
} as const;

/** Where each kind of profile link points. */
export const profileHref = {
  email: (h: string) => `mailto:${h}`,
  github: (h: string) => `https://github.com/${h}`,
  linkedin: (h: string) => `https://www.linkedin.com/in/${h}/`,
};
