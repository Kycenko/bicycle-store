import styles from './Header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerWrapper}>
				<h1 className={styles.headerTitle}>
				<strong>Магазин</strong> велосипедов
				</h1>
			</div>
		</header>
	);
};

export default Header;
