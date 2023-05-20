
import styles from './FilterSection.module.scss'
import Search from "../../UI/Search/Search.jsx";
import Category from "../../UI/Category/Category.jsx";
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
