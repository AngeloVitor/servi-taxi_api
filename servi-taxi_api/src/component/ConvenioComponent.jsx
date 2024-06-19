import React, { useState } from 'react';
import '../styles/style.css';
import {
  brazilAll,
  Alagoas,
  Amazonas,
  Bahia,
  Ceara,
  DistritoFederal,
  EspiritoSanto,
  Goias,
  Maranhao,
  MatoGrosso,
  MatoGrossoSul,
  MinasGerais,
  Paraiba,
  Parana,
  Pernambuco,
  Piaui,
  RiodeJenairo,
  RioGrandedoNorte,
  RioGrandedoSul,
  SantaCatarina,
  SaoPaulo,
  Sergipe,
} from '../assets/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

export const ConvenioComponent = () => {
  const [selectedImage, setSelectedImage] = useState(brazilAll);
  const [showModal, setShowModal] = useState(false);
  const [selectedState, setSelectedState] = useState(null);

  const states = [
    {
      name: 'Alagoas',
      image: Alagoas,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(82) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(82) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(82) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(82) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(82) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(82) 67890-1234' },
      ],
    },
    {
      name: 'Amazonas',
      image: Amazonas,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(92) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(92) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(92) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(92) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(92) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(92) 67890-1234' },
      ],
    },
    {
      name: 'Bahia',
      image: Bahia,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(71) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(71) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(71) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(71) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(71) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(71) 67890-1234' },
      ],
    },
    {
      name: 'Ceará',
      image: Ceara,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(85) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(85) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(85) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(85) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(85) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(85) 67890-1234' },
      ],
    },
    {
      name: 'Distrito Federal',
      image: DistritoFederal,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(61) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(61) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(61) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(61) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(61) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(61) 67890-1234' },
      ],
    },
    {
      name: 'Espírito Santo',
      image: EspiritoSanto,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(27) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(27) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(27) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(27) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(27) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(27) 67890-1234' },
      ],
    },
    {
      name: 'Goiás',
      image: Goias,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(62) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(62) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(62) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(62) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(62) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(62) 67890-1234' },
      ],
    },
    {
      name: 'Maranhão',
      image: Maranhao,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(98) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(98) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(98) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(98) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(98) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(98) 67890-1234' },
      ],
    },
    {
      name: 'Mato Grosso',
      image: MatoGrosso,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(65) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(65) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(65) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(65) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(65) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(65) 67890-1234' },
      ],
    },
    {
      name: 'Mato Grosso do Sul',
      image: MatoGrossoSul,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(67) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(67) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(67) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(67) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(67) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(67) 67890-1234' },
      ],
    },
    {
      name: 'Minas Gerais',
      image: MinasGerais,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(31) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(31) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(31) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(31) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(31) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(31) 67890-1234' },
      ],
    },
    {
      name: 'Paraíba',
      image: Paraiba,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(83) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(83) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(83) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(83) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(83) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(83) 67890-1234' },
      ],
    },
    {
      name: 'Paraná',
      image: Parana,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(41) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(41) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(41) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(41) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(41) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(41) 67890-1234' },
      ],
    },
    {
      name: 'Pernambuco',
      image: Pernambuco,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(81) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(81) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(81) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(81) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(81) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(81) 67890-1234' },
      ],
    },
    {
      name: 'Piauí',
      image: Piaui,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(86) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(86) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(86) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(86) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(86) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(86) 67890-1234' },
      ],
    },
    {
      name: 'Rio de Janeiro',
      image: RiodeJenairo,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(21) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(21) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(21) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(21) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(21) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(21) 67890-1234' },
      ],
    },
    {
      name: 'Rio Grande do Norte',
      image: RioGrandedoNorte,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(84) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(84) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(84) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(84) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(84) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(84) 67890-1234' },
      ],
    },
    {
      name: 'Rio Grande do Sul',
      image: RioGrandedoSul,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(51) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(51) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(51) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(51) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(51) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(51) 67890-1234' },
      ],
    },
    {
      name: 'Santa Catarina',
      image: SantaCatarina,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(48) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(48) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(48) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(48) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(48) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(48) 67890-1234' },
      ],
    },
    {
      name: 'São Paulo',
      image: SaoPaulo,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(11) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(11) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(11) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(11) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(11) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(11) 67890-1234' },
      ],
    },
    {
      name: 'Sergipe',
      image: Sergipe,
      info: [
        { convenio: 'Exemplo Convênio 01', phone: '(79) 12345-6789' },
        { convenio: 'Exemplo Convênio 02', phone: '(79) 23456-7890' },
        { convenio: 'Exemplo Convênio 03', phone: '(79) 34567-8901' },
        { convenio: 'Exemplo Convênio 04', phone: '(79) 45678-9012' },
        { convenio: 'Exemplo Convênio 05', phone: '(79) 56789-0123' },
        { convenio: 'Exemplo Convênio 06', phone: '(79) 67890-1234' },
      ],
    },
  ];

  const handleShowModal = (state) => {
    setSelectedState(state);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="margin-bottom-component">
      <div className="text-center my-4 section-title">
        <h2 className="service-tittle">Convênios</h2>
      </div>
      <Row>
        <Col md={5} className="z-1">
          <img src={selectedImage} alt="Mapa do Brasil" className="w-100" />
        </Col>
        <Col md={7} className="z-1">
          <Row>
            {states.map((state) => (
              <Col xs={6} key={state.name}>
                <Button
                  onMouseEnter={() => setSelectedImage(state.image)}
                  onClick={() => handleShowModal(state)}
                  className="my-2 mx-1 text-button-map"
                  variant="outline-primary"
                  block
                >
                  {state.name}
                </Button>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedState?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {selectedState?.info.map((item, index) => (
              <li key={index}>
                <span className="name">{item.convenio}</span>
                <span className="phone">{item.phone}</span>
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
