import React from "react";
import { Navbar } from "react-bootstrap";
// import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => (
  <Navbar className="navbar" expand="lg">
    <Navbar.Brand
      href="#home"
      style={{ fontSize: "45px", textAlign: "center", width: "100%" }}
    >
      Kassanda <br /> Animal Rescue
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      {/* <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav> */}
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
