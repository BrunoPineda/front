import React, { useState } from "react";
import { crearProducto } from "../../services/productosService";

const ProductosCrear = () => {
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    proveedor_id: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    crearProducto(producto)
      .then(() => {
        alert("Producto creado exitosamente");
      })
      .catch((error) => {
        console.error(error);
        alert("Error al crear el producto");
      });
  };

  return (
    <div>
      <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={producto.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="precio">Precio:</label>
          <input
            type="text"
            id="precio"
            name="precio"
            value={producto.precio}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="proveedor_id">ID del Proveedor:</label>
          <input
            type="text"
            id="proveedor_id"
            name="proveedor_id"
            value={producto.proveedor_id}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
};

export default ProductosCrear;
