import React from 'react';
import ReactPaginate from "react-paginate";
import styles from './Pagination.module.scss'
const Pagination = ({  currentPage, onChangePage}) => {
	return (
		<div className={styles.container}>
			<ReactPaginate
				className={styles.root}
				breakLabel='...'
				nextLabel='>'
				previousLabel='<'
				onPageChange={(event) => onChangePage(event.selected + 1)}
				pageRangeDisplayed={4}
				pageCount={2}
				forcePage={currentPage - 1}
				renderOnZeroPageCount={null}
			/>
		</div>
		
	);
};

export default Pagination;
