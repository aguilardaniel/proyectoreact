import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

  //Estados
  const [resultado, setResultado] = useState([])
  const params = useParams() //{}


  //Efectos
  useEffect(() => {
    /* fetch(params.id === undefined ? '/productos.json' : `/${params.id}.json`) */
    fetch('/productos.json')
        .then((res) => {
            return res.json()
        })
        .then((res)=>{

         let productoParaBuscar = res.find((producto)=>producto.id===params.id)
         

        if(!productoParaBuscar){

            
            return []

        }else{
            
            return productoParaBuscar
        }

        })
        .then((res) => {
        
            setResultado(res)
        });
    }, [params.id]) 


    return (
        

            <div className="">
                               
              
                {/* {resultado.map((producto) => {
                    return ( */} 


                        <ItemDetail
                            key={resultado.id}
                            producto={resultado}
                        /> 


                    {/* )
                  })}  */} 


            </div>
        
    );
}

export default ItemDetailContainer;