import { resumeContent } from '../data/resumeContent';
import { useResumeMode } from '../context/ModeContext';

const ui = resumeContent.ui;

export default function CertificationsSection() {
  const { content } = useResumeMode();
  const certifications = content.certifications;

  // Only render if certifications exist for the current mode
  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <section id='certifications' className='section overflow-visible'>
      <div className='section-kicker'>{ui.sections.certifications}</div>

      <div className='grid gap-4 md:grid-cols-1 lg:grid-cols-3'>
        {certifications.map((cert) => (
          <article
            key={cert}
            className='rounded-[1.25rem] border border-[rgba(184,149,42,0.26)] bg-[rgba(255,255,255,0.02)] p-5 transition-colors duration-200 hover:border-[color:var(--gold)]'
          >
            <div className='font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.22em] text-[var(--gold)]'>
              {ui.sections.certifications}
            </div>
            <p className='mt-4 max-w-[34rem] text-[0.82rem] leading-7 text-[var(--paper)]'>{cert}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
