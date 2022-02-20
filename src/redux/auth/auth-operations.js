import { toast } from 'react-toastify';

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
  logoutError,
  getCurrentUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
} from './auth-actions';

import { fetchSignUp, fetchLogin, fetchCurrentUser } from 'services/fetchApi';

import axios from 'axios';

const register = (credentials) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await fetchSignUp(credentials);
    dispatch(registerSuccess(response.data));
  } catch (response) {
    toast.error(
      response.response.status === 409 && '"Вы уже зарегистрированы"',
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
    dispatch(registerError(response.message));
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await fetchLogin(credentials);
    // console.log(response);
    // token.set(response.token);
    dispatch(loginSuccess(response.data));
  } catch (response) {
    toast.error(
      response.response.status === 401 && 'Email or password is wrong!',
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

const token = {
  set(token) {
    fetchCurrentUser.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    fetchCurrentUser.common.Authorization = '';
  },
};

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

export const logout = () => async (dispatch) => {
  dispatch(logoutRequest());
  await axios.post('/users/logout');

  try {
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

export { register, logIn, getCurrentUser };
