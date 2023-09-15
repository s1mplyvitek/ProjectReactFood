import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState: initialState,
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
    favoriteSlice.actions;

export default favoriteSlice.reducer;