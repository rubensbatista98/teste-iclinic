import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  renderWithProviders,
  RenderProvidersConfig
} from 'utils/tests/helpers';

import ForceSide from '.';

type RenderRouterConfig = {
  route?: string;
} & RenderProvidersConfig;

const renderWithRouter = (config: RenderRouterConfig = {}) => {
  window.history.pushState({}, 'Force Side', config?.route || '/force-side');

  return renderWithProviders(<ForceSide />, { wrapper: Router, ...config });
};

describe('<ForceSide />', () => {
  test('should render with loading state if is fetching data initially', () => {
    const { container } = renderWithProviders(<ForceSide />, {
      sideProvider: {
        isError: false,
        isLoading: true,
        sideInfo: null,
        updateSide: async () => undefined
      }
    });

    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
    expect(container.childElementCount).toBe(1);
  });

  test('should redirect to home if has no data or if is not fetching', () => {
    renderWithRouter({
      sideProvider: {
        updateSide: async () => undefined,
        isLoading: false,
        sideInfo: null,
        isError: false
      }
    });

    expect(window.location.pathname).toBe('/');
  });
});
