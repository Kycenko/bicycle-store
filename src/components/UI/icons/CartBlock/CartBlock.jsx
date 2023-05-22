import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import styles from './CartBlock.module.scss'

const CartBlock = () => {
	const navigate = useNavigate()
	const bicycles = useSelector((state) => state.cart.bicyclesInCart)
	const navigateToCart = () => {
		navigate('/cart')
	}
	
	return (
		<div className={styles.cartBlock}>
			<img
				onClick={navigateToCart}
				src="/icons/shopping-cart-icon.svg"
				className={styles.cartIcon}
				alt=""
			/>
			{bicycles.length === 0 ? <div></div> : <div className={styles.bicyclesInCart}>{bicycles.length}</div>}
		</div>
	)
};

export default CartBlock;
