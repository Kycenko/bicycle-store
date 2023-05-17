
import styles from './Navigation.module.scss'
const Navigation = () => {
	return (
		<nav className={styles.navigation}>
		<div className={styles.container}>
			<div className={styles.navigationRow}>
				<div className={styles.navigationLogo}>Logo</div>
				<ul className={styles.navigationList}>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
		</nav>
	);
};

export default Navigation;
