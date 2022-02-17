import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import RegistrationPage from './views/RegistrationPage/RegistrationPage';
import LoginPage from './views/LoginPage/LoginPage';

import Header from 'components/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
