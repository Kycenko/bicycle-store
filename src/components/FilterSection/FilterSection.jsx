
import styles from './FilterSection.module.scss'
import Search from "../Search/Search.jsx";
import Category from "../Category/Category.jsx";
const FilterSection = () => {
	return (
		<div className={styles.container}>
			<div className={styles.filters}>
				<Search/>
				<Category/>
			</div>
		</div>
	);
};

export default FilterSection;
