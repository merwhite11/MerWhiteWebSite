import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from '../../Images/welcome-to.png'
import Logo from '../../Images/logo-nobg.png'
import WhosShe from '../../Images/whos-she.png'
import WhosSheHover from '../../Images/whos-she-yellow-fill-outline.png';
// import '../../assets/Organical.ttf'
// import '../../App.css'

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

  // useEffect(() => {
  //   setHovered(!hovered)
  // }, [hovered])

  const WhosSheSrc = hovered ? WhosSheHover : WhosShe;

  return (
    <Container fluid>
      <Row className="header" className="d-flex align-items-center justify-content-center py-2 px-4">
        <Col sm={4} md={4} xs={4} >
          <div className="box">
            <h1 className="box mt-5">Welcome to</h1>
            {/* <img className="img-fluid header-image" src={Welcome} /> */}
          </div>
        </Col>
        <Col sm={4} md={4} xs={4}>
          <div className="box">
            <img className="img-fluid header-image" src={Logo} />
          </div>
        </Col>
        <Col sm={4} md={4} xs={4}>
          <div className="box">
            <h1 className="box mt-5"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleClick('contact')}>Who's She

            </h1>
            {/* <img
        className="img-fluid whos-she-image"
        src={WhosSheSrc}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e)=>handleClick('contact')}
        /> */}
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <div className="box">

            <p className="sub-title">A medium for my mediums</p>
          </div>
        </Col>
      </Row>
    </Container>


  )
};

export default Header_Test;