import NavBar from "./components/Navbar";
import { Flex } from "antd";
//import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <Flex component="header"  justify="space-between" align="center">
      {/* <h1>Mi Ecommerce</h1> */}
      <NavBar />
      
      {/* Nav Anterior */}

      {/*
      <nav>
        <a href="#">link 1</a>
        <a href="#">link 2</a>
        <a href="#">link 3</a>
      </nav>

      */}
    </Flex>
  );
}

//Header()
//<Header />;
export default Header;