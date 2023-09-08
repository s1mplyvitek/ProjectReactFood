import React from "react";
import { useSelector } from "react-redux"

const CartProvider = ({ children }) => {
    const cart = useSelector((state) => state.cart);
    const nameCart = cart.map((item) => (
        <div>
            <p className="flex gap-1">
                <img className="w-7 h-10 object-cover rounded-sm mb-2" src={item.food.image} alt="/"/><span>{item.food.name}</span> - {item.qty} шт. {item.food.price2 * item.qty} ₽
            </p>
        </div>
    ))

    const sum = cart.reduce((sum, item) => {
        sum += item.food.price2 * item.qty;
        return sum;
    }, 0);

    return React.cloneElement(children, { cart, sum, nameCart });
};

export default CartProvider;