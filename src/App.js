import React from 'react';
import { Switch, Route } from 'react-router-dom';

import s from './App.module.scss';

import RegistrationPage from 'pages/RegistrationPage';
import Header from 'pages/Header';

function App() {
  return (
    <div className={s.container}>
      <Header />
      <Switch>
        <Route path="/" component={<RegistrationPage />} />
      </Switch>
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
