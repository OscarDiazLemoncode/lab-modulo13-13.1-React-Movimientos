import React from 'react';

export interface Props {
  value: string;
  id?: string;
  children: React.ReactNode;
  isOptionDisabled?: boolean;
}

export const OptionTypeAccount: React.FC<Props> = (props) => {
  const { value, id, children, isOptionDisabled } = props;
  return (
    <option value={value} id={id} disabled={isOptionDisabled}>
      {children}
    </option>
  );
};
