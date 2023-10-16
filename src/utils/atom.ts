import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'userAtom',
});

export interface User {
  accessToken: string;
}
export const userAtom = atom<User>({
  key: 'userAtom',
  default: {
    accessToken: '',
  },
  effects_UNSTABLE: [persistAtom],
});
