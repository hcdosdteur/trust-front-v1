import { styled } from '#/stitches.config';

export const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  overflow: 'scroll',
  height: '100vh',
});

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '14rem',
  marginBottom: '8rem',
  gap: '1.5rem',
  width: '100%',
  height: 'fit-content',
  maxWidth: '90rem',
});

export const Post = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '3.5rem',
  borderRadius: '2rem',
  backgroundColor: '$grade1',
});
