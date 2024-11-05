// src/components/NavBar.js
// src/Components/NavBar.js
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => (
  <Navbar className="navbar" expand="lg">
    <Navbar.Brand href="#home">Kassanda Animal Rescue</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
