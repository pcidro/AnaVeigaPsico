import { DepoimentoGoogle } from "./googledepoimentostypes";

export type DepoimentosSliderProps = {
  reviews: DepoimentoGoogle[];
  placeUrl: string | null;
};

export type DragState = {
  finalPosition: number;
  startX: number;
  movement: number;
  movePosition: number;
};
