import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
  return (
      <Navbar  bg="primary" variant="dark"  className="mt-4 mb-4 rounded">
        <Container>
          <Navbar.Brand as={NavLink} to="/">Waiter.app</Navbar.Brand>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default NavBar;
