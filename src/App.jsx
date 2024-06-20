import React, { useRef } from 'react';
import { NavbarComponent } from './component/NavbarComponent';
import { ServiceComponent } from './component/ServiceComponent';
import './styles/style.css';
import { PhotosComponent } from './component/PhotosComponent';
import { ServiTaxiComponent } from './component/ServiTaxiComponent';
import { HistoryComponent } from './component/HistoryComponent';
import { ContactComponent } from './component/ContactComponent';
import { FooterComponent } from './component/FooterComponent';
import {ConvenioComponent} from './component/ConvenioComponent'

export const App = () => {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const historyRef = useRef(null);
  const agreementsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="background">
      <NavbarComponent 
        homeRef={homeRef}
        servicesRef={servicesRef}
        historyRef={historyRef}
        agreementsRef={agreementsRef}
        contactRef={contactRef}
      />
      <div ref={homeRef}>
        <PhotosComponent />
        <ServiTaxiComponent />
      </div>
      <div ref={servicesRef}>
        <ServiceComponent />
      </div>
      <div ref={historyRef}>
        <HistoryComponent />
      </div>
      <div ref={agreementsRef}>
        <ConvenioComponent/>
      </div>
      <div ref={contactRef}>
        <ContactComponent />
      </div>
      <FooterComponent />
    </div>
  );
};