import React from 'react';

import * as S from './styles';

export type ButtonProps = {
  size?: 'medium' | 'large';
  children: React.ReactNode;
  uppercase?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: ButtonProps) => {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>;
};

Button.defaultProps = {
  size: 'medium',
  uppercase: false
};

export default Button;
