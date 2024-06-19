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
import { Container, Row, Col, Button } from 'react-bootstrap';

export const ConvenioComponent = () => {
  const [selectedImage, setSelectedImage] = useState(brazilAll);

  const states = [
    { name: 'Alagoas', image: Alagoas },
    { name: 'Amazonas', image: Amazonas },
    { name: 'Bahia', image: Bahia },
    { name: 'Ceará', image: Ceara },
    { name: 'Distrito Federal', image: DistritoFederal },
    { name: 'Espírito Santo', image: EspiritoSanto },
    { name: 'Goiás', image: Goias },
    { name: 'Maranhão', image: Maranhao },
    { name: 'Mato Grosso', image: MatoGrosso },
    { name: 'Mato Grosso do Sul', image: MatoGrossoSul },
    { name: 'Minas Gerais', image: MinasGerais },
    { name: 'Paraíba', image: Paraiba },
    { name: 'Paraná', image: Parana },
    { name: 'Pernambuco', image: Pernambuco },
    { name: 'Piauí', image: Piaui },
    { name: 'Rio de Janeiro', image: RiodeJenairo },
    { name: 'Rio Grande do Norte', image: RioGrandedoNorte },
    { name: 'Rio Grande do Sul', image: RioGrandedoSul },
    { name: 'Santa Catarina', image: SantaCatarina },
    { name: 'São Paulo', image: SaoPaulo },
    { name: 'Sergipe', image: Sergipe },
  ];

  return (
    <Container className="margin-bottom-component">
      <div className="text-center my-4 section-title">
        <h2 className="service-tittle">Convênios</h2>
      </div>
      <Row>
        <Col md={7} className="z-1">
          <img src={selectedImage} alt="Mapa do Brasil" />
        </Col>
        <Col md={4} className="z-1">
          <Row>
            {states.map((state) => (
              <Col xs={6} key={state.name}>
                <Button
                  onMouseEnter={() => setSelectedImage(state.image)}
                  className="my-2 "
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
    </Container>
  );
};
