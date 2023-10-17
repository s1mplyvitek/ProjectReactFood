import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import restaurantsReducer from "./slices/restaurantsDataSlice";
import favoritesReducer from "./slices/favoritesSlice";
import mapsReducer from "./slices/mapsSlice";
import actionsReducer from "./slices/actionsDataSlice";
import supportReducer from "./slices/supportSlice";
import sidebarNavReducer from "./slices/sidebarNavSlice";
import sidebarCartReducer from "./slices/sidebarCartSlice";
import menuReducer from "./slices/menuSlice";




export const store = configureStore({
    reducer: {
        cart: cartReducer,
        restaurants: restaurantsReducer,
        favorites: favoritesReducer,
        maps: mapsReducer,
        actions: actionsReducer,
        support: supportReducer,
        navside: sidebarNavReducer,
        cartside: sidebarCartReducer,
        menu: menuReducer,
    },
});