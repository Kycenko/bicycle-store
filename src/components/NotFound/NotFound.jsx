import React from 'react';
import styles from './NotFound.module.scss'
const NotFound = () => {
	return (
		<div className={styles.notFound}>
			<img className={styles.notFoundImage} src="/public/img/notFound.png" alt=""/>
			<h2 className={styles.notFoundMessage}>По вашему запросу ничего не найдено!</h2>
		</div>
	);
};

export default NotFound;
