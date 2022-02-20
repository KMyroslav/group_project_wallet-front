import { createTransaction } from './transactionOperations';

const { createSlice } = require('@reduxjs/toolkit');

const transactionSlice = createSlice({
  name: 'newTransaction',
  initialState: { data: {}, isLoading: false, error: null },
  extraReducers: {
    [createTransaction.fulfilled]: (state, { payload }) => ({
      ...state,
      data: payload,
    }),
    [createTransaction.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [createTransaction.rejected]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
});

export default transactionSlice.reducer;
