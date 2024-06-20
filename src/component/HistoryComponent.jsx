import React from 'react';
import '../styles/style.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { backHistory } from '../assets/index.js';

export const HistoryComponent = () => {
  return (
    <Container className="position-relative margin-bottom-component">
      <div className="text-center my-4 section-title">
        <h2 className="service-tittle">Nossa História</h2>
      </div>
      <Row className="align-items-center">
        <Col md={7} className="text-column">
          <h2 className="years-text">25 Anos</h2>
          <h4>oferecendo conforto e segurança!!</h4>
          <p className="text-history">
            Nascemos como realização de um sonho de Francisco Leôncio Maia de
            Lima, o Lex, que desde 1972 já exercia a profissão de taxista na
            cidade do Recife, buscando ampliar o seu atendimento e oferecer um
            serviço de táxi mais rápido, com conforto e segurança para seus
            clientes. Atuando também em defesa da categoria de taxista junto ao
            sindicato dos taxistas, sendo, inclusive, criador do clube de campo
            da categoria.
          </p>
          <p className="text-history">
            A Servi Táxi Recife iniciou suas atividades em 1994, com pouco mais
            de 30 táxis e na defesa de oferecer à população e empresas da Região
            Metropolitana do Recife um atendimento personalizado visando o
            bem-estar e a segurança de seus passageiros.
          </p>
          <p className="text-history">
            Hoje somos a maior empresa de Rádio Táxi do Recife, atuando em toda
            RMR, contando atualmente com uma frota de 600 veículos, todos
            equipados com o que há de mais moderno em rastreamento,
            monitoramento e segurança. Nossos motoristas passam por treinamentos
            e capacitações e são cadastrados e regularizados perante a
            Prefeitura Municipal do Recife.
          </p>
          <p className="text-history">
            Investimos constantemente em tecnologia para nossos clientes com uma
            central de Call Center que conta com tela, faz rastreamento de
            informações em tempo real, e gravação e histórico de atendimentos e
            identificação de chamadas. Nossos clientes têm a certeza de um
            atendimento mais seguro e táxi solicitado e seus créditos
            resguardados.
          </p>
          <p className="text-history">
            A Família Servi Táxi, através de seus profissionais (taxistas,
            funcionários e prestadores de serviços) tem a preocupação constante
            de superar as expectativas de seus clientes e proporcionar sempre um
            serviço de táxi que busca a melhoria contínua, de forma que, ao
            repitir, assegurando que você tenha de estar, da sua família e da
            sua empresa.
          </p>
        </Col>
        <Col md={7} className="image-column">
          <Image
            src={backHistory}
            fluid
            alt="Servi Táxi"
            className="background-image"
          />
        </Col>
      </Row>
    </Container>
  );
};
