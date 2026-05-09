import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { resumeContent } from '../data/resumeContent';
import { useResumeMode } from '../context/ModeContext';
import useTime from '../hooks/useTime';

const ui = resumeContent.ui;
const shared = resumeContent.shared;

export default function Hero({ ready }) {
  const { mode, content, selectMode } = useResumeMode();
  const time = useTime();
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    if (!ready || !heroRef.current) {
      return undefined;
    }

    const context = gsap.context(() => {
      gsap.from(heroRef.current.querySelectorAll('[data-hero-reveal]'), {
        opacity: 0,
        y: 24,
        duration: 0.8,
        delay: 0.5,
        ease: 'power2.out',
        stagger: 0.08,
      });
    }, heroRef);

    return () => context.revert();
  }, [ready]);

  useLayoutEffect(() => {
    if (!ready || !heroRef.current) {
      return undefined;
    }

    const techHeadline = heroRef.current.querySelector('.hero-headline--tech');
    const nonTechHeadline = heroRef.current.querySelector('.hero-headline--non-tech');

    if (!techHeadline || !nonTechHeadline) {
      return undefined;
    }

    const techOpacity = mode === 'tech' ? 1 : 0.06;
    const nonTechOpacity = mode === 'nonTech' ? 1 : 0.06;
    const techBlur = mode === 'tech' ? 'blur(0px)' : 'blur(10px)';
    const nonTechBlur = mode === 'nonTech' ? 'blur(0px)' : 'blur(10px)';

    gsap.to(techHeadline, {
      opacity: techOpacity,
      filter: techBlur,
      duration: 0.45,
      ease: 'power2.inOut',
    });

    gsap.to(nonTechHeadline, {
      opacity: nonTechOpacity,
      filter: nonTechBlur,
      duration: 0.45,
      ease: 'power2.inOut',
    });

    return () => {
      gsap.killTweensOf([techHeadline, nonTechHeadline]);
    };
  }, [mode, ready]);

  return (
    <section ref={heroRef} className={`hero-shell ${ready ? 'is-ready' : ''}`} id='top'>
      <div className='hero__stage'>
        <div className='hero__identity' aria-label={ui.hero.identityAria}>
          <h1 className='hero-headline hero-headline--tech'>{resumeContent.tech.heroHeadline}</h1>
          <h1 className='hero-headline hero-headline--non-tech'>{resumeContent.nonTech.heroHeadline}</h1>
        </div>

        <p className='hero__subline mono-caps' data-hero-reveal>
          {shared.subtitle}
        </p>

        <div className='hero__actions' data-hero-reveal>
          <button
            type='button'
            className={`hero-command ${mode === 'tech' ? 'is-active' : ''}`}
            data-cursor-interactive='true'
            data-cursor-mode-label={ui.buttons.tech}
            aria-pressed={mode === 'tech'}
            onClick={() => selectMode('tech')}
          >
            {ui.hero.techCommand}
          </button>

          <button
            type='button'
            className={`hero-command ${mode === 'nonTech' ? 'is-active' : ''}`}
            data-cursor-interactive='true'
            data-cursor-mode-label={ui.buttons.nonTech}
            aria-pressed={mode === 'nonTech'}
            onClick={() => selectMode('nonTech')}
          >
            {ui.hero.nonTechCommand}
          </button>
        </div>
      </div>

      <div className='hero__corners'>
        <div className='hero__time mono-caps' data-hero-reveal>
          {time}
        </div>

        <div className='hero__data mono-caps' data-hero-reveal>
          <div>{ui.hero.cornerLabels.degree}    {shared.degree}</div>
          <div>{ui.hero.cornerLabels.minor}     {shared.minor}</div>
          <div>{ui.hero.cornerLabels.status}    {shared.status}</div>
        </div>
      </div>
    </section>
  );
}
