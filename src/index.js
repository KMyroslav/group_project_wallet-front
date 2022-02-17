import React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';
import App from './App';

import store from './redux/store';

ReactDom.render(
  <React.StrictMode>
    <PersistGate persistor={store.persistor}>
      <BrowserRouter>
        <Provider store={store.store}>
          <App />
        </Provider>
      </BrowserRouter>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root'),
);
