import {Link, NavLink} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar(){
  return (
    <Navbar expand="sm" bg="danger" className="border border-white shadow-lg mb-1">

      <Container className="m-0">
        
        <Nav className="mr-auto">

          <Nav.Link to='/' className="nav-link px-2 rounded" id="nav-links" as={Link} activeclassname="active">Home</Nav.Link>

        </Nav>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">

            <Nav.Link to='/character-library' className="nav-link px-2 rounded" id="nav-links" as={NavLink} activeclassname="active">Character Library</Nav.Link>

            <Nav.Link to='/comics' className="nav-link px-2 rounded" id="nav-links" as={Link} activeclassname="active">Comics</Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  )

}

export default NavigationBar;