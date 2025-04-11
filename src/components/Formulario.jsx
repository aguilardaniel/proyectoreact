
import { useState } from "react"
import Input from "./Input"
import { app } from "./firebaseConfig";
import { addDoc, collection, getDocs, getFirestore, Timestamp } from "firebase/firestore";
import { useContext } from "react"
import { carritoContexto } from "./CarritoContext"
import toast from "react-hot-toast"


function Formulario() {

    const valor = useContext(carritoContexto)

    const [valorDelInputNombre, setValorDelInputNombre] = useState("")
    const [valorDelInputEmail, setValorDelInputEmail] = useState("")
    const [valorDelInputTelefono, setValorDelInputTelefono] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!valorDelInputNombre || !valorDelInputEmail || !valorDelInputTelefono) {
            
            toast.error("Por favor completá todos los campos")
            return;
        } else{

            event.target.reset(); 
            setValorDelInputNombre('');
            setValorDelInputEmail('');
            setValorDelInputTelefono('');
           
          }

        

       
    }

    const handleInputValueNombre = (data) => {
        setValorDelInputNombre(data)
    }
    const handleInputValueEmail = (data) => {
        setValorDelInputEmail(data)
    }
    const handleInputValueTelefono = (data) => {
        setValorDelInputTelefono(data)
    }

    
    const handleClick = () => {

        if(valor.carrito.length>0){

            if (!valorDelInputNombre || !valorDelInputEmail || !valorDelInputTelefono) {
                
            }else{

                   
        const db = getFirestore(app)
    
      
        const productosCollection = collection(db, "ventas")
    
       
        const query = addDoc(productosCollection, {
            fechaYHora: Timestamp.now(),
            nombredelCliente: valorDelInputNombre,
            correodelCliente: valorDelInputEmail,
            telefonodelCliente: valorDelInputTelefono,
            totalDeProductos: valor.cantProd,
            productos: valor.carrito,
            totalCompra: valor.totalPrecio,
          })
    
        query
          .then(() => {
            console.log("Salio todo bien")

            toast.custom((t) => (
                <div
                  className={`${
                    t.visible ? 'animate-enter' : 'animate-leave'
                  } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
                >
                  <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 pt-0.5">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          Genial!
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                        Nos contactaremos con vos para finalizar la compra
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex border-l border-gray-200">
                    <button
                      onClick={() => toast.dismiss(t.id)}
                      className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Aceptar
                    </button>
                  </div>
                </div>
              ))

           
            valor.handleVaciar()
          })
          .catch(() => {
            console.log("Salio todo mal")
          })

            }

           
      }else{
        toast.error("Tu carrito no tiene productos agregados")

      }

        }

        

    return (
        <div>
            <h2 >Finalizar Compra</h2>
            <p >Dejanos tus datos y nos contactamos para finalizar el pago y el envío</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre" >Nombre</label>
                    <Input
                        onInputValue={handleInputValueNombre}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="nombre" >Email</label>
                    <Input
                        onInputValue={handleInputValueEmail}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="nombre" >Telefono</label>
                    <Input
                        onInputValue={handleInputValueTelefono}
                        required
                    />
                </div>
                <button class="comprar" onClick={handleClick} type="submit">comprar</button>
            </form>
        </div>
    )
}
export default Formulario

