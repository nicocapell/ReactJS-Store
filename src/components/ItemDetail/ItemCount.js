import { useState, useEffect, useContext } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import CartContext from "../../context/cart/CartContext";




function ItemCount(props) {

const { addToCart } = useContext(CartContext);


//props
const { stock, initial, onAdd } = props.props;
//hooks
const [cantidad, setCantidad] = useState(initial);
const [actualStock, setActualStock] = useState(stock);

const add = () => {
    if (cantidad <= stock - 1) {
        setCantidad(cantidad + 1);
    }
};

const substract = () => {
    if (cantidad > initial) {
        setCantidad(cantidad - 1);
    }
};

useEffect(() => {
}, [actualStock]);

return (
<div>
    <p>Cantidad disponible: {actualStock}</p>
    <InputGroup className="mb-3 form-calculator-minmax">
        <Button
            variant="outline-secondary"
            id="button-addon1"
            onClick={substract}
        >
            -
        </Button>
        <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            value={cantidad}
            readOnly
        />
        <Button variant="outline-secondary" id="button-addon1" onClick={add}>
            +
        </Button>
    </InputGroup>

    <button className="botonDetalle"
        onClick={(e) => {

            addToCart(props.props);

            e.preventDefault(); 
            actualStock >= cantidad &&
            setActualStock(onAdd(actualStock, cantidad));
            cantidad > actualStock &&
            alert("Sin stock");
        }}
    >
        Agregar al carrito
    </button>
    </div>
);
}

export default ItemCount;







