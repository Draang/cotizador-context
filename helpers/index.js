export function calcularMarca(marca) {
  switch (marca) {
    case "1":
      return 0.3;
    case "2":
      return 0.15;
    case "3":
      return 0.05;
    case "4":
      return 0.5;
    default:
      return 0;
  }
}
export function calcularPlan(plan) {
  switch (plan) {
    case "1":
      return 0.15;
    case "2":
      return 0.25;
    case "3":
      return 0.5;
    default:
      return 0;
  }
}
export function formatDinero(cantidad) {
  return cantidad.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
  });
}
