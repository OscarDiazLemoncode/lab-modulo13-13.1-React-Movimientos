import React from 'react';
import { AppLayout } from '@/layouts/index';
import classes from './create-account.list.page.module.css';

export const CreateAccountPage: React.FC = () => {
  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Cuenta Bancaria</h1>
        </div>
        <div className={classes.content}>
          <div>
            <label htmlFor="select_account">Tipo de cuenta:</label>
            <select id="select_account" className={classes.select}>
              <option value="">Seleccionar</option>
              <option value="">Cuenta Corriente</option>
              <option value="">Cuenta de Ahorro</option>
              <option value="">Cuenta de Nómina</option>
            </select>
          </div>
          <div>
            <label htmlFor="input_alias">Alias: </label>
            <input
              type="text"
              id="input_alias"
              placeholder="Nombre de la cuenta"
            />
          </div>
        </div>
        <hr />
        <button className={`${classes.button} ${classes.mAuto}`}>
          Guardar
        </button>
      </div>
    </AppLayout>
  );
};
