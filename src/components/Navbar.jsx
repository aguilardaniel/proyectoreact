import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <NavLink viewTransition to="/">Amatista</NavLink>
          </Navbar.Brand>
          

          <CartWidget/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink viewTransition to="/" className="header__link">Home</NavLink>
              <NavLink viewTransition to="/cart" className="header__link">Carrito</NavLink>
              
              <NavLink viewTransition to="#link">Sale</NavLink>
              <NavDropdown title="Tienda" id="basic-nav-dropdown">

                <NavDropdown.Item>
                  <NavLink viewTransition to="/category/aceites" className="header__link">Aceites</NavLink>
                </NavDropdown.Item>
                
                <NavDropdown.Item>
                  <NavLink viewTransition to="/category/aromaterapia-para-gestantes" className="header__link">Aromaterapia para gestantes</NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <NavLink viewTransition to="/category/jabones" className="header__link">Jabones</NavLink>
                </NavDropdown.Item>

               

                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          
          
          
        </Container>
      </Navbar>
    );
  }
  
  export default NavBar;