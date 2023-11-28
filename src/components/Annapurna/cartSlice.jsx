// import { createSlice } from '@reduxjs/toolkit'
// const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart(state, action) {
//             state.push(action.payload)
//         },
//         deleteFromCart(state, action) {
//             return state.filter(item => item.id != action.payload.id);
//         }
//     }
// })

// export const { addToCart, deleteFromCart } = cartSlice.actions

// export default cartSlice.reducer;

//chatgpt code
// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     cartItems: [], // Make sure it starts with an empty array
//   },
//   reducers: {
//     addToCart: (state, action) => {
//       state.cartItems.push(action.payload);
//     },
//     // ... other reducers
//   },
// });

// export const { addToCart } = cartSlice.actions;
// export default cartSlice.reducer;



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
