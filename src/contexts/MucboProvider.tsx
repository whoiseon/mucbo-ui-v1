import React from 'react';
import ThemeProvider, { Theme } from './ThemeProvider';

interface Props {
  initialTheme?: Theme;
  children: React.ReactNode;
}

function MucboProvider({ children, initialTheme }: Props) {
  return <ThemeProvider initialTheme={initialTheme}>{children}</ThemeProvider>;
}

export default MucboProvider;
