


import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            console.log('Adding to cart:', action.payload);
            state.push(action.payload);
        },
        deleteFromCart(state, action) {
            console.log('Deleting from cart:', action.payload);
            return state.filter(item => item.id != action.payload.id);
        },
        clearCart(state){
            return [];
        }
    },
});

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
