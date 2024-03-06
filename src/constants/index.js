export const MARCAS = [
  { id: 1, nombre: "Troca" },
  { id: 2, nombre: "Carro" },
  { id: 3, nombre: "Moto" },
  { id: 4, nombre: "Camion" },
];

const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(new Array(20), (v, idx) => YEARMAX - idx);
export const PLANES = [
  { id: 1, nombre: "Basico" },
  { id: 2, nombre: "Completo" },
  { id: 3, nombre: "Premium" },
];
