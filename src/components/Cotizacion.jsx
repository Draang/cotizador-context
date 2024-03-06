import PropTypes from "prop-types";
import { useCallback, useRef } from "react";
import { MARCAS, PLANES } from "../constants";
export default function Cotizacion({ datos, cotizacion }) {
  const { marca, ano, plan } = datos;
  const nombreMarca = useCallback(
    MARCAS.find((e) => e.id === parseInt(marca)).nombre,
    [cotizacion]
  );
  const nombrePlan = useCallback(
    PLANES.find((e) => e.id === parseInt(plan)).nombre,
    [cotizacion]
  );
  const anoRef = useRef(ano);
  if (cotizacion === 0) return null;

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      {" "}
      <h2 className="text-gray-500 font-extrabold text-2xl">Resumen</h2>
      <p className="my2 font-semibold">
        <span className="font-bold text-gray-600">Marca: </span>
        {nombreMarca}
      </p>
      <p className="my2 font-semibold">
        <span className="font-bold text-gray-600">Plan: </span>
        {nombrePlan}
      </p>
      <p className="my2 font-semibold">
        <span className="font-bold text-gray-600">Año del auto: </span>
        {anoRef.current}
      </p>
      <p className="my2 font-semibold text-2xl">
        <span className="font-bold text-gray-600">Total cotizacion: </span>
        {cotizacion}
      </p>
    </div>
  );
}

Cotizacion.propTypes = {
  cotizacion: PropTypes.any,
  datos: PropTypes.shape,
};
