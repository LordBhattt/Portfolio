import { resumeContent } from '../data/resumeContent';
import { useResumeMode } from '../context/ModeContext';

const ui = resumeContent.ui;

export default function About() {
  const { content, shared } = useResumeMode();
  const summaryText = content.summaryLine ?? content.summary ?? '';
  const profileRows = shared.about?.profile?.rows ?? [];
  const detailRows = profileRows.filter((row) => !row.href?.startsWith('http'));
  const linkRows = profileRows.filter((row) => row.href?.startsWith('http'));

  return (
    <section id='about' className='w-screen h-screen flex-shrink-0 overflow-hidden'>
      <div className='flex h-full items-start px-6 pt-[8vh] pb-6 lg:px-16 xl:px-20'>
        <div className='flex w-full flex-col gap-6 md:flex-row md:items-start md:gap-8 xl:gap-12'>
          <div className='w-full md:w-[50%] pt-4'>
            <div className='section-kicker'>{ui.sections.about}</div>
            <h2 className='max-w-[12ch] font-[var(--font-serif)] text-[clamp(2rem,4.5vw,5.5rem)] font-light leading-[0.9] tracking-[-0.04em] text-[var(--paper)]'>
              {content.headline}
            </h2>
          </div>

          {/* Profile card — no scrollbar, no max-height, fits naturally */}
          <article className='w-full md:w-[48%] md:min-w-[480px] flex flex-col rounded-[1.5rem] border border-[rgba(184,149,42,0.24)] bg-[rgba(255,255,255,0.02)] px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.2)]'>
            <div className='section-kicker'>{ui.sections.profile}</div>

            <div className='space-y-1.5'>
              {detailRows.map((row) => (
                <ProfileRow key={row.label} row={row} />
              ))}
            </div>

            <div className='mt-3 flex flex-wrap gap-3 border-t border-[color:var(--dim)] pt-3'>
              {linkRows.map((row) => (
                <a
                  key={row.label}
                  href={row.href}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center gap-2 rounded-full border border-[rgba(184,149,42,0.3)] px-3 py-1 font-[var(--font-mono)] text-[0.58rem] uppercase tracking-[0.18em] text-[var(--gold)] transition-colors hover:border-[color:var(--gold)] hover:text-[var(--paper)]'
                  data-cursor-interactive='true'
                >
                  <span>{row.label}</span>
                </a>
              ))}
            </div>

            <div className='mt-3 border-t border-[color:var(--dim)] pt-3'>
              <div className='font-[var(--font-mono)] text-[0.58rem] uppercase tracking-[0.2em] text-[var(--muted)]'>
                {ui.sections.summary}
              </div>
              <p className='mt-2 max-w-xl text-sm leading-5 text-[var(--paper)] line-clamp-3'>{summaryText}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ProfileRow({ row }) {
  const isExternal = Boolean(row.href && row.href.startsWith('http'));

  const rowContent = (
    <>
      <span className='font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--muted)]'>
        {row.label}
      </span>
      <span
        className={`break-words text-sm leading-5 transition-colors group-hover:text-[var(--gold)] ${
          row.href ? (isExternal ? 'text-[var(--gold)]' : 'text-[var(--paper)]') : 'text-[var(--paper)]'
        }`}
      >
        {row.value}
      </span>
    </>
  );

  const rowClassName =
    'group grid grid-cols-[6rem_minmax(0,1fr)] gap-3 border-b border-[color:var(--dim)] py-2 last:border-b-0';

  if (!row.href) {
    return <div className={rowClassName}>{rowContent}</div>;
  }

  return (
    <a
      href={row.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className={rowClassName}
      data-cursor-interactive='true'
    >
      {rowContent}
    </a>
  );
}
