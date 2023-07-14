import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { styled } from '#/stitches.config';

import TrustImg from '@/assets/icon/trust_in.svg';

interface confirmInput {
  id: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [input, setInput] = useState<confirmInput>({
    id: '',
    password: '',
    confirmPassword: '',
  });
  const [pass, setPass] = useState<boolean>(true);
  const navigate = useNavigate();

  const createAccount = () => {
    if (
      input.password !== '' &&
      input.confirmPassword !== '' &&
      input.id !== ''
    ) {
      validateInput();
      alert('가입이 완료되었습니다.\n로그인 페이지로 이동합니다.');
      navigate('/login');
    } else alert('입력하지 않은 값이 존재합니다.');
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateInput = () => {
    input.password === input.confirmPassword ? setPass(true) : setPass(false);
  };

  useEffect(() => {
    validateInput();
  }, [input]);

  return (
    <Wrapper>
      <LoginContainer>
        <Title>TRUST</Title>
        <UserData>
          <UserDataSub>
            <Data>
              <Input type="text" value={input.id} pass={true} required />
              <Label>User Id</Label>
            </Data>
            <Data>
              <Input
                type="password"
                name="password"
                value={input.password}
                onChange={onInputChange}
                pass={pass ? true : false}
                required
              />
              <Label pass={pass ? true : false}>Password</Label>
            </Data>
            <Data>
              <Input
                type="password"
                name="confirmPassword"
                value={input.confirmPassword}
                onChange={onInputChange}
                pass={pass ? true : false}
                required
              />
              <Label pass={pass ? true : false}>Confirm Password</Label>
            </Data>
          </UserDataSub>
          <LoginBtn onClick={createAccount}>
            <span>Sign In</span>
          </LoginBtn>
        </UserData>
        <div>
          Already have an account? <StyledLink to="/login">Login</StyledLink>
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
  marginBottom: '40px',
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
  color: '#fff',
  span: {
    fontSize: '20px',
  },
});

const Input = styled('input', {
  backgroundColor: 'transparent',
  outline: 'none',
  border: 'none',
  variants: {
    pass: {
      true: {
        borderBottom: '2px solid $grade1',
      },
      false: {
        borderBottom: '2px solid $incorrect',
      },
    },
  },
  width: '100%',
  color: '#fff',
  transition: '.4s',
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
  variants: {
    pass: {
      true: {
        color: '$main',
      },
      false: {
        color: '$incorrect',
      },
    },
  },
  transition: '.4s',
});

const StyledLink = styled(Link, {
  color: '#fff',
  textDecoration: 'underline',
  paddingLeft: '3px',
});
