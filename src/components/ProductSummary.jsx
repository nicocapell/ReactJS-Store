import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { useNavigate } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';

function ProductSummary() {
    const navigate = useNavigate();
    const { cart, emptyCart, error } = useContext(CartContext);
    let TotalAmount = 0;
    cart.map((c) => {
        TotalAmount = TotalAmount + (c.qty * c.product.price);
    });
    function tokenHandler(token) {
        //console.log(token);
        emptyCart();
        navigate("/confirmation", { state: token });
    }

    if (error) throw error;

    return (
        <>
            {
                cart.length > 0 ?
                    <>
                        <div className="row">
                            <div className="col pt-4">
                                <h6>Detalles de precio ({cart.length}) {cart.length > 1 ? "items." : "item."}</h6>
                                <h6>Subtotal: <i ></i>${TotalAmount}</h6>
                                <hr />
                                <h6>Total: <i ></i>${TotalAmount}</h6>
                                <div class="d-flex justify-content-between">
                                    <StripeCheckout
                                        name="Melozzy Feria"
                                        image="/images/logo.jpg"
                                        amount={TotalAmount * 100}
                                        shippingAddress
                                        token={tokenHandler}
                                        stripeKey='pk_test_51JSwc7SJugH4e1kT9UvwxONc2fMLnHcpjrQyroXa8163q2aeOLmvEEroRRkZeWnmzju6jfez35evdOSTKTrErdtP00McoW45sP'
                                        currency='USD'
                                    >
                                        <button className="btnCarrito ">Comprar</button>
                                    </StripeCheckout>
                                    <span>
                                        <button className="btnCarrito" onClick={emptyCart}>Vaciar Carrito</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
                    : <h4>Su carrito esta vacío</h4>
            }
        </>
    );
}

export default ProductSummary;