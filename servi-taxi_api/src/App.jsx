import React from 'react';
import {NavbarComponent} from './component/NavbarComponent'
import {ServiceComponent} from './component/ServiceComponent'
import './styles/style.css'

export const App = () => {
  return (
    <div className='background'>
      <NavbarComponent />
      <ServiceComponent />
    </div>
  );
};
