
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {FaShoppingCart} from 'react-icons/fa';



export const CartWidget = ({ cantidad }) =>  {


    return (
        <div >
            
            <FaShoppingCart className="cartWidget"/>
            {cartProducts > 0 ? (
            <span className="badge bg-primary badge-sm ml-4">{cartProducts}</span>
            ) : 
            (
            " "
            )}
            
        </div>
    )
}

export default CartWidget