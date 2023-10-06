import { createSlice } from "@reduxjs/toolkit";



const initialState = false;

export const sidebarNavSlice = createSlice({
    name: "navside",
    initialState: initialState,
    reducers: {
        setSidebar: (state) => !state,
    },
});

export const { setSidebar } = sidebarNavSlice.actions;

export default sidebarNavSlice.reducer;