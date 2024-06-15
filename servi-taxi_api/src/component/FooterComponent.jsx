import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const FooterComponent = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs={12} className="social-media-section">
            <p>Acompanhe as nossas <span className="highlight">Redes Sociais</span></p>
            <div className="social-icons">
              <a href="https://www.instagram.com/servitaxirecife" target="_blank" rel="noopener noreferrer">
                
                <span>@servitaxirecife</span>
              </a>
              <a href="https://www.facebook.com/servitaxirecife" target="_blank" rel="noopener noreferrer">
               
              </a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col xs={12} className="copyright-section">
            <p>© 2019 Copyright Servitaxi - 24 Horas com você! Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
