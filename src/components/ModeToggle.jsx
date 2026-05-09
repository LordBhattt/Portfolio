import { resumeContent } from '../data/resumeContent';
import { useResumeMode } from '../context/ModeContext';

const ui = resumeContent.ui;

export default function ModeToggle({ ready }) {
  const { mode, selectMode } = useResumeMode();

  const isTech = mode === 'tech';

  return (
    <div
      className={`fixed right-4 z-[70] ${ready ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      style={{ top: 'calc(var(--nav-height, 72px) + 8px)' }}
    >
      <div className='relative inline-grid grid-cols-2 overflow-hidden rounded-full border border-[color:var(--dim)] bg-[color:var(--void)] p-1 shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-sm'>
        <span
          className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-[color:var(--gold)] transition-transform duration-300 ease-out ${
            isTech ? 'translate-x-0' : 'translate-x-full'
          }`}
        />

        <button
          type='button'
          className={`relative z-10 rounded-full px-4 py-2 font-[var(--font-mono)] text-[0.66rem] uppercase tracking-[0.18em] transition-colors duration-300 ${
            isTech ? 'text-[var(--void)]' : 'text-[var(--paper)]'
          }`}
          data-cursor-interactive='true'
          data-cursor-mode-label={ui.buttons.tech}
          aria-pressed={isTech}
          aria-label={ui.buttons.tech}
          onClick={() => selectMode('tech')}
        >
          {ui.buttons.tech}
        </button>

        <button
          type='button'
          className={`relative z-10 rounded-full px-4 py-2 font-[var(--font-mono)] text-[0.66rem] uppercase tracking-[0.18em] transition-colors duration-300 ${
            isTech ? 'text-[var(--paper)]' : 'text-[var(--void)]'
          }`}
          data-cursor-interactive='true'
          data-cursor-mode-label={ui.buttons.nonTech}
          aria-pressed={!isTech}
          aria-label={ui.buttons.nonTech}
          onClick={() => selectMode('nonTech')}
        >
          {ui.buttons.nonTech}
        </button>
      </div>
    </div>
  );
}
