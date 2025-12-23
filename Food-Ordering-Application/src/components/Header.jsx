import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { NavLink } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
	const [headerBtn, setheaderBtn] = useState("Login");
	const onlineStatus = useOnlineStatus();
	const {loggedInUser} = useContext(UserContext);

	return (
		<div className="flex items-center justify-between p-2 m-2 border-b text-lg">
			<div>
				<img className="w-18 p-1 m-1" src={LOGO_URL} />
			</div>
			<div className="flex items-center ">
				<ul className="flex items-center gap-8 font-medium">
					<li>Online status:{onlineStatus ? "✅" : "🔴"}</li>
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
							About Us
						</NavLink>
					</li>
					<li className="transition duration-300 ease-in-out hover:text-amber-500">
						<NavLink
							to="/contact"
							className={({ isActive }) => (isActive ? "active-link" : "")}>
							Contact Us
						</NavLink>
					</li>
					<li className="transition duration-300 ease-in-out hover:text-amber-500 cursor-pointer">Cart</li>
					<li className="bg-amber-400 px-3 py-2 rounded-lg ">
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
					<li>User: {loggedInUser} </li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
