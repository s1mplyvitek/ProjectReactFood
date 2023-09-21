import { createSlice } from "@reduxjs/toolkit";



const initialState = [
    {
        name: 'Красная площадь',
        coordinates: [55.7539, 37.6208],
    },
    {
        name: 'Патриаршие пруды',
        coordinates: [55.7601, 37.6056],
    },
    {
        name: 'Садовое кольцо',
        coordinates: [55.7746, 37.6205],
    },
    {
        name: 'Московский Кремль',
        coordinates: [55.7519, 37.6176],
    },
    {
        name: 'Арбат',
        coordinates: [55.7515, 37.6010],
    },
    {
        name: 'Московский зоопарк',
        coordinates: [55.7698, 37.5951],
    },
    {
        name: 'Воробьевы горы',
        coordinates: [55.7103, 37.5530],
    },
    {
        name: 'Государственная Третьяковская галерея',
        coordinates: [55.7412, 37.6205],
    },
];;

export const mapSlice = createSlice({
    name: "map",
    initialState: initialState,
    reducers: {
        addIdMap: (state, action) => {
            state.length = 0;
            state.push(action.payload);
        },
    },
});

export const { addIdMap } = mapSlice.actions;

export default mapSlice.reducer;