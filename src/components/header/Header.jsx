import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleClick = (path) => navigate(`/${path}`)
  return (
    <div className="header">
      <div className="left-header">Welcome to...</div>
      <div className="title-top">Mer White's</div>
      <div className="title-bottom">Web Site</div>
      <div className="whosshe">Who's She?</div>
      <div className="contact" onClick={(e)=>handleClick('contact')}>Contact</div>
      <div className="sub-title">a medium for my mediums</div>
    </div>
  )
}

export default Header;