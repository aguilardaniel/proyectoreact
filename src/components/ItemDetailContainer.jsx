import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

import { addDoc, collection, getDocs, getFirestore, query, where, getDoc, doc } from "firebase/firestore"
import { app } from "./firebaseConfig"



const ItemDetailContainer = () => {

  
  const [resultado, setResultado] = useState([])
  const params = useParams() //{}

  
    


  
  useEffect(() => {
   


    
    const db = getFirestore(app)
    const productosCollection = collection(db, "productos")
   
    const miFiltro = doc(productosCollection, params.id)
    const miConsulta = getDoc(miFiltro)

    miConsulta
        .then((respuesta) => {
            
            setResultado(respuesta.data())
        })
        .catch(() => {
            console.log("Salio todo mal")
        })

    
    }, [params.id]) 


    return (
        

            <div className="">
                               
              

                        <ItemDetail
                            key={resultado.id}
                            producto={resultado}
                        /> 


                    


            </div>
        
    );
}

export default ItemDetailContainer;