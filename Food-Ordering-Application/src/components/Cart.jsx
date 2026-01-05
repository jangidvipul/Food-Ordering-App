import React from "react";
import ItemLists from "./ItemLists";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";
import { useDispatch } from "react-redux";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
	// subscribing to our store cart-items using selector
	const cartItems = useSelector((appStore) => appStore.cart.items);
    // console.log(cartItems);
   

	const dispatch = useDispatch();
	// Clear Cart handler-
	const handleClearCart = () => {
		// dispatch an action
		dispatch(clearItems());
	};

	return (
		<div className="text-center p-4 m-4">
			<h1 className="text-2xl font-bold">My Cart 🛒</h1>
			<div className="w-6/12 m-auto">
				<button
					className="bg-amber-400 rounded-lg m-4 p-2 font-bold cursor-pointer"
					onClick={handleClearCart}>
					Clear Cart
				</button>
				<ItemLists items={cartItems} />
			</div>
		</div>
	);
};

export default Cart;
