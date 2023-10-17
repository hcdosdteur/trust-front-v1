import type { User } from '@/utils/atom';
import type { Type } from '@/utils/types';

import { useNavigate } from 'react-router-dom';

import { useSetRecoilState, useResetRecoilState } from 'recoil';

import { getData, postData } from '@/api';
import { userAtom } from '@/utils/atom';
import * as atoms from '@/utils/atom';

export { useAxiosAuth, useAxios };

type Login = (userInfo: {
  username: string;
  password: string;
}) => Promise<void>;
type Register = (newuser: {
  username: string;
  password: string;
  name: string;
  type: Type;
}) => Promise<void>;

const useAxiosAuth = () => {
  const navigate = useNavigate();
  const setAuth = useSetRecoilState(userAtom);

  const register: Register = async (newUser) => {
    try {
      await postData('/auth/register', newUser);
      alert('가입이 완료되었습니다.\n로그인 페이지로 이동합니다.');
      navigate('/login');
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  const login: Login = async (userInfo) => {
    try {
      const res = await postData<User>('/auth/login', userInfo);
      console.log(res.data.accessToken);
      setAuth(res.data);
      navigate('/');
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  // headers: {
  //   Authorization: `Bearer ${}`,
  // }

  const logout = () => {
    useResetRecoilState(atoms.userAtom);
  };

  return {
    login,
    register,
    logout,
  };
};

const useAxios = () => {
  const getMember = async () => {
    try {
      const res = await getData('/auth/member', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }, // 이거 없어도 되야함
      });
      console.log(res.data);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  return {
    getMember,
  };
};
