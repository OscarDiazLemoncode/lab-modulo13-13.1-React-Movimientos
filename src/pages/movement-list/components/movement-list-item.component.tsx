import React from 'react';
import { MovementVM } from '../api/movement-list.api.model';

const movementsDataMock: MovementVM[] = [
  {
    id: '1',
    description: 'Nómina noviembre',
    amount: 900,
    balance: 1490,
    transaction: '2019-12-09T21:30:00',
    realTransaction: '2019-12-09T21:30:00',
    accountId: '1',
  },
  {
    id: '2',
    description: 'Alquiler noviembre',
    amount: -400,
    balance: 590,
    transaction: '2019-12-07T11:30:00',
    realTransaction: '2019-12-08T20:00:10',
    accountId: '1',
  },
];

export const MovementListItemComponent: React.FC = () => {
  const [movements /* , setMovements */] = React.useState(movementsDataMock);
  return (
    <>
      {movements.map((movement) => (
        <>
          <p key={movement.id}>{movement.transaction}</p>
          <p key={movement.id}>{movement.realTransaction}</p>
          <p key={movement.id}>{movement.description}</p>
          <p key={movement.id}>{movement.amount}</p>
          <p key={movement.id}>{movement.balance}</p>
        </>
      ))}
    </>
  );
};
