import { createSlice } from "@reduxjs/toolkit";

const fastFoodRestaurants = [
    {
        id: 1,
        address: '123 Main Street',
        image: 'https://img.freepik.com/premium-photo/rows-of-restaurant-tables-and-chairs-in-gray-room-with-cylinder-shaped-lamps_236854-30114.jpg?w=1380',
        schedule: '10:00 - 22:00',
        coordinates: [55.7539, 37.6208],
        cuisine: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid, commodi neque repellat debitis aliquam, laborum facere'
    },
    {
        id: 2,
        address: '456 Elm Street',
        image: 'https://img.freepik.com/premium-photo/rows-of-restaurant-tables-and-chairs-in-gray-room-with-cylinder-shaped-lamps_236854-30114.jpg?w=1380',
        schedule: '11:00 - 23:00',
        coordinates: [55.7601, 37.6056],
        cuisine: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid, commodi neque repellat debitis aliquam, laborum facere'
    },
    {
        id: 3,
        address: '789 Oak Street',
        image: 'https://img.freepik.com/premium-photo/rows-of-restaurant-tables-and-chairs-in-gray-room-with-cylinder-shaped-lamps_236854-30114.jpg?w=1380',
        schedule: '09:00 - 20:00',
        coordinates: [55.7746, 37.6205],
        cuisine: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid, commodi neque repellat debitis aliquam, laborum facere'
    },
    {
        id: 4,
        address: '321 Maple Street',
        image: 'https://img.freepik.com/premium-photo/rows-of-restaurant-tables-and-chairs-in-gray-room-with-cylinder-shaped-lamps_236854-30114.jpg?w=1380',
        schedule: '12:00 - 21:00',
        coordinates: [55.7519, 37.6176],
        cuisine: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid, commodi neque repellat debitis aliquam, laborum facere'
    },
    {
        id: 5,
        address: '555 Pine Street',
        image: 'https://img.freepik.com/premium-photo/rows-of-restaurant-tables-and-chairs-in-gray-room-with-cylinder-shaped-lamps_236854-30114.jpg?w=1380',
        schedule: '10:30 - 23:30',
        coordinates: [55.7515, 37.6010],
        cuisine: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid, commodi neque repellat debitis aliquam, laborum facere'
    },
    {
        id: 6,
        address: '777 Cedar Street',
        image: 'https://img.freepik.com/premium-photo/rows-of-restaurant-tables-and-chairs-in-gray-room-with-cylinder-shaped-lamps_236854-30114.jpg?w=1380',
        schedule: '09:00 - 22:00',
        coordinates: [55.7698, 37.5951],
        cuisine: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid, commodi neque repellat debitis aliquam, laborum facere'
    },
    {
        id: 7,
        address: '999 Elm Street',
        image: 'https://img.freepik.com/premium-photo/rows-of-restaurant-tables-and-chairs-in-gray-room-with-cylinder-shaped-lamps_236854-30114.jpg?w=1380',
        schedule: '11:00 - 20:00',
        coordinates: [55.7103, 37.5530],
        cuisine: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid, commodi neque repellat debitis aliquam, laborum facere'
    },
    {
        id: 8,
        address: '888 Oak Street',
        image: 'https://img.freepik.com/premium-photo/rows-of-restaurant-tables-and-chairs-in-gray-room-with-cylinder-shaped-lamps_236854-30114.jpg?w=1380',
        schedule: '10:00 - 23:00',
        coordinates: [55.7412, 37.6205],
        cuisine: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid, commodi neque repellat debitis aliquam, laborum facere'
    }
];


export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState: fastFoodRestaurants,
    reducers: {

    },
});

export const { } = restaurantsSlice.actions;

export default restaurantsSlice.reducer;