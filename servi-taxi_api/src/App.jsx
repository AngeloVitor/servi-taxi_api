import React from 'react';
import { NavbarComponent } from './component/NavbarComponent';
import { ServiceComponent } from './component/ServiceComponent';
import './styles/style.css';
import { PhotosComponent } from './component/PhotosComponent';

export const App = () => {
  return (
    <div className="">
      <NavbarComponent />
      <PhotosComponent />
      <ServiceComponent />
    </div>
  );
};
