import { keyframes, styled } from '#/stitches.config';
import { useEffect, useState } from 'react';
import { MainMenu, SubMenu } from '@/component/Navigation';
import TrustImg from '@/assets/icon/trust_in.svg';

const FirstPage: React.FC<{ device: string }> = ({ device }) => {
  const [isTop, setisTop] = useState<boolean>(true);
  const [enterMenu, setEnterMenu] = useState<boolean>(false);

  const onMouseEnter = () => setEnterMenu(true);
  const onMouseLeave = () => setEnterMenu(false);

  const onScroll = () => {
    if (window.scrollY === 0) setisTop(true);
    else setisTop(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <MainContainer>
      <Logo>
        <TrustLogo />
        <Trust>TRUST</Trust>
      </Logo>
      {device === 'moblie' && <SubMenu />}
      {device === 'pc' && (
        <MainMenuContainer
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <MainMenu top={isTop && (enterMenu ? true : false)} />
        </MainMenuContainer>
      )}
    </MainContainer>
  );
};

export default FirstPage;

const T_width: number = 32;
const slideText1 = keyframes({
  from: { width: 0 },
  to: { width: `${T_width}rem` },
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
  width: `${T_width}rem`,
  textIndent: '1.8rem',
  animation: `${slideText1} .7s ease-in-out`,
  animationDelay: '1.6s',
  animationFillMode: 'backwards',
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
});
