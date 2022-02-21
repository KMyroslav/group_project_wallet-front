import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTransactions = createAsyncThunk(
  'finance/fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const transactions = await axios.get('/api/transactions');
      return transactions.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
