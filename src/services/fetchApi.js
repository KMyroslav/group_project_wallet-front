import axios from 'axios';

const BASE_URL = 'https://dvf-project-group-2-back.herokuapp.com/api';

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
