import React from "react";
import { Carousel } from "react-bootstrap";

const Home = () => {
return (
    <>
<Carousel>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="carrousel1.jpg"
            alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="carrousel2.png"
            alt="Second slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="carrousel3.jpg"
            alt="Third slide"
        />
        </Carousel.Item>
</Carousel>

    </>
);
};

export default Home;
