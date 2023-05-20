import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addBicycleInCart, removeBicycleInCart} from "../../../../store/cart.slice.js";
import styles from './AddBicycleInCart.module.scss'
const AddBicycleInCart = ({data}) => {
	const dispatch = useDispatch()
	const addBicycle = useSelector(state => state.cart.bicyclesInCart)
	const isBicycleInCart = addBicycle.some((bicycle) => bicycle.id === data.id)
	const handleCartClick = (e) => {
		e.stopPropagation()
		if (isBicycleInCart) {
			dispatch(removeBicycleInCart(data.id))
		} else {
			dispatch(addBicycleInCart(data))
		}
	}
	return (
		<div className={styles.cartIcon}>
			{isBicycleInCart ? (
				<img
					onClick={handleCartClick}
					src="/public/img/remove-from-cart-icon.svg"
					alt=""
				/>
			) : (
				<img
					onClick={handleCartClick}
					src="/public/img/add-to-cart-icon.svg"
					alt=""
				/>
			)}
		</div>)
};

export default AddBicycleInCart;
