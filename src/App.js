import React from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import s from './App.module.scss';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className={s.container}>

      <Route path='/' component={RegistrationForm} />

    </div>
  );
}

export default App;
