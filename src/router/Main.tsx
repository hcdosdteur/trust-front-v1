import { useEffect, useState } from 'react';
import { styled } from '@stitches/react';
import { Loading } from '@/component/Loading/Loading';
import { MainMenu } from '@/component/Menu/MainMenu';

export const Main = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isTop, setisTop] = useState<boolean>(true);

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

  useEffect(() => {
    fetchTest();
  }, []);

  return (
    <Wrapper>
      {loading ? <Loading /> : null}
      <Trust>TRUST</Trust>
      <MainMenu />
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  width: '100vw',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
});

const Trust = styled('div', {
  fontSize: '9rem',
  fontWeight: 700,
});
