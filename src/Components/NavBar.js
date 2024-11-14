import React from "react";
import { Navbar } from "react-bootstrap";
// import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => (
  <Navbar className="navbar" expand="false">
    <Navbar.Brand
      href="#home"
      style={{ fontSize: "45px", textAlign: "center", width: "100%" }}
    >
      Kassanda <br /> Animal Rescue
    </Navbar.Brand>
  </Navbar>
);

export default NavBar;
