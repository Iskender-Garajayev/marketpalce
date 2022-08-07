import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
// import {LinkContainer} from 'react-router-bootstrap' 

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          {/* <LinkContainer to='/' exact> */}
            <Navbar.Brand href="/">ProShop</Navbar.Brand>
          {/* </LinkContainer> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            {/* <LinkContainer to='/cart'> */}
              <Nav.Link href="/cart" >
                <i className="fas fa-shopping-cart"> </i> Cart
              </Nav.Link>
              {/* </LinkContainer> */}
              <Nav.Link href="/login">
                <i className="fas fa-user"></i> Sing In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
