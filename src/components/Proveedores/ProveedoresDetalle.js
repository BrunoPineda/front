import React, { useState, useEffect } from "react";
import { obtenerProveedorPorId } from "../../services/proveedoresService";
import { useParams } from "react-router-dom";

const ProveedoresDetalle = () => {
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

  return (
    <div>
      <h2>Detalle del Proveedor</h2>
      <div>
        <strong>Nombre Proveedor:</strong> {proveedor.nombre_proveedor}
      </div>
      <div>
        <strong>Teléfono:</strong> {proveedor.telefono}
      </div>
      <div>
        <strong>Dirección:</strong> {proveedor.direccion}
      </div>
    </div>
  );
};

export default ProveedoresDetalle;
