import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
    
// As soon as "state var." changes -> 'React' will re-render the component
// 'React' is very efficient at "DOM manipulations" and due to this it is very fast JS. library as it quickly
// find out the difference b/w 2 virtual DOM's using "Diffing" algo. & only update the necessary parts of Real DOM
const Body = () => {
	const [restaurantList, setRestaurantList] = useState([]); // here restaurantList is Local state var.(super powerful var. that store dynamic data) of Body comp.
	const [filteredRestaurant, setFilteredRestaurant] = useState([]); // It is used as a copy of original restaurantList and filter logic is only apply on 'filteredRestaurant' state var.
	const [searchText, setSearchText] = useState(""); 
	const onlineStatus = useOnlineStatus();
	const {loggedInUser, setUserName} = useContext(UserContext);

	useEffect(() => {
		fetchData();
	}, []);

	// Fetch restaurant data API
const fetchData = async () => {
  try {
    const res = await fetch(
      "/api/dapi/restaurants/list/v5?lat=21.9974&lng=79.0011&page_type=DESKTOP_WEB_LISTING"
    );

    if (!res.ok) {
      console.error("Network error:", res.status);
      return;
    }

    const json = await res.json();

    const restaurants =
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];

    setRestaurantList(restaurants);
    setFilteredRestaurant([...restaurants]);

  } catch (err) {
    console.error("Failed to load:", err);
  }
};

	if (onlineStatus === false) {
		return (
			<h1 className="font-bold">
				You are Offline🥺.., Please Check Your Internet connection!
			</h1>
		);
	}

	// Conditional Rendering -
	return restaurantList.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="flex justify-between p-4 m-2 ">
				<div>
					<input
						id="searchIP"
						className="border  mr-2 p-1 rounded-sm"
						type="text"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					
					<button
						className="w-20 py-1 bg-gray-200 rounded-xl cursor-pointer font-medium transition duration-300 ease-in-out hover:bg-amber-400"
						onClick={() => {
							// filtered out searched Restaurant cards from original restaurantList without affecting its data, so next time if we again search for rest. cards
							// we get filtered data from original restaurantList which has whole rest.
							const filteredRestaurant = restaurantList.filter((res) => {
								return res.info.name
									.toLowerCase()
									.includes(searchText.toLowerCase());
							});
							// update the UI with filtered Res. cards
							setFilteredRestaurant(filteredRestaurant);
						}}>
						Search
					</button>
				</div>
				<button
					className="bg-gray-200 p-2 rounded-lg cursor-pointer font-medium transition duration-300 ease-in-out hover:text-amber-500"
					onClick={() => {
						let filteredList = restaurantList.filter(
							(restaurant) => restaurant.info.avgRating > 4.2
						);
						setFilteredRestaurant(filteredList); // set updated value of restlist
					}}>
					Top Rated Restaurant⭐
				</button>
				<div>
					<input
						id="searchIP"
						className="border  mr-2 p-1 rounded-sm"
						type="text"
						value={loggedInUser}
						onChange={(e) => {
							setUserName(e.target.value);
						}}
					/>
				</div>
			</div>

			<div className="flex flex-wrap">
				{filteredRestaurant.map((restaurant) => (
					<Link
						to={"/restaurants/" + restaurant.info.id}
						key={restaurant.info.id}>
						<RestaurantCard resData={restaurant.info} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
