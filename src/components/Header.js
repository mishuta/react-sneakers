import { Route, Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
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
          <span>1205 rub.</span>
        </li>
        <li className="mr-10 cu-p">
          <Link to="/favorites">
            <img width={18} heigth={18} src="/img/favorites.svg" alt="Favorites" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} heigth={18} src="/img/user.svg" alt="User" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
