import styles from './Search.module.scss'
import {setSearch} from "../../../store/initial.slice.js";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";

const Search = () => {
	const dispatch = useDispatch();
	const [searchValue, setSearchValue] = useState('');
	
	const handleSearch = () => {
		dispatch(setSearch(searchValue));
	};
	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};
	useEffect(() => {
		if (searchValue.trim() === '') {
			dispatch(setSearch(''));
		}
	}, [searchValue, dispatch]);
	
	const handleChange = (e) => {
		setSearchValue(e.target.value);
	};
	
	return (
		<div className={styles.container}>
			<div className={styles.searchBox}>
				<input
					type="text"
					placeholder="Поиск..."
					value={searchValue}
					onChange={handleChange}
					onKeyPress={handleKeyPress}
				/>
				<button className={styles.searchButton} onClick={handleSearch}>
					<img src="/public/icons/search-icon.svg" alt="" />
				</button>
			</div>
		</div>
	);

};

export default Search;
