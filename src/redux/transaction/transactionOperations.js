import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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
      toast.error(error.response.data.message);
      return rejectWithValue(error.message);
    }
  },
);
