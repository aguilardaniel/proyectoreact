import { ShoppingCartOutlined } from '@ant-design/icons';
import { useContext } from "react";
import { carritoContexto } from "./CarritoContext";

function CartWidget() {

    const elValorDelContexto = useContext(carritoContexto)



    return (
        <div id="carrito">
            <a href="/cart">
                <ShoppingCartOutlined style={{ fontSize: '24px', color: '#000' }} /><span>({elValorDelContexto.cantProd})</span>
            </a>
        </div>
        );
  }
  
  export default CartWidget;




<ShoppingCartOutlined />