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
    { name: 'Alagoas', image: Alagoas, info: ['Informações sobre Alagoas', 'Informações sobre Alagoas', 'Informações sobre Alagoas'] },
    { name: 'Amazonas', image: Amazonas, info: 'Informações sobre Amazonas' },
    { name: 'Bahia', image: Bahia, info: 'Informações sobre Bahia' },
    { name: 'Ceará', image: Ceara, info: 'Informações sobre Ceará' },
    { name: 'Distrito Federal', image: DistritoFederal, info: 'Informações sobre Distrito Federal' },
    { name: 'Espírito Santo', image: EspiritoSanto, info: 'Informações sobre Espírito Santo' },
    { name: 'Goiás', image: Goias, info: 'Informações sobre Goiás' },
    { name: 'Maranhão', image: Maranhao, info: 'Informações sobre Maranhão' },
    { name: 'Mato Grosso', image: MatoGrosso, info: 'Informações sobre Mato Grosso' },
    { name: 'Mato Grosso do Sul', image: MatoGrossoSul, info: 'Informações sobre Mato Grosso do Sul' },
    { name: 'Minas Gerais', image: MinasGerais, info: 'Informações sobre Minas Gerais' },
    { name: 'Paraíba', image: Paraiba, info: 'Informações sobre Paraíba' },
    { name: 'Paraná', image: Parana, info: 'Informações sobre Paraná' },
    { name: 'Pernambuco', image: Pernambuco, info: 'Informações sobre Pernambuco' },
    { name: 'Piauí', image: Piaui, info: 'Informações sobre Piauí' },
    { name: 'Rio de Janeiro', image: RiodeJenairo, info: 'Informações sobre Rio de Janeiro' },
    { name: 'Rio Grande do Norte', image: RioGrandedoNorte, info: 'Informações sobre Rio Grande do Norte' },
    { name: 'Rio Grande do Sul', image: RioGrandedoSul, info: 'Informações sobre Rio Grande do Sul' },
    { name: 'Santa Catarina', image: SantaCatarina, info: 'Informações sobre Santa Catarina' },
    { name: 'São Paulo', image: SaoPaulo, info: 'Informações sobre São Paulo' },
    { name: 'Sergipe', image: Sergipe, info: 'Informações sobre Sergipe' },
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
          <img src={selectedImage} alt="Mapa do Brasil" className='w-75'/>
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
          {selectedState?.info}
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
