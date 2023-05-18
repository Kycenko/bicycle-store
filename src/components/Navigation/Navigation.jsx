import styles from './Navigation.module.scss'
import {Link} from "react-router-dom";
import FavoriteBLock from "../FavoriteBlock/FavoriteBLock.jsx";
import CartBlock from "../CartBlock/CartBlock.jsx";

const Navigation = () => {
	return (<nav className={styles.navigation}>
		<div className={styles.container}>
			<div className={styles.navigationRow}>
				<div className={styles.navigationLogo}><Link className={styles.navigationLogoLink} to='/'>Магазин
					велосиПЕДИКОВ</Link></div>
				<ul className={styles.navigationList}>
					<li className={styles.navigationListItem}><Link to='/' className={styles.navigationListItemLink}>Главная</Link></li>
					<li className={styles.navigationListItem}><Link to='/' className={styles.navigationListItemLink}>О
						нас</Link></li>
					<li><FavoriteBLock/></li>
					<li><CartBlock/></li>
				</ul>
			</div>
		</div>
	</nav>);
};

export default Navigation;
