import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("Payload received in addToCart:", action.payload); // Log the payload
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      console.log("Payload received in removeFromCart:", action.payload); // Log the payload
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: state => {
      console.log("Clearing cart"); // Log a message
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
