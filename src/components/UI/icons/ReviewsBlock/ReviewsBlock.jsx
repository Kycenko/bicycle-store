import React from 'react'
import {useNavigate} from "react-router-dom";

import styles from "./ReviewsBlock.module.scss";

const ReviewsBlock = () => {
	const navigate = useNavigate()
	const navigateToCart = () => {
		navigate('/reviews')
	}
	
	return (
		<div className={styles.commentsBlock}>
			<img
				onClick={navigateToCart}
				src="/public/icons/comments-svgrepo-com.svg"
				className={styles.commentsIcon}
				alt=""
			/>
		</div>
	)
}

export default ReviewsBlock
