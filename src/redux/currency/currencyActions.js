import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCurrencyData = createAsyncThunk(
  'currency/fetchCurrencyData',
  async (_, { rejectWithValue }) => {
    try {
      const currencyData = await axios.get('/api/currency');
      return currencyData.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
