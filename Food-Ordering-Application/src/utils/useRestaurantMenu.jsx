import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

// This custom Hook takes 'resID' as I/P & then Fetch Restaurant Menu-info and return it as O/P
const useRestaurantMenu = (resId) => {
	const [restInfo, setRestInfo] = useState(null);

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const data = await fetch(MENU_API + resId);
		const json = await data.json();
		setRestInfo(json.data);
	};

	return restInfo;
};

export default useRestaurantMenu;
