import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import About from './About';
import Certifications from './Certifications';
import Experience from './Experience';

gsap.registerPlugin(ScrollTrigger);

export default function OverviewStrip() {
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    if (!horizontalRef.current) {
      return undefined;
    }

    const context = gsap.context(() => {
      const strip = horizontalRef.current;
      const getNavHeight = () => {
        const navbar = document.querySelector('[data-navbar-shell="true"]');
        return Math.ceil(navbar?.getBoundingClientRect().height ?? 72);
      };

      const tween = gsap.to(strip, {
        x: () => -(strip.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: strip,
          start: () => `top ${getNavHeight()}px`,
          end: () => `+=${strip.scrollWidth - window.innerWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, horizontalRef);

    return () => context.revert();
  }, []);

  return (
    <section className='relative z-10 overflow-hidden bg-[color:var(--void)]'>
      <div ref={horizontalRef} className='flex w-[300vw] will-change-transform'>
        <About />
        <Certifications />
        <Experience />
      </div>
    </section>
  );
}
