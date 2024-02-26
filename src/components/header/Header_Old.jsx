import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Title from '../../Images/Title.jpg';
// import Welcome from '../../Images/Welcome.jpg';
import To from '../../Images/To.jpg';
// import Whosshe from '../../Images/Whosshe.jpg'
import Logo from '../../Images/logo-nobg.png'
import Welcome from '../../Images/welcome-to.png'
// import Whosshe from '../../Images/whosSheDiamond.jpg'
import Whosshe from '../../Images/whos-she.png'

const Header = () => {
  const navigate = useNavigate();
  const handleClick = (path) => navigate(`/${path}`)
  return (
    <div className="header">
      <div className="left-header">
        <div>
        <img className="left-header-image" src={Welcome} />
        </div>
      </div>
      <div className="title">
        <img className="title-image" src={Logo} />
      </div>
      <div className="whos-she" onClick={(e)=>handleClick('contact')}>
        <img className="whos-she-image" src={Whosshe} />
      </div>
    </div>
  )
}

export default Header;