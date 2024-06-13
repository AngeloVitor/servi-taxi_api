import React from 'react';
import { Carousel } from 'react-bootstrap';
import { photolayout1, photolayout2, photolayout3 } from '../assets/index';
import '../styles/style.css';

export const PhotosComponent = () => {

  const photos = [photolayout1, photolayout2, photolayout3];

  return (
    <Carousel interval={4000} controls={false}>
      {photos.map((photo, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 custom-carousel-img"
            src={photo}
            alt={`Imagem ${index + 1}`}
          />
          <Carousel.Caption>
            <h3>Imagem {index + 1}</h3>
            <p>Descrição da imagem {index + 1}.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
