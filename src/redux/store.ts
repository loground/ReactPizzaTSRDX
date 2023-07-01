import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart/cartSlice';
import filter from './filter/filterSlice';
import pizzaSlice from './pizza/pizzaSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter,
    cartSlice,
    pizzaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();