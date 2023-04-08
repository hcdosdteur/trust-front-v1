import { styled, keyframes } from '#/stitches.config';

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
  display: 'flex',
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 100,
  userSelect: 'none',
});

const Span = styled('span', {
  position: 'relative',
  display: 'inline-block',
  color: '#fff',
  fontSize: '4rem',
  textTransform: 'uppercase',
  animation: `${filp} 2s infinite`,
  variants: {
    order: {
      1: {
        animationDelay: 0,
      },
      2: {
        animationDelay: 'calc(.15s * 1)',
      },
      3: {
        animationDelay: 'calc(.15s * 2)',
      },
      4: {
        animationDelay: 'calc(.15s * 3)',
      },
      5: {
        animationDelay: 'calc(.15s * 4)',
      },
      6: {
        animationDelay: 'calc(.15s * 5)',
      },
      7: {
        animationDelay: 'calc(.15s * 6)',
      },
    },
  },
});
