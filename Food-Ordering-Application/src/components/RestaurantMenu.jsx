import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

// Show Restaurant's Menu on UI for a particular Restaurant Card, when user clicks on it
const RestaurantMenu = () => {
	const { resId } = useParams(); // get dynamic 'resId' from url

	const [showIndex,setShowIndex] = useState(null); // Expand Accordian body only for a particular category

	const restInfo = useRestaurantMenu(resId); // pass 'resId' to this custom hook and get particular restInfo

	if (restInfo === null) return <Shimmer />;

	const { name, cuisines, costForTwoMessage } =
		restInfo?.cards[2]?.card?.card?.info;

	const { itemCards } =
		restInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
			?.card;

	const categories =
		restInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(c) =>
				c.card?.card?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);

	// console.log(categories);

	return (
		<div className="text-center">
			<h1 className="font-bold my-6 text-2xl">{name}</h1>
			<p className="font-bold text-lg">
				{cuisines.join(", ")} - {costForTwoMessage}
			</p>
			{categories.map((rest,index) => {
				return (
					<RestaurantCategory
						key={rest.card.card.categoryId}
						data={rest.card.card}
						showIndex = {index === showIndex ? 1 : 0}
						setShowIndex = {() => setShowIndex(index)}
					/>
				);
			})}
		</div>
	);
};

export default RestaurantMenu;
