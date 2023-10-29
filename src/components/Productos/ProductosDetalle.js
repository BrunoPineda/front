import React, { useState, useEffect } from "react";
import { obtenerProductoPorId } from "../../services/productosService";
import { useParams } from "react-router-dom";

const ProductosDetalle = () => {
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

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <div>
        <strong>Nombre:</strong> {producto.nombre}
      </div>
      <div>
        <strong>Precio:</strong> {producto.precio}
      </div>
      <div>
        <strong>ID del Proveedor:</strong> {producto.proveedor_id}
      </div>
    </div>
  );
};

export default ProductosDetalle;
