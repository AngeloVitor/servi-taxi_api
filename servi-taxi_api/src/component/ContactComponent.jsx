import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import { pointContact, emailContact, phoneContact } from '../assets/index';

export const ContactComponent = () => {
  return (
    <Container className="contact-component my-4">
      <div className="text-center section-title">
        <h2 className="service-tittle">Contato</h2>
      </div>
      <Row>
        <Col md={6}>
          <h4>Saiba como</h4>
          <h2 className="years-text">falar com a gente!!</h2>
          <p className="text-cep">
            <img src={pointContact} alt="pointContact" /> Rua do Sossego, 563,
            Santo Amaro, Recife - PE | CEP 50100-150
          </p>
          <p className="text-sac-phone">
            <img src={emailContact} alt="emailContact" />
            <a href="mailto:sac@servitaxi.com.br">sac@servitaxi.com.br</a>
          </p>
          <p className="text-sac-phone">
            <img src={phoneContact} alt="phoneContact" /> 81 2122-0202 | 81
            3036-8080
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
