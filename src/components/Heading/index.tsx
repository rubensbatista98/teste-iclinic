import * as S from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  size?: 'medium' | 'huge';
};

/**
 * Put a content inside a `strong` HTML tag to highlight
 */

const Heading = ({ children, size = 'medium' }: HeadingProps) => {
  return <S.Wrapper size={size}>{children}</S.Wrapper>;
};

export default Heading;
