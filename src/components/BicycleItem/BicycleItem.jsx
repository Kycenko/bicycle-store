import styles from './BicycleItem.module.scss'
import {Link} from "react-router-dom";
import AddBicycleInFavorite from "../AddBicycleInFavorite/AddBicycleInFavorite.jsx";
import AddBicycleInCart from "../AddBicycleInCart/AddBicycleInCart.jsx";

const BicycleItem = ({data}) => {
	if (!data.length) return <div>Велосипеды не найдены!</div>
	
	return (
		<main className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.sectionTitle}>Наши товары</h2>
				<ul className={styles.products}>
					{data?.map(bicycle => <li className={styles.product} key={bicycle.id}>
						<Link to={`/bicycle/${bicycle.id}`}>
							{<img className={styles.productImage} src={`${bicycle.image}`} alt={bicycle.title}/>}
						</Link>
						<div className={styles.productTitleContainer}>
							<h3 className={styles.productTitle}>{bicycle.title}</h3>
							<AddBicycleInFavorite data={bicycle}/>
						</div>
						<div className={styles.productPriceContainer}>
							<p className={styles.productPrice}>{bicycle.price} тыс.руб</p>
							<AddBicycleInCart data={bicycle}/>
						</div>
					</li>)}
				</ul>
			</div>
		</main>
	
	);
};

export default BicycleItem;
