import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import Carousel from "./Carousel";
import {slides} from "../data/carouselData.json"

const Body = () => {
	// As soon as "state var." changes -> 'React' will re-render the component
	// 'React' is very efficient at "DOM manipulations" and due to this it is very fast JS. library as it quickly
	// find out the difference b/w 2 virtual DOM's using "Diffing" algo. & only update the necessary parts of Real DOM

	const [restaurantList, setRestaurantList] = useState([]); // here restaurantList is Local state var.(super powerful var. that store dynamic data) of Body comp.
	const [filteredRestaurant, setFilteredRestaurant] = useState([]); // Created to use as a copy of original restaurantList and filter logic is only apply on 'filteredRestaurant' state var.
	const [searchText, setSearchText] = useState(""); // here searchText is also a super Powerful state var. that store user I/P( dynamic data)

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.9974&lng=79.0011&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data.json();
		
		// update restaurant list only after Body component got rendered completely
		// Also make a copy of original restaurant List in filteredRestaurant
		// Defensive optional chaining (avoid crashes if path changes)
		const restaurants =
			json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants || [];

		const filteredRestaurant = [...restaurants];

		setRestaurantList(restaurants);
		setFilteredRestaurant(filteredRestaurant);
	};

	// Conditional Rendering -
	return restaurantList.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
		   <div className="carouselBox">
				<Carousel data={slides}/>
			</div>
			<div className="search">
				<div className="search-box">
					<input
						className="search-ip"
						type="text"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					<button
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
					className="filter-btn"
					onClick={() => {
						let filteredList = restaurantList.filter(
							(restaurant) => restaurant.info.avgRating > 4
						);
						setFilteredRestaurant(filteredList); // set updated value of restlist
					}}>
					Top Rated Restaurant
				</button>
			</div>
			<div className="restContainer">
				{filteredRestaurant.map((restaurant) => (
					<Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
						<RestaurantCard resData={restaurant.info} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
