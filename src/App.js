import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.scss';

import RegistrationPage from './views/RegistrationPage/RegistrationPage';
import LoginPage from './views/LoginPage/LoginPage';
import DashBoardPage from 'views/DashBoardPage';
import CurrencyPage from 'views/CurrencyPage';

import { useSelector } from 'react-redux';
import { getIsAuth } from './redux/auth/auth-selectors';

function App() {
  const isLoggedIn = useSelector(getIsAuth);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={RegistrationPage} />
        <Route path="/login">
          {isLoggedIn ? <Redirect to="/home" /> : <LoginPage />}
        </Route>
        <Route path="/home" component={DashBoardPage} />
        <Route path="/currency" component={CurrencyPage} />
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
