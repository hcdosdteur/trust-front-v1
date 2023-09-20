import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'userAtom',
});

export interface User {
  accessToken: string;
  authenicated: boolean;
}
export const userAtom = atom<User>({
  key: 'userAtom',
  default: {
    accessToken: '',
    authenicated: false,
  },
  effects_UNSTABLE: [persistAtom],
});
