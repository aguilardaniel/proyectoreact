import Header from "./Header";
import { Button } from "antd";
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="contenedorPrincipal">
      <Header />

      {/* Main */}
      {/* <main>
        
        <ItemListContainer greeting={"Bienvenido a nuestra tienda"} />
        
        
      </main> */}


      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        
        {/* <Route path="/producto/:id" element={<ProductDetailContainer/>} /> */}
      </Routes>






      {/* Footer */}
      <footer>
        <p>&copy; Copyright 2025 - Daniel Aguilar</p>
      </footer>
    </div>
  );
}

export default App;