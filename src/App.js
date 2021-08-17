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
      try {
        const [itemsResponse, cartResponse, favoritesResponse, ordersResponse] = await Promise.all([
          axios.get('https://610ef4597f793c001741963e.mockapi.io/items'),
          axios.get('https://610ef4597f793c001741963e.mockapi.io/cart'),
          axios.get('https://610ef4597f793c001741963e.mockapi.io/favorites'),
          axios.get('https://610ef4597f793c001741963e.mockapi.io/orders'),
        ]);
        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavoriteItems(favoritesResponse.data);
        setItems(itemsResponse.data);
        setOrderItems(ordersResponse.data.reduce((prev, ord) => [...prev, ...ord.items], []));
      } catch (error) {
        alert('Error on data loading ;(');
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const addToCart = async (obj) => {
    try {
      const itemInCart = cartItems.find((item) => item.itemId === obj.itemId);
      if (itemInCart) {
        axios.delete(`https://610ef4597f793c001741963e.mockapi.io/cart/${itemInCart.id}`);
        setCartItems((prev) => prev.filter((item) => item.itemId !== obj.itemId));
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post('https://610ef4597f793c001741963e.mockapi.io/cart', obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.itemId === data.itemId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
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
      alert('Failed to create order');
    }
    setIsLoading(false);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => obj.itemId === id);
  };
  const isItemFavorite = (id) => {
    return favoriteItems.some((obj) => obj.itemId === id);
  };

  const totalPrice = cartItems.reduce((sum, item) => item.price + sum, 0);

  return (
    <AppContext.Provider
      value={{
        cartItems,
        favoriteItems,
        items,
        orderItems,
        isItemAdded,
        onAddToFavorite,
        addToCart,
        setCartOpened,
        setCartItems,
        orderId,
        isItemFavorite,
        totalPrice,
        isLoading,
      }}>
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onCloseDrawer={() => setCartOpened(false)}
          onRemoveItem={removeFromCart}
          onAddToOrders={addToOrders}
          opened={cartOpened}
        />

        <Header onClickCart={() => setCartOpened(true)} />

        <Route path={process.env.PUBLIC_URL + '/'} exact>
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

        <Route path={process.env.PUBLIC_URL + '/favorites'} exact>
          <Favorites />
        </Route>

        <Route path={process.env.PUBLIC_URL + '/orders'} exact>
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
