import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addBicycleInFavorite, removeBicycleInFavorite} from "../../store/favorite.slice.js";

const AddBicycleInFavorite = ({data}) => {
	const dispatch = useDispatch()
	
	const addBicycle = useSelector(state => state.favorite.bicyclesInFavorite)
	const isBicycleInFavorite = addBicycle.some((bicycle) => bicycle.id === data.id)
	const handleFavoriteClick = (e) => {
		e.stopPropagation()
		if (isBicycleInFavorite) {
			dispatch(removeBicycleInFavorite(data.id))
		} else {
			dispatch(addBicycleInFavorite(data))
		}
	}
	return (<div>
		{isBicycleInFavorite ? (<img
			onClick={handleFavoriteClick}
			src="/public/img/remove-from-favorites-icon.svg"
			alt=""
		/>) : (<img
			onClick={handleFavoriteClick}
			src="/public/img/add-to-favorites-icon.svg"
			alt=""
		/>)}
	</div>)
};

export default AddBicycleInFavorite;
