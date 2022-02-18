import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactionStatisticsList: [],
  categories: [],
  month: (new Date().getMonth() + 1).toString().padStart(2, '0'),
  year: new Date().getFullYear().toString(),
};

const { reducer, actions } = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransactionsStatisticsList: (state, { payload }) => {
      state.transactionStatisticsList = payload;
    },
    setCategories: (state, { payload }) => {
      state.categories = payload;
    },
    setMonth: (state, { payload }) => {
      state.month = payload;
    },
    setYear: (state, { payload }) => {
      state.year = payload;
    },
  },
});

export const {
  setTransactionsStatisticsList,
  setMonth,
  setYear,
  setToken,
  setCategories,
} = actions;
export default reducer;
