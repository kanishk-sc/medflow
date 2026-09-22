import { Building2, Calendar, Github, Mic } from 'lucide-react';

const concepts = [
  {
    icon: Calendar,
    title: 'Scheduling workspace',
    description:
      'A visual concept for coordinating appointments, rooms, and reminders from one administrative queue.',
    previewLabel: 'Synthetic schedule preview',
    preview: (
      <div className="space-y-3" aria-hidden="true">
        <div className="h-3 rounded bg-blue-200" />
        <div className="h-3 w-2/3 rounded bg-blue-200" />
        <div className="h-3 w-5/6 rounded bg-blue-200" />
      </div>
    ),
  },
  {
    icon: Mic,
    title: 'Conversation notes',
    description:
      'A static mock-up of how a transcript could be organized for review; no audio is recorded or processed.',
    previewLabel: 'Synthetic transcript preview',
    preview: (
      <div className="space-y-4" aria-hidden="true">
        <div>
          <div className="mb-2 h-2 w-16 rounded bg-slate-300" />
          <div className="h-2 rounded bg-slate-200" />
        </div>
        <div>
          <div className="mb-2 h-2 w-20 rounded bg-slate-300" />
          <div className="h-2 w-4/5 rounded bg-slate-200" />
        </div>
      </div>
    ),
  },
  {
    icon: Building2,
    title: 'Operations overview',
    description:
      'A dashboard concept for surfacing room, staff, and reporting status without connecting to hospital systems.',
    previewLabel: 'Synthetic operations preview',
    preview: (
      <div className="grid grid-cols-[auto_1fr] items-center gap-4" aria-hidden="true">
        <Building2 className="h-10 w-10 text-slate-700" />
        <div className="space-y-3">
          <div className="h-3 rounded bg-emerald-200" />
          <div className="h-3 w-3/4 rounded bg-violet-200" />
          <div className="h-3 w-5/6 rounded bg-amber-200" />
        </div>
      </div>
    ),
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#faf9f3] text-slate-950">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <span className="font-serif text-xl font-bold">MedFlow</span>
        <span className="rounded-full border border-emerald-900/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-950">
          Interface prototype
        </span>
      </header>

      <main id="main-content" className="mx-auto max-w-7xl px-6 pb-20 pt-12">
        <section className="mx-auto max-w-4xl text-center" aria-labelledby="hero-title">
          <p className="mb-5 font-mono text-sm font-semibold uppercase tracking-[0.16em] text-emerald-900">
            Non-clinical concept · synthetic previews
          </p>
          <h1 id="hero-title" className="font-serif text-6xl leading-none sm:text-7xl lg:text-8xl">
            <span className="inline-block rounded-2xl bg-[#004d49] px-4 py-2 text-white">MedFlow</span>
          </h1>
          <h2 className="mt-7 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Exploring calmer administrative workflows for care teams
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-700">
            MedFlow is a front-end prototype for scheduling, note organization, and hospital operations.
            It uses no patient data, provides no medical advice, and is not connected to clinical systems.
          </p>
          <a
            className="mt-8 inline-flex items-center gap-2 rounded-lg border-2 border-slate-950 bg-white px-5 py-3 font-semibold transition hover:bg-slate-100"
            href="https://github.com/kanishk-sc/medflow"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
            View source
          </a>
        </section>

        <section className="mt-24" aria-labelledby="concepts-title">
          <div className="mb-8 max-w-2xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-emerald-900">Concept areas</p>
            <h2 id="concepts-title" className="mt-2 font-serif text-3xl sm:text-4xl">Three static workflow explorations</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {concepts.map(({ icon: Icon, title, description, previewLabel, preview }) => (
              <article key={title} className="flex flex-col rounded-2xl border border-slate-900/15 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <Icon className="h-6 w-6 text-emerald-900" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <p className="leading-relaxed text-slate-700">{description}</p>
                <div className="mt-7 flex flex-1 items-center rounded-xl bg-[#004d49] p-6">
                  <div className="w-full rounded-xl bg-white p-5 shadow-lg">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-500">{previewLabel}</p>
                    {preview}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="mt-12 rounded-xl border border-amber-700/25 bg-amber-50 p-5 text-sm leading-relaxed text-amber-950">
          <strong>Prototype scope:</strong> Every screen on this page is illustrative and uses synthetic placeholders. Authentication,
          voice capture, AI agents, integrations, persistence, and clinical validation are not implemented.
        </aside>
      </main>

      <footer className="border-t border-slate-900/15 px-6 py-8 text-center text-sm text-slate-600">
        MedFlow is a portfolio prototype, not a medical device or production healthcare service.
      </footer>
    </div>
  );
}

export default App;
