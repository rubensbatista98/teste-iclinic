import { useHistory } from 'react-router-dom';

import { useSide } from 'context/SideContext';

import Heading from 'components/Heading';
import Button from 'components/Button';

import * as S from './styles';

const Home = () => {
  const history = useHistory();
  const { updateSide } = useSide();

  const handleClick = () => {
    updateSide();

    history.push('/force-side');
  };

  return (
    <S.Wrapper>
      <S.Header>
        <Heading>
          Welcome to <strong>iClinic</strong>
        </Heading>

        <S.Subtitle>FrontEnd Challenge</S.Subtitle>
      </S.Header>

      <Button onClick={handleClick} size="large" uppercase>
        Start
      </Button>
    </S.Wrapper>
  );
};

export default Home;
