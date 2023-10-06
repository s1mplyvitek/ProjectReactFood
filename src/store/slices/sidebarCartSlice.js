import { createSlice } from "@reduxjs/toolkit";


const initialState = false;

export const sidebarCartSlice = createSlice({
    name: "cartside",
    initialState: initialState,
    reducers: {
        setSidebarCart: (state) => !state,
    },
});

export const { setSidebarCart } = sidebarCartSlice.actions;

export default sidebarCartSlice.reducer;