import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import DanceBtn from '../images/dancing-button.png'
import DanceBtnHover from '../images/dancing-hover.png'
import DanceBtnClick from '../images/dancing-hover-ds.png';
import WritingBtn from '../images/writing-button.png'
import WritingBtnHover from '../images/writing-hover.png'
import WritingBtnClick from '../images/writing-hover-ds.png'


const Home_Body = () => {
  const navigate = useNavigate();
  const [writingHover, setWritingHover] = useState(false);
  const [danceHover, setDanceHover] = useState(false);
  const [writingClick, setWritingClick] = useState(false);
  const [danceClick, setDanceClick] = useState(false);

  const handleClick = (path) => {
    path === 'writing' ? setWritingClick(true) : setDanceClick(true)
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
    <div>
    <Row className="d-flex align-items-center justify-content-center py-2">
      <Col lg={4} md={5} sm={6}  className="text-left">
        <div className="button-box">
        <img
        className="button"
        src={WritingBtnSrc}
        onMouseEnter={() => handleMouseEnter("writing")}
        onMouseLeave={() => handleMouseLeave("writing")}
        onClick={(e)=>handleClick('writing')}
        />
        </div>
      </Col>
      <Col lg={4} md={5} sm={6} xs={10} className="text-right">
        <div className="button-box">
        <img
        className="button"
        src={DanceBtnSrc}
         onMouseEnter={() => handleMouseEnter("dance")}
         onMouseLeave={() => handleMouseLeave("dance")}
         onClick={(e)=>handleClick('dance')}
         />

        </div>
      </Col>
    </Row>
  </div>
  )
};

export default Home_Body;