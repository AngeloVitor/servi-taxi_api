import React from 'react';
import '../styles/style.css';
import {brazilAll} from '../assets/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const ConvenioComponent = () => {
  return (
    <Container className="margin-bottom-component">
      <div className="text-center my-4 section-title">
        <h2 className="service-tittle">Convênios</h2>
      </div>
      <Row>
        <Col md={6} className='z-1'>
        <img src={brazilAll} alt="brazilAll" /></Col>
        <Col md={6}></Col>
      </Row>
    </Container>
  );
};
