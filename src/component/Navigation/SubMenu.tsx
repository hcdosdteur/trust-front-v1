import { styled } from '#/stitches.config';

export const SubMenu = () => {
  return (
    <Wrapper>
      <Span>Home</Span>
      <Span>Member</Span>
      <Span>Award</Span>
      <Span>Assignment</Span>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  position: 'absolute',
  width: '100',
  gap: '9rem',
});

const Span = styled('span', {
  fontSize: '2rem',
  fontWeight: 600,
  color: '$main',
  opacity: 0.5,
  cursor: 'pointer',
  '&:hover': {
    opacity: 1,
  },
});
