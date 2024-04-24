import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null, // Initialize as null to represent no user logged in
  },
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload; // Set the user info in the state
    },
    clearUser: (state) => {
      state.userInfo = null; // Clear the user info when logging out
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
