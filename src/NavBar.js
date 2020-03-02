import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import Search from "./search";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href="/" component={Search} font-size="2rem">
          Home
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
