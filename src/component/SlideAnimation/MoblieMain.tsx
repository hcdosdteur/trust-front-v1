import { RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollTo } from 'react-use-window-scroll';
import { styled } from '#/stitches.config';
import FirstPage from '@/component/FirstPage';

export const MoblieMainPage = () => {
  const [upbtn, setUpbtn] = useState<boolean>(false);

  const scrollTo = useScrollTo();
  const onScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop >= 300) setUpbtn(true);
    else setUpbtn(false);
  };
  const reload = () => scrollTo({ top: 0, left: 0 });

  useEffect(() => {
    window.addEventListener('load', reload);
    return () => {
      window.removeEventListener('load', reload);
    };
  }, []);

  return (
    <Wrapper>
      <SlideContainer>
        <Slide>
          <FirstPage />
        </Slide>
        <Slide>
          <Container>
            <p>
              <TRUST>TRUST</TRUST>는 해킹에 관심이 있고
            </p>
            <p>배우고자 하는 열정이 있는 친구들이 모여</p>
            <p>함께 해킹을 공부합니다.</p>
          </Container>
        </Slide>
        <Slide>
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
        </Slide>
        <Slide>
          <Container>test3</Container>
        </Slide>
        <Slide>
          <Container>test4</Container>
        </Slide>
        <Slide>
          <Container>test5</Container>
        </Slide>
      </SlideContainer>
      <GotoTopBtn opacity={upbtn} onClick={reload}>
        UP
      </GotoTopBtn>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  position: 'relative',
  width: '100vw',
});

const SlideContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

const ScrollDown = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100vh',
  top: 0,
});

const Slide = styled('div', {
  display: 'flex',
  width: '100%',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
});

const GotoTopBtn = styled('button', {
  position: 'fixed',
  bottom: 30,
  right: 30,
  zIndex: 100,
  fontSize: '2rem',
  backgroundColor: 'transparent',
  border: '2px solid rgba(125, 125, 125)',
  borderRadius: '50%',
  padding: '1rem',
  transition: '.08s',
  opacity: '.5',
  variants: {
    opacity: {
      false: {
        visibility: 'hidden',
      },
      true: {
        visibility: 'visible',
      },
    },
  },
  '&:hover': {
    opacity: '1',
  },
});

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
