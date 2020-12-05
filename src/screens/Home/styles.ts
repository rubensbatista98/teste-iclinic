import styled, { css } from 'styled-components';

import { Container } from 'components/Container';

export const Wrapper = styled(Container).attrs({
  as: 'section'
})`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 19rem;
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    text-align: center;
    margin-bottom: ${theme.spacings.huge};
  `}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    text-transform: uppercase;
    letter-spacing: 0.35em;

    margin-top: calc(${theme.spacings.xsmall} / 2);
  `}
`;
