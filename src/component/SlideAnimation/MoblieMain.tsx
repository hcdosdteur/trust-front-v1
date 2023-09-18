import { useEffect, useState } from 'react';

import { styled } from '#/stitches.config';

import FirstPage from '@/component/FirstPage';
import {
  Container1,
  Container2,
  Container3,
  Container4,
  Container5,
} from '@/component/slideAnimation';

export const MobileMainPage = () => {
  const [upbtn, setUpbtn] = useState<boolean>(false);

  const onScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop >= 300) setUpbtn(true);
    else setUpbtn(false);
  };
  const reload = () => window.scrollTo(0, 0);

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
          <FirstPage device="mobile" />
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
