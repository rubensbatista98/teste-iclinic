import styled, { css, DefaultTheme } from 'styled-components';

import { ButtonProps } from '.';

export type WrapperProps = Omit<ButtonProps, 'children'> & { hasIcon: boolean };

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
  `,
  withIcon: () => css`
    svg {
      width: 2.5rem;
      height: 2rem;

      fill: currentColor;

      & + span {
        margin-left: 1rem;
      }
    }
  `,
  minimal: () => css`
    background: none;
    padding: 0 1.5rem;
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, uppercase, disabled, hasIcon, minimal }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 5.6rem;

    font-family: ${theme.font.family};
    font-weight: ${theme.font.bold};
    color: var(--color-primary);

    background-color: var(--color-secondary);

    border: 0;
    border-radius: ${theme.border.radius};
    outline: none;

    cursor: pointer;

    overflow: hidden;
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
    ${hasIcon && wrapperModifiers.withIcon()}
    ${minimal && wrapperModifiers.minimal()}
  `}
`;
