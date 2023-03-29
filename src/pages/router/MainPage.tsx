import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from '#/stitches.config';
import FirstPage from '@/component/FirstPage';

export const MainPage = () => {
  return (
    <Wrapper>
      <FirstPage />
      <Container>asdf</Container>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'overlay',
});

const Container = styled('div', {
  width: '100%',
  height: '100rem',
});
