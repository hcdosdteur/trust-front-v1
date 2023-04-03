import { keyframes, styled } from '#/stitches.config';
import { useEffect, useState } from 'react';
import { MainMenu } from '@/component/Navigation/MainMenu';
import TrustImg from '@/assets/icon/trust_in.svg';

const FirstPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isTop, setisTop] = useState<boolean>(true);
  const [enterMenu, setEnterMenu] = useState<boolean>(false);

  const n = 1; // 1 or 2

  const fetchTest = async () => {
    setLoading(true);
    try {
      const result = await fetch(`/api/test`);
      let data = await result.text();
      console.log(data);
      setLoading(false);
    } catch (error) {
      window.alert('ERROR');
    }
  };

  const onMouseEnter = () => setEnterMenu(true);
  const onMouseLeave = () => setEnterMenu(false);

  const onScroll = () => {
    if (window.scrollY === 0) setisTop(true);
    else setisTop(false);
  };

  useEffect(() => {
    // fetchTest();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <MainContainer animation={n}>
      <Logo>
        <TrustLogo animation={n} />
        <Trust animation={n}>TRUST</Trust>
      </Logo>
      <MainMenuContainer
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <MainMenu top={isTop && (enterMenu ? true : false)} />
      </MainMenuContainer>
    </MainContainer>
  );
};

export default FirstPage;

const slideText1 = keyframes({
  from: { width: 0 },
  to: { width: '33rem' },
});
const slideText2 = keyframes({
  from: { width: 0 },
  to: { width: '25rem' },
});
const imgOpacity1 = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});
const imgOpacity2 = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0.25 },
});
const imgOpacity = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const MainContainer = styled('div', {
  display: 'flex',
  position: 'relative',
  width: '100%',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    animation: {
      1: {},
      2: {
        '&:before': {
          content: '',
          position: 'absolute',
          backgroundImage: `url("${TrustImg}")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          zIndex: -1,
          width: '60rem',
          height: '60rem',
          opacity: 0,
          animation: `${imgOpacity1} .2s ease-in, ${imgOpacity2} .5s ease-out`,
          animationFillMode: 'forwards, forwards',
          animationDelay: '.2s, 1s',
        },
      },
    },
  },
});

const MainMenuContainer = styled('div', {
  position: 'absolute',
  bottom: '1rem',
  minWidth: '35rem',
  height: '5.5rem',
});

const Logo = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const Trust = styled('div', {
  fontSize: '8rem',
  fontWeight: 700,
  color: '#fff',
  overflow: 'hidden',
  variants: {
    animation: {
      1: {
        width: '33rem',
        textIndent: '1.5rem',
        animation: `${slideText1} .7s ease-in-out`,
        animationDelay: '1.6s',
        animationFillMode: 'backwards',
      },
      2: {
        width: '25rem',
        textAlign: 'center',
        animation: `${slideText2} .7s ease-in-out`,
        animationDelay: '1.8s',
        animationFillMode: 'backwards',
      },
    },
  },
  // animationFillMode: 'backwards',
});

const TrustLogo = styled('div', {
  width: '13rem',
  height: '13rem',
  backgroundImage: `url("${TrustImg}")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  animation: `${imgOpacity} .5s ease`,
  animationDelay: '.5s',
  animationFillMode: 'backwards',
  variants: {
    animation: {
      1: {},
      2: {
        display: 'none',
      },
    },
  },
});
