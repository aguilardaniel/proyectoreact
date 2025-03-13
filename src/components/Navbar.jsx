import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavBar() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Amatista</Navbar.Brand>
          {/* <div id='barraDerecha'> */}

          <CartWidget />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Sale</Nav.Link>
              <NavDropdown title="Tienda" id="basic-nav-dropdown">
                <NavDropdown.Item href="/category/aceites">Aceites</NavDropdown.Item>
                <NavDropdown.Item href="/category/aromaterapia-para-gestantes">
                Aromaterapia para gestantes
                </NavDropdown.Item>
                <NavDropdown.Item href="/category/cristales">
                Cristales
                </NavDropdown.Item>

                {/* <NavDropdown.Item href="/category/cuidado-energetico">
                Cuidado Energético
                </NavDropdown.Item> */}

                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          {/* </div> */}
          
          
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;