import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: '', // Initial state for token
  },
  reducers: {
    setToken: (state, action) => {
        // console.log("ation", action);
      state.token = action.payload; // Update token in state with the payload value
    },
  },
});

export const { setToken } = tokenSlice.actions; // Export the correct action creator
export default tokenSlice.reducer;
