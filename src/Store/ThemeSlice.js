import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    backgroundColor: 'white',
    textColor: 'black',
  },
  reducers: {
    setTheme: (state, action) => {
      state.backgroundColor = action.payload.backgroundColor;
      state.textColor = action.payload.textColor;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
