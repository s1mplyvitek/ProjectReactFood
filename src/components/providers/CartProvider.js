import React, { useEffect } from "react";
import { useSelector } from "react-redux"




const CartProvider = ({ children }) => {

    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        localStorage.setItem("cartStorage", JSON.stringify(cart))
    }, [cart]);

    const sum = cart.reduce((sum, item) => {
        sum += item.food.price * item.qty;
        return sum;
    }, 0);

    return React.cloneElement(children, { cart, sum });
};

export default CartProvider;