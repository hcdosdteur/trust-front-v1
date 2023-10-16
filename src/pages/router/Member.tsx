import { styled } from '#/stitches.config';

export const Member = () => {
  return (
    <Wrapper>
      <Container>
        <Img />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  width: '100%',
});

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',
  padding: '15px',
  borderRadius: '5px',
  backgroundColor: '#fff',
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
});

const Img = styled('div', {
  width: '100%',
  height: '200px',
  borderRadius: '5px',
  backgroundColor: '#eee',
});
