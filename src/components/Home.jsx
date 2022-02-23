import React from "react";
import { Carousel } from "react-bootstrap";

const Home = () => {
return (
    <>
    
<Carousel className="carousel">
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="../../images/carrousel1.jpg"
            alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="../../images/carrousel2.png"
            alt="Second slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="../../images/carrousel3.jpg"
            alt="Third slide"
        />
        </Carousel.Item>
</Carousel>


    </>
);
};

export default Home;
