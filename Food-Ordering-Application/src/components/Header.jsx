import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { NavLink } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
	const [headerBtn, setheaderBtn] = useState("Login");
	const onlineStatus = useOnlineStatus();
	const { loggedInUser } = useContext(UserContext);
	// Subscribing to our cart-items using "useSelector" hook-
	const cartItems = useSelector((appStore) => appStore.cart.items);
	// console.log(cartItems);

	return (
		<div className="flex items-center justify-between px-2 mx-2 border-b sm:text-lg text-sm md:grid md:grid-cols-12 md:gap-4">
			<div className="md:col-span-2">
				<img className="w-12 p-1 m-1 sm:w-18 sm:p-1 sm:m-1" src={LOGO_URL} />
			</div>
			<div className="flex items-center justify-between  sm:mx-4 py-2 md:col-span-6">
			  <ul className=" flex items-center gap-8 font-semibold sm:gap-4 md:gap-8">
					<li className="sm:block hidden">
						Online status:{onlineStatus ? "✅" : "🔴"}
					</li>
					<li className="transition duration-300 ease-in-out hover:text-amber-500">
						<NavLink
							to="/"
							className={({ isActive }) => (isActive ? "active-link" : "")}>
							Home
						</NavLink>
					</li>
					<li className="transition duration-300 ease-in-out hover:text-amber-500">
						<NavLink
							to="/about"
							className={({ isActive }) => (isActive ? "active-link" : "")}>
							About
						</NavLink>
					</li>
					<li className="transition duration-300 ease-in-out hover:text-amber-500">
						<NavLink
							to="/contact"
							className={({ isActive }) => (isActive ? "active-link" : "")}>
							Contact
						</NavLink>
					</li>
					<li className="text-md sm:text-xl transition duration-300 ease-in-out hover:text-amber-500 cursor-pointer">
						<NavLink
							to="/cart"
							className="p-1">
							<FaShoppingCart className=" inline-block mr-1" />({cartItems.length})
						</NavLink>
					</li>
				
				</ul>
			</div>
			<div className="md:col-span-4 md:flex md:justify-end md:items-center md:gap-2">
			      	<li className="bg-amber-400 px-2 py-2 rounded-lg hidden sm:block md:w-16 font-bold">
						<button
							className="cursor-pointer"
							onClick={() => {
								headerBtn === "Login"
									? setheaderBtn("Logout")
									: setheaderBtn("Login");
							}}>
							{headerBtn}
						</button>
					</li>
					<li className="lg:block hidden">User: {loggedInUser} </li>
			</div>				
		</div>
	);
};

export default Header;
