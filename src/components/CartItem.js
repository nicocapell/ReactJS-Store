import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";

const CartItem = ({ props }) => {
  const { removeItem } = useContext(CartContext);
  const { title, price, pictureUrl, id } = props.props;
  

  return (
    <li className='CartItem__item'>
      <img src={pictureUrl} alt='' />
      <div>
        {title} {formatCurrency(`${price}`)}
      </div>
      <button className='CartItem__button' onClick={() => removeItem(id)}>
        Remove
      </button>
    </li>
  );
};

export default CartItem;