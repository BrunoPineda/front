import React, { useState, useEffect } from "react";
import {
  obtenerProveedorPorId,
  actualizarProveedor,
} from "../../services/proveedoresService";
import { useParams } from "react-router-dom";

const ProveedoresEditar = () => {
  const { id } = useParams();
  const [proveedor, setProveedor] = useState({
    nombre_proveedor: "",
    telefono: "",
    direccion: "",
  });

  useEffect(() => {
    obtenerProveedorPorId(id)
      .then((response) => {
        setProveedor(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProveedor({ ...proveedor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actualizarProveedor(id, proveedor)
      .then(() => {
        alert("Proveedor actualizado exitosamente");
      })
      .catch((error) => {
        console.error(error);
        alert("Error al actualizar el proveedor");
      });
  };

  return (
    <div>
      <h2>Editar Proveedor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre_proveedor">Nombre Proveedor:</label>
          <input
            type="text"
            id="nombre_proveedor"
            name="nombre_proveedor"
            value={proveedor.nombre_proveedor}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={proveedor.telefono}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={proveedor.direccion}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Actualizar Proveedor</button>
      </form>
    </div>
  );
};

export default ProveedoresEditar;
