import React from 'react';
import { Switch, Route } from 'react-router-dom';

import s from './App.module.scss';

import RegistrationPage from './pages/RegistrationPage/RegistrationPage.js';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from 'pages/Header';

function App() {
  return (
    <div className={s.container}>
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
