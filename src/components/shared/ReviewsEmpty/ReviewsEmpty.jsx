import React from 'react';
import styles from './ReviewsEmpty.module.scss'
const ReviewsEmpty = () => {
  return (
    <div className={styles.reviewsEmpty}>
      <img className={styles.reviewsEmptyImage} src="/public/img/noReviews.png" alt=""/>
      <h2 className={styles.reviewsEmptyMessage}>Отзывы отсутствуют!</h2>
    </div>
  );
};

export default ReviewsEmpty;