import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
	const [restInfo, setRestInfo] = useState(null);

	const { resId } = useParams();

	useEffect(() => {
		fetchMenu();
	}, []);

	const fetchMenu = async () => {
		const data = await fetch(MENU_API + resId);
		const json = await data.json();
		setRestInfo(json.data);
	};

	if (restInfo === null) return <Shimmer />;

	const { name, cuisines, costForTwoMessage } =
		// eslint-disable-next-line no-unsafe-optional-chaining
		restInfo?.cards[2]?.card?.card?.info;

	const { itemCards } =
		// eslint-disable-next-line no-unsafe-optional-chaining
		restInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
			?.card;

	return (
		<div className="menu">
			<h1>{name}</h1>
			<p>
				{cuisines.join(", ")} - {costForTwoMessage}
			</p>
			<h2>Menu:-</h2>
			<ul>
				{itemCards.map((item) => (
					<li key={item.card.info.id}>
						{item.card.info.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default RestaurantMenu;
