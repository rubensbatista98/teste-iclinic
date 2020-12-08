import { screen } from '@testing-library/react';

import { renderWithProviders } from 'utils/tests/helpers';

import ForceSide from '.';

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
});
