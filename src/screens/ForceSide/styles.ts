import styled, {
  DefaultTheme,
  css,
  createGlobalStyle
} from 'styled-components';

import { Spinner } from 'components/Spinner/';
import { Container } from 'components/Container';
import * as ButtonStyles from 'components/Button/styles';

type pageStylesProps = {
  side?: 'light' | 'dark';
};

const pageStylesModifiers = {
  dark: (theme: DefaultTheme) => css`
    :root {
      --color-primary: ${theme.colors.black};
      --color-secondary: ${theme.colors.white};
    }
  `,
  light: (theme: DefaultTheme) => css`
    :root {
      --color-primary: ${theme.colors.yellow};
      --color-secondary: ${theme.colors.black};
    }
  `
};

export const PageStyles = createGlobalStyle<pageStylesProps>`
  ${({ theme, side }) => css`
    ${!!side && pageStylesModifiers[side](theme)}
  `}
`;

export const Wrapper = styled(Container).attrs({
  as: 'section'
})`
  ${({ theme }) => css`
    min-height: 100vh;
    padding: ${theme.spacings.large} ${theme.spacings.xlarge}
      ${theme.spacings.xlarge};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    margin: ${theme.spacings.xxxlarge} auto 0;

    ${Spinner} {
      position: relative;

      top: 0;
      left: 2.5rem;

      margin: 5rem auto 0;
    }

    ${ButtonStyles.Wrapper} {
      margin-top: ${theme.spacings.medium};
    }

    @media (min-width: 500px) {
      ${Image} {
        margin-top: ${theme.spacings.xxlarge};
      }

      ${ButtonStyles.Wrapper} {
        order: -1;
        margin-top: 0;
      }
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 25rem;
    height: 25rem;

    background-color: var(--color-secondary);

    border-radius: 50%;

    margin: 0 auto ${theme.spacings.xlarge};

    @media (min-width: 700px) {
      width: 25rem;
      height: 25rem;
    }
  `}
`;
