import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import dataReducer from "./slices/dataSlice";



export const store = configureStore({
    reducer: {
        cart: cartReducer,
        data: dataReducer,
    },
});