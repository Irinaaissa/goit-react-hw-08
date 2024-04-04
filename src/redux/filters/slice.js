
// export const selectNumberFilter = state => state.filters.number;
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
    
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload.trim();
      // state.number = action.payload;
    },
  },
});


export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;