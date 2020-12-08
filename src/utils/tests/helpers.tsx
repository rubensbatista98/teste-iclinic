import { render, RenderResult, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { SideProvider, SideContextValue } from 'context/SideContext';

import theme from 'styles/theme';

type ProvidersValues = {
  sideProvider?: SideContextValue;
};

export type RenderProvidersConfig = Omit<RenderOptions, 'queries'> &
  ProvidersValues;

export function renderWithTheme(ui: React.ReactNode): RenderResult {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

/**
 *
 * @param config values to be passed to the providers and react-testing-library's options
 */
export function renderWithProviders(
  ui: React.ReactNode,
  config: RenderProvidersConfig = {}
): RenderResult {
  const { sideProvider, ...options } = config;

  const sideProviderProps = sideProvider ? { value: sideProvider } : {};

  return render(
    <ThemeProvider theme={theme}>
      <SideProvider {...sideProviderProps}>{ui}</SideProvider>
    </ThemeProvider>,
    { ...options }
  );
}
