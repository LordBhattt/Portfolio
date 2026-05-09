import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { resumeContent } from '../data/resumeContent';

const ui = resumeContent.ui;
const shared = resumeContent.shared;

export default function Nav({ ready }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const drawerRef = useRef(null);
  const linkRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!headerRef.current) {
      return undefined;
    }

    const updateNavHeight = () => {
      const nextHeight = Math.ceil(headerRef.current?.getBoundingClientRect().height ?? 72);
      document.documentElement.style.setProperty('--nav-height', `${nextHeight}px`);
    };

    updateNavHeight();

    const resizeObserver =
      typeof ResizeObserver === 'undefined'
        ? null
        : new ResizeObserver(() => {
            updateNavHeight();
          });

    resizeObserver?.observe(headerRef.current);
    window.addEventListener('resize', updateNavHeight);

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener('resize', updateNavHeight);
    };
  }, []);

  useLayoutEffect(() => {
    if (!menuOpen || !drawerRef.current) {
      return undefined;
    }

    const targets = linkRefs.current.filter(Boolean);

    gsap.fromTo(
      targets,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
    );

    return undefined;
  }, [menuOpen]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);

    if (window.__lenis && element) {
      window.__lenis.scrollTo(element);
    } else {
      element?.scrollIntoView({ behavior: 'smooth' });
    }

    setMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      data-navbar-shell='true'
      className={`nav-shell ${isScrolled ? 'is-scrolled' : ''} ${ready ? 'is-ready' : ''}`}
    >
      <div className='nav-shell__inner'>
        <div className='nav-mark'>{shared.monogram}</div>

        <nav className='nav-links' aria-label={ui.navAria}>
          {shared.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className='nav-link'
              data-cursor-interactive='true'
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type='button'
          className='nav-burger'
          data-cursor-interactive='true'
          aria-label={menuOpen ? ui.buttons.closeMenu : ui.buttons.openMenu}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <aside ref={drawerRef} className={`nav-drawer ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className='nav-drawer__inner'>
          {shared.nav.map((item, index) => (
            <a
              key={item.label}
              ref={(node) => {
                linkRefs.current[index] = node;
              }}
              href={item.href}
              className='nav-drawer__link'
              data-cursor-interactive='true'
              onClick={(event) => {
                event.preventDefault();
                scrollToSection(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </aside>
    </header>
  );
}
