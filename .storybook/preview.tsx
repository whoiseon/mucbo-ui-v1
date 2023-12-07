import type { Preview } from '@storybook/react';
import '../src/app/globals.css';
import { themes } from '@storybook/theming';
import MucboProvider from '../src/contexts/MucboProvider';
import StorybookThemeWrapper from '../src/stories/StorybookThemeWrapper';

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      // Override the default dark theme
      dark: { ...themes.dark, appContentBg: '#121212', appBg: '#121212' },
      // Override the default light theme
      light: { ...themes.normal },
      stylePreview: true,
    },
  },
};

export const decorators = [
  (Story) => {
    let theme: 'default' | 'dark' | 'light' = 'default';
    try {
      const data = JSON.parse(localStorage.getItem('sb-addon-themes-3'));
      // document.html.dataset.theme = data.current;
      theme = data.current;
    } catch (e) {}

    return (
      <MucboProvider initialTheme={theme}>
        <StorybookThemeWrapper>
          <Story />
        </StorybookThemeWrapper>
      </MucboProvider>
    );
  },
];
