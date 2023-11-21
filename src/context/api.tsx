import type { Type, UserType } from '@/utils/types';

import { createContext } from 'react';

import { getData } from '@/api';
import { getAccessToken } from '@/api/auth';

type ApiError = string | undefined;

export interface User {
  _id: string;
  username: string;
  name: string;
  hashtag: string[];
  type: Type;
  role: UserType;
}
export interface Member {
  _id: string;
  name: string;
  hashtag: string[];
  type: Type;
}
export interface Assignment {
  _id: string;
  title: string;
  content: string;
  completed: boolean;
  month: number;
  week: number;
  category: Type;
}

type GetUser = () => Promise<User | ApiError>;
type GetMember = () => Promise<Member[] | ApiError>;
type GetAssignment = () => Promise<Assignment[] | ApiError>;
interface ContextType {
  user: {
    get: GetUser;
  };
  member: {
    get: GetMember;
  };
  assignment: {
    get: GetAssignment;
    post: () => void;
  };
}
const ApiContext = createContext<ContextType>({} as ContextType);

const { Provider } = ApiContext;
interface ApiProviderProps {
  children: React.ReactNode;
}

const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const token = getAccessToken();

  const getUser: GetUser = async () => {
    try {
      const { data } = await getData<User>('/user');
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      }
    }
  };

  const getMember: GetMember = async () => {
    try {
      const { data } = await getData<Member[]>('/user/member');
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      }
    }
  };

  const getAssignment = async () => {
    try {
      const { data } = await getData<Assignment[]>('/assignment', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return err.message;
      }
    }
  };

  return (
    <Provider
      value={{
        user: {
          get: getUser,
        },
        member: {
          get: getMember,
        },
        assignment: {
          get: getAssignment,
          post: () => {},
        },
      }}
    >
      {children}
    </Provider>
  );
};

export { ApiProvider, ApiContext };
