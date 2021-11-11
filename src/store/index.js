import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import {placeholderReduser} from "./placeholderReduser";
import {customDataReduser} from "./customDataReduser";


export const store = configureStore({
  reducer: {
    user: userReducer,
    placeholder: placeholderReduser,
    customData: customDataReduser,
  }
});