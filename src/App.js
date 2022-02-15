import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import Header from './pages/Header/Header';

function App() {
  return (
    <div className="container">
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
