import axios, { AxiosError } from 'axios';
import { useRecoilState, useSetRecoilState } from 'recoil';

import getEnvVars from '#/environment';

import { User, userAtom } from '@/utils/atom';
import { Type } from '@/utils/types';

const { apiUrl } = getEnvVars();

export { useAxiosProvider };

interface LoginProps {
  (username: string, password: string): void;
}
interface RegisterProps {
  (username: string, password: string, name: string, type: Type): void;
}

const useAxiosProvider = () => {
  const setAuth = useSetRecoilState(userAtom);

  const publicAxios = axios.create({
    baseURL: apiUrl,
    timeout: 5000,
  });

  const register: RegisterProps = async (username, password, name, type) => {
    await publicAxios
      .post('/auth/register', { username, password, name, type })
      .then((res) => {
        console.log(res);
      })
      .catch((err: AxiosError) => {
        console.log('Register Error: ' + err.response?.data.message);
      });
  };

  const login: LoginProps = async (username, password) => {
    await publicAxios
      .post('/auth/login', { username, password })
      .then((res) => {
        console.log(res);
        // localStorage.setItem('token', res.data.token);
        // setAuth(res as User);
      })
      .catch((err: AxiosError) => {
        console.log('Login Error: ' + err);
      });
  };

  // const logout = () => {
  //   localStorage.removeItem('token');
  //   setAuth(null);
  // };

  return {
    login,
    register,
  };
};
