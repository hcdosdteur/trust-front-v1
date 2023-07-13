import { Link } from 'react-router-dom';
import { useState } from 'react';
import { styled } from '#/stitches.config';

import TrustImg from '@/assets/icon/trust_in.svg';
import Insta from '@/assets/icon/instagram.svg';
import Github from '@/assets/icon/github.svg';

const Signup = () => {
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
            {/* 여기 데이터 보내는걸로 바꿔야됨 */}
            <LoginBtn />
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
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </LoginContainer>
    </Wrapper>
  );
};

export default Signup;

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
  gap: '12px',
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
  padding: '30px 0',
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
  marginBottom: '25px',
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
  justifyContent: 'center',
  fontSize: '20px',
  width: '42px',
  height: '42px',
  border: '2px solid transparent',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: '.2s',
  backgroundColor: 'transparent',
  '&::before': {
    content: '',
    display: 'block',
    width: '100%',
    height: '100%',
    transition: '.2s',
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
    top: '5px',
    fontSize: '20px',
    fontWeight: 600,
    transition: '.2s',
  },
  '&:hover': {
    width: '120px',
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
});

const Circle = styled('div', {
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  cursor: 'pointer',
});
