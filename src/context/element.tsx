import type { Type } from '@/utils/types';

import { createContext, useContext } from 'react';

export interface RadioContextProps {
  name: string;
  defaultValue: Type;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  children: React.ReactNode | React.ReactNode[];
}
export const RadioContext = createContext<RadioContextProps>({
  name: '',
  defaultValue: 'web',
  onChange() {},
  children: null,
});

export const useRadioContext = () => {
  const context = useContext(RadioContext);
  if (!context) {
    throw new Error(
      'Radio compound components cannot be rendered outside the Radio component',
    );
  }
  return context;
};
