import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    :root {
      --color-primary: ${theme.colors.white};
      --color-secondary: ${theme.colors.blue};
    }

    * {
      box-sizing: border-box;

      margin: 0;
      padding: 0;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      color: var(--color-secondary);
      background-color: var(--color-primary);
    }
  `}


`;

export default GlobalStyles;
