import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
	const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
		resData;
	return (
		<div className="m-4 p-3 w-50 h-100 rounded-xl bg-gray-200 transition duration-300 ease-in-out hover:bg-gray-300">
			<img
				className="p-2 h-36 w-full rounded-xl"
				src={CDN_URL + cloudinaryImageId}
				alt="restaurant image"
			/>
			<div className="ml-2">
				<h3 className="font-bold py-2 text-lg">{name}</h3>
				<h4 className="text-gray-700">{cuisines.join(", ")}</h4>
				<h4 className="text-gray-700">{avgRating}</h4>
				<h4 className="text-gray-700">{sla.deliveryTime} minutes</h4>
				<h4 className="text-gray-700">{costForTwo}</h4>
			</div>
		</div>
	);
};

export default RestaurantCard;
