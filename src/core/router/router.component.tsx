import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { appRoutes } from '@/core/router';
import {
  LoginPage,
  AccountListPage,
  /* AccountPage, */
  MovementListPage,
  TransferPage,
  CreateAccountForm,
} from '@/pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.root} element={<LoginPage />} />
        <Route path={appRoutes.accountList} element={<AccountListPage />} />
        <Route path={appRoutes.createAccount} element={<CreateAccountForm />} />
        <Route path={appRoutes.editAccount} element={<CreateAccountForm />} />
        <Route path={appRoutes.movements} element={<MovementListPage />} />
        <Route path={appRoutes.transfer} element={<TransferPage />} />
        <Route
          path={appRoutes.transferFromAccount}
          element={<TransferPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
