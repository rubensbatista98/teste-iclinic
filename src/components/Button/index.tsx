/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';

import * as S from './styles';

export type ButtonProps<T = {}> = {
  size?: 'medium' | 'large';
  children?: React.ReactNode;
  uppercase?: boolean;
  icon?: JSX.Element;
  minimal?: boolean;
  disabled?: boolean;

  /**
   * Pass `R` param type of the generic
   * to extends acceptable props of the Button and be use on extended component
   */
  as?: React.ElementType;
} & (T | React.ButtonHTMLAttributes<HTMLButtonElement>);

/**
 * @description `R` type param generic will extends acceptable props of the Button
 */

function Button<R = {}>({ children, icon, disabled, ...rest }: ButtonProps<R>) {
  return (
    <S.Wrapper
      aria-disabled={disabled}
      disabled={disabled}
      hasIcon={!!icon}
      {...rest}
    >
      {icon ? icon : null}
      {children ? <span>{children}</span> : null}
    </S.Wrapper>
  );
}

Button.defaultProps = {
  size: 'medium',
  uppercase: false,
  minimal: false,
  disabled: false
};

export default Button;
