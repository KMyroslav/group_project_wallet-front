import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import styles from './App.module.scss';

import RegistrationPage from '../src/pages/RegistrationPage/RegistrationPage';
import Header from '../src/pages/Header/Header';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      {/* <Switch>
        <Route path="/" component={RegistrationPage} />
      </Switch> */}
      <LoginForm />
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
