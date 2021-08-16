import Card from '../components/Card';
import AppContext from  '../context';
import React from 'react';

function Favorites() { 
  const {favoriteItems, onAddToFavorite, addToCart} = React.useContext(AppContext);
  return (
    <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>My Favorites</h1>
        </div>  
          
        <div className="d-flex flex-wrap">
        {favoriteItems.map((item, i) => (
              <Card
                key={i}                
                favorite={true}
                onClickFavorite={onAddToFavorite}   
                onAddToCart={addToCart}
                {...item}        
              />
            ))}
        </div>
      </div>
  );
}

export default Favorites;