import React from 'react';
import { useParams } from 'react-router-dom';
import { AppLayout } from '@/layouts';
import { MovementListTableComponent } from './components/movement-list-table.component';
import { getMovementsList } from './api/movement-list.api';
import { MovementViewM } from './movement-list.vm';
import { mapMovementListApiToVM } from './movement-list.mapper';
import { getAccountList } from './api/account-list.api';
import { mapAccountApiToAccountVM } from './account-list.mapper';
import { AccountViewM } from './account-list.vm';
import classes from './movement-list.page.module.css';

export const MovementListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movementList, setMovementList] = React.useState<MovementViewM[]>([]);
  const [accountList, setAccountList] = React.useState<AccountViewM[]>([]);
  React.useEffect(() => {
    if (id) {
      getMovementsList(id).then((data) =>
        setMovementList(mapMovementListApiToVM(data))
      );
      getAccountList(id).then((data) =>
        setAccountList(mapAccountApiToAccountVM(data))
      );
    }
  }, [id]);

  return (
    <AppLayout>
      <div className={classes.root}>
        {accountList.map((item) => (
          <>
            <div className={classes.headerContainer}>
              <h1>Saldos y últimos movimientos</h1>
              <div>
                <p className={`${classes.uppercase} ${classes.bold}`}>
                  Saldo disponible
                </p>
                <p
                  className={`${classes.balance} ${classes.alignRight}`}
                >{`${item.balance} €`}</p>
              </div>
            </div>
            <div className={classes.headerContainer}>
              <h2 className={`${classes.bold} ${classes.header}`}>
                Alias: {item.alias}
              </h2>
              <h2 className={`${classes.bold} ${classes.header}`}>
                IBAN: {item.iban}
              </h2>
            </div>
          </>
        ))}
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
