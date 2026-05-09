import useTime from '../hooks/useTime';
import { resumeContent } from '../data/resumeContent';

const ui = resumeContent.ui;
const shared = resumeContent.shared;

export default function Contact() {
  const time = useTime();

  return (
    <section id='contact' className='section contact-section'>
      <div className='section-kicker'>{ui.sections.contact}</div>

      <div className='contact-grid'>
        <div className='contact-copy'>
          <h2 className='contact-copy__title'>{ui.contactCopy}</h2>
        </div>

        <div className='contact-list'>
          <a
            className='contact-row'
            href={`mailto:${shared.email}`}
            data-cursor-interactive='true'
          >
            <span className='contact-row__label'>{ui.contactLabels.email}</span>
            <span className='contact-row__value'>{shared.email}</span>
          </a>

          <a
            className='contact-row'
            href={`tel:${shared.phone.replace(/\s+/g, '')}`}
            data-cursor-interactive='true'
          >
            <span className='contact-row__label'>{ui.contactLabels.phone}</span>
            <span className='contact-row__value'>{shared.phone}</span>
          </a>

          <a
            className='contact-row'
            href={shared.linkedinUrl}
            target='_blank'
            rel='noreferrer'
            data-cursor-interactive='true'
          >
            <span className='contact-row__label'>{ui.contactLabels.linkedin}</span>
            <span className='contact-row__value'>{shared.linkedin}</span>
          </a>

          <a
            className='contact-row'
            href={shared.githubUrl}
            target='_blank'
            rel='noreferrer'
            data-cursor-interactive='true'
          >
            <span className='contact-row__label'>{ui.contactLabels.github}</span>
            <span className='contact-row__value'>{shared.github}</span>
          </a>

          <div className='contact-row'>
            <span className='contact-row__label'>{ui.contactLabels.time}</span>
            <span className='contact-row__value'>{time}</span>
          </div>
        </div>
      </div>

      <div className='contact-footer'>
        <div>{ui.contactFooter.left}</div>
        <div>{ui.contactFooter.right}</div>
      </div>
    </section>
  );
}
