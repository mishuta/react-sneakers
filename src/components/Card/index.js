import { useState } from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss';
import AppContext from '../../context';
import React from 'react';

function Card({
  itemId,
  title,
  price,
  imageUrl,
  onClickFavorite,
  onAddToCart,
  favorite = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorite);

  const addToCart = () => {
    onAddToCart({ itemId, title, price, imageUrl });
  };

  const addToFavorite = () => {
    onClickFavorite({ itemId, title, price, imageUrl });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={210}
          height={245}
          viewBox="0 0 210 235"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="1" y="0" rx="10" ry="10" width="165" height="135" />
          <rect x="1" y="157" rx="5" ry="5" width="165" height="15" />
          <rect x="1" y="177" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="204" rx="5" ry="5" width="80" height="25" />
          <rect x="134" y="200" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={addToFavorite}>
            <img src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="Unliked" />
          </div>
          <img width="100%" height={135} src={imageUrl} alt="Sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Cost:</span>
              <b>{price} rub.</b>
            </div>
            <img
              className={styles.plus}
              onClick={addToCart}
              src={isItemAdded(itemId) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
              alt="Plus"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
