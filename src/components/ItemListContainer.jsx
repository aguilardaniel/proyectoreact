import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import { app } from "./firebaseConfig";
import {} from "firebase/firestore";
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore";

function capitalizarPrimeraLetra(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

const ItemListContainer = ({ greeting }) => {

  
  const [resultado, setResultado] = useState([])
  const params = useParams() 


  useEffect(() => {

    const db = getFirestore(app)
    const productosCollection = collection(db, "productos")

    let miConsulta;

    if (params.id === undefined) {
      
        miConsulta = getDocs(productosCollection)
    } else {
       
        const paramID = capitalizarPrimeraLetra(params.id).replace(/-/g, ' ')
       
        
        const miFiltro = query(productosCollection, where("product_type", "==", paramID))
        miConsulta = getDocs(miFiltro)
    }

    miConsulta
        .then((respuesta) => {
            
            setResultado(respuesta.docs.map((doc) => {
               
                const productoData = doc.data()
                productoData.id = doc.id
                return productoData

                
            }))
        })
        .catch(() => {
            console.log("Salio todo mal")
        })



   




    }, [params.id])


    return (
        <div className="greeting">
            {greeting}

            <div className="fluid-grid">
                {resultado.map((producto) => {
                    return (
                        <Item
                            key={producto.id}
                            producto={producto}
                        />
                    )
                  })}
            </div>
        </div>
    );
}

export default ItemListContainer;