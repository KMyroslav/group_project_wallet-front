import React from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './App.module.scss';

import RegistrationPage from '../src/Pages/RegistrationPage/RegistrationPage';
import Header from '../src/Pages/Header/Header';
import DiagramTab from 'components/DiagramTab/DiagramTab';

function App() {
  return (
    <div className={styles.container}>
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
