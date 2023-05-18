
import styles from './Search.module.scss'
const Search = () => {
	return (
		<div className={styles.container}>
			<div className={styles.searchBox}>
				<input type="text" placeholder="Поиск..."/>
					<button className={styles.searchButton}>
						<img src="/public/img/search-icon.svg" alt=""/>
					</button>
			</div>
		</div>
	);
};

export default Search;
