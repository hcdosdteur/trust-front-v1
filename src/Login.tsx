import { styled } from '#/stitches.config';
import { Link } from 'react-router-dom';

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
              <Input type="text" name="" required />
              <Label>User Id</Label>
            </Data>
            <Data>
              <Input type="text" name="" required />
              <Label>Password</Label>
            </Data>
            <ForgetPw onClick={forgetPw}>Forget Password?</ForgetPw>
          </UserDataSub>
          <Link to={'/'}>
            <LoginBtn></LoginBtn>
          </Link>
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
  minWidth: '32rem',
  height: 'max-content',
  gap: '1.2rem',
  '*': {
    fontWeight: 500,
  },
});

const Title = styled('div', {
  fontSize: '3.4rem',
  fontWeight: 400,
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
  marginBottom: '2.4rem',
  gap: '3rem',
});

const Data = styled('div', {
  position: 'relative',
  display: 'inherit',
  flexDirection: 'inherit',
  gap: '.5rem',
  '& *': {
    padding: '.6rem 0',
    fontSize: '1.8rem',
    fontWeight: 500,
  },
});

const LoginBtn = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '2rem',
  width: '5rem',
  height: '4.2rem',
  border: '.2rem solid transparent',
  borderRadius: '1rem',
  cursor: 'pointer',
  transition: '.2s',
  backgroundColor: 'transparent',
  '&::before': {
    content: '',
    display: 'block',
    width: '100%',
    height: '100%',
    transition: '.1s',
    position: 'absolute',
    backgroundImage: `url("${TrustImg}")`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  '&::after': {
    content: 'Login',
    textAlign: 'center',
    width: '100%',
    opacity: 0,
    position: 'absolute',
    top: '.5rem',
    fontSize: '2rem',
    fontWeight: 600,
    transition: '.2s',
  },
  '&:hover': {
    width: '12rem',
    borderColor: '$main',
    '&::before': {
      opacity: 0,
    },
    '&::after': {
      opacity: 1,
    },
  },
});

const Input = styled('input', {
  backgroundColor: 'transparent',
  outline: 'none',
  border: 'none',
  borderBottom: '.2rem solid $grade1',
  width: '100%',
  color: '#fff',
  '&:focus ~ label, &:valid ~ label': {
    top: '-1.6rem',
    fontSize: '1.2rem',
  },
});

const Label = styled('label', {
  position: 'absolute',
  display: 'block',
  top: 0,
  left: 0,
  fontSize: '1.6rem',
  pointerEvents: 'none',
  transition: '.3s',
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
