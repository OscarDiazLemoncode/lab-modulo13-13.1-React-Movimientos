import React from 'react';
import classes from './create-account-button.module.css';

interface ButtonCreateAccountProp {
  onClickProp: () => void;
  isDisabled: boolean;
}

export const ButtonCreateAccount: React.FC<ButtonCreateAccountProp> = (
  props
) => {
  const { onClickProp, isDisabled } = props;
  return (
    <button
      disabled={isDisabled}
      onClick={onClickProp}
      className={`${classes.button} button_save ${classes.mAuto}`}
    >
      Guardar
    </button>
  );
};
