import React from 'react';
import classes from './create-account-select-type.module.css';

export interface Props {
  onChangeProp: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

export const SelectTypeAccount: React.FC<Props> = (props) => {
  const { onChangeProp, children } = props;
  return (
    <div>
      <label htmlFor="select_account">Tipo de cuenta:</label>
      <select
        onChange={onChangeProp}
        id="select_account"
        className={classes.select}
      >
        {children}
      </select>
    </div>
  );
};
