import { styled } from '#/stitches.config';

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
      <Container>
        <CustomP>동아리 선배님과</CustomP>
        <CustomDiv>
          <span>웹해킹</span>
        </CustomDiv>
        <CustomP>각 분야에 대해 강의하고 실습을 진행합니다</CustomP>
      </Container>
    </>
  );
};
const Container4 = () => {
  return (
    <>
      <Container>test4</Container>
    </>
  );
};
const Container5 = () => {
  return (
    <>
      <Container>test5</Container>
    </>
  );
};

export { Container1, Container2, Container3, Container4, Container5 };

const Container = styled('div', {
  width: 'max-content',
  fontSize: '4.5rem',
  wordBreak: 'keep-all',
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
});
