import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import dataReducer from "./slices/dataSlice";
import favoriteReducer from "./slices/favoriteSlice";
import mapReducer from "./slices/mapSlice";
import fillReducer from "./slices/fillSlice";
import supportReducer from "./slices/supportSlice"




export const store = configureStore({
    reducer: {
        cart: cartReducer,
        data: dataReducer,
        favorites: favoriteReducer,
        map: mapReducer,
        fill: fillReducer,
        support: supportReducer,
    },
});