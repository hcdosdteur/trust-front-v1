import type { Member as MemberType } from '@/context/api';
import type { Admin } from '@/utils/types';

import { useContext, useEffect, useState } from 'react';

import { styled } from '#/stitches.config';

import hyeonseo from '@/assets/profile/baekhyeonseo.png';
import { ReactComponent as chohyeonjae } from '@/assets/profile/chohyeonjae.svg';
import { ReactComponent as jeonmingi } from '@/assets/profile/jeonmingi.svg';
import dohyeon from '@/assets/profile/kimdohyeon.png';
import { ReactComponent as gyeongmin } from '@/assets/profile/kimgyeongmin.svg';
import { ReactComponent as kimjiho } from '@/assets/profile/kimjiho.svg';
import { ReactComponent as leeyeil } from '@/assets/profile/leeyeil.svg';
import { Card } from '@/component/profile';
import { ApiContext } from '@/context/api';

export const Member = () => {
  const [memberArr, setMemberArr] = useState<MemberType[]>([]);
  const { member } = useContext(ApiContext);

  const img = {
    'Kim-Dohyeon': dohyeon,
    'Baek-Hyeonseo': hyeonseo,
    'Kim-Gyeongmin': gyeongmin,
    'Cho-Hyeonjae': chohyeonjae,
    'Jeon-Mingi': jeonmingi,
    'Kim-Jiho': kimjiho,
    'Lee-Yeil': leeyeil,
  };

  const getMember = async () => {
    const res = await member.get();
    console.log(res);
    setMemberArr(res as MemberType[]);
  };

  useEffect(() => {
    getMember();
  }, []);

  return (
    <Wrapper>
      <Container>
        {memberArr.map((props, idx) => (
          <Card
            Img={img[props.name as Admin]}
            name={props.name}
            type={props.type}
            hashtag={props.hashtag}
            key={idx}
          />
        ))}
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
