import { useEffect, useState } from 'react';

import { keyframes, styled } from '#/stitches.config';

import TrustImg from '@/assets/icon/trust_in.svg';
import { MainMenu, SubMenu } from '@/component/navigation';

const FirstPage: React.FC<{ device: string }> = ({ device }) => {
  const [isTop, setisTop] = useState<boolean>(false);

  const onScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop >= 200) setisTop(false);
    else setisTop(true);
  };

  useEffect(() => {
    onScroll();
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
        <MainMenuContainer>
          <MainMenu top={isTop} />
        </MainMenuContainer>
      )}
    </MainContainer>
  );
};

export default FirstPage;

const T_width: number = 21.5;
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
  zIndex: '100',
});

const MainMenuContainer = styled('div', {
  position: 'absolute',
  bottom: '1rem',
  minWidth: '40rem',
  height: '5.5rem',
});

const Logo = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const Trust = styled('div', {
  fontSize: '6rem',
  fontWeight: 700,
  color: '#fff',
  overflow: 'hidden',
  width: `${T_width}rem`,
  textIndent: '2rem',
  animation: `${slideText1} .7s ease-in-out`,
  animationDelay: '1.6s',
  animationFillMode: 'backwards',
});

const TrustLogo = styled('div', {
  width: '10rem',
  height: '10rem',
  backgroundImage: `url("${TrustImg}")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  animation: `${imgOpacity} .5s ease`,
  animationDelay: '.5s',
  animationFillMode: 'backwards',
});
