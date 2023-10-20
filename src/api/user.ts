import type { Type, UserType } from '@/utils/types';

import jwt_decode from 'jwt-decode';

import { getAccessToken } from '@/api/auth';

interface MyData {
  _id: string;
  iat: number;
  exp: number;
  hashtag: string[];
  name: string;
  role: UserType;
  type: Type;
  username: string;
}

export const getMyData = (): MyData | Error => {
  let token: MyData;
  if (getAccessToken() === 'null') {
    return new Error('Invalid access token');
  }
  try {
    token = jwt_decode(getAccessToken()) as MyData;
    return token;
  } catch (error) {
    return new Error('Invalid jwt token format');
  }
};
