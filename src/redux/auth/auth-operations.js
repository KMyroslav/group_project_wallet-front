import {
  registerRequest,
  registerSuccess,
  registerError,
  repeatEmailVerifyRequest,
  repeatEmailVerifySuccess,
  repeatEmailVerifyError,
  logoutRequest,
  logoutSuccess,
  loginRequest,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './auth-actions';

// import { setTotalBalanceSuccess } from 'redux/transactions';

import {
  // fetchSignUp,
  fetchLogin,
  // fetchLogout,
  // fetchAvatar,
  // fetchCurrent,
  // fetchRepeatVerify,
  // fetchRefreshToken,
} from 'services/fetchApi';

const logIn = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await fetchLogin(credentials);
    console.log(response);
    // token.set(response.token);
    dispatch(loginSuccess(response.data));
  } catch (response) {
    dispatch(loginError(response.message));
  }
};

export { logIn };
