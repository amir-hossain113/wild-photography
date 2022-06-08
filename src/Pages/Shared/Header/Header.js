import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { signOut } from 'firebase/auth';
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="warning">
        <Container>
          <Navbar.Brand href="#home" className="logo" as={Link} to="/">Wild Photography</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" href="home#services">Services</Nav.Link>
              <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="about">About</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
            {
              user ? 
              <button className="btn btn-link text-decoration-none text-black" onClick={handleSignOut}>SignOut</button> :
              <Nav.Link as={Link} to="login">
                Login
              </Nav.Link>
            }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;