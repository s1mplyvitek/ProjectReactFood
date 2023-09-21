import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import dataReducer from "./slices/dataSlice";
import favoriteReducer from "./slices/favoriteSlice";
import mapReducer from "./slices/mapSlice";




export const store = configureStore({
    reducer: {
        cart: cartReducer,
        data: dataReducer,
        favorites: favoriteReducer,
        map: mapReducer,
    },
});