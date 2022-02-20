import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.scss';

import RegistrationPage from './views/RegistrationPage/RegistrationPage';
import LoginPage from './views/LoginPage/LoginPage';
import DashBoardPage from 'views/DashBoardPage';
import CurrencyPage from 'views/CurrencyPage';

import { getIsAuth } from './redux/auth/auth-selectors';

// import Header from 'components/Header';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={RegistrationPage} />
        {/* <Route path="/login" component={LoginPage} /> */}
        <Route path="/login">
          {!getIsAuth ? <Redirect to="/home" /> : <LoginPage />}
        </Route>
        <Route path="/home" component={DashBoardPage} />
        <Route path="/currency" component={CurrencyPage} />
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
