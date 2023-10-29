import React, { useState, useEffect } from "react";
import { obtenerProveedores } from "../../services/proveedoresService";

const ProveedoresLista = () => {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    obtenerProveedores().then((data) => setProveedores(data));
  }, []);

  return (
    <div>
      <h2>Lista de Proveedores</h2>
      <ul>
        {proveedores.map((proveedor) => (
          <li key={proveedor.id}>{proveedor.nombre_proveedor}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProveedoresLista;
