import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  renderWithProviders,
  RenderProvidersConfig
} from 'utils/tests/helpers';

import Home from '.';

type RenderRouter = {
  route?: string;
} & RenderProvidersConfig;

const renderWithRouter = (config: RenderRouter = {}) => {
  window.history.pushState({}, 'Home', config?.route || '/');

  return renderWithProviders(<Home />, { wrapper: Router, ...config });
};

describe('<Home />', () => {
  test('should render Home correctly', () => {
    renderWithRouter();

    expect(
      screen.getByRole('heading', { name: /welcome to iclinic/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /frontend challenge/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /start/i })).toBeInTheDocument();
  });

  test('should call updateSide and go to page force-side when start button is clicked', () => {
    const updateSide = jest.fn();

    renderWithRouter({
      sideProvider: {
        updateSide,
        isError: false,
        isLoading: false,
        sideInfo: null
      }
    });

    userEvent.click(screen.getByRole('button', { name: /start/i }));

    expect(updateSide).toHaveBeenCalled();
    expect(window.location.pathname).toBe('/force-side');
  });
});
