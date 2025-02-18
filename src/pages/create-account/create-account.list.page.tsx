import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppLayout } from '@/layouts/index';
import { saveAccount } from './api/create-account.api';
import { Account } from './api/create-account.api-model';
import { appRoutes } from '@/core/router/routes';
import { ButtonCreateAccount } from './components/create-account-button';
import { InputAliasAccount } from './components/create-account-input-alias';
import { SelectTypeAccount } from './components/create-account-select-type';
import { OptionTypeAccount } from './components/create-accont-option-type';
import classes from './create-account.list.page.module.css';

const SELECT_NONE = '0';
const SELECT_CURRENT = '1';
const SELECT_SAVING = '2';
const SELECT_PAYROLL = '3';

export const CreateAccountForm: React.FC = () => {
  const [selectValue, setSelectValue] = React.useState<string>(SELECT_NONE);
  const [inputValue, setInputValue] = React.useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = React.useState<boolean>(true);
  const [isInputDisabled, setIsInputDisabled] = React.useState<boolean>(true);
  const [isOptionDisabled, setOptionDisabled] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const account: Account = {
    type: selectValue,
    name: inputValue,
  };

  const handleSelectChanged = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsInputDisabled(false);
    setOptionDisabled(true);
    setSelectValue(e.target.value);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    e.target.value.length > 0
      ? setIsButtonDisabled(false)
      : setIsButtonDisabled(true);
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
          <SelectTypeAccount onChangeProp={handleSelectChanged}>
            <OptionTypeAccount
              isOptionDisabled={isOptionDisabled}
              value={SELECT_NONE}
            >
              Seleccionar
            </OptionTypeAccount>
            <OptionTypeAccount value={SELECT_CURRENT} id={SELECT_CURRENT}>
              Cuenta Corriente
            </OptionTypeAccount>
            <OptionTypeAccount value={SELECT_SAVING} id={SELECT_SAVING}>
              Cuenta de Ahorro
            </OptionTypeAccount>
            <OptionTypeAccount value={SELECT_PAYROLL} id={SELECT_PAYROLL}>
              Cuenta de Nómina
            </OptionTypeAccount>
          </SelectTypeAccount>
          <InputAliasAccount
            className={
              selectValue !== '0' && inputValue === ''
                ? classes.enable
                : undefined
            }
            onChangeProp={handleInput}
            isDisabled={isInputDisabled}
            value={inputValue}
          />
        </div>
        <hr />
        <ButtonCreateAccount
          isDisabled={isButtonDisabled}
          onClickProp={handleSubmitAccount}
        />
      </div>
    </AppLayout>
  );
};
