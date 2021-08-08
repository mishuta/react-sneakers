import { useState, useEffect, useContext } from 'react';

import styles from './Card.module.scss';

function Card({ title, price, imageUrl, onClickFavorite, onAddToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  const addToCart = () => {
    onAddToCart({ title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Cost:</span>
          <b>{price} rub.</b>
        </div>
        <img
          class={styles.plus}
          onClick={addToCart}
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
