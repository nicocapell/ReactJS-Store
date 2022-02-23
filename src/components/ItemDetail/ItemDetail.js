import { Modal, Card } from "react-bootstrap";
import ItemCount from "./ItemCount";




const ItemDetail = (props) => {

   


    const { title, stock, price, pictureUrl, description, id } = props.props;
    const product = {
    stock: stock,
    initial: 1,
    onAdd: (stock, cantidad) => {
         
        alert(`Se agregarán ${cantidad} unidades al carrito`);
    return stock - cantidad;

    },
    precio: price,
};



return (
    <>
    <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Card className="cardProduct">
        <Card.Img variant="top" src={pictureUrl} width="80%" />
        <Card.Body>
            <Card.Text>
            <span style={{ textAlign: "center" }}  className="precio--color">
                id: {id}
            </span>
            <br />
            <span>{description}</span>
            <br />
            <span>
                <p className="precio--color" style={{ textAlign: "center" }}>Precio: ${price}</p>
            </span>
            </Card.Text>
            <ItemCount props={product} /> 
        </Card.Body>
        </Card>
    </Modal.Body>
    </>
);
};

export default ItemDetail;