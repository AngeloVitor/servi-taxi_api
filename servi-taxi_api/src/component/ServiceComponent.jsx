import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import attendence from '../assets/attendence.svg';
import abPoint from '../assets/abPoint.svg';
import taxiCar from '../assets/taxiCar.svg';
import fastClock from '../assets/fastClock.svg';
import taxiPrice from '../assets/taxiPrice.svg';
import '../styles/style.css'

export const ServiceComponent = () => {
  const services = [
    {
      img: taxiCar,
      title: 'Todos os veículos',
      text: 'Todos os veículos com 4 portas, equipados com ar condicionado e a mais avançada tecnologia de rádio-transmissão, GPS/GPRS.',
    },
    {
      img: attendence,
      title: 'Atendimento 24 horas',
      text: 'Atendimento 24 horas por dia, inclusive sábados, domingos, feriados e serviços especiais com hora marcada.',
    },
    {
      img: abPoint,
      title: 'Atendimento 24 horas',
      text: 'Viagens intermunicipais e interestaduais.',
    },
    {
      img: fastClock,
      title: 'Atendimento 24 horas',
      text: 'Rapidez e eficiência com tempo de chegada de 10 à 15 minutos.',
    },
    {
      img: taxiPrice,
      title: 'Atendimento 24 horas',
      text: 'Serviços por quilômetro rodado.',
    },
    {
      title: 'Atendimento 24 horas',
      text: 'Motoristas bilíngues (opcional) e qualificados para todos os eventos.',
    },
    {
      title: 'Atendimento 24 horas',
      text: 'Faturamento para empresas, mediante contrato de prestação de serviço.',
    },
    {
      title: 'Atendimento 24 horas',
      text: 'Atendimento 24 horas...Courier para entrega de encomendas e malotes em qualquer parte do estado.',
    },
    {
      title: 'Atendimento 24 horas',
      text: 'Não cobramos taxas de chamada, hora marcada e porta malas.',
    },
    {
      title: 'Atendimento 24 horas',
      text: 'Taxímetro regulamentado pela Prefeitura Municipal e aferido pelo INMETRO.',
    },
    {
      title: 'Atendimento 24 horas',
      text: 'Ticket com informações detalhadas do taxímetro como horário inicial e final, km percorrido e valor.',
    },
    {
      title: 'Atendimento 24 horas',
      text: 'Recepção em aeroportos e rodoviárias, assim como embarques e desembarques.',
    },
    {
      title: 'Atendimento 24 horas',
      text: 'Passeio turístico (Sightseeing).',
    },
    {
      title: 'Atendimento 24 horas',
      text: 'Transporte de crianças para escolas, festas e show com segurança total.',
    },
    // Adicione todos os serviços aqui...
  ];
  return (
    <Container>
      <h2 className="text-center my-4">Serviços</h2>
      <Row>
        {services.map((service, index) => (
          <Col key={index} sm={6} md={4} lg={3} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={service.img} className='card-img-top'/>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
