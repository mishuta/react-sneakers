import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://610ef4597f793c001741963e.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://610ef4597f793c001741963e.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
    axios.get('https://610ef4597f793c001741963e.mockapi.io/favorites').then((res) => {
      setFavoriteItems(res.data);
    });
    axios.get('https://610ef4597f793c001741963e.mockapi.io/orders').then((res) => {
      setOrderItems(res.data);
    });
  }, []);

  const addToCart = async (obj) => {
    console.log(obj.id);
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://610ef4597f793c001741963e.mockapi.io/cart/${obj.id}`);
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post('https://610ef4597f793c001741963e.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Failed to add to cart');
    }
  };

  const removeFromCart = (id) => {
    axios.delete(`https://610ef4597f793c001741963e.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const searchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favoriteItems.find((item) => item.id === obj.id)) {
        axios.delete(`https://610ef4597f793c001741963e.mockapi.io/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post(
          'https://610ef4597f793c001741963e.mockapi.io/favorites',
          obj,
        );
        setFavoriteItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Failed to add to favorites');
    }
  };

  const addToOrders = async (items) => {
    for (const item of items) {
      const { data } = await axios.post('https://610ef4597f793c001741963e.mockapi.io/orders', item);
      setOrderItems((prev) => [...prev, data]);
    }
    for (const item of items) {
      await axios.delete(`https://610ef4597f793c001741963e.mockapi.io/cart/${item.id}`);
    }
    setCartItems([]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onCloseDrawer={() => setCartOpened(false)}
          onRemoveItem={removeFromCart}
          onAddToOrders={addToOrders}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          searchChange={searchChange}
          addToCart={addToCart}
          onAddToFavorite={onAddToFavorite}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites items={favoriteItems} onAddToFavorite={onAddToFavorite} />
      </Route>

      <Route path="/orders" exact>
        <Orders items={orderItems} onAddToOrders={addToOrders} />
      </Route>
    </div>
  );
}

export default App;
