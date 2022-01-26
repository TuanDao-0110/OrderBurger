import { Dat_Ghe } from "../types/BaiTapDatVeType";
import { Huy_Ghe } from "../types/BaiTapDatVeType";
export const datGheAction = (ghe) => {
  return {
    type: Dat_Ghe,
    ghe,
  };
};

export const huyGheAction = (soGhe) => {
  return {
    type: Huy_Ghe,
    soGhe,
  };
};
