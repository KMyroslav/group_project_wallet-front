import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.scss';

import RegistrationPage from './views/RegistrationPage/RegistrationPage';
import LoginPage from './views/LoginPage/LoginPage';
import DashBoardPage from 'views/DashBoardPage';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/home" component={DashBoardPage} />
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
