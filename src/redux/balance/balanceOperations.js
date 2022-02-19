import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://dvf-project-group-2-back.herokuapp.com/';

axios.defaults.baseURL = BASE_URL;

const retrievedStoreStr = localStorage.getItem('persist:token');
const retrievedStore = JSON.parse(retrievedStoreStr);
const token = retrievedStore.token.slice(1, retrievedStore.token.length - 1);

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: 'Bearer ' + token },
});

export const fetchBalance = createAsyncThunk(
  'finance/fetchBalance',
  async (_, { rejectWithValue }) => {
    try {
      const balance = await instance.get('/api/users/current');
      return balance.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
