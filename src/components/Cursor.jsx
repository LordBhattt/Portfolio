import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const targetRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const currentRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const rafRef = useRef(0);
  const [isInteractive, setIsInteractive] = useState(false);
  const [label, setLabel] = useState('');

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;

    if (!finePointer) {
      return undefined;
    }

    const updateDot = (x, y) => {
      if (!dotRef.current) {
        return;
      }

      dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const handleMove = (event) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
      updateDot(event.clientX, event.clientY);
    };

    const tick = () => {
      const current = currentRef.current;
      const target = targetRef.current;

      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    const interactiveSelector = '[data-cursor-interactive="true"]';

    const handleOver = (event) => {
      const target = event.target instanceof Element ? event.target.closest(interactiveSelector) : null;

      if (!target) {
        return;
      }

      setIsInteractive(true);
      setLabel(target.getAttribute('data-cursor-mode-label') || '');
    };

    const handleOut = (event) => {
      const relatedTarget =
        event.relatedTarget instanceof Element ? event.relatedTarget.closest(interactiveSelector) : null;

      if (relatedTarget) {
        setIsInteractive(true);
        setLabel(relatedTarget.getAttribute('data-cursor-mode-label') || '');
        return;
      }

      setIsInteractive(false);
      setLabel('');
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    document.addEventListener('pointerover', handleOver, true);
    document.addEventListener('pointerout', handleOut, true);
    rafRef.current = window.requestAnimationFrame(tick);
    updateDot(targetRef.current.x, targetRef.current.y);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      document.removeEventListener('pointerover', handleOver, true);
      document.removeEventListener('pointerout', handleOut, true);
      window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className='cursor-layer' aria-hidden='true'>
      <div ref={dotRef} className={`cursor-dot ${isInteractive ? 'is-hidden' : ''}`} />
      <div ref={ringRef} className={`cursor-ring ${isInteractive ? 'is-hovering' : ''}`}>
        {label ? <span className='cursor-ring__label'>{label}</span> : null}
      </div>
    </div>
  );
}
