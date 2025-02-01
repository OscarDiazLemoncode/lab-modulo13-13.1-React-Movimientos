import React from 'react';
import { MovementVM } from '../api/movement-list.api.model';
import classes from './movement-list-item.component.module.css';

interface Props {
  movement: MovementVM;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movement } = props;

  return (
    <>
      {
        <tr className={classes.row}>
          <td>{movement.transaction}</td>
          <td>{movement.realTransaction}</td>
          <td>{movement.description}</td>
          <td className={classes.alignRight}>{movement.amount}</td>
          <td className={classes.alignRight}>{movement.balance}</td>
        </tr>
      }
    </>
  );
};
