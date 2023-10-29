import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProveedoresLista from "./components/Proveedores/ProveedoresLista";
import ProveedoresCrear from "./components/Proveedores/ProveedoresCrear";
import ProveedoresEditar from "./components/Proveedores/ProveedoresEditar";
import ProveedoresDetalle from "./components/Proveedores/ProveedoresDetalle";
import ProductosLista from "./components/Productos/ProductosLista";
import ProductosCrear from "./components/Productos/ProductosCrear";
import ProductosEditar from "./components/Productos/ProductosEditar";
import ProductosDetalle from "./components/Productos/ProductosDetalle";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Sistema de Gestión</h1>
        <Routes>
          {/* Rutas de Proveedores */}
          <Route exact path="/proveedores" component={ProveedoresLista} />
          <Route exact path="/proveedores/crear" component={ProveedoresCrear} />
          <Route
            exact
            path="/proveedores/editar/:id"
            component={ProveedoresEditar}
          />
          <Route
            exact
            path="/proveedores/detalle/:id"
            component={ProveedoresDetalle}
          />

          {/* Rutas de Productos */}
          <Route exact path="/productos" component={ProductosLista} />
          <Route exact path="/productos/crear" component={ProductosCrear} />
          <Route
            exact
            path="/productos/editar/:id"
            component={ProductosEditar}
          />
          <Route
            exact
            path="/productos/detalle/:id"
            component={ProductosDetalle}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
