import React from 'react';
import Navigation from "../../components/Layout/Navigation/Navigation.jsx";
import Footer from "../../components/Layout/Footer/Footer.jsx";
import CartEmpty from "../../components/shared/CartEmpty/CartEmpty.jsx";
import styles from "./FavoritePage.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {removeBicycleInFavorite} from "../../store/favorite.slice.js";
import {addBicycleInCart} from "../../store/cart.slice.js";


const FavoritePage = () => {
	const dispatch = useDispatch()
	const favoriteItems = useSelector(state => state.favorite.bicyclesInFavorite);
	const cartItems = useSelector(state => state.cart.bicyclesInCart);
	const handleDeleteBtn = () => {
		dispatch(removeBicycleInFavorite(favoriteItems[0].id))
	}
	
	const handleAddToCart = (item) => {
		const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);
		if (isItemInCart) {
			return;
		}
		dispatch(addBicycleInCart(item));
	};
	return (
		<>
			<Navigation/>
			{favoriteItems.length < 1 ? <CartEmpty/> :
				<div className={styles.container}>
					<h2 className={styles.favoritePageTitle}>Избранное</h2>
					<table className={styles.favoritePageTable}>
						<tbody>
						{favoriteItems.map((item) => (
							<tr key={item.id}>
								<td>
									<img src={item.image} alt={item.title} className={styles.favoritePageImage}/>
								</td>
								<td>{item.title}</td>
								<td>{item.price} бел.руб</td>
								<td>
									<div className={styles.btns}>
										<button className={styles.favoriteDelBtn} onClick={handleDeleteBtn}>Удалить</button>
										<button className={styles.favoriteAddBtn} onClick={() => handleAddToCart(item)}>Добавить в корзину
										</button>
									</div>
								</td>
							</tr>
						))}
						</tbody>
					</table>
				</div>}
			<Footer/>
		</>
	);
};

export default FavoritePage;
