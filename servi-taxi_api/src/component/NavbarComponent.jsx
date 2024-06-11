import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.svg';

export const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className='mx-5'>
      <Navbar.Brand href="#">
        <img
          src={logo} // Substitua pelo caminho da sua imagem
          alt="Servitaxi Logo"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto w-100 justify-content-around">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Serviços</Nav.Link>
          <Nav.Link href="#">Nossa História</Nav.Link>
          <Nav.Link href="#">Convênios</Nav.Link>
          <Nav.Link href="#">Contato</Nav.Link>
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
