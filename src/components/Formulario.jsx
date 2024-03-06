import { MARCAS, YEARS, PLANES } from "../constants";
import { Fragment } from "react";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";
export default function Formulario() {
  const { datos, handleChangeDatos, error, setError, cotizarSeguro } =
    useCotizador();
  const { marca, ano } = datos;
  function handleSumbit(e) {
    e.preventDefault();
    if (
      Object.values(datos).includes("") ||
      Object.values(datos).includes("0")
    ) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");
    cotizarSeguro();
  }

  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSumbit}>
        <div className="my-5">
          <label
            htmlFor="marca"
            className="block mb-3 font-bold text-gray-500 uppercase"
          >
            Marca
          </label>
          <select
            name="marca"
            id="marca"
            className="w-full p-3 bg-white border border-gray-200 rounded-md"
            onChange={handleChangeDatos}
            value={marca}
          >
            <option value="0">---Seleccione Marca---</option>
            {MARCAS.map((v) => (
              <option value={v.id} key={v.id}>
                {v.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            htmlFor="ano"
            className="block mb-3 font-bold text-gray-500 uppercase"
          >
            Año
          </label>
          <select
            name="ano"
            id="ano"
            onChange={handleChangeDatos}
            value={ano}
            className="w-full p-3 bg-white border border-gray-200 rounded-md"
          >
            <option value="0">---Seleccione Año---</option>
            {YEARS.map((v, idx) => (
              <option value={v} key={idx}>
                {v}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label
            htmlFor="planes"
            className="block mb-3 font-bold text-gray-500 uppercase"
          >
            Planes
          </label>
          <div className="flex gap-3 items-center">
            {PLANES.map((v) => (
              <Fragment key={v.id}>
                <label htmlFor={v.nombre}>{v.nombre}</label>{" "}
                <input
                  type="radio"
                  name="plan"
                  id={v.nombre}
                  value={v.id}
                  onChange={handleChangeDatos}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          value="Cotizar"
          className="w-full bg-indigo-500 rounded-md hover:bg-indigo-800 transition-colors text-white cursor-pointer p-3 uppercase font-semibold"
        />
      </form>
    </>
  );
}
