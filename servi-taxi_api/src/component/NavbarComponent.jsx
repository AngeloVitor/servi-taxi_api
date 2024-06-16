import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.svg';
import '../styles/style.css';

export const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className='px-5 py-2 navbar-center navbar-custom'>
      <Navbar.Brand href="#">
        <img
          src={logo}
          alt="Servitaxi Logo"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto w-100">
          <Nav.Link href="#" className='navbar-font'>Home</Nav.Link>
          <Nav.Link href="#" className='navbar-font'>Serviços</Nav.Link>
          <Nav.Link href="#" className='navbar-font'>Nossa História</Nav.Link>
          <Nav.Link href="#" className='navbar-font'>Convênios</Nav.Link>
          <Nav.Link href="#" className='navbar-font'>Contato</Nav.Link>
          <Nav.Link href="#">
            <i className="fab fa-facebook-f"></i>
          </Nav.Link>
          <Nav.Link href="#instagram">
            <i className="fab fa-instagram"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
