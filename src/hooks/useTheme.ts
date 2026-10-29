import { useState, useEffect, useCallback } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'os-site:theme';

function getSystemTheme(): Theme {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'dark';
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
  } catch {
    // Ignore localStorage errors
  }
  return getSystemTheme();
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Synchronize document attribute with theme state
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Listen to OS system preference changes if no manual override is saved
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        // Only adapt to system preference if user hasn't explicitly set a preference
        if (!saved) {
          const newSystemTheme: Theme = e.matches ? 'dark' : 'light';
          setTheme(newSystemTheme);
        }
      } catch {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Ignore localStorage errors
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}

