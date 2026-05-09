import { resumeContent } from '../data/resumeContent';

const ui = resumeContent.ui;
const shared = resumeContent.shared;

export default function Certifications() {
  const stats = shared.stats ?? [];

  return (
    <section id='stats' className='w-screen h-screen flex-shrink-0 overflow-hidden'>
      <div className='flex h-full flex-col justify-center px-4 py-6 sm:px-8 md:px-12 lg:px-16 lg:py-20'>
        <div className='section-kicker self-start'>{ui.sections.stats}</div>

        <div className='grid max-h-[26rem] min-h-0 flex-1 grid-cols-5 grid-rows-2 gap-2 sm:gap-3'>
          {stats.map((stat) => (
            <article
              key={stat.label}
              className='flex h-full min-h-0 max-h-[200px] flex-col justify-between overflow-hidden rounded-[1.1rem] border border-[rgba(184,149,42,0.28)] bg-[rgba(255,255,255,0.02)] p-3 transition-colors duration-200 hover:border-[color:var(--gold)] sm:p-4'
            >
              <div className='font-[var(--font-serif)] text-4xl font-bold leading-none tracking-[-0.04em] text-[var(--paper)]'>
                {new Intl.NumberFormat('en-US').format(stat.value) + stat.suffix}
              </div>
              <div className='mt-1 break-words font-[var(--font-mono)] text-[10px] uppercase leading-4 tracking-widest text-[var(--muted)]'>
                {stat.label}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
