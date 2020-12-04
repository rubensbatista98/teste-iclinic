import React from 'react';

import * as S from './styles';

export type ButtonProps = {
  size?: 'medium' | 'large';
  children?: React.ReactNode;
  uppercase?: boolean;
  icon?: JSX.Element;
  minimal?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, icon, ...rest }: ButtonProps) => {
  return (
    <S.Wrapper hasIcon={!!icon} {...rest}>
      {icon ? icon : null}
      {children ? <span>{children}</span> : null}
    </S.Wrapper>
  );
};

Button.defaultProps = {
  size: 'medium',
  uppercase: false,
  minimal: false
};

export default Button;
