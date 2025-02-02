import React from 'react';
import { MovementViewM } from '../movement-list.vm';
import classes from './movement-list-item.component.module.css';

interface Props {
  movement: MovementViewM;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movement } = props;

  return (
    <>
      {
        <tr className={classes.row}>
          <td>{movement.transaction.toLocaleDateString()}</td>
          <td>{movement.realTransaction.toLocaleDateString()}</td>
          <td>{movement.description}</td>
          <td className={classes.alignRight}>{movement.amount}</td>
          <td className={classes.alignRight}>{movement.balance}</td>
        </tr>
      }
    </>
  );
};
