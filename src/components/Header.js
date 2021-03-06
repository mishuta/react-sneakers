import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from './../context';

function Header(props) {
  const { totalPrice } = useContext(AppContext);
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to={process.env.PUBLIC_URL + '/'}>
        <div className="d-flex align-center">
          <img width={40} heigth={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Best sneakers shop</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} heigth={18} src="/img/cart.svg" alt="Cart" />
          {totalPrice ? <span>{totalPrice} RUB</span> : 'EMPTY'}
        </li>
        <li className="mr-10 cu-p">
          <Link to={process.env.PUBLIC_URL + '/favorites'}>
            <img width={18} heigth={18} src="/img/favorites.svg" alt="Favorites" />
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + '/orders'}>
            <img width={18} heigth={18} src="/img/user.svg" alt="User" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
