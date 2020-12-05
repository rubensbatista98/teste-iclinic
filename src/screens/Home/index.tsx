import { Link, LinkProps } from 'react-router-dom';

import Heading from 'components/Heading';
import Button from 'components/Button';

import * as S from './styles';

const Home = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <Heading>
          Welcome to <strong>iClinic</strong>
        </Heading>

        <S.Subtitle>FrontEnd Challenge</S.Subtitle>
      </S.Header>

      <Button<LinkProps> as={Link} to="/force-side" size="large" uppercase>
        Start
      </Button>
    </S.Wrapper>
  );
};

export default Home;
