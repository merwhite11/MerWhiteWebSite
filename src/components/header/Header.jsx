import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Banner from '../../Images/logo-HoverDiamond.jpg'

const Header = () => {
  const navigate = useNavigate();
  const handleClick = (path) => navigate(`/${path}`)
  return (
    <div className='col-md-12' >
        <img src={Banner} className="w-100"/>
      </div>
  )
}

export default Header;