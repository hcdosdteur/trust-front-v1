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

const Radio: React.FC<RadioProps> = ({ value, disabled, children }) => {
  const { name, defaultValue, onChange } = useRadioContext();

  const isChecked = () => defaultValue === value;

  return (
    <Label>
      <Input
        type="radio"
        value={value}
        name={name}
        defaultChecked={isChecked()}
        onChange={onChange}
        disabled={disabled}
      />
      <Span
        css={{
          borderColor: isChecked() ? `$${value}` : '$main',
          opacity: isChecked() ? '1' : '0.8',
          transform: isChecked() ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        {children}
      </Span>
    </Label>
  );
};

export { RadioGroup, Radio };

const Fieldset = styled('fieldset', {
  display: 'flex',
  justifyContent: 'space-between',
  border: 'none',
  margin: '0',
  // padding: '0 15px',
  // paddingTop: '3px',
  gap: '10px',
});

const Label = styled('label', {
  cursor: 'pointer',
  textTransform: 'uppercase',
  display: 'flex',
  gap: '8px',
  padding: '0',
  userSelect: 'none',
  input: {
    margin: '0',
  },
});

const Input = styled('input', {
  display: 'none',
});

const Span = styled('span', {
  border: '2px solid',
  borderRadius: '6px',
  padding: '6px 12px',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    opacity: '1',
  },
});
