import { keyframes, styled } from '@stitches/react';

export const Loading = () => {
  return (
    <Waviy>
      <Span order={1}>l</Span>
      <Span order={2}>o</Span>
      <Span order={3}>a</Span>
      <Span order={4}>d</Span>
      <Span order={5}>i</Span>
      <Span order={6}>n</Span>
      <Span order={7}>g</Span>
    </Waviy>
  );
};

const filp = keyframes({
  '0%, 80%': {
    transform: 'rotateY(360deg)',
  },
});

const Waviy = styled('div', {
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: 0,
  left: 0,
  zIndex: 999,
});

const Span = styled('span', {
  position: 'relative',
  display: 'inline-block',
  fontSize: '4rem',
  textTransform: 'uppercase',
  animation: `${filp} 2s infinite`,
  variants: {
    order: {
      1: {
        animationDelay: '.2s',
      },
      2: {
        animationDelay: 'calc(.15s * 2)',
      },
      3: {
        animationDelay: 'calc(.15s * 3)',
      },
      4: {
        animationDelay: 'calc(.15s * 4)',
      },
      5: {
        animationDelay: 'calc(.15s * 5)',
      },
      6: {
        animationDelay: 'calc(.15s * 6)',
      },
      7: {
        animationDelay: 'calc(.15s * 7)',
      },
    },
  },
});
