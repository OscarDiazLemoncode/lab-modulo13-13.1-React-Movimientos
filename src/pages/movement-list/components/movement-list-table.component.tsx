import { MovementListItemComponent } from './movement-list-item.component';
import { MovementViewM } from '../movement-list.vm';
import classes from './movement-list-table.component.module.css';

interface Props {
  movementList: MovementViewM[];
}

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const { movementList } = props;
  return (
    <>
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
          {movementList.map((movement) => (
            <MovementListItemComponent movement={movement} key={movement.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};
