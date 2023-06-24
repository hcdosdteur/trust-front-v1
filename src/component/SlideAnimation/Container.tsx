import { styled } from '#/stitches.config';
import TrustImg from '@/assets/icon/trust_in.svg';

const Container1 = () => {
  return (
    <>
      <Container>
        <p>
          <TRUST>TRUST</TRUST>는 해킹에 관심이 있고
        </p>
        <p>배우고자 하는 열정이 있는 친구들이 모여</p>
        <p>함께 해킹을 공부합니다.</p>
      </Container>
    </>
  );
};
const Container2 = () => {
  return (
    <>
      <Container>
        <CustomP>동아리 활동을 통해</CustomP>
        <CustomDiv>
          <p>정보보안의 기본적인 개념, 용어</p>
          <p>프로그래밍 언어</p>
          <p>여러가지 분야의 해킹기법</p>
        </CustomDiv>
        <CustomP>
          등을 학습함으로써 정보보안에 대한 기초적인 지식을 쌓을 수 있습니다
        </CustomP>
      </Container>
    </>
  );
};
const Container3 = () => {
  return (
    <>
      <Container align="center">
        <CustomP>동아리 선배님과</CustomP>
        <CustomDiv flex="row">
          <span>웹해킹</span>
          <span>포너블</span>
          <span>리버싱</span>
          <span>암호학</span>
        </CustomDiv>
        <CustomP>각 분야에 대해 강의하고 실습을 진행합니다</CustomP>
      </Container>
    </>
  );
};
const Container4 = () => {
  return (
    <>
      <Container align="center">
        <CustomP>해킹의 기초를 배우고 실습하면서</CustomP>
        <CustomDiv>
          <p>다양한 해킹 분야에 대해 탐색해보고,</p>
          <p>자신의 흥미에 맞는 분야를 찾을 수 있습니다</p>
        </CustomDiv>
      </Container>
    </>
  );
};
const Container5 = () => {
  const css = {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
  };
  return (
    <>
      <Container css={css} align="center">
        <Logo>
          <TrustLogo />
          <Trust>TRUST</Trust>
        </Logo>
        <CustomDiv>
          <p>에서 함께 해킹을 공부한다면 웃음과 실력,</p>
          <p>두 마리 토끼 모두 잡을 기회를 얻을 수 있습니다.</p>
        </CustomDiv>
      </Container>
    </>
  );
};

export { Container1, Container2, Container3, Container4, Container5 };

const Container = styled('div', {
  width: 'max-content',
  fontSize: '4.5rem',
  wordBreak: 'keep-all',
  variants: {
    align: {
      center: { textAlign: 'center' },
    },
  },
});

const TRUST = styled('span', {
  fontSize: '6rem',
  color: '#fff',
});

const CustomP = styled('p', {
  fontSize: '3rem',
  opacity: '.5',
});

const CustomDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  color: 'inherit',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  gap: '1rem',
  margin: '3rem 0',
  span: { fontSize: 'inherit' },
  variants: {
    flex: {
      row: {
        flexDirection: 'row',
        gap: '9rem',
      },
    },
  },
});

const Logo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Trust = styled('div', {
  fontSize: '6rem',
  fontWeight: 700,
  color: '#fff',
  textIndent: '2rem',
  overflow: 'hidden',
});

const TrustLogo = styled('div', {
  width: '10rem',
  height: '10rem',
  backgroundImage: `url("${TrustImg}")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
});
