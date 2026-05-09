import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { resumeContent } from '../data/resumeContent';

gsap.registerPlugin(ScrollTrigger);

const ui = resumeContent.ui;
const shared = resumeContent.shared;

export default function Wins() {
  const sectionRef = useRef(null);
  const wins = shared.competitions;

  return (
    <section id='competitions' ref={sectionRef} className='section wins-section__inner'>
      <div className='section-kicker'>{ui.sections.competitions}</div>

      <div className='wins-list'>
        {wins.map((item) => (
          <WinRow key={`${item.title}-${item.year}`} item={item} />
        ))}
      </div>
    </section>
  );
}

function WinRow({ item }) {
  const rowRef = useRef(null);
  const [rankLabel, setRankLabel] = useState(item.rank);

  useLayoutEffect(() => {
    if (!rowRef.current) {
      return undefined;
    }

    const animate = () => {
      const counter = { value: 0 };

      gsap.to(counter, {
        value: Number.parseInt(item.rank, 10),
        duration: 1,
        ease: 'power2.out',
        onUpdate: () => {
          setRankLabel(String(Math.round(counter.value)).padStart(2, '0'));
        },
      });
    };

    if (rowRef.current.getBoundingClientRect().top < window.innerHeight * 0.85) {
      animate();
    }

    const trigger = ScrollTrigger.create({
      trigger: rowRef.current,
      start: 'top 85%',
      onEnter: animate,
      onEnterBack: animate,
    });

    return () => {
      trigger.kill();
    };
  }, [item.rank]);

  return (
    <article ref={rowRef} className='win-row'>
      <div className='win-row__rank'>{rankLabel}</div>

      <div className='win-row__core'>
        <h3 className='win-row__title'>{item.title}</h3>
        <div className='win-row__org'>{item.org}</div>
      </div>

      <div className='win-row__year'>{item.year}</div>
    </article>
  );
}
