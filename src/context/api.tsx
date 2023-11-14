import type { Type } from '@/utils/types';

import { createContext } from 'react';

import { getData } from '@/api';
import { getAccessToken } from '@/api/auth';

type ApiError = string | undefined;

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

type GetMember = () => Promise<Member[] | ApiError>;
type GetAssignment = () => Promise<Assignment[] | ApiError>;
interface ContextType {
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

  const getMember: GetMember = async () => {
    try {
      const { data } = await getData<Member[]>('/user/member');
      return data;
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === '') {
          console.log();
        } else {
          console.log(err.message);
        }
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
        if (err.message === '') {
          console.log();
        } else {
          console.log(err.message);
        }
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
