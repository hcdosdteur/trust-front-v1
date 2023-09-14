import React from 'react';
import { styled } from '#/stitches.config';

import { RadioContext } from '@/context/element';
import { useContext } from 'react';

type RadioGroupProps = {
  label?: string;
  children: React.ReactNode | React.ReactNode[];
} & React.InputHTMLAttributes<HTMLFieldSetElement>;
interface RadioProps {
  value: string;
  name: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  children: React.ReactNode | React.ReactNode[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  children,
  ...rest
}) => {
  return (
    <Fieldset>
      {/* <legend>{label}</legend> */}
      <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
    </Fieldset>
  );
};

const Radio: React.FC<RadioProps> = ({
  children,
  value,
  name,
  defaultChecked,
  disabled,
}) => {
  const group = useContext(RadioContext);
  return (
    <Label>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
        disabled={disabled}
      />
      {children}
    </Label>
  );
};

export { RadioGroup, Radio };

const Fieldset = styled('fieldset', {
  display: 'flex',
  justifyContent: 'space-between',
  border: 'none',
  margin: '0',
  padding: '0 15px',
  paddingTop: '3px',
  gap: '10px',
});

const Label = styled('label', {
  cursor: 'pointer',
  textTransform: 'uppercase',
  display: 'flex',
  gap: '8px',
  input: {
    margin: '0',
  },
});
