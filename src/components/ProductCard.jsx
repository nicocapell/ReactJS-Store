import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router';
import { CartContext } from "../CartContext";
import { ToastContainer } from 'react-toastify';

function ProductCard(props) {
    const navigate = useNavigate();
    const { addProductToCart } = useContext(CartContext);
    const [size, setSize] = useState("");

    return (
        <>
            {/*  */}
            <div class=" card">
                <img class="card-img-top img-fluid img-thumbnail align-self-center" src={`/images/${props.product.photo}`} alt="Card image cap" onClick={(evt) => { navigate(`/product/${props.product.id}`) }} />
                <div class="card-body">
                    <h5 class="card-title d-flex justify-content-center">{props.product.name}</h5>
                    <div class="d-flex price-panel">
                        <p class="card-text"><i ></i>
                        ${props.product.price}/-</p>
                        <p class="card-text">
                            <select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
                                <option value="0">Talle?</option>
                                {props.product.sizes && props.product.sizes.map((s) => (
                                    <option key={s.sizeid} value={s.size}>
                                        {s.size}
                                    </option>
                                ))}
                            </select>
                        </p>
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); addProductToCart(1, size, props.product) }}>
                        <div><input disabled={!size} type="submit" class="btn btn-outline-dark" value="Agregar al carrito"></input></div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default ProductCard;