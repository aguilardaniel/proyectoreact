import { createContext, useState } from "react";


export const carritoContexto = createContext();


export const Provider = carritoContexto.Provider;


const CarritoProvider = (props) => {
    
    const [carrito, setCarrito] = useState([]);
    const [cantProd, setCantProd] = useState(0);
    const [totalPrecio, setTotalPrecio] = useState(0);

    const handleAgregar = (producto) => {
       
        const copia = [...carrito]

        

            copia.push(producto)
            setCarrito(copia)

            
            setCantProd(cantProd + 1)
            
            setTotalPrecio(totalPrecio + producto.price)

        
        
        

    }

    const handleEliminar = (producto) => {
       
    }

    const handleVaciar = () => {
        setCantProd(0);
        setTotalPrecio(0);
        setCarrito([]);
    }

    const aumentarCantidad = (id) => {
        const copia = [...carrito]

        copia.map((item) =>
            item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
          )
        
        
        setCarrito(copia) 
        setCantProd(cantProd + 1)

        const productoActual=carrito.find((producto)=>producto.id===id)
        productoActual.cantidad++
        setTotalPrecio(totalPrecio + productoActual.price)
      };


      const disminuirCantidad = (id) => {

        const productoActual=carrito.find((producto)=>producto.id===id)
        if(productoActual.cantidad>0){

            const copia = [...carrito]

            copia.map((item) =>
                item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
              )
            
            
            setCarrito(copia) 
            setCantProd(cantProd - 1)
    
            
            productoActual.cantidad--
            setTotalPrecio(totalPrecio - productoActual.price)

        }


       
      };


    const eliminarProducto = (id) =>{

        if(carrito.length<=1){
            handleVaciar()
        }else{

            const copia = [...carrito]

            const elementoParaEliminar= copia.filter((item) => item.id === id)
            const conElementoEliminado= copia.filter((item) => item.id != id)
            
            
            setCantProd(cantProd - elementoParaEliminar[0].cantidad)
            setTotalPrecio(totalPrecio - elementoParaEliminar[0].cantidad * elementoParaEliminar[0].price)
    
    
            setCarrito(conElementoEliminado) 
    

        }


    }
       const valorDelContexto = {
       
        carrito,
        
        cantProd,
        
        totalPrecio,
        handleAgregar,
        handleEliminar,
        handleVaciar,
        aumentarCantidad,
        disminuirCantidad,
        eliminarProducto
    }

    return (
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}

export default CarritoProvider;