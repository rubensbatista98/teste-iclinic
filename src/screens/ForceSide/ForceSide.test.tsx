import React from 'react';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';

import { useSide } from 'context/SideContext';
import { getMasterInfo } from 'utils/getMasterInfo';
import {
  renderWithProviders,
  RenderProvidersConfig
} from 'utils/tests/helpers';

import ForceSide from '.';

jest.mock('utils/getMasterInfo', () => ({
  __esModule: true,
  getMasterInfo: jest.fn()
}));

type RenderRouterOptions = {
  callUpdate?: boolean;
} & RenderProvidersConfig;

const renderWithRouter = (options: RenderRouterOptions = {}) => {
  const { callUpdate, ...config } = options;

  window.history.pushState({}, 'Force Side', '/force-side');

  const ui = () =>
    callUpdate ? (
      // starts making the call to updateSide
      <CallUpdateSide>
        <ForceSide />
      </CallUpdateSide>
    ) : (
      <ForceSide />
    );

  return renderWithProviders(ui(), {
    wrapper: Router,
    ...config
  });
};

async function testIfChangeMaster(newMaster: 'luke' | 'vader') {
  const getMasterHeading = (name: 'luke' | 'vader') =>
    `Your master is ${name === 'luke' ? 'Luke Skywalker' : 'Darth Vader'}`;

  const firstLoadingElement = screen.getByLabelText(/loading/i);

  await waitForElementToBeRemoved(firstLoadingElement);

  const oldMasterHeading = screen.getByRole('heading', {
    name: getMasterHeading(newMaster === 'luke' ? 'vader' : 'luke')
  });

  expect(oldMasterHeading).toBeInTheDocument();

  const button = screen.getByRole('button', { name: /choose your path/i });

  expect(button).toBeInTheDocument();

  userEvent.click(button);

  const secondLoadingElement = screen.getByLabelText(/loading/i);

  expect(secondLoadingElement).toBeInTheDocument();

  await waitForElementToBeRemoved(secondLoadingElement);

  expect(oldMasterHeading).not.toBeInTheDocument();

  expect(
    screen.getByAltText(
      `Image of ${newMaster === 'luke' ? 'Luke Skywalker' : 'Darth Vader'}`
    )
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: getMasterHeading(newMaster) })
  ).toBeInTheDocument();
}

function CallUpdateSide({ children }: { children: React.ReactNode }) {
  const { updateSide } = useSide();

  React.useEffect(() => {
    updateSide();
  }, [updateSide]);

  return <div>{children}</div>;
}

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

  test('should display the dark side screen if get Vader when the button "choose your path" is clicked', async () => {
    (getMasterInfo as jest.Mock)
      .mockResolvedValue({ name: 'Darth Vader' })
      // first get Luke data
      .mockResolvedValueOnce({
        name: 'Luke Skywalker'
      });

    renderWithRouter({ callUpdate: true });

    await testIfChangeMaster('vader');
  });

  test('should display the light side screen if get Luke when the button "choose your path" is clicked', async () => {
    (getMasterInfo as jest.Mock)
      .mockResolvedValue({ name: 'Luke Skywalker' })
      // first get Vader data
      .mockResolvedValueOnce({
        name: 'Darth Vader'
      });

    renderWithRouter({ callUpdate: true });

    await testIfChangeMaster('luke');
  });

  test('should display error message if getMasterInfo get wrong data', async () => {
    (getMasterInfo as jest.Mock).mockResolvedValueOnce({
      name: 'Obi-Wan Kenobi'
    });

    renderWithRouter({ callUpdate: true });

    await waitForElementToBeRemoved(screen.getByLabelText(/loading/i));

    expect(
      screen.getByRole('heading', {
        name: /sorry, we have an unexpected error/i
      })
    ).toBeInTheDocument();
  });

  test('should display error message if getMasterInfo throw an error', async () => {
    (getMasterInfo as jest.Mock).mockRejectedValueOnce({
      error: 'some error'
    });

    renderWithRouter({ callUpdate: true });

    await waitForElementToBeRemoved(screen.getByLabelText(/loading/i));

    expect(
      screen.getByRole('heading', {
        name: /sorry, we have an unexpected error/i
      })
    ).toBeInTheDocument();
  });
});
