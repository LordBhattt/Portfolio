import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { resumeContent } from '../data/resumeContent';
import { useResumeMode } from '../context/ModeContext';

const ui = resumeContent.ui;

function buildTickerBlocks(rows, separator) {
  return rows.map((row) => ({
    label: row.label,
    items: (row.items ?? []).join(` ${separator} `),
  }));
}

function TickerBlock({ block }) {
  return (
    <div className='flex items-center gap-3 whitespace-nowrap'>
      <span className='font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.22em] text-[var(--gold)]'>
        {block.label}
      </span>
      <span className='font-[var(--font-mono)] text-[0.72rem] uppercase tracking-[0.14em] text-[var(--paper)]'>
        {block.items}
      </span>
    </div>
  );
}

export default function Arsenal() {
  const { content } = useResumeMode();
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const topTween = useRef(null);
  const bottomTween = useRef(null);
  const separator = ui.ticker?.separator ?? '·';
  const skillRows = content.skills ?? [];
  const topBlocks = buildTickerBlocks(skillRows.slice(0, 2), separator);
  const bottomBlocks = buildTickerBlocks(skillRows.slice(-2), separator);

  useLayoutEffect(() => {
    const buildTween = (element, direction) => {
      if (!element) {
        return null;
      }

      const distance = element.scrollWidth / 2;

      if (direction === 'forward') {
        gsap.set(element, { x: -distance });

        return gsap.to(element, {
          x: 0,
          duration: distance / 40,
          ease: 'none',
          repeat: -1,
        });
      }

      gsap.set(element, { x: 0 });

      return gsap.to(element, {
        x: -distance,
        duration: distance / 40,
        ease: 'none',
        repeat: -1,
      });
    };

    topTween.current?.kill();
    bottomTween.current?.kill();
    topTween.current = buildTween(topRef.current, 'forward');
    bottomTween.current = buildTween(bottomRef.current, 'reverse');

    return () => {
      topTween.current?.kill();
      bottomTween.current?.kill();
    };
  }, [content.skills]);

  return (
    <section id='arsenal' className='section overflow-hidden'>
      <div className='section-kicker'>{ui.sections.skills}</div>

      <div className='arsenal-marquee' onMouseLeave={() => topTween.current?.timeScale(1)}>
        <div
          ref={topRef}
          className='arsenal-marquee__track'
          onMouseEnter={() => topTween.current?.timeScale(0)}
        >
          {[...topBlocks, ...topBlocks].map((block, index) => (
            <TickerBlock key={`${block.label}-${index}`} block={block} />
          ))}
        </div>
      </div>

      <div className='py-10 text-center font-[var(--font-serif)] text-7xl font-light leading-none tracking-[-0.04em] text-[var(--gold)]'>
        {ui.sections.skills}
      </div>

      <div className='arsenal-marquee' onMouseLeave={() => bottomTween.current?.timeScale(1)}>
        <div
          ref={bottomRef}
          className='arsenal-marquee__track'
          onMouseEnter={() => bottomTween.current?.timeScale(0)}
        >
          {[...bottomBlocks, ...bottomBlocks].map((block, index) => (
            <TickerBlock key={`${block.label}-${index}`} block={block} />
          ))}
        </div>
      </div>
    </section>
  );
}
