import React from "react";
import ItemLists from "./ItemLists";
import { useState } from "react";

const RestaurantCategory = ({ data, showIndex, setShowIndex }) => {
	// console.log(data);

	// Lifting the state Up to parent comp. to control all its child comp.
	const handleIndex  = () => {
    setShowIndex(); // just call setter function of parent to set current Index value === showIndex 
	}

	return (
		<div>
		                {/* Accordian Item Div */}
			<div className="w-6/12 mx-auto my-4 p-4 shadow-lg bg-gray-50" >

			             {/* Accordian Item Header */}
				<div className="flex justify-between cursor-pointer" onClick={handleIndex}>
					<span className="font-bold text-lg">
						{data.title} ({data.itemCards.length})
					</span>
					<span>⬇️</span>
				</div>

				          {/* Accordian Item Body */}
				{ showIndex? <ItemLists items={data.itemCards}/> : ""}			 
				
			</div>
			
		</div>
	);
};

export default RestaurantCategory;
