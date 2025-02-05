import Axios from 'axios';
import { Account } from './account-list.api-model';
const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = (id: string): Promise<Account[]> =>
  Axios.get<Account[]>(urlAccount, { params: { id } }).then(({ data }) => data);
