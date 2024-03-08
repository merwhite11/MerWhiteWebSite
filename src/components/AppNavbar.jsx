import React, {useState} from "react";
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';

const AppNavbar = () => {
   //needs to be triggered by a user action
   const navigate = useNavigate();

   const handleClick = (path) => {
       navigate(`/${path}`)
   }
  return (
    <Navbar className="nav-bar col-12" data-bs-theme="light">
    <Container>
      <Navbar.Collapse id="basic-navbar-nav" ></Navbar.Collapse>
      <Nav className="justify-content-end">
      <Nav.Link className="nav-bar" to="/">Home</Nav.Link>
        <Nav.Link className="nav-bar" to="/writing">Writing</Nav.Link>
        <Nav.Link className="nav-bar" to="/dance">Dance</Nav.Link>
        <Nav.Link className="nav-bar" to="/contact">Who's She?</Nav.Link>
      </Nav>
    </Container>
    </Navbar>
  );
}

export default AppNavbar;