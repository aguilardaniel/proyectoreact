import Header from "./Header";
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { Routes, Route } from "react-router-dom";

import Carrito from "./components/Carrito";


import CarritoProvider, { Provider } from "./components/CarritoContext";
import { useState } from "react";
import { Toaster } from "react-hot-toast";


function App() {

 

  return (

    <CarritoProvider>

    <div className="contenedorPrincipal">
      <Header />



      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<Carrito />} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        
       
      </Routes>






      
      <footer>
        <p>&copy; Copyright 2025 - Daniel Aguilar</p>
      </footer>
    </div>
        <Toaster />
    </CarritoProvider>
  );
}

export default App;