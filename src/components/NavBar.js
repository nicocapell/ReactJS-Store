import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/img/logo.jpg';
import CartWidget from '../components/CartWidget';
import { BrowserRouter as Router, Link, Switch, Route, useParams,useRouteMatch } from 'react-router-dom';
import ItemListContainter from './ItemList/ItemListContainer';
import Nosotros from './Nosotros';
import Home from './Home';
import Cart from './Cart'
import CartContext from '../context/cart/CartContext';




const NavBar = (props) => {

    const {cartItems} = useContext (CartContext)

    return ( 
    <Router>

    <header>
        <nav className="navbar">
        <Link to="/" ><img src={logo} className="logoNav"  alt="navLogo"/></Link>
            <ul className="nav">
                <li><Link to="/" className="LinkNav">Inicio</Link></li>
                <li><Link to="/about" className="LinkNav">Nosotros</Link></li>
                <li><Link to="/productos" className="LinkNav">Productos</Link></li>
                <li><Link to="/cart" ><CartWidget/></Link></li>
                <li> {cartItems.length > 0 && ( <div className='item__count'> <span>{cartItems.length}</span></div>)}</li>
            </ul>
        </nav>
    </header>



    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/productos">
            <ItemListContainter />
            <Productos/>
        </Route>
        <Route path="/about">
            <Nosotros />
        </Route>
        <Route path="/cart">
            <Cart items={props.props}/> 
        </Route>
    </Switch>
</Router>



)
}


const Productos = () => {
let { path, url } = useRouteMatch();
return (
    <>
        <ul>
            <li>
                <Link to={`${url}/Remeras`}>Remeras</Link>
            </li>
            <li>
                <Link to={`${url}/Pantalones`}>Pantalones</Link>
            </li>
            <li>
                <Link to={`${url}/Buzos`}>Buzos</Link>
            </li>
            <li>
                <Link to={`${url}/Camisas`}>Camisas</Link>
            </li>
        </ul>
        <Switch>
            <Route path={`${path}/:itemId`}>
                <Categoria />               
            </Route>
        </Switch>
    </>
)
}

const Categoria = () => {
let {itemId} = useParams();

return(
    <div>
        <h3>{itemId}</h3>
    </div>
)
}


export default NavBar

