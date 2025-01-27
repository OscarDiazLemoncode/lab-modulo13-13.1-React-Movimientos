import { MovementListItemComponent } from './movement-list-item.component';
import classes from './movement-list-table.component.module.css';

export const MovementListTableComponent = () => {
  return (
    <>
      <div className={classes.headerContainer}>
        <h2 className={`${classes.bold} ${classes.header}`}>
          Alias: Gastos mes
        </h2>
        <h2 className={`${classes.bold} ${classes.header}`}>IBAN</h2>
      </div>
      <table className={classes.gridContainer}>
        <thead>
          <tr className={classes.headerTable}>
            <th className={`${classes.headerCell} ${classes.uppercase}`}>
              fecha
            </th>
            <th className={`${classes.headerCell} ${classes.uppercase}`}>
              fecha valor
            </th>
            <th className={`${classes.headerCell} ${classes.uppercase}`}>
              descripción
            </th>
            <th className={`${classes.headerCell} ${classes.uppercase}`}>
              importe
            </th>
            <th className={`${classes.headerCell} ${classes.uppercase}`}>
              saldo disponible
            </th>
          </tr>
        </thead>
        <tbody>
          <MovementListItemComponent />
        </tbody>
      </table>
    </>
  );
};
