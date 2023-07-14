import { Link } from 'react-router-dom';
import { useState } from 'react';
import { styled } from '#/stitches.config';

import TrustImg from '@/assets/icon/trust_in.svg';
import Insta from '@/assets/icon/instagram.svg';
import Github from '@/assets/icon/github.svg';

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const fetchTest = async () => {
    setLoading(true);
    try {
      const target = '/api/test';
      const result = await fetch(`${target}`);
      let data = await result.text();
      if (!data) throw new Error(`data is empty.\n${target}`);
      console.log(data);
      setLoading(false);
    } catch (error) {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      alert('Error: ' + message);
    }
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
              <ForgetPw
                onClick={() => {
                  alert('동장에게 문의해 주세요');
                }}
              >
                Forget Password?
              </ForgetPw>
            </Data>
          </UserDataSub>
          <Link to="/">
            <LoginBtn>
              <span>Login</span>
            </LoginBtn>
          </Link>
        </UserData>
        <LinkCir>
          <Circle
            css={{
              backgroundImage: `url("${Insta}")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            onClick={() => {
              location.href = 'https://www.instagram.com/trust_dimigo/';
            }}
          ></Circle>
          <Circle
            css={{
              backgroundImage: `url("${Github}")`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            onClick={() => {
              let rand: number = Math.floor(Math.random() * 2);
              let url: string = 'https://github.com/';
              rand === 0
                ? (url = 'https://github.com/hcdosdteur/')
                : (url = 'https://github.com/whguswo/');
              location.href = url;
            }}
          />
        </LinkCir>
        <div>
          Don't have an account? <StyledLink to="/signup">Sign up</StyledLink>
        </div>
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
  minWidth: '340px',
  height: 'max-content',
  gap: '15px',
  '*': {
    fontWeight: 500,
  },
});

const Title = styled('div', {
  fontSize: '34px',
  textAlign: 'center',
  color: '#fff',
  userSelect: 'none',
});

const UserData = styled('div', {
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '35px 0',
  '&::before': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '1px',
    width: '100%',
    height: '2px',
    backgroundColor: '$main',
  },
  '&::after': {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderRadius: '1px',
    width: '100%',
    height: '2px',
    backgroundColor: '$main',
  },
});
const UserDataSub = styled('div', {
  width: 'inherit',
  display: 'inherit',
  flexDirection: 'inherit',
  marginBottom: '30px',
  gap: '30px',
});

const Data = styled('div', {
  position: 'relative',
  display: 'inherit',
  flexDirection: 'inherit',
  gap: '5px',
  '& *': {
    padding: '6px 0',
    fontSize: '18px',
    fontWeight: 500,
  },
});

const LoginBtn = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
  width: '100%',
  height: '42px',
  border: '2px solid $main',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  span: {
    color: '#fff',
    fontSize: '20px',
  },
});

const Input = styled('input', {
  backgroundColor: 'transparent',
  outline: 'none',
  border: 'none',
  borderBottom: '2px solid $grade1',
  width: '100%',
  color: '#fff',
  '&:focus ~ label, &:valid ~ label': {
    top: '-16px',
    fontSize: '12px',
  },
});

const Label = styled('label', {
  position: 'absolute',
  display: 'block',
  top: '2px',
  left: 0,
  fontSize: '16px',
  pointerEvents: 'none',
  transition: '.4s',
});

const ForgetPw = styled('span', {
  cursor: 'pointer',
  fontSize: '16px',
  opacity: '.5',
  padding: '5px 0',
  textAlign: 'right',
  transition: '.1s',
  '&:hover': {
    opacity: '.6',
  },
});

const LinkCir = styled('div', {
  display: 'flex',
  gap: '15px',
  // padding: '10px 0',
});

const Circle = styled('div', {
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  cursor: 'pointer',
});

const StyledLink = styled(Link, {
  color: '#fff',
  textDecoration: 'underline',
  paddingLeft: '3px',
});
