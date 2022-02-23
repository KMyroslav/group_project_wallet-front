import { toast } from 'react-toastify';
import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  // logoutError,
  getCurrentUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
} from './auth-actions';

import { token, fetchSignUp, fetchLogin, fetchLogout } from 'services/fetchApi';

// registration
const register = (credentials) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await fetchSignUp(credentials);
    dispatch(registerSuccess(response.data));
  } catch (response) {
    toast.error(response.response.status === 409 && 'Вы уже зарегистрированы', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(registerError(response.message));
  }
};

// set login
const logIn = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await fetchLogin(credentials);
    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
  } catch (response) {
    toast.error(
      response.response.status === 401 && 'Неверно набраные пароль или почта!',
      {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      },
    );
    dispatch(loginError(response.message));
  }
};

// get user name
const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: prsistedToken },
  } = getState();

  if (!prsistedToken) {
    return;
  }
  token.set(prsistedToken);

  dispatch(getCurrentUserRequest);

  axios
    .get('users/current')
    .then(({ data }) => dispatch(getCurrentUserSuccess(data)))
    .catch((err) => getCurrentUserError(err.message));
};

// exit
const logout = () => async (dispatch) => {
  dispatch(logoutRequest());

  try {
    await fetchLogout();
    token.unset();
    dispatch(logoutSuccess());
  } catch ({ response }) {
    token.unset();
    dispatch(logoutSuccess());
  }
};

export { register, logIn, getCurrentUser, logout };
