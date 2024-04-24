// store.js
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeReducer from './ThemeSlice';
import cartReducer from './cartSlice';
import tokenReducer from './tokenSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  cart: cartReducer,
  token: tokenReducer,
  user: userReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
