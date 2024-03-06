import PropTypes from "prop-types";
import { MARCAS, PLANES } from "../constants";
export default function Cotizacion({ datos, cotizacion }) {
  const { marca, ano, plan } = datos;
  if (cotizacion === 0) return null;
  const nombreMarca = MARCAS.find((e) => e.id === parseInt(marca)).nombre;
  const nombrePlan = PLANES.find((e) => e.id === parseInt(plan)).nombre;
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
        {ano}
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
