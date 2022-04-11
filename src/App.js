import React from 'react';
import { useSelector } from 'react-redux';

import { Switch, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import './App.scss';

import RegistrationPage from './views/RegistrationPage/RegistrationPage';
import LoginPage from './views/LoginPage/LoginPage';
import DashBoardPage from 'views/DashBoardPage';

import { getIsAuth } from './redux/auth/auth-selectors';

import { PrivateRoute, RestrictedRoute } from 'components/Routes';
import ModalAddTransactions from 'components/ModalAddTransactions';
import ButtonAddTransactions from 'components/ButtonAddTransactions';
import modalSelectors from 'redux/isModalOpen/isModalOpenSelectors';

function App() {
  const isModalOpen = useSelector(modalSelectors.getIsModalOpen);

  const isLoggedIn = useSelector(getIsAuth);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <RestrictedRoute>
            <LoginPage />
          </RestrictedRoute>
        </Route>
        <Route path="/signup">
          <RestrictedRoute>
            <RegistrationPage />
          </RestrictedRoute>
        </Route>
        <Route path="/home">
          <PrivateRoute>
            <DashBoardPage />
          </PrivateRoute>
        </Route>
      </Switch>
      {isModalOpen && <ModalAddTransactions />}
      {isLoggedIn && <ButtonAddTransactions />}
      <ToastContainer />
    </div>
  );
}

export default App;
