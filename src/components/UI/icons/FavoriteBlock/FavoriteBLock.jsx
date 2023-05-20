import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import styles from './FavoriteBlock.module.scss'

const FavoriteBlock = () => {
	const navigate = useNavigate()
	const bicycles = useSelector((state) => state.favorite.bicyclesInFavorite)
	const navigateToFavorite = () => {
		navigate('/favorites')
	}
	
	return (
		<div className={styles.favoriteBlock}>
			<img
				onClick={navigateToFavorite}
				src="/img/favorite-svgrepo-com.svg"
				className={styles.favoriteIcon}
				alt=""
			/>
			{bicycles.length === 0 ? <div></div> : <div className={styles.bicyclesInFavorite}>{bicycles.length}</div>}
		
		</div>
	)
};

export default FavoriteBlock;
