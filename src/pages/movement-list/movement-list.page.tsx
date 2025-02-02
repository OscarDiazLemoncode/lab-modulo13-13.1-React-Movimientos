import React from 'react';
import { useParams } from 'react-router-dom';
import { AppLayout } from '@/layouts';
import { MovementListTableComponent } from './components/movement-list-table.component';
import { getMovementsList } from './api/movement-list.api';
import { MovementViewM } from './movement-list.vm';
import { mapMovementListApiToVM } from './movement-list.mapper';
import classes from './movement-list.page.module.css';

export const MovementListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movementList, setMovementList] = React.useState<MovementViewM[]>([]);
  React.useEffect(() => {
    if (id) {
      getMovementsList(id).then((data) =>
        setMovementList(mapMovementListApiToVM(data))
      );
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
