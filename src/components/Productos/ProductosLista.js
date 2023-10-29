import React, { useState, useEffect } from "react";
import { obtenerProductos } from "../../services/productosService";

const ProductosLista = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos()
      .then((response) => {
        setProductos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductosLista;
