import React from 'react';
import ReactPaginate from "react-paginate";
import styles from './Pagination.module.scss'
const Pagination = () => {
	return (
		<div className={styles.container}>
			<ReactPaginate
				className={styles.root}
				breakLabel='...'
				nextLabel='>'
				previousLabel='<'
				onPageChange={null}
				pageRangeDisplayed={4}
				pageCount={5}
				forcePage={null}
				renderOnZeroPageCount={null}
			/>
		</div>
		
	);
};

export default Pagination;
