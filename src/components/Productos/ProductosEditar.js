import React, { useState, useEffect } from "react";
import {
  obtenerProductoPorId,
  actualizarProducto,
} from "../../services/productosService";
import { useParams } from "react-router-dom";

const ProductosEditar = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    proveedor_id: "",
  });

  useEffect(() => {
    obtenerProductoPorId(id)
      .then((response) => {
        setProducto(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actualizarProducto(id, producto)
      .then(() => {
        alert("Producto actualizado exitosamente");
      })
      .catch((error) => {
        console.error(error);
        alert("Error al actualizar el producto");
      });
  };

  return (
    <div>
      <h2>Editar Producto</h2>
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
        <button type="submit">Actualizar Producto</button>
      </form>
    </div>
  );
};

export default ProductosEditar;
