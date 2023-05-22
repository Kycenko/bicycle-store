import React from 'react'
import Footer from '../../components/Layout/Footer/Footer'
import Navigation from '../../components/Layout/Navigation/Navigation'
import {useGetReviewsQuery} from "../../store/bicycle.api.js";
import styles from './ReviewPage.module.scss'
import ReviewsEmpty from "../../components/shared/ReviewsEmpty/ReviewsEmpty.jsx";

const ReviewPage = () => {
  const {data = [], isLoading} = useGetReviewsQuery()

  return (
    <>
      <Navigation/>
      {data.length <= 0 ? <ReviewsEmpty/> : <div className={styles.container}>
        <h2>Отзывы покупателей!</h2>
        {data?.map(review => <div className={styles.reviewContainer} key={review.id}>
          <div className={styles.reviewInfo}>
            <p>Имя пользователя:</p>
            <p>{review.name}</p>
          </div>
          <div className={styles.reviewInfo}>
            <p>Фамилия пользователя:</p>
            <p>{review.surname}</p>
          </div>
          <div className={styles.reviewInfo}>
            <p>Название товара:</p>
            <p>{review.title}</p>
          </div>
          <div className={styles.reviewInfo}>
            <p>Цена товара:</p>
            <p>{review.price} бел.руб</p>
          </div>
          <div className={styles.reviewInfo}>
            <p>Комментарий пользователя:</p>
            <p>{review.description}</p>
          </div>
        </div>)}
      </div>}
      <Footer/>
    </>
  )
}

export default ReviewPage
