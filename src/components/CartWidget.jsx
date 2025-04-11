import { ShoppingCartOutlined } from '@ant-design/icons';
import { useContext } from "react";
import { carritoContexto } from "./CarritoContext";
import { NavLink } from "react-router-dom";

function CartWidget() {

    const elValorDelContexto = useContext(carritoContexto)



    return (
        <div id="carrito">
            <NavLink viewTransition to="/cart">
            <ShoppingCartOutlined style={{ fontSize: '24px', color: '#000' }} /><span>({elValorDelContexto.cantProd})</span>
                  
            </NavLink>
               
        </div>
        );
  }
  
  export default CartWidget;




<ShoppingCartOutlined />