import styled, { css } from 'styled-components';

export type SpinnerProps = {
  size?: 'medium' | 'large';
};

export const Spinner = styled.div.attrs({
  role: 'status',
  'aria-label': 'Loading'
})<SpinnerProps>`
  ${({ size = 'medium' }) => css`
    border: 0.8rem solid var(--color-secondary);
    border-left-color: var(--color-primary);
    border-radius: 50%;

    width: ${size === 'medium' ? '5rem' : '7.5rem'};
    height: ${size === 'medium' ? '5rem' : '7.5rem'};

    animation: spin 1s linear infinite;

    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    :focus {
      border-left-color: black;
    }

    @keyframes spin {
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  `}
`;
