import { Dat_Ghe, Huy_Ghe } from "./types/BaiTapDatVeType";

const stateBooking = {
  danhSachGheDangDat: [
    // { soGhe: "A1", gia: 0 },
    // { soGhe: "B1", gia: 0 },
  ],
};

const BaiTapDatVeReducer = (state = stateBooking, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    // eslint-disable-next-line no-lone-blocks
    case Dat_Ghe: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex((gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe);
      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      } else {
        danhSachGheDangDatUpdate.push(action.ghe);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;

      return { ...state };
    }
    case Huy_Ghe: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex((gheDangDat) => gheDangDat.soGhe === action.soGhe);
      if (index !== -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;

      return { ...state };
    }
    // eslint-disable-next-line no-fallthrough
    default: {
      return { ...state };
    }
  }
};

export default BaiTapDatVeReducer;
