import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Title from '../../Images/Title.jpg';
import Welcome from '../../Images/Welcome.jpg';
import To from '../../Images/To.jpg';
import Whosshe from '../../Images/Whosshe.jpg'

const Header = () => {
  const navigate = useNavigate();
  const handleClick = (path) => navigate(`/${path}`)
  return (
    <div className="header">
      <div className="left-header">
        <div>
        <img className="left-header-image" src={Welcome} />
        </div>
        <div>
          <img className="left-header-image" src={To} />
        </div>
      </div>
      <div className="title">
        <img className="title-image" src={Title} />
      </div>
      {/* <div className="title-top">Mer White's</div>
      <div className="title-bottom">Web Site</div> */}
      {/* <div className="whosshe">Who's She?</div> */}
      <div className="whos-she" onClick={(e)=>handleClick('contact')}>
        <img className="whos-she-image" src={Whosshe} />
      </div>
      <div className="sub-title">a medium for my mediums</div>
    </div>
  )
}

export default Header;