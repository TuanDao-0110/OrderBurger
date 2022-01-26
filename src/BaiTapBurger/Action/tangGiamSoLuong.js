import { Tang_Giam } from "../Type/BurgerType";

export const tangGiamSoLuong = (pick, name) => {
  return {
    type: Tang_Giam,
    pick,
    name,
  };
};
