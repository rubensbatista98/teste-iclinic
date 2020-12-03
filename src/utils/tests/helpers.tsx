import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';

export function renderWithTheme(ui: React.ReactNode): RenderResult {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}
