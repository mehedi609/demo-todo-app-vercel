import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Todo-App</Navbar.Brand>
          <Nav className="mr-auto">
            <Link href="/">
              <a className="nav-link" role="button">
                Home
              </a>
            </Link>
            <Link href="/about-us">
              <a className="nav-link" role="button">
                About Us
              </a>
            </Link>
            <Link href="/todos">
              <a className="nav-link" role="button">
                Todos
              </a>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
