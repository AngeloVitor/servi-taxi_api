import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  attendence,
  abPoint,
  taxiCar,
  fastClock,
  taxiPrice,
  englishCar,
  priceCode,
  courierTaxi,
  taxPrice,
  diferenceCar,
  ticketTaxi,
  frontDesk,
  cam,
  family,
} from '../assets/index.js';
import '../styles/style.css';

export const ServiceComponent = () => {
  const services = [
    {
      img: taxiCar,
      text: 'Todos os veículos com 4 portas, equipados com ar condicionado e a mais avançada tecnologia de rádio-transmissão, GPS/GPRS.',
    },
    {
      img: attendence,
      text: 'Atendimento 24 horas por dia, inclusive sábados, domingos, feriados e serviços especiais com hora marcada.',
    },
    {
      img: abPoint,
      text: 'Viagens intermunicipais e interestaduais.',
    },
    {
      img: fastClock,
      text: 'Rapidez e eficiência com tempo de chegada de 10 à 15 minutos.',
    },
    {
      img: taxiPrice,
      text: 'Serviços por quilômetro rodado.',
    },
    {
      img: englishCar,
      text: 'Motoristas bilíngues (opcional) e qualificados para todos os eventos.',
    },
    {
      img: priceCode,
      text: 'Faturamento para empresas, mediante contrato de prestação de serviço.',
    },
    {
      img: courierTaxi,
      text: 'Atendimento 24 horas...Courier para entrega de encomendas e malotes em qualquer parte do estado.',
    },
    {
      img: taxPrice,
      text: 'Não cobramos taxas de chamada, hora marcada e porta malas.',
    },
    {
      img: diferenceCar,
      text: 'Taxímetro regulamentado pela Prefeitura Municipal e aferido pelo INMETRO.',
    },
    {
      img: ticketTaxi,
      text: 'Ticket com informações detalhadas do taxímetro como horário inicial e final, km percorrido e valor.',
    },
    {
      img: frontDesk,
      text: 'Recepção em aeroportos e rodoviárias, assim como embarques e desembarques.',
    },
    {
      img: cam,
      text: 'Passeio turístico (Sightseeing).',
    },
    {
      img: family,
      text: 'Transporte de crianças para escolas, festas e show com segurança total.',
    },
    // Adicione todos os serviços aqui...
  ];
  return (
    <Container className='margin-bottom-component'>
      <div className="text-center my-4 section-title">
        <h2 className='service-tittle'>Serviços</h2>
      </div>
      <Row>
        {services.map((service, index) => (
          <Col key={index} sm={6} md={5} lg={3} className="mb-4">
            <Card className="h-100 align-items-center linear-gradient card">
              <Card.Img
                variant="top"
                src={service.img}
                className="card-img-top"
              />
              <Card.Body>
                <Card.Text className='text-description-service'>{service.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
