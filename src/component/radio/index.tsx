import React, { useContext } from 'react';

import { styled } from '#/stitches.config';

import { RadioProps, RadioContext } from '@/context/element';

interface RadioGroupProps {
  name: string;
  label?: string;
  children: React.ReactNode | React.ReactNode[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({ name, label, children }) => {
  const [checked, setChecked] = React.useState<string | undefined>(undefined);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setChecked(value);
  };

  return (
    <Fieldset>
      {label && <legend>{label}</legend>}
      <RadioContext.Provider
        value={{ name, defaultChecked, onChange, disabled }}
      >
        {children}
      </RadioContext.Provider>
    </Fieldset>
  );
};

const Radio: React.FC<RadioProps> = ({ value, children }) => {
  const { name, onChange, defaultChecked, disabled } = useContext(RadioContext);
  return (
    <Label>
      <input
        type="radio"
        value={value}
        name={name}
        defaultChecked={defaultChecked}
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
