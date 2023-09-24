import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarMenu = ({ title }) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>          
          <Link to="/">{title}</Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/analyze">Analyze</Nav.Link>
          <Nav.Link as={Link} to="/expense">Expense</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
/* Set type define of your props  variable*/
NavbarMenu.propTypes = {
  title: PropTypes.string,
};

/**
 * Set Default value of props
 * So you can call direct components without passing a props
 * Ex. <Nabbar/> or <Nabbar title="Hello"/>
 *     Both components working but first print default value and second print Hello in a title tag
 */
NavbarMenu.defaultProps = {
  title: "ShivAI",
};
export default NavbarMenu;
