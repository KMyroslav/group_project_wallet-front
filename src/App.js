import React from 'react';
import { useSelector } from 'react-redux';

import { Switch, Route, Redirect } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import './App.scss';

import RegistrationPage from './views/RegistrationPage/RegistrationPage';
import LoginPage from './views/LoginPage/LoginPage';
import DashBoardPage from 'views/DashBoardPage';
import CurrencyPage from 'views/CurrencyPage';

import { getIsAuth } from './redux/auth/auth-selectors';

// import Header from 'components/Header';
import ModalAddTransactions from 'components/ModalAddTransactions';
import modalSelectors from 'redux/isModalOpen/isModalOpenSelectors';
import ButtonAddTransactions from 'components/ButtonAddTransactions';

function App() {
  const isModalOpen = useSelector(modalSelectors.getIsModalOpen);

  const isLoggedIn = useSelector(getIsAuth);

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={isLoggedIn ? DashBoardPage : RegistrationPage}
        />
        <Route path="/login">
          {isLoggedIn ? <Redirect to="/home/main" /> : <LoginPage />}
        </Route>
        <Route path="/home" component={DashBoardPage} />
      </Switch>
      {isModalOpen && <ModalAddTransactions />}
      {isLoggedIn && <ButtonAddTransactions />}
      <ToastContainer />
    </div>
  );
}

export default App;
