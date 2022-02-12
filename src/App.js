import React from 'react';

import s from './App.module.scss';

import { ReactComponent as IconWallet } from '../src/icons/IconWallet.svg';

function App() {
  return (
    <div className={s.container}>
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
