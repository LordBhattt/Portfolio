import { useEffect, useState } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useResumeMode, ResumeModeProvider } from './context/ModeContext';
import useLenis from './hooks/useLenis';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import OverviewStrip from './components/OverviewStrip';
import Projects from './components/Projects';
import Arsenal from './components/Arsenal';
import CertificationsSection from './components/CertificationsSection';
import Wins from './components/Wins';
import Leadership from './components/Leadership';
import Profile from './components/Profile';
import Contact from './components/Contact';

import NoiseOverlay from './components/NoiseOverlay';
import ResumeModeErrorBoundary from './components/ResumeModeErrorBoundary';

export default function App() {
  useLenis();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isReady ? '' : 'hidden';

    if (isReady) {
      ScrollTrigger.refresh();
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isReady]);

  return (
    <ResumeModeProvider>
      <AppShell isReady={isReady} setIsReady={setIsReady} />
    </ResumeModeProvider>
  );
}

function AppShell({ isReady, setIsReady }) {
  const { mode } = useResumeMode();

  return (
    <div className='site-shell overflow-x-hidden'>
      <NoiseOverlay />
      <Cursor />
      {!isReady ? <Loader onComplete={() => setIsReady(true)} /> : null}
      <Nav ready={isReady} />
      <ResumeModeErrorBoundary resetKey={mode}>
        <main className={`site-main ${isReady ? 'is-ready' : ''}`}>
          <Hero ready={isReady} />
          <OverviewStrip />
          <Arsenal />
          <CertificationsSection />
          <Profile />
          <Leadership />
          <Projects />
          <Wins />
          <Contact />
        </main>
      </ResumeModeErrorBoundary>

    </div>
  );
}
