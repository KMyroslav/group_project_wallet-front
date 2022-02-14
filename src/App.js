import React from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './App.module.scss';

import RegistrationPage from '../src/Pages/RegistrationPage/RegistrationPage';
import Header from '../src/Pages/Header/Header';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Switch>
        <Route path="/" component={RegistrationPage} />
      </Switch>
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
