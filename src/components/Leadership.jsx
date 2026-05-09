import { useState } from 'react';
import { resumeContent } from '../data/resumeContent';
import { useResumeMode } from '../context/ModeContext';

const ui = resumeContent.ui;
const shared = resumeContent.shared;

export default function Leadership() {
  const { mode } = useResumeMode();
  const [openIndex, setOpenIndex] = useState(null);
  const orderedCards = (shared.leadershipOrder?.[mode] ?? [])
    .map((key) => shared.leadership?.find((card) => card.key === key))
    .filter(Boolean);

  return (
    <section id='leadership' className='section overflow-visible'>
      <div className='section-kicker'>{ui.sections.leadership}</div>

      <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2'>
        {orderedCards.map((card, index) => {
          const variant = mode === 'tech' ? card.variants?.tech : card.variants?.nonTech;
          const canExpand = (variant?.bullets?.length ?? 0) > 0;
          const isOpen = openIndex === index;
          const accent = card.title?.charAt(0) ?? 'L';

          return (
            <article
              key={card.key}
              className='flex flex-col rounded-[1.25rem] border border-[color:var(--dim)] bg-[rgba(255,255,255,0.015)] shadow-[0_18px_40px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)] hover:shadow-lg'
            >
              <button
                type='button'
                className='relative flex w-full flex-col items-start gap-3 p-5 text-left'
                aria-expanded={canExpand ? isOpen : false}
                onClick={() => {
                  if (!canExpand) {
                    return;
                  }

                  setOpenIndex((current) => (current === index ? null : index));
                }}
              >
                <span className='absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-[rgba(184,149,42,0.35)] bg-[rgba(184,149,42,0.08)] font-[var(--font-mono)] text-[0.7rem] uppercase tracking-[0.2em] text-[var(--gold)]'>
                  {accent}
                </span>

                <div className='pr-12'>
                  <div className='font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.2em] text-[var(--muted)]'>
                    {card.header}
                  </div>
                  <h3 className='mt-2 font-[var(--font-serif)] text-[clamp(1.9rem,3vw,2.45rem)] font-light leading-[0.95] text-[var(--paper)]'>
                    {card.title}
                  </h3>
                  <div className='mt-2 font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.18em] text-[var(--muted)]'>
                    {card.org}
                  </div>
                </div>

                <p className='max-w-[34rem] text-[0.82rem] leading-6 text-[var(--muted)]'>{variant?.body ?? ''}</p>

                {card.badge ? (
                  <span className='inline-flex rounded-full border border-[rgba(184,149,42,0.28)] px-3 py-1 font-[var(--font-mono)] text-[0.58rem] uppercase tracking-[0.18em] text-[var(--gold)]'>
                    {card.badge}
                  </span>
                ) : null}

                {canExpand ? <AccordionChevron isOpen={isOpen} /> : null}
              </button>

              {/* Expanded content — direct child of article, grows card height via max-height transition */}
              <div
                className='transition-all duration-300 ease-in-out'
                style={{
                  maxHeight: isOpen ? '500px' : '0px',
                  overflow: 'hidden',
                  opacity: isOpen ? 1 : 0,
                }}
                aria-hidden={!isOpen}
              >
                <div className='px-5 pb-5'>
                  <ul className='space-y-3 pl-5 text-[0.82rem] leading-7 text-[var(--paper)]'>
                    {variant?.bullets?.map((bullet) => (
                      <li key={bullet} className='list-disc'>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function AccordionChevron({ isOpen }) {
  return (
    <svg
      aria-hidden='true'
      viewBox='0 0 24 24'
      className={`h-5 w-5 self-end text-[var(--gold)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      fill='none'
      stroke='currentColor'
      strokeWidth='1.75'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m6 9 6 6 6-6' />
    </svg>
  );
}
