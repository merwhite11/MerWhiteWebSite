import React from 'react';
import Header from './Header.jsx';
import Home_Body from './Home_Body.jsx';


const Home = (props) => {
  return (
    <div id="home" className="background">
      <Header></Header>
      <Home_Body></Home_Body>
    </div>
  );
}

export default Home;