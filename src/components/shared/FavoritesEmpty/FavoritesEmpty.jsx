import React from 'react';
import styles from './FavoritesEmpty.module.scss'
const FavoritesEmpty = () => {
  return (
    <div className={styles.favoritesEmpty}>
      <img className={styles.favoritesEmptyImage} src="/public/img/noFavorites.png" alt=""/>
      <h2 className={styles.favoritesEmptyMessage}>Нет избранного!</h2>
    </div>
  );
};

export default FavoritesEmpty;