// import type { User } from '@/context/api';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import { userAtom } from '@/utils/atom';

export const getAccessToken = () => {
  const setAuth = useSetRecoilState(userAtom);
  if (!useRecoilValue(userAtom).accessToken) {
    setAuth({ accessToken: 'null' });
  }
  return useRecoilValue(userAtom).accessToken;
};

export const refreshToken = () => {
  const setAuth = useSetRecoilState(userAtom);
  setAuth({ accessToken: 'null' });
  return;
};
