import { fetchTransactions } from './transactionsTableOperations';

const { createSlice } = require('@reduxjs/toolkit');

const transactionsSlice = createSlice({
  name: 'transactionsTable',
  initialState: { data: [], isLoading: false, error: null },
  extraReducers: {
    [fetchTransactions.fulfilled]: (state, { payload }) => ({
      ...state,
      data: payload,
    }),
    [fetchTransactions.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [fetchTransactions.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
});

export default transactionsSlice.reducer;
