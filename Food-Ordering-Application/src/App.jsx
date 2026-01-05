import Header from "./components/Header";
import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux"; // "react-redux" acts as a bridge b/w react app and redux-toolkit
import appStore from "./utils/appStore"; // Importing Our configured 'Redux-Store'(Big JS obj.) for providing it to our whole react app.

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
		<Provider store = {appStore}>
			<UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
				{/* // here we are over-riding default value of created context and sets a loggedInUser value = "Vipul Jangid" */}
				<div className="app">
					<Header />
					<Outlet />
				</div>
			</UserContext.Provider>
		</Provider>
	);
};

export default AppLayout;
