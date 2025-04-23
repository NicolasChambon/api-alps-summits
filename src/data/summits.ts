import { Summit } from "../entities/Summit";
import { ranges } from "./ranges";

export const summits: Summit[] = [
  { id: 1, name: "Mont Blanc", altitude: 4807, range: ranges[0] },
  { id: 2, name: "Barre des Écrins", altitude: 4102, range: ranges[1] },
  { id: 3, name: "Aiguille Verte", altitude: 4122, range: ranges[0] },
  { id: 4, name: "Dôme des Écrins", altitude: 4015, range: ranges[1] },
  { id: 5, name: "Montagne de Pente", altitude: 3000, range: ranges[2] },
  { id: 6, name: "Tête de la Charme", altitude: 2500, range: ranges[3] },
  { id: 7, name: "Aiguille du Midi", altitude: 3842, range: ranges[0] },
  { id: 8, name: "Montagne de la Côte", altitude: 2800, range: ranges[2] },
  { id: 9, name: "Aiguille de Bionnassay", altitude: 4052, range: ranges[0] },
  { id: 10, name: "Montagne de la Tête", altitude: 3200, range: ranges[3] },
  {
    id: 11,
    name: "Aiguille de la République",
    altitude: 3700,
    range: ranges[1],
  },
  { id: 12, name: "Montagne de la Liberté", altitude: 2900, range: ranges[2] },
];
