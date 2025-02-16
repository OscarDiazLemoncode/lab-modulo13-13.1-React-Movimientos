import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppLayout } from '@/layouts/index';
import { saveAccount } from './api/create-account.api';
import { Account } from './api/create-account.api-model';
import { appRoutes } from '@/core/router/routes';
import { ButtonCreateAccount } from './components/create-account-button';
import classes from './create-account.list.page.module.css';

const SELECT_NONE = '0';
const SELECT_CURRENT = '1';
const SELECT_SAVING = '2';
const SELECT_PAYROLL = '3';

export const CreateAccountPage: React.FC = () => {
  const [selectValue, setSelectValue] = React.useState<string>(SELECT_NONE);
  const [inputValue, setInputValue] = React.useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>(true);
  const navigate = useNavigate();

  const account: Account = {
    type: selectValue,
    name: inputValue,
  };

  const handleSelectChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const optionDisabled = document.querySelector('.disabled');
    const input = document.querySelector('#input_alias');

    if (
      optionDisabled !== null &&
      optionDisabled !== undefined &&
      optionDisabled instanceof HTMLOptionElement &&
      input !== null &&
      input !== undefined &&
      input instanceof HTMLInputElement
    ) {
      input.removeAttribute('disabled');
      optionDisabled.setAttribute('disabled', 'disabled');
      setSelectValue(e.target.value);
    } else {
      throw new Error('undefined value');
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsButtonDisabled(false);
  };

  const handleSubmitAccount = () => {
    saveAccount(account);
    setTimeout(() => {
      navigate(appRoutes.accountList);
    }, 500);
  };

  return (
    <AppLayout>
      <div className={`${classes.root} create_account_container`}>
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
              <option className="disabled" value={selectValue}>
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
              onChange={handleInput}
              type="text"
              id="input_alias"
              placeholder="Nombre de la cuenta"
              value={inputValue}
            />
          </div>
        </div>
        <hr />
        <ButtonCreateAccount
          isDisabled={isButtonDisabled}
          onClickProp={handleSubmitAccount}
        />
        {/* <button
          onClick={handleSubmitAccount}
          className={`${classes.button} ${classes.mAuto}`}
        >
          Guardar
        </button> */}
      </div>
    </AppLayout>
  );
};
