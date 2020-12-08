import { screen } from '@testing-library/react';

import { renderWithProviders } from 'utils/tests/helpers';

import Home from '.';

describe('<Home />', () => {
  test('should render Home correctly', () => {
    renderWithProviders(<Home />);

    expect(
      screen.getByRole('heading', { name: /welcome to iclinic/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /frontend challenge/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /start/i })).toBeInTheDocument();
  });
});
