import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
	const { cloudinaryImageId, name, cuisines, avgRating,sla,costForTwo} = resData;
	return (
		<div className="restCard">
			<img
				className="restImg"
				src={ CDN_URL + cloudinaryImageId }
				alt="restaurant image"
			/>
			<h3>{name}</h3>
			<h4 className="cuisines">{cuisines.join(" , ")}</h4>
			<h4>{avgRating}</h4>
			<h4>{sla.deliveryTime} minutes</h4>
			<h4>{costForTwo}</h4>
		</div>
	);
};

export default RestaurantCard;