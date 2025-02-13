import React from 'react';
import { AppLayout } from '@/layouts/index';
import classes from './create-account.list.page.module.css';

const SELECT_NONE = '0';
const SELECT_CURRENT = '1';
const SELECT_SAVING = '2';
const SELECT_PAYROLL = '3';

export const CreateAccountPage: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');

  const handleSelectChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const input = document.querySelector('#input_alias');
    const optionDisabled = document.querySelector('.disabled');
    if (
      e.target.value !== null &&
      e.target.value !== undefined &&
      e.target.value !== SELECT_NONE &&
      input !== null &&
      input !== undefined &&
      input instanceof HTMLInputElement
    ) {
      input.removeAttribute('disabled');
      optionDisabled?.setAttribute('disabled', 'disabled');

      console.log(input);
      console.log(`value ${e.target.value}`);
    } else {
      console.log('value undefined');
    }
  };

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const submitCreateAccount = () => {
    console.log('clicked');
  };

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Cuenta Bancaria</h1>
        </div>
        <div className={classes.content}>
          <div>
            <label htmlFor="select_account">Tipo de cuenta:</label>
            <select
              onChange={handleSelectChanged}
              id="select_account"
              className={classes.select}
            >
              <option className="disabled" value={SELECT_NONE}>
                Seleccionar
              </option>
              <option value={SELECT_CURRENT} id={SELECT_CURRENT}>
                Cuenta Corriente
              </option>
              <option value={SELECT_SAVING} id={SELECT_SAVING}>
                Cuenta de Ahorro
              </option>
              <option value={SELECT_PAYROLL} id={SELECT_PAYROLL}>
                Cuenta de Nómina
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="input_alias">Alias: </label>
            <input
              disabled
              onChange={handleInputValue}
              type="text"
              id="input_alias"
              placeholder="Nombre de la cuenta"
              value={inputValue}
            />
          </div>
        </div>
        <hr />
        <button
          onClick={submitCreateAccount}
          className={`${classes.button} ${classes.mAuto}`}
        >
          Guardar
        </button>
      </div>
    </AppLayout>
  );
};
