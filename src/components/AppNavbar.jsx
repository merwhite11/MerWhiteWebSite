import React, {useState} from "react";
import { useNavigate, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';

const AppNavbar = () => {
   //needs to be triggered by a user action
   const navigate = useNavigate();

   const handleClick = (path) => {
       navigate(`/${path}`)
   }
  return (
    <Navbar className="nav-bar col-12" data-bs-theme="light">
    <Container className="justify-content-end">
      <Nav>
        <Nav.Link className="nav-bar" as={Link} to="/">Home</Nav.Link>
        <Nav.Link className="nav-bar" as={Link} to="/writing">Writing</Nav.Link>
        <Nav.Link className="nav-bar" as={Link} to="/dance">Dance</Nav.Link>
        <Nav.Link className="nav-bar" as={Link} to="/contact">Who's She</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    );
}

export default AppNavbar;