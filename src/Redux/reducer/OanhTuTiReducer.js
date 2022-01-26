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
  countDown: 0,
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
      let temp = { ...state };
      console.log(action.count);
      if (action.count == 10) {
        temp.countDown++;
      } else if (action.count == 20) {
        temp.countDown++;
      } else if (action.count == 30) {
        temp.countDown++;
      } else if (action.count == 40) {
        temp.countDown++;

        temp.pcPick = action.ranDomPcPick;

        let nguoiChoiValue = temp.luaChon[temp.nguoiChoiPick].pick;
        let pcValue = temp.luaChon[temp.pcPick].pick;

        temp.banChoi++;
        console.log("thu hien");
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
      } else if (action.count == 41) {
        temp.countDown = 0;
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
