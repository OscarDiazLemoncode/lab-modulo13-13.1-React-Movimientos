import * as accountApiModel from './api/account-list.api-model';
import * as accountViewModel from './account-list.vm';

export const mapAccountApiToAccountVM = (
  accountList: accountApiModel.Account[]
): accountViewModel.AccountViewM[] =>
  accountList.map((account) => ({
    id: account.id,
    alias: account.name,
    balance: account.balance,
    iban: account.iban,
  }));
