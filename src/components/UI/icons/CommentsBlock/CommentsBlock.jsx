import React from 'react'
import {useNavigate} from "react-router-dom";

import styles from "./CommentsBlock.module.scss";

const CommentsBlock = () => {
	const navigate = useNavigate()
	const navigateToCart = () => {
		navigate('/comments')
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

export default CommentsBlock
