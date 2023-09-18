import { createSlice } from "@reduxjs/toolkit";

const fastFoodRestaurants = [
    {
        id: 1,
        address: '123 Main Street',
        image: 'https://img.freepik.com/premium-photo/rows-of-restaurant-tables-and-chairs-in-gray-room-with-cylinder-shaped-lamps_236854-30114.jpg?w=1380',
        schedule: '10:00 - 22:00',
        cuisine: 'Burgers'
    },
    {
        id: 2,
        address: '456 Elm Street',
        image: 'https://img.freepik.com/premium-photo/rows-of-restaurant-tables-and-chairs-in-gray-room-with-cylinder-shaped-lamps_236854-30114.jpg?w=1380',
        schedule: '11:00 - 23:00',
        cuisine: 'Fried Chicken'
    },
    {
        id: 3,
        address: '789 Oak Street',
        image: 'https://img.freepik.com/premium-photo/rows-of-restaurant-tables-and-chairs-in-gray-room-with-cylinder-shaped-lamps_236854-30114.jpg?w=1380',
        schedule: '09:00 - 20:00',
        cuisine: 'Sandwiches'
    },
    {
        id: 4,
        address: '321 Maple Street',
        image: 'https://img.freepik.com/premium-photo/rows-of-restaurant-tables-and-chairs-in-gray-room-with-cylinder-shaped-lamps_236854-30114.jpg?w=1380',
        schedule: '12:00 - 21:00',
        cuisine: 'Pizza'
    },
    {
        id: 5,
        address: '555 Pine Street',
        image: 'https://img.freepik.com/premium-photo/rows-of-restaurant-tables-and-chairs-in-gray-room-with-cylinder-shaped-lamps_236854-30114.jpg?w=1380',
        schedule: '10:30 - 23:30',
        cuisine: 'Burgers'
    },
    {
        id: 6,
        address: '777 Cedar Street',
        image: 'https://img.freepik.com/premium-photo/rows-of-restaurant-tables-and-chairs-in-gray-room-with-cylinder-shaped-lamps_236854-30114.jpg?w=1380',
        schedule: '09:00 - 22:00',
        cuisine: 'Mexican'
    },
    {
        id: 7,
        address: '999 Elm Street',
        image: 'https://img.freepik.com/premium-photo/rows-of-restaurant-tables-and-chairs-in-gray-room-with-cylinder-shaped-lamps_236854-30114.jpg?w=1380',
        schedule: '11:00 - 20:00',
        cuisine: 'Burgers'
    },
    {
        id: 8,
        address: '888 Oak Street',
        image: 'https://img.freepik.com/premium-photo/rows-of-restaurant-tables-and-chairs-in-gray-room-with-cylinder-shaped-lamps_236854-30114.jpg?w=1380',
        schedule: '10:00 - 23:00',
        cuisine: 'Chinese'
    }
];


export const dataSlice = createSlice({
    name: "data",
    initialState: fastFoodRestaurants,
    reducers: {

    },
});

export const { } = dataSlice.actions;

export default dataSlice.reducer;