import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function ModeTransition({ mode, className = '', children, ...rest }) {
  const wrapperRef = useRef(null);
  const [displayMode, setDisplayMode] = useState(mode);
  const pendingMode = useRef(mode);

  useLayoutEffect(() => {
    if (!wrapperRef.current || mode === displayMode) {
      return undefined;
    }

    pendingMode.current = mode;

    const context = gsap.context(() => {
      gsap.to(wrapperRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.3,
        ease: 'power2.inOut',
        onComplete: () => {
          setDisplayMode(pendingMode.current);
          requestAnimationFrame(() => {
            if (!wrapperRef.current) {
              return;
            }

            gsap.fromTo(
              wrapperRef.current,
              { opacity: 0, y: -10 },
              { opacity: 1, y: 0, duration: 0.4, ease: 'power2.inOut' },
            );
          });
        },
      });
    }, wrapperRef);

    return () => context.revert();
  }, [mode, displayMode]);

  return (
    <div ref={wrapperRef} className={className} {...rest}>
      {typeof children === 'function' ? children(displayMode) : children}
    </div>
  );
}
