import PropTypes from "prop-types";
import { createContext } from "react";

export const CotizadorContext = createContext();
export function CotizadorProvider({ children }) {
  return (
    <CotizadorContext.Provider value={{}}>{children}</CotizadorContext.Provider>
  );
}

CotizadorProvider.propTypes = {
  children: PropTypes.any,
};
