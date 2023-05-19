import React, {useState} from 'react';
import {useGetBicycleCategoryQuery} from "../../store/bicycle.api.js";
import {useDispatch} from "react-redux";
import {setCategory} from "../../store/initial.slice.js";
import styles from './Category.module.scss'

const Category = () => {
	const dispatch = useDispatch()
	const [categories, setCategories] = useState('Все велосипеды')
	const {data = [], isLoading} = useGetBicycleCategoryQuery()
	
	const handleChangeCategory = (e) => {
		dispatch(setCategory(e.target.value))
		setCategories(e.target.value)
	}
	return (
		<div className={styles.container}>
			<select className={styles.selectContainer} onChange={handleChangeCategory} name="" id="">
				{data?.map(category => <option key={category.id} value={category.title}>{category.visibleTitle}</option>)}
			</select>
		</div>
	);
};

export default Category;
