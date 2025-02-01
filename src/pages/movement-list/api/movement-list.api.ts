/* import { MovementVM } from './movement-list.api.model';

const url = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovementsList = (): Promise<MovementVM[]> => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}; */

import Axios from 'axios';
import { MovementVM } from './movement-list.api.model';

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovementsList = (accountId: string): Promise<MovementVM[]> =>
  Axios.get<MovementVM[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );
