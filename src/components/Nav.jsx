import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { CartContext } from '../CartContext';

function Nav() {
    const { cart } = useContext(CartContext);

    return (
        <nav class="navbar navbar-expand-lg ">
            
            <NavLink className="navbar-brand" to="/">
            <img class="logoNav" src="/images/logo.jpg" />
            </NavLink>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li >
                        <NavLink className="LinkNav"to="/">
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="LinkNav" to="/products">
                            Productos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="LinkNav"to="/contactus">
                            Contacto
                        </NavLink>
                    </li>
                    <li >
                        <NavLink className="LinkNav" to="/search">
                            <i class="fa fa-search"></i>
                        </NavLink>
                    </li>
                    <li >
                        <NavLink className="LinkNav" to="/cart">
                            <i class="fa fa-shopping-bag"></i>
                            {cart.length > 0 &&
                                <span>
                                    {cart.length}
                                </span>
                            }
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;