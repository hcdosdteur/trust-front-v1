import { styled } from '#/stitches.config';

import TrustImg from '@/assets/icon/trust_in.svg';

const Login = () => {
  const forgetPw = () => {
    alert('동장에게 문의해 주세요');
  };

  return (
    <Wrapper>
      <LoginContainer>
        <Title>USER LOGIN</Title>
        <UserData>
          <UserDataSub>
            <Data>
              <div>User Id</div>
              <Input type="text" />
            </Data>
            <Data>
              <div>Password</div>
              <Input type="text" />
              <ForgetPw onClick={forgetPw}>Forget Password?</ForgetPw>
            </Data>
          </UserDataSub>
          <LoginBtn></LoginBtn>
        </UserData>
        <LinkCir>
          <Circle
            onClick={() => {
              location.href = 'https://www.dimigo.hs.kr/';
            }}
          />
          <Circle
            onClick={() => {
              alert('여기 뭐 넣지?');
            }}
          />
        </LinkCir>
      </LoginContainer>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled('div', {
  display: 'flex',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
});

const LoginContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: '35rem',
  height: 'max-content',
  gap: '1.2rem',
  '*': {
    fontWeight: 500,
  },
});

const Title = styled('div', {
  fontSize: '3.5rem',
  textAlign: 'center',
  userSelect: 'none',
});

const UserData = styled('div', {
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '3rem 0',
  '&::before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '.1rem',
    width: '100%',
    height: '.2rem',
    backgroundColor: '$main',
  },
  '&::after': {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderRadius: '.1rem',
    width: '100%',
    height: '.2rem',
    backgroundColor: '$main',
  },
});
const UserDataSub = styled('div', {
  width: 'inherit',
  display: 'inherit',
  flexDirection: 'inherit',
  marginBottom: '3rem',
  gap: '2rem',
});

const Data = styled('div', {
  display: 'inherit',
  flexDirection: 'inherit',
  gap: '.5rem',
});

const LoginBtn = styled('button', {
  fontSize: '2rem',
  width: '12rem',
  height: '4rem',
  border: '.1rem solid $main',
  borderRadius: '.3rem',
  cursor: 'pointer',
  transition: '.2s',
  backgroundColor: 'transparent', //여기 애니메이션 만들기
  '&::before': {
    content: '',
    backgroundImage: `url("${TrustImg}")`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '3rem',
  },
  '&:hover': {
    backgroundImage: 'none',
    '&::before': {
      content: 'asdf',
    },
  },
});

const Input = styled('input', {
  backgroundColor: 'transparent',
  outline: 'none',
  border: 'none',
  borderBottom: '.2rem solid $grade1',
  width: '100%',
});

const ForgetPw = styled('span', {
  cursor: 'pointer',
  opacity: '.5',
  width: 'fit-content',
  transition: '.1s',
  '&:hover': {
    opacity: '.6',
  },
});

const LinkCir = styled('div', {
  display: 'flex',
  gap: '1.5rem',
});

const Circle = styled('div', {
  width: '5rem',
  height: '5rem',
  backgroundColor: 'gray',
  borderRadius: '50%',
  cursor: 'pointer',
});
