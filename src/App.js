import React from 'react';
import { Route } from 'react-router-dom';

import s from './App.module.scss';

import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Header from 'components/Header';
import { Table } from './components/Table';

import transactions from './components/Table/mock';

function App() {
  return (
    <div className={s.container}>
      <Header />
      <Route path="/" component={RegistrationForm} />
      <Table transactions={transactions} />

      <main>main</main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
