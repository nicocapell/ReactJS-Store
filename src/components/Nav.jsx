import React, { useContext, useState } from 'react';
import { NavLink } from "react-router-dom";
import { CartContext } from '../CartContext';

function Nav() {
    const { cart } = useContext(CartContext);

    const [click, setClick]=useState(false);

    const handleClick = () => setClick(!click);

    return (

        <nav class="navbars">
  <div class="nav-container">
  <NavLink className="nav-logo" to="/">
    <img class="logoNav" src="/images/logo.jpg" />
    </NavLink>
    <div >
      <ul className={click ? "nav-menu active" : "nav-menu"} >
        <li className='nav-item'>
        <NavLink activeClassName="active"
                className="nav-links"
                onClick={handleClick}to="/">
                            Inicio
                        </NavLink>
        </li>
        <li className='nav-item'>
        <NavLink activeClassName="active"
                className="nav-links"
                onClick={handleClick} to="/products">
                            Productos
                        </NavLink>
        </li>
        <li className='nav-item'>
        <NavLink activeClassName="active"
                className="nav-links"
                onClick={handleClick}to="/contactus">
                            Contacto
                        </NavLink>
        </li>
        <li className='nav-item'>
        <NavLink activeClassName="active"
                className="nav-links"
                onClick={handleClick} to="/search">
                            <i class="fa fa-search"></i>
                        </NavLink>
        </li>
        <li className='nav-item'>
        <NavLink activeClassName="active"
                className="nav-links"
                onClick={handleClick} to="/cart">
                            <i class="fa fa-shopping-bag"></i>
                            {cart.length > 0 &&
                                <span>
                                    {cart.length}
                                </span>
                            }
         </NavLink>
        </li>
      </ul>
      <div className='nav-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          
     </div>
    </div>
  </div>
</nav>










    );
}

export default Nav;