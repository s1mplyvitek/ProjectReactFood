import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { clearQty, decreaseItemQty, increaseItemQty } from "../../store/slices/cartSlice";
import { AiFillDelete } from "react-icons/ai";



const CartProvider = ({ children }) => {

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    const nameCart = cart.map((item) => (

        <div className="flex justify-between items-center gap-1 text-base">
            <div className="flex items-center gap-1 py-1 ">
                <img className="w-7 h-10 object-cover rounded-sm " src={item.food.image} alt="/" />
                <span>{item.food.name}</span>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-2xl">
                    <span className="hover:scale-125 duration-200 cursor-pointer" onClick={() => { dispatch(decreaseItemQty(item.food.id)) }}>﹤</span>
                    <p className="text-lg mx-2">{item.qty}</p>
                    <span className="mr-2 hover:scale-125 duration-300 cursor-pointer" onClick={() => { dispatch(increaseItemQty(item.food.id)) }}>﹥</span>
                </div>
                <div className="flex text-base">{item.food.price2 * item.qty} ₽</div>
                <span onClick={() => {dispatch(clearQty(item.food.id))}} className="cursor-pointer pl-2"><AiFillDelete size={23} /></span>
            </div>
        </div>

    ))

    const sum = cart.reduce((sum, item) => {
        sum += item.food.price2 * item.qty;
        return sum;
    }, 0);

    return React.cloneElement(children, { cart, sum, nameCart });
};

export default CartProvider;