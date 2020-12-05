import { Link, LinkProps } from 'react-router-dom';

import Heading from 'components/Heading';
import Button from 'components/Button';
import { ReactComponent as ArrowLeft } from 'assets/img/arrow-icon.svg';

import DarthVaderImage from 'assets/img/darth-vader.png';

import * as S from './styles';

const ForceSide = () => {
  return (
    <S.Wrapper>
      <S.PageStyles />

      <Button<LinkProps> as={Link} to="/" icon={<ArrowLeft />} minimal>
        back
      </Button>

      <S.Content>
        <Button>choose your path again, Padawan</Button>

        <S.Image src={DarthVaderImage} alt="Image of Darth Vader" />

        <Heading>
          Your master is <strong>Darth Vader</strong>
        </Heading>
      </S.Content>
    </S.Wrapper>
  );
};

export default ForceSide;
