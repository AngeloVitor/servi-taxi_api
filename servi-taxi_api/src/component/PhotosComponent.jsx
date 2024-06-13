import React from 'react';
import { Carousel } from 'react-bootstrap';
import { photolayout1, photolayout2, photolayout3, downloadApp } from '../assets/index';
import '../styles/style.css';

export const PhotosComponent = () => {

  const photos = [photolayout1, photolayout2, photolayout3];

  return (
    <div className="carousel-container">
      <Carousel interval={4000} controls={false}>
        {photos.map((photo, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 custom-carousel-img"
              src={photo}
              alt={`Imagem ${index + 1}`}
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <img
        className="static-photo"
        src={downloadApp}
        alt="Imagem Estática"
      />
    </div>
  );
};
