import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { Col } from "react-bootstrap";

import misProductos from "../data/prendas.json";



function ItemListContainter() {

const [productList, setproductList] = useState(0);

useEffect(() => {
    const ackData = new Promise((resolve, reject) => {
        setTimeout(function () {
        resolve(misProductos);
    });
    });

    ackData.then((response) => {
        setproductList(response);
    });
    
}, []);

return (
    <>
    <div className="item-list-container ">
        <Col md={8} className="d-flex justify-content-center ">
        <ItemList items={productList} />
        </Col>
    </div>
    </>
);
}



export default ItemListContainter;
