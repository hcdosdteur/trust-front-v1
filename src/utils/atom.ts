import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export interface User {
  accessToken: string | null;
}
export const userAtom = atom<User>({
  key: 'userAtom',
  default: {
    accessToken: null,
  },
  effects_UNSTABLE: [persistAtom],
});
