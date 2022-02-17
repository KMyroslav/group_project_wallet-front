import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  registerSuccess,
  registerError,
  repeatEmailVerifyRequest,
  repeatEmailVerifySuccess,
  repeatEmailVerifyOk,
  repeatEmailVerifyError,
  logoutSuccess,
  logoutError,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  registerRequest,
  logoutRequest,
  loginRequest,
} from './auth-actions';

const initialUserState = { name: null, email: null, balance: 0 };

const user = createReducer(initialUserState, {
  [loginSuccess]: (state, { payload }) => ({
    ...state,
    ...payload.user,
  }),
});

const refreshToken = createReducer(null, {
  [loginSuccess]: (_, { payload }) => payload.refreshToken,
  [logoutSuccess]: () => null,
});

const token = createReducer(null, {
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [loginError]: setError,
  [loginSuccess]: () => null,
  [loginRequest]: () => null,
});

const isLogin = createReducer(false, {
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutSuccess]: () => false,
});

const authReducer = combineReducers({
  user,
  isLogin,
  token,
  refreshToken,
  error,
});

export { authReducer };
