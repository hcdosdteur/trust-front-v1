import { RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollTo } from 'react-use-window-scroll';
import { styled } from '#/stitches.config';
import FirstPage from '@/component/FirstPage';
import {
  Container1,
  Container2,
  Container3,
  Container4,
  Container5,
} from '@/component/SlideAnimation';

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
          <FirstPage device="moblie" />
        </Slide>
        <Slide>
          <Container1 />
        </Slide>
        <Slide>
          <Container2 />
        </Slide>
        <Slide>
          <Container3 />
        </Slide>
        <Slide>
          <Container4 />
        </Slide>
        <Slide>
          <Container5 />
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
