import { useEffect, useState } from 'react';
import { styled } from '@stitches/react';
import { Loading } from '@/component/Loading/Loading';
import { MainMenu } from '@/component/Menu/MainMenu';

export const Main = () => {
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

  const onScroll = () => {
    if (window.scrollY === 0) setisTop(true);
    else setisTop(false);
  };

  const onMouseEnter = () => setEnterMenu(true);
  const onMouseLeave = () => setEnterMenu(false);

  useEffect(() => {
    fetchTest();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Wrapper>
      {loading ? <Loading /> : null}
      <MainContainer>
        <Trust>TRUST</Trust>
        <MainMenuContainer
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <MainMenu top={isTop && (enterMenu ? true : false)} />
        </MainMenuContainer>
      </MainContainer>
      <Container>asdf</Container>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'overlay',
});

const MainContainer = styled('div', {
  display: 'flex',
  position: 'relative',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
});

const Trust = styled('div', {
  fontSize: '9rem',
  fontWeight: 700,
});

const Container = styled('div', {
  width: '100%',
  height: '100rem',
});

const MainMenuContainer = styled('div', {
  position: 'absolute',
  bottom: '1rem',
  minWidth: '35rem',
  height: '5.5rem',
});
