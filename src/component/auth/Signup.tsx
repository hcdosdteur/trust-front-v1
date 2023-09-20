import type { Type } from '@/utils/types';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styled } from '#/stitches.config';

import { RadioGroup, Radio } from '@/component/radio';
import { useAxiosAuth } from '@/context/axios';

interface confirmInput {
  id: string;
  password: string;
  confirmPassword: string;
  fstName: string;
  lstName: string;
  type: Type;
}

const Signup = () => {
  const Axios = useAxiosAuth();
  const [input, setInput] = useState<confirmInput>({
    id: '',
    password: '',
    confirmPassword: '',
    fstName: '',
    lstName: '',
    type: 'web',
  });
  const [pass, setPass] = useState<boolean>(true);

  const createAccount = async () => {
    if (
      input.password !== '' &&
      input.confirmPassword !== '' &&
      input.id !== '' &&
      input.fstName !== '' &&
      input.lstName !== ''
    ) {
      if (!validateInput()) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }
      console.log(
        input.fstName,
        input.lstName,
        input.id,
        input.password,
        input.type,
      );
      const newUser = {
        username: input.id,
        password: input.password,
        name: `${input.fstName}-${input.lstName}`,
        type: input.type,
      };
      await Axios.register(newUser);
    } else alert('입력하지 않은 값이 존재합니다.');
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateInput = () => {
    if (input.password === input.confirmPassword) {
      setPass(true);
      return true;
    } else {
      setPass(false);
      return false;
    }
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
            <Name>
              <Data>
                <Input
                  type="text"
                  name="fstName"
                  defaultValue={input.fstName}
                  onChange={onInputChange}
                  pass={true}
                  required
                />
                <Label>First Name</Label>
              </Data>
              <Data>
                <Input
                  type="text"
                  name="lstName"
                  defaultValue={input.lstName}
                  onChange={onInputChange}
                  pass={true}
                  required
                />
                <Label>Last Name</Label>
              </Data>
            </Name>
            <Data>
              <Input
                type="text"
                name="id"
                defaultValue={input.id}
                onChange={onInputChange}
                pass={true}
                autoComplete="off"
                required
              />
              <Label>User Id</Label>
            </Data>
            <Data>
              <Input
                type="password"
                name="password"
                defaultValue={input.password}
                onChange={onInputChange}
                pass={pass ? true : false}
                autoComplete="off"
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
                autoComplete="off"
                required
              />
              <Label pass={pass ? true : false}>Confirm Password</Label>
            </Data>
            <Data>
              <RadioGroup
                name="type"
                defaultValue={input.type}
                onChange={onInputChange}
              >
                <Radio value="web">web</Radio>
                <Radio value="pwn">pwn</Radio>
                <Radio value="rev">rev</Radio>
                <Radio value="crypto">crypto</Radio>
              </RadioGroup>
            </Data>
          </UserDataSub>
          <LoginBtn onClick={createAccount}>
            <span>Register</span>
          </LoginBtn>
        </UserData>
        <GotoLogin>
          Already have an account? <StyledLink to="/login">Login</StyledLink>
        </GotoLogin>
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
  '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active':
    {
      WebkitTextFillColor: '#fff',
      WebkitBoxShadow: '0 0 0px 1000px #000 inset',
      boxShadow: '0 0 0px 1000px #000 inset',
      transition: 'background-color 5000s ease-in-out 0s',
      fontSize: '18px',
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
  fontSize: 'inherit',
  color: '#fff',
  textDecoration: 'underline',
  paddingLeft: '3px',
});

const GotoLogin = styled('div', {
  fontSize: '16px',
});

const Name = styled('div', {
  display: 'flex',
  gap: '15px',
});
