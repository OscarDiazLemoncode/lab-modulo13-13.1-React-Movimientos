import React from 'react';
import { AppLayout } from '@/layouts';
import { MovementListItemComponent } from './components/movement-list-item.component';
import classes from './movement-list.page.module.css';
import { AccountListTableComponent } from './components/movement-list-table.component';

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
        <AccountListTableComponent />
      </div>
    </AppLayout>
  );
};
