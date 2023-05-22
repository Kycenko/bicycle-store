import React, {useState} from 'react';
import styles from './OrderModal.module.scss'
import {useSelector} from "react-redux";


const OrderModal = ({isOpen, onClose}) => {
  const items = useSelector(state => state.cart.bicyclesInCart);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onClose();
  };
  const calculateTotalQuantity = () => {
    return items.reduce((total, item) => total + item.quantity, 0);

  };
  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : ''}`} onClick={onClose}>
      <div className={styles.modalOverlay}/>
      <div className={styles.modalContent} onClick={handleModalClick}>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Имя:</label>
            <input type="text" id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="surname">Фамилия:</label>
            <input type="text" id="surname" name="surname" required value={surname}
                   onChange={(e) => setSurname(e.target.value)}/>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="number">Номер телефона:</label>
            <input type="text" id="number" name="number" required value={number}
                   onChange={(e) => setNumber(e.target.value)}/>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address">Адрес:</label>
            <input type="text" id="address" name="address" required value={address}
                   onChange={(e) => setAddress(e.target.value)}/>
          </div>
          <div className={styles.formInfo}>
            <p>Кол-во товаров: {calculateTotalQuantity(items)}</p>
            <p>Общая стоимость: {calculateTotalPrice(items)} бел.руб</p>
          </div>
          <div className={styles.formGroup}>
            <button type="submit">Отправить</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default OrderModal;