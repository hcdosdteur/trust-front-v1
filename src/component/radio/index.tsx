import type { Type } from '@/utils/types';

import React from 'react';

import { styled } from '#/stitches.config';

import { RadioContext, useRadioContext } from '@/context/element';

interface RadioGroupProps {
  name: string;
  label?: string;
  defaultValue: Type;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  children: React.ReactNode | React.ReactNode[];
}
interface RadioProps {
  value: Type;
  disabled?: boolean;
  children: React.ReactNode | React.ReactNode[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  label,
  defaultValue,
  onChange,
  children,
}) => {
  return (
    <Fieldset>
      {label && <legend>{label}</legend>}
      <RadioContext.Provider value={{ name, children, defaultValue, onChange }}>
        {children}
      </RadioContext.Provider>
    </Fieldset>
  );
};

const Radio: React.FC<RadioProps> = ({ value, children, disabled }) => {
  const { name, defaultValue, onChange } = useRadioContext();
  return (
    <Label>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultValue === value}
        onChange={onChange}
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
