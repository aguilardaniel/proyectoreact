import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";


const ItemListContainer = ({ greeting }) => {

  //Estados
  const [resultado, setResultado] = useState([])
  const params = useParams() //{}


  //Efectos
  useEffect(() => {
    fetch(params.id === undefined ? '/productos.json' : `/${params.id}.json`)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            setResultado(res)
        });
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