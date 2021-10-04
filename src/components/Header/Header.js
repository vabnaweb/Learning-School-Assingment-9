import Button from '@restart/ui/esm/Button';
import React from 'react';
import {  Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import'./Header.css'
const Header = () => {
  const  activeStyle = {
    fontWeight: "bold",
    color: "red"
  }
    return (
    
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">LS</Navbar.Brand>
    <Nav className="me-auto">
            <NavLink activeStyle={activeStyle} className="nav-design" to="/home">Home</NavLink>
            <NavLink activeStyle={activeStyle} className="nav-design" to="/about">About</NavLink>
            <NavLink activeStyle={activeStyle} className="nav-design" to="/services">Services</NavLink>
            <NavLink activeStyle={activeStyle} className="nav-design" to="/contract">Contracts</NavLink>
    </Nav>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Container>
  </Navbar>
    );
};

export default Header;