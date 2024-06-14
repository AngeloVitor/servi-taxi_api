import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';

export const ContactComponent = () => {
  return (
    <Container className="contact-component my-4">
      <div className="text-center section-title">
        <h2>Contato</h2>
      </div>
      <Row>
        <Col md={6}>
          <h4>Saiba como</h4>
          <h2 className="text-primary">falar com a gente!!</h2>
          <p>
            <i className="bi bi-geo-alt-fill"></i> Rua do Sossego, 563, Santo
            Amaro, Recife - PE | CEP 50100-150
          </p>
          <p>
            <i className="bi bi-envelope-fill"></i>{' '}
            <a href="mailto:sac@servitaxi.com.br">sac@servitaxi.com.br</a>
          </p>
          <p>
            <i className="bi bi-telephone-fill"></i> 81 2122-0202 | 81 3036-8080
          </p>
        </Col>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Nome" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control type="text" placeholder="Telefone" />
            </Form.Group>
            <Form.Group controlId="formCompany">
              <Form.Label>Empresa</Form.Label>
              <Form.Control type="text" placeholder="Empresa" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Escreva sua mensagem...</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Escreva sua mensagem..."
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
