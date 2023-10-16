import { createSlice } from "@reduxjs/toolkit";

const cartStorageString = localStorage.getItem("favoriteStorage");

const initialState = [];

export const favoritesSlice = createSlice({
    name: "favorites",

    initialState: cartStorageString
        ? JSON.parse(cartStorageString)
        : initialState,

    reducers: {
        addToFavorites: (state, action) => {
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
        removeFromFavorites: (state, action) => {
            let index = state.findIndex(
                (item) => item.food.id === action.payload
            );
            state.splice(index, 1);
        },
    },
});

export const { addToFavorites, removeFromFavorites } =
    favoritesSlice.actions;

export default favoritesSlice.reducer;