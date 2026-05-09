import { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { resumeContent } from '../data/resumeContent';
import { useResumeMode } from '../context/ModeContext';

gsap.registerPlugin(ScrollTrigger);

const ui = resumeContent.ui;

export default function Projects() {
  const { mode, content } = useResumeMode();
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const previousFocusRef = useRef(null);
  const [activeProjectKey, setActiveProjectKey] = useState(null);

  const projects = content.projects ?? [];

  // Derive the active project from key + current mode's project list
  const activeProject = activeProjectKey
    ? projects.find((p) => p.key === activeProjectKey) ?? null
    : null;

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return undefined;
    }

    const context = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll('.project-card');

      ScrollTrigger.batch(cards, {
        start: 'top 82%',
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.15 },
          );
        },
        onEnterBack: (batch) => {
          gsap.fromTo(
            batch,
            { y: 24, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', stagger: 0.15 },
          );
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  useLayoutEffect(() => {
    if (!activeProject || !overlayRef.current || !panelRef.current) {
      return undefined;
    }

    const overlay = overlayRef.current;
    const panel = panelRef.current;

    gsap.set(overlay, { opacity: 0 });
    gsap.set(panel, { opacity: 0, y: 14, scale: 0.96 });

    const timeline = gsap.timeline({ defaults: { duration: 0.3, ease: 'power2.out' } });

    timeline.to(overlay, { opacity: 1 }, 0).to(panel, { opacity: 1, y: 0, scale: 1 }, 0);

    requestAnimationFrame(() => {
      const closeButton = panel.querySelector('[data-modal-close]');
      closeButton?.focus();
    });

    return () => timeline.kill();
  }, [activeProject]);

  useEffect(() => {
    if (!activeProject) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeProject();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) {
        return;
      }

      const focusable = panelRef.current.querySelectorAll(
        'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      if (!focusable.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  const openProject = (project, triggerElement) => {
    previousFocusRef.current = triggerElement;
    window.__lenis?.stop?.();
    setActiveProjectKey(project.key);
  };

  const closeProject = () => {
    if (!activeProject || !overlayRef.current || !panelRef.current) {
      setActiveProjectKey(null);
      window.__lenis?.start?.();
      previousFocusRef.current?.focus?.();
      return;
    }

    const overlay = overlayRef.current;
    const panel = panelRef.current;

    const timeline = gsap.timeline({
      defaults: { duration: 0.3, ease: 'power2.inOut' },
      onComplete: () => {
        setActiveProjectKey(null);
        window.__lenis?.start?.();
        previousFocusRef.current?.focus?.();
      },
    });

    timeline.to(panel, { opacity: 0, y: 14, scale: 0.96 }, 0).to(overlay, { opacity: 0 }, 0);
  };

  const activeProjectBullets = activeProject?.bullets ?? [];
  const activeProjectHeadingId = activeProject ? `project-modal-title-${activeProject.key}` : undefined;

  return (
    <section ref={sectionRef} id='projects' className='section overflow-visible'>
      <div className='section-kicker'>{ui.sections.projects}</div>

      <div className='grid gap-4 md:grid-cols-2'>
        {projects.map((project) => (
          <button
            key={project.key}
            type='button'
            className='project-card group flex h-full min-h-[22rem] flex-col overflow-hidden rounded-[1.25rem] border border-[color:var(--dim)] bg-[color:var(--void)] p-5 text-left shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition-transform duration-300 hover:-translate-y-1 hover:border-[color:var(--gold)]'
            aria-haspopup='dialog'
            aria-expanded={activeProject?.key === project.key}
            onClick={(event) => openProject(project, event.currentTarget)}
          >
            <div className='flex h-full flex-col gap-4'>
              <div className='flex items-start justify-between gap-3'>
                <h3 className='font-[var(--font-serif)] text-[clamp(2rem,3vw,2.5rem)] font-light leading-none text-[var(--paper)] transition-colors group-hover:text-[var(--gold)]'>
                  {project.title}
                </h3>
              </div>

              <p className='text-[0.78rem] leading-6 text-[var(--muted)]'>{project.teaser}</p>

              <div className='flex flex-wrap gap-2 border-t border-[color:var(--dim)] pt-4'>
                {project.stackTags.map((tag) => (
                  <span
                    key={tag}
                    className='max-w-full break-words rounded-full border border-[color:var(--dim)] px-3 py-1 font-[var(--font-mono)] text-[0.58rem] uppercase tracking-[0.16em] text-[var(--paper)]'
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className='mt-auto pt-4 font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.2em] text-[var(--gold)]'>
                {ui.buttons.viewProject}
              </div>
            </div>
          </button>
        ))}
      </div>

      {activeProject && activeProjectBullets.length > 0 ? (
        <div
          ref={overlayRef}
          className='fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(5,5,5,0.82)] p-4 backdrop-blur-sm'
          role='presentation'
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeProject();
            }
          }}
        >
          <div
            ref={panelRef}
            role='dialog'
            aria-modal='true'
            aria-labelledby={activeProjectHeadingId}
            className='relative max-h-[calc(100vh-2rem)] w-full max-w-6xl overflow-y-auto rounded-[1.5rem] border border-[color:var(--dim)] bg-[color:var(--void)] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.45)] md:p-7'
          >
            <button
              type='button'
              data-modal-close='true'
              className='absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-[color:var(--dim)] text-[var(--paper)] transition-colors hover:border-[color:var(--gold)] hover:text-[var(--gold)]'
              aria-label={ui.buttons.close}
              onClick={closeProject}
            >
              {ui.buttons.closeMark}
            </button>

            <div className='space-y-8'>
              <div className='space-y-5 pr-10'>
                <h3
                  id={activeProjectHeadingId}
                  className='font-[var(--font-serif)] text-[clamp(2.6rem,5vw,4.8rem)] font-light leading-none text-[var(--paper)]'
                >
                  {activeProject.title}
                </h3>
                <p className='max-w-3xl text-[0.88rem] leading-7 text-[var(--muted)]'>{activeProject.teaser}</p>

                <div className='space-y-3'>
                  <div className='font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.2em] text-[var(--muted)]'>
                    {ui.projectsModal.stack}
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {activeProject.stackTags.map((tag) => (
                      <span
                        key={tag}
                        className='max-w-full break-words rounded-full border border-[color:var(--dim)] px-3 py-1 font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.16em] text-[var(--paper)]'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {activeProject.diagram ? <ProjectDiagram diagram={activeProject.diagram} /> : null}

              <div className='space-y-3'>
                <div className='font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.2em] text-[var(--muted)]'>
                  {ui.projectsModal.highlights}
                </div>
                <ul className='space-y-3 pl-5 text-[0.84rem] leading-7 text-[var(--paper)]'>
                  {activeProjectBullets.map((bullet) => (
                    <li key={bullet} className='list-disc'>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={activeProject.github}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-full border border-[color:var(--dim)] px-4 py-2 font-[var(--font-mono)] text-[0.66rem] uppercase tracking-[0.18em] text-[var(--paper)] transition-colors hover:border-[color:var(--gold)] hover:text-[var(--gold)]'
                data-cursor-interactive='true'
              >
                {ui.buttons.github}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function ProjectDiagram({ diagram }) {
  if (!diagram?.flow?.length) {
    return null;
  }

  return (
    <div className='space-y-4 rounded-[1.4rem] border border-[color:var(--dim)] bg-[rgba(255,255,255,0.02)] p-4'>
      <div className='font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.2em] text-[var(--muted)]'>
        {ui.projectsModal.architecture}
      </div>

      <div className='rounded-[1.15rem] border border-[rgba(184,149,42,0.22)] bg-[rgba(0,0,0,0.16)] p-4'>
        <div className='flex flex-wrap items-center justify-center gap-2 md:gap-3'>
          {diagram.flow.map((step, index) => (
            <Fragment key={`${index}-${Array.isArray(step) ? step.join('-') : step}`}>
              {index > 0 ? (
                <span className='font-[var(--font-mono)] text-[0.8rem] text-[color:var(--gold)]'>
                  {ui.projectsModal.arrow}
                </span>
              ) : null}

              {Array.isArray(step) ? (
                <div className='flex flex-wrap justify-center gap-2 rounded-[1rem] border border-[rgba(184,149,42,0.35)] bg-[rgba(184,149,42,0.06)] px-3 py-3'>
                  {step.map((node) => (
                    <DiagramNode key={node}>{node}</DiagramNode>
                  ))}
                </div>
              ) : (
                <DiagramNode>{step}</DiagramNode>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      {diagram.infra?.length ? (
        <div className='space-y-2 border-t border-[color:var(--dim)] pt-4'>
          <div className='font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.2em] text-[var(--muted)]'>
            {ui.projectsModal.infra}
          </div>
          <div className='flex flex-wrap justify-center gap-2'>
            {diagram.infra.map((node) => (
              <DiagramNode key={node} compact>
                {node}
              </DiagramNode>
            ))}
          </div>
        </div>
      ) : null}

      {diagram.stateMachine?.length ? (
        <div className='space-y-2 border-t border-[color:var(--dim)] pt-4'>
          <div className='font-[var(--font-mono)] text-[0.62rem] uppercase tracking-[0.2em] text-[var(--muted)]'>
            {ui.projectsModal.stateMachine}
          </div>
          <div className='flex flex-wrap justify-center gap-2'>
            {diagram.stateMachine.map((node) => (
              <DiagramNode key={node} compact>
                {node}
              </DiagramNode>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function DiagramNode({ children, compact = false }) {
  return (
    <span
      className={`max-w-[12rem] whitespace-pre-line rounded-[0.95rem] border border-[rgba(184,149,42,0.45)] bg-[rgba(255,255,255,0.03)] px-3 py-2 text-center font-[var(--font-mono)] tracking-[0.08em] text-[var(--paper)] shadow-[0_10px_30px_rgba(0,0,0,0.16)] ${
        compact ? 'text-[0.56rem] leading-5' : 'text-[0.62rem] leading-5'
      }`}
    >
      {children}
    </span>
  );
}
