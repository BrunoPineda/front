import React, { useState } from "react";
import { crearProveedor } from "../../services/proveedoresService";

const ProveedoresCrear = () => {
  const [proveedor, setProveedor] = useState({
    nombre_proveedor: "",
    telefono: "",
    direccion: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProveedor({ ...proveedor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    crearProveedor(proveedor)
      .then(() => {
        alert("Proveedor creado exitosamente");
      })
      .catch((error) => {
        console.error(error);
        alert("Error al crear el proveedor");
      });
  };

  return (
    <div>
      <h2>Crear Proveedor</h2>
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
        <button type="submit">Crear Proveedor</button>
      </form>
    </div>
  );
};

export default ProveedoresCrear;
