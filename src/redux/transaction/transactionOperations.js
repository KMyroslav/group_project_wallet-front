import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createTransaction = createAsyncThunk(
  'transaction/createTransaction',
  async (newTransaction, { rejectWithValue }) => {
    try {
      const transactions = await axios.post(
        '/api/transactions',
        newTransaction,
      );
      return transactions.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
