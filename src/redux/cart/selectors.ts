import { RootState } from "../store";

export const selectCart = (state: RootState) => state.cartSlice;
export const selectCartItems = (state: RootState) => state.cartSlice.items;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cartSlice.items.find((obj: any) => obj.id === id);