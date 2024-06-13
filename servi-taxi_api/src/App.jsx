import React from 'react';
import { NavbarComponent } from './component/NavbarComponent';
import { ServiceComponent } from './component/ServiceComponent';
import './styles/style.css';
import { PhotosComponent } from './component/PhotosComponent';
import { ServiTaxiComponent } from './component/ServiTaxiComponent';

export const App = () => {
  return (
    <div className="">
      <NavbarComponent />
      <PhotosComponent />
      <ServiTaxiComponent/>
      <ServiceComponent />
    </div>
  );
};
