import React from 'react';
import { useParams } from 'react-router-dom';
import { AppLayout } from '@/layouts';
import { MovementListTableComponent } from './components/movement-list-table.component';
import { getMovementsList } from './api/movement-list.api';
import { MovementVM } from './api/movement-list.api.model';
import classes from './movement-list.page.module.css';

export const MovementListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movementList, setMovementList] = React.useState<MovementVM[]>([]);
  React.useEffect(() => {
    if (id) {
      getMovementsList(id).then((data) => setMovementList(data));
    }
  }, [id]);

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
