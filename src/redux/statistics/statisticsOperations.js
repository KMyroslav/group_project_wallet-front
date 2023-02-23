import axios from 'axios';
import {
  setTransactionsStatisticsList,
  setCategories,
} from './statisticsSlice';

const BASE_URL = 'https://wallet-app-mudj.onrender.com/';

axios.defaults.baseURL = BASE_URL;

// const retrievedStoreStr = localStorage.getItem('persist:token');
// const retrievedStore = JSON.parse(retrievedStoreStr);
// const token = retrievedStore.token.slice(1, retrievedStore.token.length - 1);

export const getStatistics = (query, token) => async (dispatch) => {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: 'Bearer ' + token },
  });

  instance
    .get('api/transactions/statistics', {
      params: { month: query.month, year: query.year },
    })
    .then(({ data }) => {
      dispatch(setTransactionsStatisticsList(data));
    })
    .catch((err) => console.log(err));
};

export const getCategories = (token) => async (dispatch) => {
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
