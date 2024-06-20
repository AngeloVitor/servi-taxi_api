import React from 'react';
import { Carousel } from 'react-bootstrap';
import {
  photolayout1,
  photolayout2,
  photolayout3,
  phoneServiTaxi,
  appAndroid,
  appApple
} from '../assets/index';
import '../styles/style.css';

export const PhotosComponent = () => {
  const photos = [photolayout1, photolayout2, photolayout3];

  return (
    <div className="carousel-container margin-bottom-component">
      <Carousel interval={4000} controls={false}>
        {photos.map((photo, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 custom-carousel-img"
              src={photo}
              alt={`Imagem ${index + 1}`}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="download-app">
        <p className='download-app-font'>Baixe nosso App</p>
        <a href="https://play.google.com/store/apps/details?id=br.com.originalsoftware.taxifonecliente.servTaxi" target="_blank" rel="noopener noreferrer">
          <img src={appAndroid} alt="Baixar no Google Play" className="mt-4" />
        </a>
        <a href="https://apps.apple.com/br/app/servi-t%C3%A1xi-recife/id1117436401" target="_blank" rel="noopener noreferrer">
          <img src={appApple} alt="Baixar na App Store" className="mt-4" />
        </a>
      </div>
      <img src={phoneServiTaxi} alt="Telefone ServiTaxi" className="static-photo-phone" />
    </div>
  );
};
