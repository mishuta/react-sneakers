function Header() {
  return (
      <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} heigth={40} src="/img/logo.png" alt="logo"/>
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Best sneakers shop</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} heigth={18} src="/img/cart.svg" alt="Cart"/>             
          <span>1205 rub.</span>
        </li>
        <li>
          <img width={18} heigth={18} src="/img/user.svg" alt="User"/>
        </li>
      </ul>
    </header>
  );
}

export default Header;