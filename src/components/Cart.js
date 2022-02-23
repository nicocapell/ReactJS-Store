import { useContext } from "react";
import "./Cart.css";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { cartItems, showCart} = useContext(CartContext);

  return (
    <>
      {showCart && (
        <div className='cart__wrapper'>
      
          <div className='cart__innerWrapper'>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map(() => (
                  <CartItem  props={props.props}/>
                ))}
              </ul>
            )}
          </div>
          <div className='Cart__cartTotal'>
            <div>Cart Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              {formatCurrency(
                cartItems.reduce((amount, item) => item.price + amount, 0)
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;