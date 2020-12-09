import React from 'react';
import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  renderWithProviders,
  RenderProvidersConfig
} from 'utils/tests/helpers';

import ForceSide from '.';

type RenderRouterOptions = RenderProvidersConfig;

const renderWithRouter = (options: RenderRouterOptions = {}) => {
  const { ...config } = options;

  window.history.pushState({}, 'Force Side', '/force-side');

  return renderWithProviders(<ForceSide />, {
    wrapper: Router,
    ...config
  });
};

describe('<ForceSide />', () => {
  test('should render with loading state if is fetching data initially', () => {
    const { container } = renderWithRouter({
      sideProvider: {
        isError: false,
        isLoading: true,
        sideInfo: null,
        updateSide: async () => void 0
      }
    });

    expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
    expect(container.childElementCount).toBe(1);
  });

  test('should redirect to home if does not has or is not fetching data', () => {
    renderWithRouter({
      sideProvider: {
        updateSide: async () => void 0,
        isLoading: false,
        sideInfo: null,
        isError: false
      }
    });

    expect(window.location.pathname).toBe('/');
  });

  test('should render the dark side screen if has Darth Vader as master', () => {
    renderWithRouter({
      sideProvider: {
        isError: false,
        isLoading: false,
        sideInfo: {
          master: 'Darth Vader',
          side: 'dark'
        },
        updateSide: async () => void 0
      }
    });

    expect(
      screen.getByRole('heading', {
        name: /your master is darth vader/i
      })
    ).toBeInTheDocument();

    expect(screen.getByAltText(/image of darth vader/i)).toBeInTheDocument();
  });

  test('should render the light side screen if has Luke Skywalker as master', () => {
    renderWithRouter({
      sideProvider: {
        isError: false,
        isLoading: false,
        sideInfo: {
          master: 'Luke Skywalker',
          side: 'light'
        },
        updateSide: async () => void 0
      }
    });

    expect(
      screen.getByRole('heading', {
        name: /your master is luke skywalker/i
      })
    ).toBeInTheDocument();

    expect(screen.getByAltText(/image of luke skywalker/i)).toBeInTheDocument();
  });
});
