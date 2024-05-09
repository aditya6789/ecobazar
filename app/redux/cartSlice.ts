// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StaticImageData } from 'next/image';

export interface IProduct {
  id: number;
  image: StaticImageData;
  name: string;
  price: number;
  category: string;
}

interface IcartState {
  products: IProduct[];
  totalPrice: number;
}

const initialState: IcartState = {
  products: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IProduct>) => {
      state.products.push(action.payload);
      state.totalPrice = state.products.reduce((total, product) => total + product.price, 0);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(product => product.id !== action.payload);
      state.totalPrice = state.products.reduce((total, product) => total + product.price, 0);
    },
    recalculateTotalPrice: (state) => {
      state.totalPrice = state.products.reduce((total, product) => total + product.price, 0);
    },
  },
});

export const { add, recalculateTotalPrice, remove } = cartSlice.actions;

export default cartSlice.reducer;
