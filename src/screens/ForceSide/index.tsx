import { Link, LinkProps, useHistory } from 'react-router-dom';

import { useSide } from 'context/SideContext';

import Heading from 'components/Heading';
import Button from 'components/Button';
import { Spinner } from 'components/Spinner';

import { ReactComponent as ArrowLeft } from 'assets/img/arrow-icon.svg';
import VaderImage from 'assets/img/darth-vader.png';
import LukeImage from 'assets/img/luke-skywalker.png';

import * as S from './styles';

const ForceSide = () => {
  const history = useHistory();
  const { sideInfo, isLoading, isError, updateSide } = useSide();

  if (isError) {
    return (
      <Heading>Sorry, we have an unexpected error, try again later...</Heading>
    );
  }

  if (!sideInfo && isLoading) return <Spinner size="large" />;

  if (sideInfo === null) history.replace('/');

  return (
    <S.Wrapper>
      <S.PageStyles side={sideInfo?.side} />

      <Button<LinkProps> as={Link} to="/" icon={<ArrowLeft />} minimal>
        back
      </Button>

      <S.Content role="region" aria-live="polite">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <S.Image
              src={sideInfo?.side === 'dark' ? VaderImage : LukeImage}
              alt={`Image of ${sideInfo?.master}`}
            />

            <Heading>
              Your master is <strong>{sideInfo?.master}</strong>
            </Heading>
          </>
        )}

        <Button disabled={isLoading} onClick={updateSide}>
          choose your path again, Padawan
        </Button>
      </S.Content>
    </S.Wrapper>
  );
};

export default ForceSide;
