import React from 'react';
import { Switch, Route } from 'react-router-dom';

import s from './App.module.scss';

import RegistrationPage from './Pages/RegistrationPage/RegistrationPage.js';
import Header from 'components/Header';
import DiagramTab from 'components/DiagramTab/DiagramTab';

function App() {
  return (
    <div className={s.container}>
      <Header />
      <Switch>
        <Route path="/" component={RegistrationPage} />
      </Switch>
      <DiagramTab />
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
