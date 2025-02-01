import React from 'react';
import { AppLayout } from '@/layouts';
import { MovementListTableComponent } from './components/movement-list-table.component';
import { getMovementsList } from './api/movement-list.api';
import { MovementVM } from './api/movement-list.api.model';
import classes from './movement-list.page.module.css';

export const MovementListPage: React.FC = () => {
  const [movementList, setMovementList] = React.useState<MovementVM[]>([]);
  React.useEffect(() => {
    getMovementsList('3').then((data) => setMovementList(data));
  }, []);

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
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
