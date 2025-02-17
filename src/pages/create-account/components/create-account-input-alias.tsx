import React from 'react';

export interface Props {
  onChangeProp: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
  value: string;
}

export const InputAliasAccount: React.FC<Props> = (props) => {
  const { onChangeProp, isDisabled, value } = props;
  return (
    <div>
      <label htmlFor="input_alias">Alias: </label>
      <input
        disabled={isDisabled}
        onChange={onChangeProp}
        type="text"
        id="input_alias"
        placeholder="Nombre de la cuenta"
        value={value}
      />
    </div>
  );
};
