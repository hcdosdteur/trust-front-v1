import type { Type } from '@/utils/types';

import { createContext } from 'react';

import { getData } from '@/api';

type ApiError = string | undefined;

export interface Member {
  _id: string;
  name: string;
  hashtag: string[];
  type: Type;
}

type GetMember = () => Promise<Member[] | ApiError>;
interface ContextType {
  member: {
    get: GetMember;
  };
}
const ApiContext = createContext<ContextType>({} as ContextType);

const { Provider } = ApiContext;
interface ApiProviderProps {
  children: React.ReactNode;
}
const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const getMember: GetMember = async () => {
    try {
      const { data } = await getData<Member[]>('/user/member');
      return data;
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        return err.message;
      }
    }
  };

  return (
    <Provider
      value={{
        member: {
          get: getMember,
        },
      }}
    >
      {children}
    </Provider>
  );
};

export { ApiProvider, ApiContext };
