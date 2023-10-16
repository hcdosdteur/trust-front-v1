import type { Type, UserType } from '@/utils/types';

import jwt_decode from 'jwt-decode';

import { getAccessToken } from '@/api/auth';

interface UserData {
  _id: string;
  iat: number;
  exp: number;
  hashtag: string[];
  name: string;
  role: UserType;
  type: Type;
  username: string;
}

export const getUserData = (): UserData | Error => {
  let token: UserData;
  if (getAccessToken() === 'null') {
    return new Error('No access token');
  }
  try {
    token = jwt_decode(getAccessToken()) as UserData;
    return token;
  } catch (error) {
    return new Error('Invalid jwt token format');
  }
};
