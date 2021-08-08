import { useState, useEffect } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://610ef4597f793c001741963e.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  const addToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  const removeFromCart = (obj) => {
    setCartItems((prev) => prev.filter((_, idx) => idx !== prev.indexOf(obj)));
    console.log(obj);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onCloseDrawer={() => setCartOpened(false)}
          onRemoveItem={(obj) => removeFromCart(obj)}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." type="text" />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item, i) => (
            <Card
              key={i}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onAddToCart={(obj) => addToCart(obj)}
              onClickFavorite={() => console.log('kek')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
