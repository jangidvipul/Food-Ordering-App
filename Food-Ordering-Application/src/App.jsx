import Header from "./components/Header";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import UserContext from "./utils/UserContext";

const AppLayout = () => {
	const [userName, setUserName] = useState("");

	// Authentication -
	useEffect(() => {
		// Make an API call & it response back 'username' and 'password'
		const data = {
			username: "Vipul Jangid",
			password: "123abc",
		};

		setUserName(data.username);
	}, []);

	return (
		<UserContext.Provider value={{loggedInUser: userName, setUserName}}>
		{/* // here we are over-riding default value of created context and sets a loggedInUser value = "Vipul Jangid" */}
			<div className="app">
				<Header />
				<Outlet />
			</div>
		</UserContext.Provider>
	);
};

export default AppLayout;
