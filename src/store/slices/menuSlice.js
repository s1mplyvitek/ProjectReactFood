import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = { items: [], loading: "start" };

export const getMenu = createAsyncThunk("menu/getMenu", async () => {
    return axios.get("/data/menu.json").then((r) => r.data);
});

export const menuSlice = createSlice({
    name: "menu",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMenu.fulfilled, (state, action) => {
            state.loading = "fulfilled";
            state.items.length = 0;
            state.items.push(...action.payload);
        });
        builder.addCase(getMenu.pending, (state, action) => {
            state.loading = "pending";
        });
        builder.addCase(getMenu.rejected, (state, action) => {
            state.loading = "rejected";
        });
    },
});

export const { } = menuSlice.actions;

export default menuSlice.reducer;