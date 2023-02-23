import { fetchCurrencyData } from './currencyActions';
import { createSlice } from '@reduxjs/toolkit';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchCurrencyData.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchCurrencyData.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    },
    [fetchCurrencyData.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export default currencySlice;
