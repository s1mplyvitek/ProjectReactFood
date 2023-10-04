import { createSlice } from "@reduxjs/toolkit";



const initialState = [
    {
        name: "Бесплатная доставка",
        id: 1,
        img: "https://img.freepik.com/free-photo/laptop-and-delivery-truck-with-box_23-2148790057.jpg?w=1380&t=st=1695572559~exp=1695573159~hmac=5d6915c201d3b68949425797d68de41d79b72394624dd1de66cb745a5bbdc9e3",
        condition: "При заказе на сумму свыше 500 рублей",
    },
    {
        name: "Скидка 20% на второй бургер",
        id: 2,
        img: "https://img.freepik.com/free-photo/top-view-burgers-on-slate-board_23-2148784459.jpg?w=1380&t=st=1695572721~exp=1695573321~hmac=736a352932822d5e4f244f00b37e52b374b338df0cc7255bc6ee352809f25a37",
        condition: "При покупке 2 бургеров",
    },
    {
        name: "Двойной набор со скидкой",
        id: 3,
        img: "https://img.freepik.com/free-photo/food-assortment-with-cheeseburger-and-nuggets_23-2148314184.jpg?w=1380&t=st=1695572808~exp=1695573408~hmac=afdbfeeb147cc5149d2b148969cecf3824c24f172bf1663a2c9f23a1122d7fea",
        condition: "При покупке двух наборов",
    },
    {
        name: "Двойная порция картофеля фри",
        id: 4,
        img: "https://img.freepik.com/free-photo/flat-lay-delicious-french-fries-arrangement_23-2149160022.jpg?w=1380&t=st=1695572877~exp=1695573477~hmac=99787a65cf67e86c47ff0ee8fb1a02b79a52a5b0077a6028f9a40fec36b1e412",
        condition: "При заказе на сумму свыше 300 рублей",
    },
    {
        name: "Бесплатный напиток с каждым набором",
        id: 5,
        img: "https://img.freepik.com/free-photo/chicken-burgers-coca-cola-and-french-fries-on-a-wooden-board_140725-6989.jpg?w=740&t=st=1695572932~exp=1695573532~hmac=bf4cd1211e637d55cc99087b4f0331ee910496f601eacc71e766b3ff0741fe7e",
        condition: "При покупке любого акционного набора",
    },
    {
        name: "Скидка 50% на вторую пиццу",
        id: 6,
        img: "https://img.freepik.com/free-photo/mushroom-and-salami-pizza-with-ingredients-arranged-over-black-surface_23-2148076189.jpg?w=1380&t=st=1695573025~exp=1695573625~hmac=967ab1c6441db50871ab34b4e994b5bc870ea140b46b1a695c644833ac7fecd7",
        condition: "При покупке двух пицц",
    },
];


export const actionsSlice = createSlice({
    name: "actions",
    initialState: initialState,
    reducers: {},
});

export const { } = actionsSlice.actions;

export default actionsSlice.reducer;