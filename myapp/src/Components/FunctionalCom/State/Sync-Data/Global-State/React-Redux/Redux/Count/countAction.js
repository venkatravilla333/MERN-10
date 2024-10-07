import { DECREASE, INCREASE } from "./countActionType";

export var increaseCount = () => {
  return { type: INCREASE };
};
export var decreaseCount = () => {
  return { type: DECREASE };
};
