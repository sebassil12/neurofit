import React from 'react';
import { Carousel } from 'antd';
import { IMAGE_CAROUSEL } from '../../../constants/constants';
import carousel from "./style/carousel.module.css"



const CarouselHome: React.FC = () => (
    
  <Carousel autoplay >
    <div className={carousel.container}>
      <div style={{backgroundImage:`url(${IMAGE_CAROUSEL.fisio})`}} className={carousel.image_container}>
        <h1 className={carousel.text}>REHABILITACIÓN</h1>
        </div>
    </div>
    <div className={carousel.container}>
      <div style={{backgroundImage:`url(${IMAGE_CAROUSEL.tower})`}} className={carousel.image_container}>
        <h1 className={carousel.text}>BIENESTAR</h1>
        </div>
    </div>
    <div className={carousel.container}>
        <div style={{backgroundImage:`url(${IMAGE_CAROUSEL.old_man})`}} className={carousel.image_container}>
      <h1 className={carousel.text}>FUNCIONALIDAD</h1>
        </div>
    </div>
  </Carousel>
);

export default CarouselHome;