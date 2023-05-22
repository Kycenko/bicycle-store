import styles from './Navigation.module.scss'
import {Link} from "react-router-dom";
import FavoriteBLock from "../../UI/icons/FavoriteBlock/FavoriteBLock.jsx";
import CartBlock from "../../UI/icons/CartBlock/CartBlock.jsx";
import ReviewsBlock from "../../UI/icons/ReviewsBlock/ReviewsBlock.jsx";

const Navigation = () => {
	return (<nav className={styles.navigation}>
		<div className={styles.container}>
			<div className={styles.navigationRow}>
				<div className={styles.navigationLogo}><Link className={styles.navigationLogoLink} to='/'><img src="/public/img/logo.png" alt=""/></Link></div>
				<ul className={styles.navigationList}>
					<li><ReviewsBlock/></li>
					<li><FavoriteBLock/></li>
					<li><CartBlock/></li>
		
				</ul>
			</div>
		</div>
	</nav>);
};

export default Navigation;
