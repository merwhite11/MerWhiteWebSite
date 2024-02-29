import React, {useState} from "react";
import { useNavigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <Navbar className="nav-bar col-12" data-bs-theme="light">
    <Container >
      <Navbar.Collapse id="basic-navbar-nav" ></Navbar.Collapse>
      <Nav className="justify-content-end">
      <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav.Link href="/writing">Writing</Nav.Link>
        <Nav.Link href="/dance">Dance</Nav.Link>
        <Nav.Link href="/contact">Who's She?</Nav.Link>
      </Nav>
    </Container>
    </Navbar>
  );
}

export default AppNavbar;