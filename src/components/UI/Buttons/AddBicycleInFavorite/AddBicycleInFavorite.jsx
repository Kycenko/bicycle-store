import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addBicycleInFavorite, removeBicycleInFavorite} from "../../../../store/favorite.slice.js";
import styles from "./AddBicycleInFavorite.module.scss";

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
	return (<div className={styles.favoriteIcon}>
		{isBicycleInFavorite ? (<img
			onClick={handleFavoriteClick}
			src="/public/icons/remove-from-favorites-icon.svg"
			alt=""
		/>) : (<img
			onClick={handleFavoriteClick}
			src="/public/icons/add-to-favorites-icon.svg"
			alt=""
		/>)}
	</div>)
};

export default AddBicycleInFavorite;
