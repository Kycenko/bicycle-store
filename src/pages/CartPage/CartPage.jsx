import {useDispatch, useSelector} from "react-redux";
import styles from './CartPage.module.scss'
import Navigation from "../../components/Layout/Navigation/Navigation.jsx";
import Footer from "../../components/Layout/Footer/Footer.jsx";
import {decreaseQuantity, increaseQuantity, removeBicycleInCart} from "../../store/cart.slice.js";
import CartEmpty from "../../components/CartEmpty/CartEmpty.jsx";

const CartPage = () => {
	const dispatch = useDispatch()
	const items = useSelector(state => state.cart.bicyclesInCart);
	
	
	const handleDeleteBtn = () => {
		dispatch(removeBicycleInCart(items[0].id))
	}
	const handleIncreaseQuantity = (id) => {
		dispatch(increaseQuantity(id));
	};
	
	const handleDecreaseQuantity = (id) => {
		dispatch(decreaseQuantity(id));
		const item = items.find((item) => item.id === id);
		if (item && item.quantity <= 0) {
			dispatch(removeBicycleInCart(id));
		}
	};
	const calculateTotalQuantity = () => {
		return items.reduce((total, item) => total + item.quantity, 0);
		
	};
	const calculateTotalPrice = () => {
		return items.reduce((total, item) => total + item.price * item.quantity, 0);
	};
	return (
		<>
			<Navigation/>
			{items.length < 1 ? <CartEmpty/> :
				<div className={styles.container}>
					<h2 className={styles.cartPageTitle}>Корзина</h2>
					<table className={styles.cartPageTable}>
						<thead>
						{/*	<tr>
						<th>Изображение</th>
						<th>Название</th>
						<th>Стоимость</th>
						<th>Количество</th>
						<th>Действие</th>
					</tr>*/}
						</thead>
						<tbody>
						{items.map((item) => (
							<tr key={item.id}>
								<td>
									<img src={item.image} alt={item.title} className={styles.cartPageImage}/>
								</td>
								<td>{item.title}</td>
								<td>{item.price} бел.руб</td>
								<td>
									<div className={styles.cartPageQuantity}>
										<button onClick={() => handleDecreaseQuantity(item.id)} className={styles.cartQuantityBtn}>-
										</button>
										<span>{item.quantity}</span>
										<button onClick={() => handleIncreaseQuantity(item.id)} className={styles.cartQuantityBtn}>+
										</button>
									</div>
								</td>
								<td>
									<button className={styles.cartDelBtn} onClick={handleDeleteBtn}>Удалить</button>
								</td>
							</tr>
						))}
						</tbody>
					</table>
					<div className={styles.cartPageTotal}>
						<p>Общее количество: {calculateTotalQuantity(items)}</p>
						<p>Общая стоимость: {calculateTotalPrice(items)} бел.руб</p>
					</div>
					<div className={styles.cartOrderBtn}>
						<button>Оформить заказ</button>
					</div>
				</div>}
			<Footer/>
		</>
	
	);
};

export default CartPage;
