import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { carritoContexto } from "./CarritoContext"

import { useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"

const ItemDetail = (props) => {
  
let productoParaAgregar=props.producto

  

  const elValorDelContexto = useContext(carritoContexto)
  



      const handleClick = () => {

       
        
        if(elValorDelContexto.carrito.length>0){
          
         

          const existeProducto= elValorDelContexto.carrito.find((elemento)=>elemento.id==props.producto.id)
         

         
          if(!existeProducto){
            
            productoParaAgregar.cantidad=1
            productoParaAgregar.price=Number(props.producto.price.slice(0,-4));
            elValorDelContexto.handleAgregar(productoParaAgregar)
          
            toast.success("Producto agregado al carrito")
          }
          else{
  
            toast(
                  'Desde el carrito podés modificar la cantidad', 
                  
                  {
                    position: "bottom-center",
                    icon: '🛒'
                  }
                  );
  
  
          }



        }else{

          productoParaAgregar.cantidad=1
          productoParaAgregar.price=Number(props.producto.price.slice(0,-4));
            elValorDelContexto.handleAgregar(productoParaAgregar)
            
            toast.success("Producto agregado al carrito")
            
        }
        
      

        
       
    }


    return (
        <Container>
      <Row>
        <Col><img src={props.producto.image_link} alt={props.producto.title} className="product-card__image" /></Col>
        <Col>

        <Link to={`/`}>Ver Todos los Productos</Link>
       <br /><br />
            <article className="product-card" title={props.producto.title}>
                <h3 className="product-card__title">{props.producto.title}</h3>

                
                <span className="product-card__description">{props.producto.description}</span>
                <p className="product-card__price"><b>${props.producto.price}</b></p>
                
                 

                <button onClick={handleClick} type="button" className="product-card__addtocart">Agregar al Carrito!</button>
            </article>
        </Col>
      </Row>
      
      
    </Container>


        
    )
}

export default ItemDetail