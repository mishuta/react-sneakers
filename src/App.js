import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import AppContext from './context';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [orderId, setOrderId] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get('https://610ef4597f793c001741963e.mockapi.io/items');
      const cartResponse = await axios.get('https://610ef4597f793c001741963e.mockapi.io/cart');
      const favoritesResponse = await axios.get(
        'https://610ef4597f793c001741963e.mockapi.io/favorites',
      );
      const ordersResponse = await axios.get('https://610ef4597f793c001741963e.mockapi.io/orders');

      setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavoriteItems(favoritesResponse.data);
      setOrderItems(ordersResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const addToCart = async (obj) => {
    console.log(obj.itemId);
    try {
      const itemInCart = cartItems.find((item) => item.itemId === obj.itemId);
      if (itemInCart) {
        await axios.delete(`https://610ef4597f793c001741963e.mockapi.io/cart/${itemInCart.id}`);
        setCartItems((prev) => prev.filter((item) => item.itemId !== obj.itemId));
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
      let itemInFavorites = favoriteItems.find((item) => item.itemId === obj.itemId);
      if (itemInFavorites) {
        axios.delete(`https://610ef4597f793c001741963e.mockapi.io/favorites/${itemInFavorites.id}`);
        setFavoriteItems((prev) => prev.filter((item) => item.itemId !== obj.itemId));
        console.log(favoriteItems);
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
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://610ef4597f793c001741963e.mockapi.io/orders', {
        items: cartItems,
      });
      setOrderId(data.id);
      setOrderItems((prev) => [...prev, data]);
      setCartItems([]);

      for (const item of items) {
        await axios.delete(`https://610ef4597f793c001741963e.mockapi.io/cart/${item.id}`);
        await delay(1000);
      }
    } catch {
      alert('Error on order creation');
    }
    setIsLoading(false);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => obj.itemId === id);
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        favoriteItems,
        items,
        isItemAdded,
        onAddToFavorite,
        addToCart,
        setCartOpened,
        setCartItems,
        orderId,
      }}>
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
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchChange={searchChange}
            addToCart={addToCart}
            onAddToFavorite={onAddToFavorite}
            isLoading={isLoading}
          />
        </Route>

        <Route path="/favorites" exact>
          <Favorites />
        </Route>

        <Route path="/orders" exact>
          <Orders items={orderItems} onAddToOrders={addToOrders} />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
