/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
const stateOanhTuTi = {
  luaChon: [
    { pick: "bao", source: "./img/oanhTuTi/bao.png" },
    { pick: "keo", source: "./img/oanhTuTi/keo.png" },
    { pick: "bua", source: "./img/oanhTuTi/bua.png" },
  ],
  banThang: 0,
  banChoi: 0,
  nguoiChoiPick: 0,
  pcPick: 1,
  ketqua: "Bắt đầu chơi nè",
};

const BaiTapOanhTuTi = (state = stateOanhTuTi, action) => {
  switch (action.type) {
    case "Lua_Chon": {
      let temp = { ...state };
      temp.nguoiChoiPick = action.choose;
      state = temp;

      return {
        ...state,
      };
      break;
    }
    case "PC_Lua_Chon": {
      console.log(action.ranDomPcPick);

      let temp = { ...state };
      temp.pcPick = action.ranDomPcPick;
      temp.banChoi++;
      let nguoiChoiValue = temp.luaChon[temp.nguoiChoiPick].pick;
      let pcValue = temp.luaChon[temp.pcPick].pick;
      if (nguoiChoiValue === "bao" && pcValue === "bua") {
        temp.banThang++;
        temp.ketqua = "iron man chiến thắng";
      } else if (nguoiChoiValue === "bua" && pcValue === "keo") {
        temp.banThang++;
        temp.ketqua = "iron man chiến thắng";
      } else if (nguoiChoiValue === "keo" && pcValue === "bao") {
        temp.banThang++;
        temp.ketqua = "iron man chiến thắng";
      } else if (nguoiChoiValue === pcValue) {
        temp.ketqua = "hòa";
      } else {
        temp.ketqua = "bạn thua SML";
      }
      state = temp;
      return {
        ...state,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default BaiTapOanhTuTi;
