import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
	const [headerBtn, setheaderBtn] = useState("Login");
	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo-img" src={LOGO_URL} />
			</div>
			<div className="nav-links">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
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
