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

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const categories = await instance.get('/api/categories');
      return categories.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
