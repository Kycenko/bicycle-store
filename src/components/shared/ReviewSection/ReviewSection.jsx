import React, {useState} from 'react';
import styles from './ReviewSection.module.scss'
import {useAddReviewMutation, useGetSingleBicycleQuery} from "../../../store/bicycle.api.js";
import {useParams} from "react-router-dom";

const ReviewSection = () => {
  const {id} = useParams()
  const {data = [], isLoading} = useGetSingleBicycleQuery(id)
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [description, setDescription] = useState('')
  const [addReview] = useAddReviewMutation()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addReview({
      name: name,
      surname: surname,
      description: description,
      title: data.title,
      price: data.price
    }).unwrap()
    setName('');
    setSurname('');
    setDescription('');
  }

  return (
    <div className={styles.container}>
      <h2>Оставьте ваш отзыв</h2>
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Ваше имя:</label>
            <input type="text" id="name" name="name" required value={name}
                   onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="surname">Ваша фамилия:</label>
            <input type="text" id="surname" name="surname" required
                   value={surname}
                   onChange={(e) => setSurname(e.target.value)}/>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="title">Название товара: {data.title}</label>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="price">Цена товара: {data.price} бел руб.</label>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="description">Ваш комментарий:</label>
            <textarea id="description" name="description" required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div className={styles.formGroup}>
            <button type="submit">Отправить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewSection;