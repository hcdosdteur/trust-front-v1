import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useScrollTo } from 'react-use-window-scroll';
import { styled } from '#/stitches.config';
import FirstPage from '@/component/FirstPage';

import { def } from '@/component/SlideAnimation/Def';
import { elementType, defObj } from '@/types/scrollAnimation';

export const PcMainPage = () => {
  const enabled = new Map();
  const disabled = new Map();

  const isAmong = (num: number, top: number, bottom: number) => {
    return num >= top && num <= bottom;
  };
  const getPoint = (top: number, bottom: number, rate: number) => {
    return top + (bottom - top) * rate;
  };

  const [upbtn, setUpbtn] = useState<boolean>(false);

  const stickyContainer = useRef<HTMLDivElement>(null);
  const scrollDown = useRef<HTMLDivElement>(null);
  const slide1 = useRef<HTMLDivElement>(null);
  const slide2 = useRef<HTMLDivElement>(null);
  const slide3 = useRef<HTMLDivElement>(null);
  const slide4 = useRef<HTMLDivElement>(null);
  const slide5 = useRef<HTMLDivElement>(null);

  const elements: elementType = {
    'sticky-container': stickyContainer,
    'scroll-down': scrollDown,
    slide1: slide1,
    slide2: slide2,
    slide3: slide3,
    slide4: slide4,
    slide5: slide5,
  };

  const applyStyle = (
    element: HTMLDivElement | null,
    styleName: any,
    value: number,
  ) => {
    if (element) {
      if (styleName === 'translateY') {
        element.style.transform = `translateY(${value / 10}rem)`;
        return;
      }
      element.style[styleName] = `${value}`;
    }
  };

  const applyStyles = (id: string, styles: any[], rate: number) => {
    styles.forEach((style) => {
      const { name, topValue, bottomValue } = style;
      const value = getPoint(topValue, bottomValue, rate);
      applyStyle(elements[id].current, name, value);
    });
  };

  const applyAnimations = (currentPos: number, id: string) => {
    const animations = def.get(id)?.animations;
    if (!animations) return;

    animations.forEach((animation) => {
      const { top: a_top, bottom: a_bottom, easing, styles } = animation;
      const isIn = isAmong(currentPos, a_top, a_bottom);

      if (isIn && !animation.enabled) {
        animation.enabled = true;
      } else if (!isIn && animation.enabled) {
        if (currentPos <= a_top) {
          applyStyles(id, styles, 0);
        } else if (currentPos >= a_bottom) {
          applyStyles(id, styles, 1);
        }
        animation.enabled = false;
      }

      if (animation.enabled) {
        const rate = easing((currentPos - a_top) / (a_bottom - a_top));
        applyStyles(id, styles, rate);
      }
    });
  };

  const onScroll = () => {
    const scrollTop = window.scrollY;
    const currentPos = scrollTop + window.innerHeight / 2;

    if (scrollTop >= 300) setUpbtn(true);
    else setUpbtn(false);

    disabled.forEach((obj: defObj, id: string) => {
      if (isAmong(currentPos, obj.top, obj.bottom)) {
        enabled.set(id, obj);
        elements[id].current?.classList.remove('disabled');
        elements[id].current?.classList.add('enabled');
        disabled.delete(id);
      }
    });

    enabled.forEach((obj: defObj, id: string) => {
      const { top, bottom, topStyle, bottomStyle } = obj;

      if (!isAmong(currentPos, top, bottom)) {
        if (currentPos <= top) {
          Object.entries(topStyle).forEach(([styleName, value]) => {
            applyStyle(elements[id].current, styleName, value);
          });
        } else if (currentPos >= bottom) {
          Object.entries(bottomStyle).forEach(([styleName, value]) => {
            applyStyle(elements[id].current, styleName, value);
          });
        }

        disabled.set(id, obj);
        elements[id].current?.classList.remove('enabled');
        elements[id].current?.classList.add('disabled');
        enabled.delete(id);
      } else {
        applyAnimations(currentPos, id);
      }
    });
  };

  const initAnimation = () => {
    def.forEach((obj, id) => {
      disabled.set(id, obj);
    });

    disabled.forEach((obj: defObj, id: string) => {
      Object.keys(obj.topStyle).forEach((styleName: string) => {
        const pushValue = obj.topStyle[styleName];
        applyStyle(elements[id].current, styleName, pushValue);
      });
    });

    onScroll();
  };

  const checkState = (id: string) => {
    if (elements[id].current?.className.includes('enabled')) return 'enabled';
    else return undefined;
  };

  const scrollTo = useScrollTo();
  const reload = () => scrollTo({ top: 0, left: 0 });

  useLayoutEffect(() => {
    initAnimation();
  }, []);

  useEffect(() => {
    reload();
    window.addEventListener('load', reload);
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('load', reload);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <StickyContainer ref={stickyContainer}>
      <Sticky>
        <SlideContainer>
          <Slide
            ref={slide1}
            state={checkState('slide1') === 'enabled' ? 'enabled' : undefined}
          >
            <Container>
              <p>
                <TRUST>TRUST</TRUST>는 해킹에 관심이 있고
              </p>
              <p>배우고자 하는 열정이 있는 친구들이 모여</p>
              <p>함께 해킹을 공부합니다.</p>
            </Container>
          </Slide>
          <ScrollDown ref={scrollDown}>
            <FirstPage />
          </ScrollDown>
          <Slide
            ref={slide2}
            state={checkState('slide2') === 'enabled' ? 'enabled' : undefined}
          >
            <Container>
              <CustomP>동아리 활동을 통해</CustomP>
              <CustomDiv>
                <p>정보보안의 기본적인 개념, 용어</p>
                <p>프로그래밍 언어</p>
                <p>여러가지 분야의 해킹기법</p>
              </CustomDiv>
              <CustomP>
                등을 학습함으로써 정보보안에 대한 기초적인 지식을 쌓을 수
                있습니다
              </CustomP>
            </Container>
          </Slide>
          <Slide
            ref={slide3}
            state={checkState('slide3') === 'enabled' ? 'enabled' : undefined}
          >
            <Container>test3</Container>
          </Slide>
          <Slide
            ref={slide4}
            state={checkState('slide4') === 'enabled' ? 'enabled' : undefined}
          >
            <Container>test4</Container>
          </Slide>
          <Slide
            ref={slide5}
            state={checkState('slide5') === 'enabled' ? 'enabled' : undefined}
          >
            <Container>test5</Container>
          </Slide>
        </SlideContainer>
        <GotoTopBtn opacity={upbtn} onClick={reload}>
          UP
        </GotoTopBtn>
      </Sticky>
    </StickyContainer>
  );
};

const StickyContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '710rem',
});

const Sticky = styled('div', {
  position: 'sticky',
  top: 0,
  width: '100%',
  height: '100vh',
  userSelect: 'none',
});

const SlideContainer = styled('div', {
  position: 'relative',
  display: 'flex',
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
  position: 'absolute',
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  variants: {
    state: {
      enabled: {
        display: 'flex !important',
      },
    },
  },
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
