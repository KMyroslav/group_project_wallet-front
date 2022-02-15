import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import RegistrationPage from './views/RegistrationPage/RegistrationPage';
import LoginPage from './views/LoginPage/LoginPage';
import Header from './views/Header/Header';

function App() {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route exact path="/" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>

      <main>main</main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
