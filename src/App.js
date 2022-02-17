import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.scss';

import RegistrationPage from './views/RegistrationPage/RegistrationPage';
import LoginPage from './views/LoginPage/LoginPage';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
      <ToastContainer />
    </div>
  );
}

export default App;
