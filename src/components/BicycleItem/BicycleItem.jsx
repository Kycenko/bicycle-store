import styles from './BicycleItem.module.scss'
import {Link} from "react-router-dom";
import AddBicycleInFavorite from "../UI/Buttons/AddBicycleInFavorite/AddBicycleInFavorite.jsx";
import AddBicycleInCart from "../UI/Buttons/AddBicycleInCart/AddBicycleInCart.jsx";
import NotFound from "../shared/NotFound/NotFound.jsx";

const BicycleItem = ({data}) => {
	if (!data.length) return <NotFound/>
	
	return (
		<main className={styles.section}>
			<div className={styles.container}>
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
							<p className={styles.productPrice}>{bicycle.price} бел.руб</p>
							<AddBicycleInCart data={bicycle}/>
						</div>
					</li>)}
				</ul>
			</div>
		</main>
	
	);
};

export default BicycleItem;
