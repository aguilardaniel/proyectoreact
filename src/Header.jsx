import NavBar from "./components/Navbar";
import { Flex } from "antd";


function Header() {
  return (
    <Flex component="header"  justify="space-between" align="center">
      
      <NavBar />
      
      
    </Flex>
  );
}


export default Header;