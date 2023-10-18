import { styled } from '#/stitches.config';

import hyeonseo from '@/assets/profile/baekhyeonseo.png';
import dohyeon from '@/assets/profile/kimdohyeon.png';
import { ReactComponent as gyeongmin } from '@/assets/profile/kimgyeongmin.svg';
import { Card } from '@/component/profile';

export const Member = () => {
  return (
    <Wrapper>
      <Container>
        <Card
          Img={hyeonseo}
          name="Baek-HyeonSeo"
          type="crypto"
          hashtag={['KDMHS', '21HD', 'cat_lover']}
        />
        <Card
          Img={gyeongmin}
          name="Kim-Gyeongmin"
          type="rev"
          hashtag={['KDMHS', '21HD']}
        />
        <Card
          Img={dohyeon}
          name="Kim-Dohyeon"
          type="web"
          hashtag={['hcdosdteur', 'D0Dos', 'KDMHS', '21HD', 'cat_lover']}
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
});

const Container = styled('div', {
  display: 'grid',
  paddingTop: '18rem',
  paddingBottom: '18rem',
  gridTemplateColumns: 'repeat(auto-fill, minmax(53rem, 1fr))',
  // display: 'flex',
  // alignItems: 'center',
  placeItems: 'start center',
  width: '100%',
  maxWidth: '109rem',
  height: 'fit-content',
  gap: '3rem',
  borderRadius: '.5rem',
  userSelect: 'none',
});
