import React from 'react';

export interface Props {
  className?: string;
  value: string;
  id?: string;
  children: React.ReactNode;
}

export const OptionTypeAccount: React.FC<Props> = (props) => {
  const { className, value, id, children } = props;
  return (
    <option className={className} value={value} id={id}>
      {children}
    </option>
  );
};
