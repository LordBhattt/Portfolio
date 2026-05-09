import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { resumeContent } from '../data/resumeContent';

const ResumeModeContext = createContext(null);

export function ResumeModeProvider({ children }) {
  const [mode, setMode] = useState('tech');
  const [hasSelectedMode, setHasSelectedMode] = useState(true);

  const selectMode = useCallback((nextMode) => {
    setMode(nextMode);
    setHasSelectedMode(true);
  }, []);

  const toggleMode = useCallback(() => {
    setMode((currentMode) => (currentMode === 'tech' ? 'nonTech' : 'tech'));
    setHasSelectedMode(true);
  }, []);

  // Derived — content re-computes on every mode change, no stale references
  const modeContent = mode === 'tech' ? resumeContent.tech : resumeContent.nonTech;
  const shared = resumeContent.shared;

  const value = useMemo(
    () => ({ mode, hasSelectedMode, selectMode, toggleMode, content: modeContent, shared }),
    [mode, hasSelectedMode, selectMode, toggleMode, modeContent, shared],
  );

  return <ResumeModeContext.Provider value={value}>{children}</ResumeModeContext.Provider>;
}

export function useResumeMode() {
  const context = useContext(ResumeModeContext);

  if (!context) {
    throw new Error('useResumeMode must be used within a ResumeModeProvider');
  }

  return context;
}

export const ModeProvider = ResumeModeProvider;
export const useMode = useResumeMode;
