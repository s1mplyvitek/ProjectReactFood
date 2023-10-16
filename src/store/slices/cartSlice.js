import { createSlice } from "@reduxjs/toolkit";

const cartStorageString = localStorage.getItem("cartStorage");

const initialState = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState: cartStorageString
        ? JSON.parse(cartStorageString)
        : initialState,
    reducers: {
        addToCart: (state, action) => {
            let itemToAdd = action.payload;
            let index = state.findIndex(
                (item) => item.food.id === itemToAdd.id
            );
            if (index >= 0) {
                state[index].qty++;
            } else {
                state.push({ qty: 1, food: itemToAdd });
            }
        },
        clearCart: (state) => {
            state.length = 0;
        },
        increaseItemQty: (state, action) => {
            let index = state.findIndex(
                (item) => item.food.id === action.payload
            );
            state[index].qty++;
        },
        decreaseItemQty: (state, action) => {
            let index = state.findIndex(
                (item) => item.food.id === action.payload
            );
            state[index].qty--;
            if (!state[index].qty) state.splice(index, 1);
        },
        clearQty: (state, action) => {
            let index = state.findIndex(
                (item) => item.food.id === action.payload
            );
            state.splice(index, 1);
        }

    },
});


export const { addToCart, clearCart, increaseItemQty, decreaseItemQty, clearQty } =
    cartSlice.actions;

export default cartSlice.reducer;    