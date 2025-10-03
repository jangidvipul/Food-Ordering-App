import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { NavLink } from "react-router";

const Header = () => {
	const [headerBtn, setheaderBtn] = useState("Login");
	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo-img" src={LOGO_URL} />
			</div>
			<div className="nav-links">
				<ul>
					<li>
						<NavLink
							to="/"
							className={({ isActive }) => isActive ? "active-link" : ""}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/about"
							className={({ isActive }) => isActive ? "active-link" : ""}>
							About Us
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/contact"
							className={({ isActive }) => isActive ? "active-link" : ""}>
							Contact Us
						</NavLink>
					</li>
					<li>Cart</li>
					<button
						className="header-btn"
						onClick={() => {
							headerBtn === "Login"
								? setheaderBtn("Logout")
								: setheaderBtn("Login");
						}}>
						{headerBtn}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
