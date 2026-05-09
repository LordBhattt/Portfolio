import { resumeContent } from '../data/resumeContent';
import { useResumeMode } from '../context/ModeContext';

const ui = resumeContent.ui;
const shared = resumeContent.shared;

export default function Profile() {
  const { content } = useResumeMode();
  const profileCards = shared.profile?.cards ?? {};
  const stackValue = content.profileStack ?? '';

  const cards = [
    profileCards.education,
    profileCards.schooling,
    profileCards.highlight,
    {
      label: 'Stack',
      value: stackValue,
    },
    profileCards.roles,
    profileCards.wins,
  ].filter(Boolean);

  return (
    <section id='profile' className='section overflow-visible'>
      <div className='section-kicker'>{ui.sections.profile}</div>

      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {cards.map((card) => (
          <article
            key={card.label}
            className='min-h-[11rem] rounded-[1.25rem] border border-[rgba(184,149,42,0.26)] bg-[rgba(255,255,255,0.02)] p-5 transition-colors duration-200 hover:border-[color:var(--gold)]'
          >
            <div className='font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.22em] text-[var(--gold)]'>
              {card.label}
            </div>
            <p className='mt-4 max-w-[26rem] text-[0.88rem] leading-7 text-[var(--paper)]'>{card.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
