import axios from 'axios';

const BASE_URL = 'https://wallet-app-mudj.onrender.com/api';

axios.defaults.baseURL = BASE_URL;

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const fetchLogin = async (credentials) => {
  return await axios.post(`${BASE_URL}/users/login`, credentials);
};

export const fetchSignUp = async (credentials) => {
  return await axios.post(`${BASE_URL}/users/signup`, credentials);
};

// users data
export const fetchCurrentUser = async () => {
  const { data } = await axios.get(`${BASE_URL}/users/current`);

  return data;
};

export const fetchLogout = async () => {
  const { data } = await axios.get(`${BASE_URL}/users/logout`);

  return data;
};
