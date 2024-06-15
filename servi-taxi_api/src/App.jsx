import React from 'react';
import { NavbarComponent } from './component/NavbarComponent';
import { ServiceComponent } from './component/ServiceComponent';
import './styles/style.css';
import { PhotosComponent } from './component/PhotosComponent';
import { ServiTaxiComponent } from './component/ServiTaxiComponent';
import { HistoryComponent } from './component/HistoryComponent';
import { ContactComponent } from './component/ContactComponent';
import { FooterComponent } from './component/FooterComponent';


export const App = () => {
  return (
    <div className="background">
      <NavbarComponent />
      <PhotosComponent />
      <ServiTaxiComponent/>
      <ServiceComponent />
      <HistoryComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
};
