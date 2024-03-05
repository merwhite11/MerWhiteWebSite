import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../images/logo-nobg.png'
import Welcome from '../images/welcome-to.png'
import WhosShe from '../images/whos-she.png'
import WhosSheHover from '../images/whos-she-yellow-fill-outline.png';


const Header_Test = () => {
  const navigate = useNavigate();
  const handleClick = (path) => navigate(`/${path}`)

  const [hovered, setHovered] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const WhosSheSrc = hovered ? WhosSheHover : WhosShe;

  return (
    <Container fluid>
      <Row className="header" className="d-flex align-items-center justify-content-center py-2 px-4">
        <Col sm={4} md={4} xs={2} >
          <div className="header-comp-box">
            <h1 className="header-title mt-5">Welcome to</h1>
            {/* <img className="img-fluid header-image" src={Welcome} /> */}
          </div>
        </Col>
        <Col sm={4} md={4} xs={6}>
          <div className="header-comp-box">
          {/* <h1 className="header-title mt-5">Mer White's Website</h1> */}
            <img className="img-fluid" src={Logo} />
          </div>
        </Col>
        <Col sm={4} md={4} xs={2}>
          <div className="header-comp-box">
            <h1 className="header-title mt-5"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleClick('contact')}>Who's She?

            </h1>
            {/* <img
        className="img-fluid whos-she-image"
        src={WhosSheSrc}
        /> */}
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <div className="header-comp-box">

            <p className="sub-title">A medium for my mediums</p>
          </div>
        </Col>
      </Row>
    </Container>


  )
};

export default Header_Test;