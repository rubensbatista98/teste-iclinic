import styled, { css, createGlobalStyle } from 'styled-components';

import { Container } from 'components/Container';
import * as ButtonStyles from 'components/Button/styles';

export const PageStyles = createGlobalStyle`
  :root{
    --color-primary: #2a2a2a;
    --color-secondary: #fff;
  }
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

    @media (max-width: 500px) {
      ${ButtonStyles.Wrapper} {
        order: 3;
        margin-top: ${theme.spacings.medium};
      }

      ${Image} {
        margin-top: 0;
      }
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 39rem;
    height: 39rem;

    background-color: var(--color-secondary);

    border-radius: 50%;

    margin: ${theme.spacings.xxlarge} auto ${theme.spacings.xlarge};

    @media (max-width: 700px) {
      width: 25rem;
      height: 25rem;
    }
  `}
`;
