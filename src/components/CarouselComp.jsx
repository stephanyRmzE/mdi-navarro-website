import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {TrabajosItems, TrabajosImages} from "../components/TrabajosItems"


export default function CarouselComp() {
    return (
        <div className="carousel-wrapper">
          <Carousel infiniteLoop useKeyboardArrows autoPlay>

            {TrabajosItems?.map((item,i) => (
              <div>
                <img src={item.image} alt="item.title" key={i}   />
                <p >Legend 1</p>
              </div>
                ))}
          </Carousel>
        </div>
    );
}
