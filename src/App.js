import React from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import s from './App.module.scss';
import { Route } from 'react-router-dom';

import { ReactComponent as IconWallet } from '../src/icons/IconWallet.svg';

function App() {
  return (
    <div className={s.container}>
      <Route path="/" component={RegistrationForm} />

      <header>
        <h1 className={s.logo}>
          <IconWallet />
          Wallet
        </h1>
      </header>
      <main>main</main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
