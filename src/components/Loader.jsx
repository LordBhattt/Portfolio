import { useEffect, useState } from 'react';
import { resumeContent } from '../data/resumeContent';

const ui = resumeContent.ui;

export default function Loader({ onComplete }) {
  const lines = ui.loader.lines ?? [];
  const [typedLines, setTypedLines] = useState(['', '', '']);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setIsDrawing(true);

    const timers = [];
    const intervals = [];

    const typeLine = (line, index, startDelay) => {
      const timeoutId = window.setTimeout(() => {
        let cursor = 0;

        const intervalId = window.setInterval(() => {
          cursor += 1;

          setTypedLines((currentLines) => {
            const nextLines = [...currentLines];
            nextLines[index] = line.slice(0, cursor);
            return nextLines;
          });

          if (cursor >= line.length) {
            window.clearInterval(intervalId);
          }
        }, 30);

        intervals.push(intervalId);
      }, startDelay);

      timers.push(timeoutId);
    };

    typeLine(lines[0], 0, 600);
    typeLine(lines[1], 1, 760);
    typeLine(lines[2], 2, 920);

    timers.push(
      window.setTimeout(() => {
        setTypedLines((currentLines) => {
          const nextLines = [...currentLines];
          nextLines[2] = lines[3] ?? currentLines[2];
          return nextLines;
        });
      }, 1400),
    );

    timers.push(
      window.setTimeout(() => {
        setIsExiting(true);
      }, 1600),
    );

    timers.push(
      window.setTimeout(() => {
        onComplete?.();
      }, 1980),
    );

    return () => {
      timers.forEach((timerId) => window.clearTimeout(timerId));
      intervals.forEach((intervalId) => window.clearInterval(intervalId));
    };
  }, [onComplete]);

  return (
    <div className={`loader ${isExiting ? 'loader--exit' : ''}`}>
      <div className={`loader__line ${isDrawing ? 'is-drawn' : ''}`} />
      <div className='loader__copy'>
        {typedLines.map((line, index) => (
          <div
            key={index}
            className={`loader__line-text ${index === 2 && line.includes('SELECT') ? 'is-select' : ''}`}
          >
            <span className='loader__text'>{line}</span>
            {index === 2 ? <span className='loader__cursor' /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
