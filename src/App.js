import React from 'react';
// import { Switch, Route } from 'react-router-dom';

import s from './App.module.scss';

// import RegistrationPage from './Pages/RegistrationPage/RegistrationPage.js';
import Header from 'components/Header';

import ButtonAddTransactions from 'components/ButtonAddTransactions';
import ModalAddTransactions from 'components/ModalAddTransactions';

function App() {
  return (
    <div className={s.container}>
      <Header />
      {/* <Switch>
        <Route path="/" component={RegistrationPage} />
      </Switch>
      <main>main</main> */}
      <ModalAddTransactions />
      <ButtonAddTransactions />
      {/* <footer>footer</footer> */}
    </div>
  );
}

export default App;
