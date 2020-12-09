import React from 'react';

import { getMasterInfo } from 'utils/getMasterInfo';

type SideInfo = {
  side: 'light' | 'dark';
  master: string;
};

type SideState = {
  sideInfo: SideInfo | null;
  isLoading: boolean;
  isError: boolean;
};

type ActionPayload = SideInfo;

type Action = {
  type: 'updating' | 'finished' | 'error';
  payload?: ActionPayload;
};

type SideProviderProps = {
  children: React.ReactNode;
};

export type SideContextValue = {
  updateSide: () => Promise<void>;
} & SideState;

const SideStateContext = React.createContext(
  (null as unknown) as SideContextValue
);

const INITIAL_STATE: SideState = {
  sideInfo: null,
  isLoading: false,
  isError: false
};

const SideProvider = ({ ...props }: SideProviderProps) => {
  const [sideState, dispatch] = React.useReducer(reducer, INITIAL_STATE);

  const updateSide = React.useCallback(async () => {
    dispatch({ type: 'updating' });

    try {
      const master = await getMasterInfo();

      const isNotLukeOrVader =
        master.name.indexOf('Luke') < 0 && master.name.indexOf('Vader') < 0;

      if (isNotLukeOrVader) {
        dispatch({ type: 'error' });
      } else {
        const side = master.name.includes('Vader') ? 'dark' : 'light';

        dispatch({ type: 'finished', payload: { master: master.name, side } });
      }
    } catch (error) {
      dispatch({ type: 'error' });
    }
  }, [dispatch]);

  return (
    <SideStateContext.Provider
      value={{ ...sideState, updateSide }}
      {...props}
    />
  );
};

function useSide() {
  const context = React.useContext(SideStateContext);

  if (context === undefined) {
    throw new Error(`useSide must be used within a SideProvider`);
  }

  return context;
}

function reducer(state: SideState, action: Action): SideState {
  switch (action.type) {
    case 'updating': {
      return { ...state, isLoading: true };
    }

    case 'finished': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        sideInfo: action.payload ?? null
      };
    }

    case 'error': {
      return { ...state, isLoading: false, isError: true };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export { SideProvider, useSide };
