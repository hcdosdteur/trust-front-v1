import { createContext } from 'react';

export interface RadioProps {
  value: string;
  name: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode | React.ReactNode[];
}
export const RadioContext = createContext<RadioProps>({
  value: '',
  name: '',
  defaultChecked: false,
  disabled: false,
  onChange() {},
  children: null,
});
