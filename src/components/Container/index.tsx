import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};

    margin-left: auto;
    margin-right: auto;

    padding-left: ${theme.spacings.xsmall};
    padding-right: ${theme.spacings.xsmall};
  `}
`;
