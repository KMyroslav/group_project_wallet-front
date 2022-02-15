import React from 'react';
import { Switch, Route } from 'react-router-dom';

import s from './App.module.scss';

import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './pages/Header/Header';

function App() {
  return (
    <div className={s.container}>
      <Switch>
        <Route exact path="/" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>

      <Header />
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
