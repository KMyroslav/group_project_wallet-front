import axios from 'axios';
import {
  setToken,
  setTransactionsStatisticsList,
  setCategories,
} from './transactionsSlice';

const BASE_URL = 'https://dvf-project-group-2-back.herokuapp.com/';

axios.defaults.baseURL = BASE_URL;

export const getUser = () => async (dispatch) => {
  const response = await axios.post('/api/users/login', {
    email: 'testing123@gmail.com',
    password: 'asDF1234$',
  });
  dispatch(setToken(response.data.token));
};

export const getStatistics = (query) => async (dispatch, getState) => {
  const { transactions } = getState();
  const token = transactions.token;

  const instance = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: 'Bearer ' + token },
  });

  instance
    .get('api/transactions/statistics', {
      params: { month: query.month, year: query.year },
    })
    .then(({ data }) => {
      console.log(data);
      dispatch(setTransactionsStatisticsList(data));
    })
    .catch((err) => console.log(err));
};

export const getCategories = (query) => async (dispatch, getState) => {
  const { transactions } = getState();
  const token = transactions.token;

  const instance = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: 'Bearer ' + token },
  });

  instance
    .get('api/categories')
    .then(({ data }) => {
      dispatch(setCategories(data));
    })
    .catch((err) => console.log(err));
};
