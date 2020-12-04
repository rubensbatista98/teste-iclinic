import styled, { css, DefaultTheme } from 'styled-components';

import { HeadingProps } from '.';

export type WrapperProps = Pick<HeadingProps, 'size'>;

const wrapperModifiers = {
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `
};

export const Wrapper = styled.h1<WrapperProps>`
  ${({ theme, size }) => css`
    font-weight: ${theme.font.normal};

    strong {
      font-weight: ${theme.font.bold};
    }

    ${wrapperModifiers[size!](theme)}
  `}
`;
