import Info from './Info';
import { useState, useContext } from 'react';
import AppContext from './../context';

function Drawer({ onCloseDrawer, items = [], onRemoveItem, onAddToOrders }) {
  const { setCartItems, orderId } = useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = useState(false);

  const onClickOrder = (items) => {
    setIsOrderComplete(true);
    setCartItems([]);
    onAddToOrders(items);
  };
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Cart{' '}
          <img
            onClick={onCloseDrawer}
            className=" cu-p"
            src="/img/btn-remove.svg"
            alt="Close cart"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items">
              {items.map((obj, i) => (
                <div key={i} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} rub.</b>
                  </div>
                  <img
                    onClick={() => onRemoveItem(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>21 498 rub.</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>1074 rub.</b>
                </li>
              </ul>
              <button onClick={() => onClickOrder(items)} className="greenButton">
                Checkout <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={isOrderComplete ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
