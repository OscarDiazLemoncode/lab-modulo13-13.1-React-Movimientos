import * as apiModel from './api/movement-list.api.model';
import * as movementViewModel from './movement-list.vm';

export const mapMovementListApiToVM = (
  movementList: apiModel.MovementVM[]
): movementViewModel.MovementViewM[] =>
  movementList.map((movement) => ({
    id: movement.id,
    description: movement.description,
    amount: movement.amount,
    balance: movement.balance,
    transaction: new Date(movement.transaction),
    realTransaction: new Date(movement.realTransaction),
  }));
