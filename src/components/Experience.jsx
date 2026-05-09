import { useState } from 'react';
import { resumeContent } from '../data/resumeContent';

const ui = resumeContent.ui;
const shared = resumeContent.shared;

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);
  const rows = shared.experience ?? [];
  const activeItem = openIndex === null ? null : rows[openIndex] ?? null;

  return (
    <section id='experience' className='w-screen h-screen flex-shrink-0 overflow-hidden'>
      <div className='flex h-full flex-col justify-center px-6 py-10 lg:px-16'>
        <div className='section-kicker'>{ui.sections.experience}</div>

        <div className='grid h-full min-h-0 gap-8 lg:grid-cols-[minmax(16rem,0.38fr)_minmax(0,0.62fr)] lg:items-center'>
          <div className='relative min-h-0 pl-10'>
            <span aria-hidden='true' className='absolute left-4 top-0 h-full w-px bg-[color:var(--dim)]' />

            <div className='space-y-3'>
              {rows.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <button
                    key={`${item.role}-${item.dates}`}
                    type='button'
                    className='group relative w-full rounded-[1.1rem] border border-transparent p-4 text-left transition-colors duration-200 hover:bg-[rgba(255,255,255,0.03)]'
                    aria-expanded={isOpen}
                    aria-controls={`experience-detail-${index}`}
                    onClick={() => setOpenIndex((current) => (current === index ? null : index))}
                  >
                    <span
                      aria-hidden='true'
                      className={`absolute left-[-1.8rem] top-5 h-3.5 w-3.5 rounded-full border border-[color:var(--gold)] transition-colors duration-200 ${
                        isOpen ? 'bg-[color:var(--gold)] shadow-[0_0_0_3px_rgba(184,149,42,0.18)]' : 'bg-[color:var(--void)]'
                      }`}
                    />

                    <div className='space-y-2'>
                      <div className='font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.2em] text-[var(--muted)]'>
                        {item.company}
                      </div>
                      <h3 className='font-[var(--font-serif)] text-[clamp(1.9rem,3.4vw,2.4rem)] font-light leading-[0.95] text-[var(--paper)] transition-colors group-hover:text-[var(--gold)]'>
                        {item.role}
                      </h3>
                      <div className='font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.2em] text-[var(--gold)]'>
                        {item.dates}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className='min-h-0 rounded-[1.5rem] border border-[color:var(--dim)] bg-[rgba(255,255,255,0.02)] px-6 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.2)]'>
            <div
              id={openIndex === null ? undefined : `experience-detail-${openIndex}`}
              className='h-full overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out'
              style={{
                maxHeight: activeItem ? '34rem' : '0px',
                opacity: activeItem ? 1 : 0,
              }}
              aria-hidden={!activeItem}
            >
              {activeItem ? (
                <div className='space-y-3'>
                  <div className='space-y-1'>
                    <div className='section-kicker'>{activeItem.company}</div>
                    <h3 className='font-[var(--font-serif)] text-[clamp(2rem,4vw,3rem)] font-light leading-[0.95] text-[var(--paper)]'>
                      {activeItem.role}
                    </h3>
                    <div className='font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.2em] text-[var(--muted)]'>
                      {activeItem.dates}
                    </div>
                    <p className='max-w-2xl text-[0.86rem] leading-7 text-[var(--muted)]'>{activeItem.summary}</p>
                  </div>

                  {activeItem.bullets?.length ? (
                    <ul className='space-y-3 pl-5 text-[0.84rem] leading-7 text-[var(--paper)]'>
                      {activeItem.bullets.map((bullet) => (
                        <li key={bullet} className='list-disc'>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {activeItem.certificate?.href ? (
                    <a
                      href={activeItem.certificate.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex items-center gap-1.5 font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.2em] text-[var(--gold)] underline decoration-[rgba(184,149,42,0.45)] underline-offset-4 transition-colors hover:text-[var(--paper)]'
                      data-cursor-interactive='true'
                    >
                      {activeItem.certificate.label ?? ui.experience.certificate}
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
