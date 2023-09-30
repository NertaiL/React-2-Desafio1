import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-danger justify-content-between">
<Container >
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Link to="/" className='text-decoration-none text-white mt-2 ms-3'>🏠Home</Link>
      <Link to="/showcase" className='text-decoration-none text-white mt-2 ms-3'>🥧ShowCase</Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown" >
        <Link to="/contact" className='text-decoration-none text-black'>📱Contact</Link>
      </NavDropdown>
    </Nav>
      <Navbar.Brand className='text-white'>Happy Cake🍰</Navbar.Brand>
  </Navbar.Collapse>
</Container>
</Navbar>
  )
}

export default Navigation

