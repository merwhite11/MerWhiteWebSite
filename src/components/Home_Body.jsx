import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import DanceBtn from '../Images/dancing-button.png'
import DanceBtnHover from '../Images/dancing-hover.png'
import DanceBtnClick from '../Images/dancing-hover-ds.png';
import WritingBtn from '../Images/writing-button.png'
import WritingBtnHover from '../Images/writing-hover.png'
import WritingBtnClick from '../Images/writing-hover-ds.png'


const Home_Body = () => {
  const navigate = useNavigate();
  const [writingHover, setWritingHover] = useState(false);
  const [danceHover, setDanceHover] = useState(false);
  const [writingClick, setWritingClick] = useState(false);
  const [danceClick, setDanceClick] = useState(false);

  const handleClick = (path) => {
    button === 'writing' ? setWritingClick(true) : setDanceClick(true)
    navigate(`/${path}`)
  }

  const handleMouseEnter = (button) => {
   button === 'writing' ? setWritingHover(true) : setDanceHover(true)
  };

  const handleMouseLeave = (button) => {
    button === 'writing' ? setWritingHover(false) : setDanceHover(false)
  };

  const DanceBtnSrc = danceHover? DanceBtnHover : DanceBtn
  const WritingBtnSrc = writingHover? WritingBtnHover : WritingBtn

  return (
    <Container fluid>
    <Row className="d-flex align-items-center justify-content-center py-2 px-4">
      <Col sm={4} md={4} xs={4} className="text-left">
        <div className="button-box">
        <img
        className="img-fluid button"
        src={WritingBtnSrc}
        onMouseEnter={() => handleMouseEnter("writing")}
        onMouseLeave={() => handleMouseLeave("writing")}
        onClick={(e)=>handleClick('writing')}
        />
        </div>
      </Col>
      <Col sm={4} md={4} xs={4} className="text-right">
        <div className="button-box">
        <img
        className="img-fluid button"
        src={DanceBtnSrc}
         onMouseEnter={() => handleMouseEnter("dance")}
         onMouseLeave={() => handleMouseLeave("dance")}
         onClick={(e)=>handleClick('dance')}
         />

        </div>
      </Col>
    </Row>
  </Container>
  )
};

export default Home_Body;