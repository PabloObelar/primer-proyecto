import React from "react";
import { Carousel } from "react-bootstrap";

export default function BotstrapsCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: 750 }}
            src={require("../imagenes/neceser.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Neceser by Hi Montoto</h3>
            <p>Neceser.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: 750 }}
            src={require("../imagenes/sobre.jpg")}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Sobre by Hi Montoto</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: 750 }}
            src={require("../imagenes/lonaxl.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Lona Xl by Hi Montoto</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
