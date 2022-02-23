import { Card } from "react-bootstrap";
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";


function Item(props)  {
const { title,  pictureUrl, stock} = props.props;


return (
    <div className="col-sm-6 col-md-4 col-xs-1">
    <Card className="cardProduct">
        <Card.Img variant="top" src={pictureUrl} width="60%" />
        <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
            <p className="stock--color">Stock: {stock}</p>
        </Card.Text>
        <ItemDetailContainer props={props.props} />
        </Card.Body>
    </Card>
    </div>
);
}

export default Item;
