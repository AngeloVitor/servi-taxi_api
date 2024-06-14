import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { phoneBlack, pointer, taxiMoney, voucher } from '../assets/index.js';
import '../styles/style.css';

export const ServiTaxiComponent = () => {
  const imgs = [
    {
      img: phoneBlack,
      text: 'Baixe o app SERVITAXI',
    },
    {
      img: pointer,
      text: 'Solicite ou agende seu taxi',
    },
    {
      img: taxiMoney,
      text: 'Controle suas despesas de taxi',
    },
    {
      img: voucher,
      text: 'Sistema de gestão de voucher eletrônico',
    },
  ];

  return (
    <Container className='margin-bottom-component'>
      <div className="text-center my-4 section-title">
        <h2>Serviços</h2>
      </div>
      <Row>
        {imgs.map((img, index) => (
          <Col key={index} sm={6} md={5} lg={3} className="mb-4">
            <Card className="h-100 text-center align-items-center justify-content-center">
              <Card.Img
                variant="top"
                src={img.img}
                className={`img-hover-effect ${index === 2 ? 'img-large' : ''}`}
              />
            </Card>
            <Card.Text className='mt-2 text-center'>{img.text}</Card.Text>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
