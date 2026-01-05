import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemLists = ({ items }) => {
	//  console.log(items);
	
const dispatch = useDispatch();// returns the 'dispatch' function from redux-store	
const handleAddItem = (item)=>{
	// dispatch an action-
	dispatch(addItem(item));
}
	return (
		<div>
			{items.map((item) => {
				return (
					<div
						key={item.card.info.id}
						className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">

						<div className="w-9/12">
							<div className="py-2">
								<span className="font-semibold">{item.card.info.name }</span>
								<span className="font-bold text-slate-700 text-xl">
									 - ₹
									{item.card.info.price
										? item.card.info.price / 100
										: item.card.info.defaultPrice / 100}
								</span>
							</div>
							<p className="text-xs">{item.card.info.description}</p>
						</div>

						<div className="w-3/12">
						   <div className="absolute">
								<button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg cursor-pointer" onClick={()=>handleAddItem(item)}>+ADD</button>
							</div>
							<img
								src={CDN_URL + item.card.info.imageId}
								className="w-32 h-30"
								alt="Item Image"
							/>
						</div>

					</div>
				);
			})}
		</div>
	);
};

export default ItemLists;
