import styles from './CartEmpty.module.scss'
import React from "react";

const CartEmpty = () => {
	return (
		<div className={styles.cartEmpty}>
			<img className={styles.cartEmptyImage} src="/public/img/cartEmpty.png" alt=""/>
			<h2 className={styles.cartEmptyMessage}>Корзина пуста!</h2>
		</div>
	);
};

export default CartEmpty;
