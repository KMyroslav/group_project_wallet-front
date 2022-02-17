import { createAction } from '@reduxjs/toolkit';

export const registerRequest = createAction('auth/registerRequest');
export const registerSuccess = createAction('auth/registerSuccess');
export const registerError = createAction('auth/registerError');

export const loginRequest = createAction('auth/loginRequest');
export const loginSuccess = createAction('auth/loginSuccess');
export const loginError = createAction('auth/loginError');

export const registrationRequest = createAction('auth/registrationRequest');
export const registrationSuccess = createAction('auth/registrationSuccess');
export const registrationError = createAction('auth/registrationError');

export const logoutRequest = createAction('auth/logoutRequest');
export const logoutSuccess = createAction('auth/logoutSuccess');
export const logoutError = createAction('auth/logoutError');

export const repeatEmailVerifyRequest = createAction(
  'auth/repeatEmailVerifyRequest',
);
export const repeatEmailVerifySuccess = createAction(
  'auth/repeatEmailVerifySuccess',
);
export const repeatEmailVerifyOk = createAction('auth/repeatEmailVerifyOk');
export const repeatEmailVerifyError = createAction(
  'auth/repeatEmailVerifyError',
);

export const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
export const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
export const getCurrentUserError = createAction('auth/getCurrentUserError');
