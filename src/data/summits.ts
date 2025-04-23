import { Summit } from "../entities/Summit";
import { ranges } from "./ranges";

export const summits: Summit[] = [
  { id: 1, name: "Mont Blanc", altitude: 4807, range: ranges[0] },
  { id: 2, name: "Barre des Écrins", altitude: 4102, range: ranges[1] },
];
