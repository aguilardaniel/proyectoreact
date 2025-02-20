import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavBar() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Mi E-Commerce</Navbar.Brand>
          {/* <div id='barraDerecha'> */}

          <CartWidget />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Sale</Nav.Link>
              <NavDropdown title="Tienda" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Categoría 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Categoría 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Categoría 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Categoría 4
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          {/* </div> */}
          
          
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;