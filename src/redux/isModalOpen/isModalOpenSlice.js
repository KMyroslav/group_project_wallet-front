import { createSlice } from '@reduxjs/toolkit';
import actions from './isModalOpenActions';

const initialState = { isOpen: false };

const isModalOpenSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state, _) => {
      state.isOpen = true;
    },
    hide: (state, _) => {
      state.isOpen = false;
    },
  },
});

export default isModalOpenSlice.reducer;
