import React from 'react';
import { AppLayout } from '@/layouts';
import classes from './movement-list.page.module.css';
import { MovementListTableComponent } from './components/movement-list-table.component';

export const MovementListPage: React.FC = () => {
  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Saldos y últimos movimientos</h1>
          <div>
            <p>Saldo disponible</p>
            <p>1400</p>
          </div>
        </div>
        <MovementListTableComponent />
      </div>
    </AppLayout>
  );
};
