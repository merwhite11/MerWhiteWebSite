import React, { useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Welcome from '../../Images/welcome-to.png'
import Logo from '../../Images/logo-nobg.png'
import Whosshe from '../../Images/whos-she.png'

const Header_Test = () => {

  return (
    <Container fluid>
    <Row className="header" className="d-flex align-items-center justify-content-center py-2 px-4">
      <Col sm={4} md={4} xs={4} >
        <div className="box">
        <img className="img-fluid header-image" src={Welcome} />
        </div>
      </Col>
      <Col sm={4} md={4} xs={4}>
        <div className="box">
        <img className="img-fluid header-image" src={Logo} />
        </div>
      </Col>
      <Col sm={4} md={4} xs={4}>
        <div className="box">
        <img className="img-fluid whos-she-image" src={Whosshe} />
        </div>
      </Col>
    </Row>
    {/* <Row>
      <Col className="d-flex justify-content-center">
        <div className="box">

      <p className="sub-title">A medium for my mediums</p>
        </div>
      </Col>
    </Row> */}
  </Container>


  )
};

export default Header_Test;