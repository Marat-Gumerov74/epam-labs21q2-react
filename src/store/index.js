import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import {placeholderReduser} from "./placeholderReduser";

export const store = configureStore({
  reducer: {
    user: userReducer,
    placeholder: placeholderReduser,
  }
});