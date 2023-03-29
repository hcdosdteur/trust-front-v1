import { styled } from '#/stitches.config';
import { useEffect, useState } from 'react';
import { MainMenu } from '@/component/Navigation/MainMenu';

const FirstPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isTop, setisTop] = useState<boolean>(true);
  const [enterMenu, setEnterMenu] = useState<boolean>(false);

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
    fetchTest();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <MainContainer>
      <Trust>TRUST</Trust>
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

const MainContainer = styled('div', {
  display: 'flex',
  position: 'relative',
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

const Trust = styled('div', {
  fontSize: '9rem',
  fontWeight: 700,
  color: '#fff',
});
