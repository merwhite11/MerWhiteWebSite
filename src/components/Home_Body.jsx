import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import DanceButton from '../Images/dancing-button.png'
import WritingButton from '../Images/writing-button.png'

const Home_Body = () => {

  return (
    <Container fluid>
    <Row className="d-flex align-items-center justify-content-center py-2 px-4">
      <Col sm={4} md={4} xs={4} className="text-left">
        <div className="button-box">
        <img className="img-fluid button" src={WritingButton} />
        </div>
      </Col>
      <Col sm={4} md={4} xs={4} className="text-right">
        <div className="button-box">
        <img className="img-fluid button" src={DanceButton} />
        </div>
      </Col>
    </Row>
  </Container>
  )
};

export default Home_Body;