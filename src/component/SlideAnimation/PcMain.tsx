import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { styled, keyframes } from '#/stitches.config';
import FirstPage from '@/component/FirstPage';
import {
  Container1,
  Container2,
  Container3,
  Container4,
  Container5,
} from '@/component/SlideAnimation';

import { def } from '@/component/SlideAnimation/Def';
import { elementType, defObj } from '@/types/scrollAnimation';
import arrow from '@/assets/icon/arrow.svg';
import { useLocation } from 'react-router-dom';

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

    if (scrollTop >= 200) setUpbtn(true);
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

  const scrollToTop = () => window.scrollTo({ top: 0, left: 0 });

  useLayoutEffect(() => {
    initAnimation();
  }, []);

  useEffect(() => {
    window.addEventListener('beforeunload', scrollToTop);

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('beforeunload', scrollToTop);
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
            <Container1 />
          </Slide>
          <ScrollDown ref={scrollDown}>
            <FirstPage device="pc" />
          </ScrollDown>
          <Slide
            ref={slide2}
            state={checkState('slide2') === 'enabled' ? 'enabled' : undefined}
          >
            <Container2 />
          </Slide>
          <Slide
            ref={slide3}
            state={checkState('slide3') === 'enabled' ? 'enabled' : undefined}
          >
            <Container3 />
          </Slide>
          <Slide
            ref={slide4}
            state={checkState('slide4') === 'enabled' ? 'enabled' : undefined}
          >
            <Container4 />
          </Slide>
          <Slide
            ref={slide5}
            state={checkState('slide5') === 'enabled' ? 'enabled' : undefined}
          >
            <Container5 />
          </Slide>
        </SlideContainer>
        <GotoTopBtn opacity={upbtn} onClick={scrollToTop} />
      </Sticky>
    </StickyContainer>
  );
};

const StickyContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '730rem',
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

const hidden = keyframes({
  '0%': { transform: 'translateX(0)' },
  '100%': { transform: 'translateX(10rem)' },
});
const show = keyframes({
  '0%': { transform: 'translateX(10rem)' },
  '100%': { transform: 'translateX(0)' },
});

const GotoTopBtn = styled('button', {
  position: 'fixed',
  width: '4.5rem',
  height: '4.5rem',
  bottom: 30,
  right: 30,
  zIndex: 100,
  fontSize: '2rem',
  backgroundColor: 'transparent',
  border: '2px solid rgba(125, 125, 125)',
  borderRadius: '50%',
  padding: '1rem',
  transition: 'all ease-in-out',
  transform: 'translateX(10rem)',
  opacity: '.5',
  backgroundImage: `url("${arrow}")`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  variants: {
    opacity: {
      false: {
        animation: `${hidden} 300ms`,
        animationFillMode: 'forwards',
      },
      true: {
        animation: `${show} 300ms`,
        animationFillMode: 'forwards',
      },
    },
  },
  '&:hover': {
    opacity: '1',
  },
});
