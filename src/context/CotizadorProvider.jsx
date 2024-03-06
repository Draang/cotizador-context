import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { calcularMarca, calcularPlan, formatDinero } from "../../helpers";
export const CotizadorContext = createContext();
export function CotizadorProvider({ children }) {
  const [datos, setDatos] = useState({
    marca: "0",
    ano: "0",
    plan: "0",
  });

  const [error, setError] = useState("");
  const [cotizacion, setCotizacion] = useState(0);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (error != "") {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [error]);

  function handleChangeDatos(e) {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  }

  function cotizarSeguro() {
    console.log("cotizando...");
    let base = 2000;
    let difAno = new Date().getFullYear() - parseInt(datos.ano);
    //AÑO : por cada año menor 3%-
    base = base - difAno * 0.03 * base;
    //MARCA: carro: 15%+, troca: 30%+,moto: 5%,camion:50%
    base = base + base * calcularMarca(datos.marca);
    // PLAN  basico: 15%+, Completo: 25%+, premium: 50%+
    base = base + base * calcularPlan(datos.plan);
    const money = formatDinero(base);
    setCargando(true);
    setTimeout(() => {
      setCotizacion(money);
      setCargando(false);
    }, 2500);
  }

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
        cotizacion,
        cargando
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
}

CotizadorProvider.propTypes = {
  children: PropTypes.any,
};
