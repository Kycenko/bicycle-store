import styles from './BicycleItem.module.scss'
import {Link} from "react-router-dom";

const BicycleItem = ({data}) => {
	return (
		<main className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.sectionTitle}>Наши товары</h2>
				<ul className={styles.products}>
					{data?.map(bicycle => <li className={styles.product} key={bicycle.id}>
						<Link to={`/bicycle/${bicycle.id}`}>
							{<img className={styles.productImage} src={`${bicycle.image}`} alt={bicycle.title} />}
						</Link>
						<h3 className={styles.productTitle}>{bicycle.title}</h3>
						<p className={styles.productPrice}>{bicycle.price} тыс.руб</p>
					</li>)}
				</ul>
			</div>
		</main>
	
	);
};

export default BicycleItem;
