import styled, { css, DefaultTheme } from 'styled-components';

import { ButtonProps } from '.';

export type WrapperProps = Omit<ButtonProps, 'children'>;

const wrapperModifiers = {
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    padding: 0px ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
    padding: 0px ${theme.spacings.xlarge};
  `,
  uppercase: () => css`
    text-transform: uppercase;
    letter-spacing: 0.5rem;
  `,
  disabled: () => css`
    opacity: 0.5;
    pointer-events: none;
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, uppercase, disabled }) => css`
    height: 5.6rem;

    font-family: ${theme.font.family};
    font-weight: ${theme.font.bold};
    color: var(--color-primary);

    background-color: var(--color-secondary);

    border: 0;
    border-radius: ${theme.border.radius};
    outline: none;

    cursor: pointer;

    position: relative;

    &::after {
      content: '';

      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;

      box-shadow: inset 2px 2px 10px var(--color-primary),
        inset -2px -2px 10px var(--color-primary);

      opacity: 0;

      pointer-events: none;

      transition: opacity 200ms ease-in;
    }

    &:hover::after,
    &:focus::after {
      opacity: 1;
    }

    &:active::after {
      opacity: 0;
    }

    ${wrapperModifiers[size!](theme)}
    ${uppercase && wrapperModifiers.uppercase()}
    ${disabled && wrapperModifiers.disabled()}
  `}
`;
