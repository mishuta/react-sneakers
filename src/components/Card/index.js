import { useState, useEffect, useContext } from 'react';

import styles from './Card.module.scss';

function Card({ id, title, price, imageUrl, onClickFavorite, onAddToCart, favorite = false }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorite);

  const addToCart = () => {
    onAddToCart({ id, title, price, imageUrl });
    setIsAdded(!isAdded);
  };

  const addToFavorite = () => {
    onClickFavorite({ id, title, price, imageUrl });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={addToFavorite}>
        <img src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Cost:</span>
          <b>{price} rub.</b>
        </div>
        <img
          className={styles.plus}
          onClick={addToCart}
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
