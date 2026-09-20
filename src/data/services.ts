import type { Service } from "../lib/types";

export const SERVICIOS: Service[] = [
  { id: "picoteo", nombre: "Para picar", precio: 12, descripcion: "Croquetas caseras, bravas y pan con tomate. Para abrir boca con buen gusto." },
  { id: "principal", nombre: "Plato principal", precio: 16, descripcion: "Cocina de mercado con producto fresco y de temporada." },
  { id: "menu-dia", nombre: "Menu del dia", precio: 14, descripcion: "Entrante, principal, postre y bebida. Entre semana de 13:30 a 16:00.", destacado: true },
  { id: "postre", nombre: "Postre de la casa", precio: 6, descripcion: "El postre de ese dia, hecho en casa." },
];