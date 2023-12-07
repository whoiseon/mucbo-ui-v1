import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';

export type Theme = 'light' | 'dark' | 'default';

interface Props {
  children: React.ReactNode;
  initialTheme?: Theme;
}

const useIsomorphicEffect =
  typeof window !== 'undefined' ? useEffect : useLayoutEffect;

const ThemeContext = createContext<{
  theme: Theme;
  isDarkTheme: boolean;
  setTheme(theme: Theme): void;
  toggle(): void;
} | null>(null);

function checkIsDarkTheme() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function ThemeProvider({ children, initialTheme = 'default' }: Props) {
  const [theme, setTheme] = useState<'light' | 'dark' | 'default'>(
    initialTheme,
  );
  const [systemIsDark, setSystemIsDark] = useState(() => checkIsDarkTheme());

  useIsomorphicEffect(() => {
    if (theme === 'default') return;
    document.body.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const callback = (e: MediaQueryListEvent) => {
      setSystemIsDark(e.matches);
    };

    const match = window.matchMedia('(prefers-color-scheme: dark)');

    match.addEventListener('change', callback);

    return () => {
      match.removeEventListener('change', callback);
    };
  }, []);

  const isDarkTheme = useMemo(() => {
    if (theme === 'dark') return true;
    return systemIsDark && theme === 'default';
  }, [theme, systemIsDark]);

  const toggle = useCallback(() => {
    if (isDarkTheme) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ theme, isDarkTheme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return value;
}

export default ThemeProvider;
