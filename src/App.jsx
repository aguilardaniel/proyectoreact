import Header from "./Header";
import { Button } from "antd";
import ItemListContainer from "./components/ItemListContainer"


function App() {
  return (
    <div className="contenedorPrincipal">
      <Header />

      {/* Main */}
      <main>
        {/* <h2>Home1</h2> */}
        <ItemListContainer greeting={"Bienvenido a nuestra tienda"} />
        
        {/* <Button type="primary">Button</Button> */}
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; Copyright 2025 - Daniel Aguilar</p>
      </footer>
    </div>
  );
}

export default App;