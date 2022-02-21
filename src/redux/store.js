import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { authReducer } from 'redux/auth/auth-reducer';
// import { wallet } from 'redux/transactions';
import transactionReducer from './transaction/transactionSlice';
import categoriesReducer from './categories/categoriesSlice';
import transactionsReducer from './transactions/transactionsSlice';
import transactionsTableReducer from './transactionsTable/transactionsTableSlice';
import balanceReducer from './balance/balanceSlice';
import isModalOpenReducer from './isModalOpen/isModalOpenSlice';

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token', 'refreshToken'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    // wallet,
    transactions: transactionsReducer,
    transactionsTable: transactionsTableReducer,
    balance: balanceReducer,
    transaction: transactionReducer,
    categories: categoriesReducer,
    modal: isModalOpenReducer,
  },
  middleware,
  devTools: true,
});

const persistor = persistStore(store);
export { store, persistor };
